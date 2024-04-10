import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({ totalPages, currentPage, setPage }) {
  return (
    <div className="w-full mx-auto flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>

              <button
                onClick={() => setPage((pre) => pre - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </a>

            {/* Render page numbers */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <a
                href="#"
                key={index}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  index + 1 === currentPage
                    ? "text-white bg-indigo-600"
                    : "text-gray-900"
                } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </a>
            ))}

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
             
               <button
                onClick={() => setPage((pre) => pre + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
