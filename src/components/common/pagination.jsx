import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 3; 

  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);

    let startPage = Math.max(2, currentPage);
    let endPage = Math.min(currentPage + visiblePages, totalPages - 1);

    if (startPage > 2) {
      pages.push("ellipsis-start"); 
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push("ellipsis-end"); 
    }

    if (totalPages > 1) {
      pages.push(totalPages); 
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-md ${
              currentPage === page
                ? "text-white bg-blue-500"
                : "text-gray-600 bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={page} className="px-4 py-2">
            ...
          </span>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
