import React from "react";
import styles from "./modal.module.scss";

interface Props {
  children?: React.ReactNode;
  visible: boolean;
  setVisible(value: boolean): void;
}

const MyModal: React.FC<Props> = ({ children, visible, setVisible }: Props) => {
  const rootClasses = [styles.myModal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={styles.myModal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={styles.myModal__cross}
          onClick={() => setVisible(false)}
        />
        {children}
      </div>
    </div>
  );
};

export default MyModal;
