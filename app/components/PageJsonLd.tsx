import { webPageSchema, breadcrumbSchema, faqPageSchema, pageFaqs, type SeoPath } from "../seo";

/**
 * Per-page JSON-LD (WebPage + BreadcrumbList), server-rendered into the page's
 * HTML. Rendered from each route's layout with its known path, so it works in
 * static export (no client pathname needed).
 */
export default function PageJsonLd({ path }: { path: SeoPath }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(path)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(path)) }}
      />
      {pageFaqs[path] && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(pageFaqs[path]!)) }}
        />
      )}
    </>
  );
}
