import React from "react";
import styles from "./Pagination.module.scss";

interface Props {
  postsPerPage: number;
  currentPage: number;
  totalPosts: number;
  paginate(number: number): void;
}

const Pagination: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}: Props) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={
            number === currentPage
              ? styles.pagination__item_current
              : styles.pagination__item
          }
          onClick={() => paginate(number)}
          style={{ cursor: "pointer" }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
