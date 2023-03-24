import React from "react";
import Conversor from "../ConversorPlata/Conversor";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ ciudad, arrayTiendas }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor ciudad={ciudad} />
      <ListadoTiendas ciudad={ciudad} arrayTiendas={arrayTiendas} />
    </div>
  );
};

export default SeccionDos;
