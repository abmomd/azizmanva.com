import Layout from '@/components/Layout';
import { Accordion } from 'react-bootstrap';
import Link from 'next/link';
import notesData from '@/data/notesData';

const Notes = () => {
  // ✅ Group the flat array by category
  const groupedNotes = notesData.reduce((acc, note) => {
    if (!acc[note.category]) acc[note.category] = [];
    acc[note.category].push(note);
    return acc;
  }, {});

  return (
    <Layout
      title="Notes - Aziz Manva"
      description="Access downloadable PDF notes by topic. View, learn, and explore topics from Algebra to Calculus."
    >
      <div
        className="container py-5 text-light"
        style={{ backgroundColor: '#0d1117', minHeight: '100vh' }}
      >
        <h1
          className="text-center mb-3"
          style={{ color: '#ffffff', fontWeight: '700' }}
        >
          📘 Study Notes
        </h1>
        <p className="text-center text-secondary mb-5">
          Select a section below to view available notes.
        </p>

        <Accordion defaultActiveKey="0" alwaysOpen flush>
          {Object.keys(groupedNotes).map((section, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="border-0 mb-3 rounded-3 shadow-sm overflow-hidden"
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
              }}
            >
              {/* Accordion Header */}
              <Accordion.Header
                style={{
                  backgroundColor: '#21262d',
                  color: '#ffffff',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                }}
              >
                {section}
              </Accordion.Header>

              {/* Accordion Body */}
              <Accordion.Body style={{ backgroundColor: '#0d1117' }}>
                <ul
                  className="list-group list-group-flush"
                  style={{
                    borderTop: '1px solid #21262d',
                    borderBottom: '1px solid #21262d',
                  }}
                >
                  {groupedNotes[section].map((note, idx) => (
                    <li
                      key={idx}
                      className="list-group-item border-0 py-3 d-flex justify-content-between align-items-center"
                      style={{
                        backgroundColor: 'transparent',
                        borderBottom:
                          idx !== groupedNotes[section].length - 1
                            ? '1px solid #21262d'
                            : 'none',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = '#2d3541ff')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = 'transparent')
                      }
                    >
                      <Link
                        href={`/notes/${note.slug}`}
                        className="text-decoration-none"
                        style={{
                          color: '#c1deffff',
                          fontWeight: '500',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = '#ffffffff')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = '#c1deffff')
                        }
                      >
                        {note.title}
                      </Link>

                      <Link
                        href={`/notes/${note.slug}`}
                        className="text-decoration-none"
                        style={{
                          color: '#8b949e',
                          fontWeight: '500',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = '#ffffff')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = '#8b949e')
                        }
                      >
                        View →
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Layout>
  );
};

export default Notes;
