import React, { useState } from "react";
import styles from "./AddTokenForm.module.scss";

interface Props {
  token: string;
  addToken(count: number): void;
}

const AddTokenForm: React.FC<Props> = ({ addToken, token }: Props) => {
  const [count, setCount] = useState<string>("");
  const blockInvalidChar = (e: React.KeyboardEvent<HTMLElement>) =>
    ["e", "E", "=", "+", "-", ","].includes(e.key) && e.preventDefault();

  const handleAdd = () => {
    if (Number(count)) {
      if (Number(count) > 0) {
        addToken(Number(count));
        setCount("");
      }
    }
  };

  return (
    <div className={styles.addTokenForm}>
      <div className={styles.addTokenForm__label}>{token}</div>
      <input
        type="number"
        placeholder="count"
        className={styles.addTokenForm__input}
        onKeyDown={blockInvalidChar}
        onChange={(e) => setCount(e.target.value)}
        value={count}
      ></input>
      <div onClick={() => handleAdd()} className={styles.addTokenForm__button}>
        Add
      </div>
    </div>
  );
};

export default AddTokenForm;
