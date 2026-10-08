import FaqSection from "./FaqSection";
import { cricketFaqs } from "../seo";

export default function CricketFaq() {
  return <FaqSection faqs={cricketFaqs} className="bg-bg2" />;
}
