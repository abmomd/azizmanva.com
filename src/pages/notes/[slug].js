import { useRouter } from "next/router";
import Head from "next/head";
import notesData from "@/data/notesData";
import Layout from "@/components/Layout";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactSection from "@/components/ContactSection";

const SITE_URL = "https://azizmanva-com-preview.vercel.app"; // 🔁 change if you’re on another domain / preview

export default function NotePage() {
  const router = useRouter();
  const { slug } = router.query;
  const note = notesData.find((n) => n.slug === slug);

  if (!note)
    return (
      <Layout title="Note Not Found">
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-light bg-dark">
          <h1 className="display-5 fw-bold text-danger mb-3">❌ Note Not Found</h1>
          <p className="text-secondary mb-4">The requested note does not exist.</p>
          <Link href="/notes" className="text-decoration-none text-primary">
            ← Back to Notes
          </Link>
        </div>
      </Layout>
    );

  // 🔹 SEO fields (coming from notesData, with fallbacks)
  const pageTitle =
    note.metaTitle || `${note.title} | Math & Science Notes | Aziz Manva`;
  const pageDescription = note.metaDescription || note.description;
  const canonicalPath = note.canonicalPath || `/notes/${note.slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImage = `${SITE_URL}/images/notes-og-default.png`; // TODO: replace with real image or remove if not available

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <Head>
        <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: note.title,
          description: note.description,
          url: `${SITE_URL}${note.canonicalPath || `/notes/${note.slug}`}`,
          inLanguage: "en",
          author: { "@type": "Person", name: "Aziz Manva" },
          about: note.keywords,
            }),
          }}
         />

        {/* Basic SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {note.keywords && note.keywords.length > 0 && (
          <meta name="keywords" content={note.keywords.join(", ")} />
        )}

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {/* comment this in if/when you have an image */}
        {/* <meta property="og:image" content={ogImage} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {/* <meta name="twitter:image" content={ogImage} /> */}
      </Head>

      {/* Middle Section */}
      <div
        className="min-vh-100 py-5 text-light"
        style={{ backgroundColor: "#0d1117" }}
      >
        <div className="container text-center">
          {/* Section Header */}
          <p className="text-uppercase text-primary fw-semibold mb-2">
            Section: {note.category}
          </p>

          {/* Note Title */}
          <h1 className="display-5 fw-bold text-white mb-3">{note.title}</h1>

          {/* Description */}
          <div className="col-lg-8 mx-auto">
            <p className="text-secondary mb-4 fs-5">
              {note.description ||
                "Explore detailed notes for this topic. Download or preview below."}
            </p>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <a
              href={note.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg px-4 d-flex align-items-center gap-2"
            >
              <i className="bi bi-eye"></i> View PDF
            </a>

            <a
              href={note.pdfUrl}
              download
              className="btn btn-success btn-lg px-4 d-flex align-items-center gap-2"
            >
              <i className="bi bi-download"></i> Download PDF
            </a>

            <Link href="/notes" className="btn btn-outline-light btn-lg px-4">
              ← Back to All Notes
            </Link>
          </div>

          {/* PDF Preview */}
          <div className="col-lg-10 mx-auto mt-4">
            <h3 className="h5 text-white mb-3 fw-semibold">PDF Preview</h3>
            <iframe
              src={note.pdfUrl}
              width="100%"
              height="700"
              className="rounded shadow"
              style={{
                border: "none",
                backgroundColor: "#0d1117",
              }}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
}
