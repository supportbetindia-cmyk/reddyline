export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
  subject?: string;
  category?: string;
  /** Honeypot — must stay empty */
  botcheck?: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  data: ContactFormPayload
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.botcheck?.trim()) {
    errors.botcheck = "Spam detected";
    return errors;
  }

  if (!data.name?.trim()) {
    errors.name = "Please enter your name";
  }

  if (!data.email?.trim()) {
    errors.email = "Please enter your email";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!data.message?.trim()) {
    errors.message = "Please enter a message";
  } else if (data.message.trim().length < 10) {
    errors.message = "Please add a bit more detail";
  } else if (data.message.length > 1000) {
    errors.message = "Message must be 1000 characters or less";
  }

  return errors;
}

function buildSubject(data: ContactFormPayload) {
  if (data.category?.trim()) return data.category.trim();
  if (data.subject?.trim()) return data.subject.trim();
  return "1xPlay Contact Form";
}

/** Submit via API (server) or Web3Forms directly when a public key is set (static export). */
export async function submitContactForm(
  data: ContactFormPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const publicKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const payload = {
    access_key: publicKey ?? "",
    name: data.name.trim(),
    email: data.email.trim(),
    subject: buildSubject(data),
    message: data.message.trim(),
    from_name: "1xPlay Website",
    botcheck: data.botcheck ?? "",
  };

  if (publicKey) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await res.json()) as { success?: boolean; message?: string };
    if (res.ok && result.success) return { ok: true };
    return {
      ok: false,
      error: result.message ?? "Could not send your message. Please try again.",
    };
  }

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: data.message,
      subject: data.subject,
      category: data.category,
      botcheck: data.botcheck,
    }),
  });

  const result = (await res.json()) as { success?: boolean; error?: string };

  if (res.ok && result.success) return { ok: true };

  return {
    ok: false,
    error:
      result.error ??
      (res.status === 503
        ? "Contact form is not configured on the server yet."
        : "Could not send your message. Please try again."),
  };
}
