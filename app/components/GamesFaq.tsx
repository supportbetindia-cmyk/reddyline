import FaqSection from "./FaqSection";
import { gamesFaqs } from "../seo";

export default function GamesFaq() {
  return <FaqSection faqs={gamesFaqs} className="bg-bg" />;
}
