import React, { useState, useEffect } from "react";
import { formatter } from "../../helpers/formatter";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IToken } from "../../types/token";
import Portfolio from "../Portfolio/Portfolio";
import MyModal from "../UI/modal/MyModal";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [isPlus, setIsPlus] = useState<number>(0);

  const { tokens, error, loading } = useTypedSelector((state) => state.token);
  const { amount, result, resultPercent } = useTypedSelector(
    (state) => state.portfolio
  );

  const { fetchTokens } = useActions();

  useEffect(() => {
    if (tokens.length === 0 && !error && !loading) {
      fetchTokens();
    }
    if (result > 0) {
      setIsPlus(1);
    } else if (result < 0) {
      setIsPlus(-1);
    } else setIsPlus(0);
  }, [amount]);

  return (
    <header className={styles.header}>
      <div className={styles.header__cryptoTop}>
        {loading
          ? "Loading"
          : error
          ? error
          : tokens.slice(0, 3).map((item: IToken) => (
              <div key={item.id} className={styles.cryptoTop__item}>
                {item.name}: {formatter.format(Number(item.priceUsd))}
              </div>
            ))}
      </div>
      <div
        className={styles.header__balance}
        onClick={(): void => setVisibleModal(!visibleModal)}
      >
        {formatter.format(amount)}
        {isPlus === 0
          ? null
          : `${result > 0 ? " +" : " "}${formatter.format(
              result
            )} (${resultPercent.toFixed(2)}%)`}
      </div>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <Portfolio />
      </MyModal>
    </header>
  );
};

export default Header;
