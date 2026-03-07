import { Pagination } from "flowbite-react";

export function AppPagination({ currentPage, onPageChange, totalPages }) {
  return (
    <div className="flex justify-center my-6 overflow-x-auto">
      <Pagination
        layout="navigation"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}