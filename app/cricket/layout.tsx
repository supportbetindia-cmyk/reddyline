import { createPageMetadata } from "../seo";
import PageJsonLd from "../components/PageJsonLd";

export const metadata = createPageMetadata("/cricket");

export default function CricketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageJsonLd path="/cricket" />
      {children}
    </>
  );
}
