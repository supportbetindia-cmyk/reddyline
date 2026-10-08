import { createPageMetadata } from "../seo";
import PageJsonLd from "../components/PageJsonLd";

export const metadata = createPageMetadata("/horse-racing");

export default function HorseRacingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageJsonLd path="/horse-racing" />
      {children}
    </>
  );
}
