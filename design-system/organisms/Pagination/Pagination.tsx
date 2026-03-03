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
  function getPages(current: number, total: number): (number | "…")[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const left = current - 1;
    const right = current + 1;
    const result: (number | "…")[] = [1];
    if (left > 2) result.push("…");
    for (let p = Math.max(2, left); p <= Math.min(total - 1, right); p++) result.push(p);
    if (right < total - 1) result.push("…");
    result.push(total);
    return result;
  }

  const pages = getPages(currentPage, totalPages);

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

      {pages.map((page, i) =>
        page === "…" ? (
          <span key={`ell-${i}`} className="pagination-ellipsis" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            className={`pagination-btn${page === currentPage ? " pagination-btn--active" : ""}`}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

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
