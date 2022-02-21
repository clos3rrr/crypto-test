import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IPortfolio } from "../../types/portfolio";
import { IToken } from "../../types/token";
import styles from "./Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio: React.FC = () => {
  const portfolioTokens = useTypedSelector((state) => state.portfolio.tokens);
  const tokens = useTypedSelector((state) => state.token.tokens);
  const { updatePrice, refreshAmount } = useActions();

  useEffect(() => {
    if (portfolioTokens.length > 0 && tokens.length > 0) {
      for (let i: number = 0; i <= portfolioTokens.length - 1; i++) {
        const buff: IToken | undefined = tokens.find(
          (token: IToken) => token.id === portfolioTokens[i].id
        );
        if (buff)
          updatePrice({
            token: portfolioTokens[i],
            newPrice: Number(buff.priceUsd),
          });
        refreshAmount();
      }
    }
  }, [portfolioTokens.length, tokens.length]);

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__label}>Portfolio</div>
      {portfolioTokens.length > 0
        ? portfolioTokens.map((token: IPortfolio) => (
            <PortfolioItem key={token.id} token={token} />
          ))
        : "Portfolio is empty"}
    </div>
  );
};

export default Portfolio;
