import FaqSection from "./FaqSection";
import { aboutFaqs } from "../seo";

export default function AboutFaq() {
  return <FaqSection faqs={aboutFaqs} className="bg-bg2" />;
}
