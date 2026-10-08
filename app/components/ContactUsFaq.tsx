import FaqSection from "./FaqSection";
import { contactUsFaqs } from "../seo";

export default function ContactUsFaq() {
  return <FaqSection faqs={contactUsFaqs} className="bg-bg2" />;
}
