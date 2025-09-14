import Layout from '@/components/Layout';
import { Accordion } from 'react-bootstrap';
import notesData from '@/data/notesData';

const Notes = () => {
  return (
    <Layout title="Notes - Notes Portal" description="Access downloadable PDF notes by topic.">
      <h1>Notes</h1>
      <p>Select a section below to view the available notes:</p>
      <Accordion defaultActiveKey="0">
        {Object.keys(notesData).map((section, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{section}</Accordion.Header>
            <Accordion.Body>
              <ul className="list-group">
                {notesData[section].map((note, idx) => (
                  <li key={idx} className="list-group-item">
                    <a 
                      href={note.path} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-decoration-none"
                    >
                      {note.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Layout>
  );
};

export default Notes;
