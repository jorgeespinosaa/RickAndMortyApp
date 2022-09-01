function Pagination({ prev, next, onPrevious, onNext }) {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        
        {prev ? (
          <li className="page-item">
            <button className="page-link mt-5" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <button className="page-link mt-5" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}

      </ul>
    </nav>
  );
}

export default Pagination;

