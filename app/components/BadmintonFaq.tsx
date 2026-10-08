import FaqSection from "./FaqSection";
import { badmintonFaqs } from "../seo";

export default function BadmintonFaq() {
  return <FaqSection faqs={badmintonFaqs} className="bg-bg2" />;
}
