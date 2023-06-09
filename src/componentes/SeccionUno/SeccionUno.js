import React from "react";
import styles from "./seccionUno.module.css";

const SeccionUno = ({ nombreCiudad, telefono }) => {
  return (
    <seccion className={styles.contenedor}>
      <h1 className={styles.titulo}>Tiendas compro oro en {nombreCiudad}</h1>
      {/*<p>El mejor cambio de divisas en {nombreCiudad}</p>*/}
      <p>El mejor precio del oro en {nombreCiudad}</p>
      <a className={styles.botonLamar} href={`tel:${telefono}`}>
        LLAMA GRATIS AL {telefono}
      </a>
    </seccion>
  );
};

export default SeccionUno;
