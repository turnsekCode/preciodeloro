import React from "react";
import Conversor from "../ConversorPlata/Conversor";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionDos = ({
  //dataReverse,
  //dataReverseVenta,
  ciudad,
  arrayTiendas,
  data,
}) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor
        //dataReverse={dataReverse}
        //dataReverseVenta={dataReverseVenta}
        ciudad={ciudad}
        data={data}
      />
      <ListadoTiendas ciudad={ciudad} arrayTiendas={arrayTiendas} />
    </div>
  );
};

export default SeccionDos;
