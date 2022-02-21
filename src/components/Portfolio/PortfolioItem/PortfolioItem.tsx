import React from "react";
import { useActions } from "../../../hooks/useActions";
import { IPortfolio } from "../../../types/portfolio";
import styles from "../Portfolio.module.scss";

interface Props {
  token: IPortfolio;
}

const PortfolioItem: React.FC<Props> = ({ token }) => {
  const { removeToken, refreshAmount } = useActions();

  const handleClick = (
    id: string,
    count: number,
    symbol: string,
    price: string
  ) => {
    removeToken({ id, count, symbol, price: Number(price) });
    refreshAmount();
  };

  return (
    <div className={`${styles.portfolio__item} ${styles.portfolioItem}`}>
      <div className={styles.portfolioItem__symbol}>Token: {token.symbol}</div>
      <div className={styles.portfolioItem__count}>Count: {token.count}</div>
      <div
        className={styles.portfolioItem__button}
        onClick={() =>
          handleClick(
            token.id,
            token.count,
            token.symbol,
            token.price.toString()
          )
        }
      />
    </div>
  );
};

export default PortfolioItem;
