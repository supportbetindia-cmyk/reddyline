import { createPageMetadata } from "../seo";
import PageJsonLd from "../components/PageJsonLd";

export const metadata = createPageMetadata("/apps");

export default function AppsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageJsonLd path="/apps" />
      {children}
    </>
  );
}
