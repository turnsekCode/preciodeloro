import Image from "next/image";
import React, { useState } from "react";
import styles from "./conversor.module.css";
import logoOro from "../../../public/assets/logoOro.png";
import logoPlata from "../../../public/assets/logoPlata.png";
import CalculadoraOro from "./CalculadoraOro";
import BloquePrecioPlata from "./BloquePrecioPlata";

const Conversor = ({ data, ciudad }) => {
  return (
    <div className={styles.contenedorConversorBanderas}>
      <div className={styles.contenedorConversor}>
        <div className={styles.conversorTitulo}>
          <Image src={logoOro} width={50} height={50} alt="Logo Oro" />
          <div className={styles.conversorTexto}>
            <h2>Precio del Oro</h2>
            <p>¿Cuánto cuesta ahora el oro?</p>
          </div>
        </div>
        <CalculadoraOro data={data} ciudad={ciudad} />
      </div>
      <div className={styles.contenedorConversor}>
        <div className={styles.conversorTitulo}>
          <Image src={logoPlata} width={50} height={50} alt="Logo Plata" />
          <div className={styles.conversorTexto}>
            <h2>Precio de la Plata</h2>
            <p>¿Cuánto cuesta ahora la plata?</p>
          </div>
        </div>
        <BloquePrecioPlata data={data} ciudad={ciudad} />
      </div>
    </div>
  );
};

export default Conversor;
