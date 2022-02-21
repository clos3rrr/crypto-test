import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import styles from "./main.module.scss";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Main: React.FC = () => {
  const { tokens, error, loading } = useTypedSelector((state) => state.token);

  const { fetchTokens } = useActions();

  useEffect(() => {
    if (!tokens) {
      fetchTokens();
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        {loading ? "Loading" : error ? error : <Table tokensList={tokens} />}
      </main>
    </div>
  );
};

export default Main;
