import { useRouter } from "next/router";
import Head from "next/head";
import notesData from "@/data/notesData";
import Layout from "@/components/Layout";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NotePage() {
  const router = useRouter();
  const { slug } = router.query;
  const note = notesData.find((n) => n.slug === slug);

  if (!note)
    return (
      <Layout title="Note Not Found">
        <div
          className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-light"
          style={{ backgroundColor: "#0d1117" }}
        >
          <h1 className="display-5 fw-bold text-danger mb-3">❌ Note Not Found</h1>
          <p className="text-secondary mb-4">The requested note does not exist.</p>
          <Link href="/notes" className="text-decoration-none text-primary">
            ← Back to Notes
          </Link>
        </div>
      </Layout>
    );

  return (
    <Layout title={note.title} description={note.description}>
      <Head>
        <title>{note.title}</title>
        <meta name="description" content={note.description} />
        <meta name="keywords" content={note.keywords.join(", ")} />
      </Head>

      <div
        className="min-vh-100 py-5 text-light"
        style={{ backgroundColor: "#0d1117" }}
      >
        <div className="container text-center">
          {/* Section Header */}
          {/* <p className="text-  fw-semibold mb-2">
            {note.category}
          </p> */}

          {/* Note Title */}
          <h1 className="display-5 fw-bold text-white mb-3">{note.title}</h1>

          {/* Description */}
          <div className="col-lg-8 mx-auto">
            <p className="text-secondary mb-4 fs-5">
              {note.description || "Explore detailed notes for this topic. Download or preview below."}
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
    </Layout>
  );
}
