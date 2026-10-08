import { createPageMetadata } from "../seo";
import PageJsonLd from "../components/PageJsonLd";

export const metadata = createPageMetadata("/contact-us");

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageJsonLd path="/contact-us" />
      {children}
    </>
  );
}
