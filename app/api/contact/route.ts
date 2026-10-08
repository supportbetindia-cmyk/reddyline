import { NextResponse } from "next/server";
import { validateContactForm, type ContactFormPayload } from "../../../lib/contactForm";

const SUBJECT_LABELS: Record<string, string> = {
  support: "Technical Support",
  "app-submission": "Submit an App",
  feedback: "General Feedback",
  other: "Other Inquiry",
};

function resolveSubject(data: ContactFormPayload) {
  if (data.category?.trim()) return data.category.trim();
  if (data.subject?.trim()) {
    return SUBJECT_LABELS[data.subject] ?? data.subject;
  }
  return "Reddy Line Contact Form";
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Contact form is not configured. Set WEB3FORMS_ACCESS_KEY in your environment.",
      },
      { status: 503 }
    );
  }

  let body: ContactFormPayload;
  try {
    body = (await request.json()) as ContactFormPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const errors = validateContactForm(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, error: "Please check the form fields.", errors },
      { status: 400 }
    );
  }

  try {
    const upstream = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: body.name.trim(),
        email: body.email.trim(),
        subject: resolveSubject(body),
        message: body.message.trim(),
        from_name: "Reddy Line Website",
        botcheck: body.botcheck ?? "",
      }),
    });

    const result = (await upstream.json()) as {
      success?: boolean;
      message?: string;
    };

    if (upstream.ok && result.success) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      {
        success: false,
        error: result.message ?? "Failed to deliver your message.",
      },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Network error while sending your message." },
      { status: 502 }
    );
  }
}
