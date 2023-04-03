import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Conversor from "../ConversorPlata/Conversor";
import styles from "./seccionDos.module.css";

const SeccionTres = ({ ciudad, tiendaGoogle, loading, data }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor ciudad={ciudad} data={data} loading={loading} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTres;
