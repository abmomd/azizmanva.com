import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import notesData from '@/data/notesData';

const NotePage = () => {
  const router = useRouter();
  const { note } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const allNotes = Object.values(notesData).flat();
  const noteItem = allNotes.find(n => n.filename === note);

  if (!noteItem) {
    return (
      <Layout title="Note Not Found">
        <h1>Note not found</h1>
      </Layout>
    );
  }

  return (
    <Layout title={noteItem.name}>
      <h1>{noteItem.name}</h1>
      <div className="mb-3">
        <a href={noteItem.path} target="_blank" rel="noopener noreferrer" download className="btn btn-primary">
          Download PDF
        </a>
      </div>
      <iframe
        src={noteItem.path}
        width="100%"
        height="600px"
        title={noteItem.name}
      />
    </Layout>
  );
};

export default NotePage;
