import React from "react";
import styles from "./seccionCUatroTexto.module.css";

const SeccionCuatroTexto = ({ landing }) => {
  return (
    <article className={styles.contenedorTexto}>
      <h3>{landing?.acf?.precio_del_oro?.titulo}</h3>
      <p>{landing?.acf?.precio_del_oro?.texto}</p>
    </article>
  );
};

export default SeccionCuatroTexto;
