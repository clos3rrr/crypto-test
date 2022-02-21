import React, { useEffect, useState } from "react";
import styles from "./Table.module.scss";
import TableItem from "./TableItem/TableItem";
import { IToken } from "../../types/token";
import Pagination from "../../components/Pagination/Pagination";

interface Props {
  tokensList: IToken[];
}

const Table: React.FC<Props> = ({ tokensList }: Props) => {
  const [tokens] = useState<IToken[]>(tokensList);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tokensPerPage] = useState(20);
  const [currentTokens, setCurrentTokens] = useState<IToken[]>([]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const indexOfLastPost = currentPage * tokensPerPage;
    const indexOfFirstPost = indexOfLastPost - tokensPerPage;
    setCurrentTokens(tokens.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage]);

  return (
    <div>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
              <th>Market Cap</th>
              <th>Chg (24H)</th>
            </tr>
          </thead>

          <tbody>
            {currentTokens.map((item: IToken) => (
              <TableItem key={item.id} token={item} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        postsPerPage={tokensPerPage}
        totalPosts={tokens.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Table;
