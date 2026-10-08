import FaqSection from "./FaqSection";
import { homeFaqs } from "../seo";

export default function HomepageFaq() {
  return <FaqSection faqs={homeFaqs} className="bg-bg2" />;
}
