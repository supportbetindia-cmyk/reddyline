import FaqSection from "./FaqSection";
import { appsFaqs } from "../seo";

export default function AppsFaq() {
  return <FaqSection faqs={appsFaqs} className="bg-bg" />;
}
