import React, { useEffect, useState } from "react";
import styles from "./Token.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Header from "../../components/Header/Header";
import { formatter } from "../../helpers/formatter";
import MyModal from "../../components/UI/modal/MyModal";
import AddTokenForm from "../../components/addTokenForm/AddTokenForm";
import { useParams } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
};

export const Token: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const params = useParams();

  const { chartData, error, loading, token } = useTypedSelector(
    (state) => state.chart
  );

  const { fetchChartData, fetchChartToken, addToken, refreshAmount } =
    useActions();

  const handleClick =
    (id: string, symbol: string, price: string) => (count: number) => {
      addToken({ id, count, symbol, price: Number(price) });
      refreshAmount();
      setVisibleModal(!visibleModal);
    };

  useEffect(() => {
    fetchChartData(params.id ? params.id : "bitcoin");
    fetchChartToken(params.id ? params.id : "bitcoin");
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        {loading ? (
          <div>loading</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <Line options={options} data={chartData} />
        )}
        {token ? (
          <div className={`${styles.main__infoSection} ${styles.infoSection}`}>
            <div className={styles.infoSection__item}>Name: {token.name}</div>
            <div className={styles.infoSection__item}>
              Symbol: {token.symbol}
            </div>
            <div className={styles.infoSection__item}>
              Price: {formatter.format(Number(token.priceUsd))}
            </div>
            <div className={styles.infoSection__item}>
              marketCap: {formatter.format(Number(token.marketCapUsd))}
            </div>
            <div className={styles.infoSection__item}>
              Change %(24H): {Number(token.changePercent24Hr).toFixed(2)}
            </div>
            <div
              className={styles.infoSection__button}
              onClick={() => setVisibleModal(!visibleModal)}
            >
              ADD
            </div>
            <MyModal visible={visibleModal} setVisible={setVisibleModal}>
              <AddTokenForm
                addToken={handleClick(token.id, token.symbol, token.priceUsd)}
                token={token.name}
              />
            </MyModal>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default Token;
