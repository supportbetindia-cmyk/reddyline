import FaqSection from "./FaqSection";
import { soccerFaqs } from "../seo";

export default function SoccerFaq() {
  return <FaqSection faqs={soccerFaqs} className="bg-bg2" />;
}
