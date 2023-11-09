import React from "react";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";
import AccordionServicios from "../AccordionServicios/AccordionServicios";

const SeccionDos = ({ ciudad, markers, telefono }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <AccordionServicios ciudad={ciudad} />
      <ListadoTiendas ciudad={ciudad} markers={markers} telefono={telefono} />
    </div>
  );
};

export default SeccionDos;
