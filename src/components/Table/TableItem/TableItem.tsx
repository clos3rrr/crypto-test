import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { formatter } from "../../../helpers/formatter";
import { useActions } from "../../../hooks/useActions";
import { IToken } from "../../../types/token";
import AddTokenForm from "../../addTokenForm/AddTokenForm";
import MyModal from "../../UI/modal/MyModal";
import styles from "../Table.module.scss";

interface Props {
  token: IToken;
}

const TableItem: React.FC<Props> = ({ token }: Props) => {
  const refButton = useRef<HTMLHeadingElement>(null);

  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const { addToken, refreshAmount } = useActions();

  const handleClick =
    (id: string, symbol: string, price: string) => (count: number) => {
      addToken({ id, count, symbol, price: Number(price) });
      refreshAmount();
      setVisibleModal(!visibleModal);
    };

  return (
    <tr
      className={styles.table__item}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target !== refButton.current) {
          navigate(`/token/${token.id}`);
        }
      }}
    >
      <td>{token.name}</td>
      <td>{token.symbol}</td>
      <td>{formatter.format(Number(token.priceUsd))}</td>
      <td>{formatter.format(Number(token.marketCapUsd))}</td>
      <td>{Number(token.changePercent24Hr).toFixed(2)}</td>
      <td>
        <div
          className={styles.table__button}
          onClick={() => setVisibleModal(!visibleModal)}
          ref={refButton}
        />
      </td>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <AddTokenForm
          addToken={handleClick(token.id, token.symbol, token.priceUsd)}
          token={token.name}
        />
      </MyModal>
    </tr>
  );
};

export default TableItem;
