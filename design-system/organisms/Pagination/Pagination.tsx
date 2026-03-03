import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={`pagination ${className}`.trim()} aria-label="Pagination">
      <button
        type="button"
        className="pagination-btn pagination-btn--nav"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Page précédente"
      >
        ‹
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`pagination-btn${page === currentPage ? " pagination-btn--active" : ""}`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="pagination-btn pagination-btn--nav"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Page suivante"
      >
        ›
      </button>
    </nav>
  );
}
