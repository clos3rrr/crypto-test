import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvalidPath.module.scss";

const InvalidPath: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.invalidPath} onClick={() => navigate("/")}>
      404
    </div>
  );
};

export default InvalidPath;
