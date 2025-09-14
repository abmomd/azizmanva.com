const PDFList = ({ pdfs }) => {
  return (
    <div>
      <h3>Available Notes</h3>
      <ul className="list-group">
        {pdfs.map((pdf, index) => (
          <li key={index} className="list-group-item bg-dark text-white">
            <a href={`/pdfs/${pdf}`} target="_blank" rel="noopener noreferrer">
              {pdf}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;
