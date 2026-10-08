import { createPageMetadata } from "../seo";
import PageJsonLd from "../components/PageJsonLd";

export const metadata = createPageMetadata("/deposit-and-withdrawal");

export default function DepositAndWithdrawalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageJsonLd path="/deposit-and-withdrawal" />
      {children}
    </>
  );
}
