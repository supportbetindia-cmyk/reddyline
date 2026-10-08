import FaqSection from "./FaqSection";
import { casinoFaqs } from "../seo";

export default function CasinoFaq() {
  return <FaqSection faqs={casinoFaqs} className="bg-bg2" />;
}
