import { organizationSchema, websiteSchema } from "../seo";

/**
 * Site-wide JSON-LD (Organization + WebSite). Server-rendered so crawlers
 * see it in the initial HTML. Rendered once from the root layout.
 */
export default function GlobalJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
    </>
  );
}
