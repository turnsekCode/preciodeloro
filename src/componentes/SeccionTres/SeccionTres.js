import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import AccordionServicios from "../AccordionServicios/AccordionServicios";
import styles from "./seccionDos.module.css";

const SeccionTres = ({ ciudad, tiendaGoogle }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <AccordionServicios ciudad={ciudad} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTres;
