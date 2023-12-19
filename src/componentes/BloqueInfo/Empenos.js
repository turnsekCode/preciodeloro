import React, { useState, useEffect } from "react";
import styles from "./conversor.module.css";

export default function Empenos({ ciudad }) {
  const nombreCiudad = ciudad?.acf?.ciudad_oro;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`,
      {
        cache: "no-cache",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);
  const precio18k = data?.result?.Tarifas?.Oro[2]?.Productos[0]?.Precio / 1000;
  const paraMasOro = ciudad?.acf?.para_mas_de_oro;
  const masDeOro = ciudad?.acf?.precio_mas_de_oro;
  const precioMas18k = (precio18k + parseFloat(masDeOro)).toFixed(2);
  const primerMes = ciudad?.acf?.primer_mes;
  const tasacion = ciudad?.acf?.tasacion;
  const intereStandar = ciudad?.acf?.interes_standard;
  const costeTasacion = ciudad.acf.coste_de_tasacion;
  const telefono = ciudad?.acf?.telefono;
  const precio = 100;
  const percibes = precio - costeTasacion;
  const [botonActivo, setBotonActivo] = useState(null);

  return (
    <>
      <div className={styles.contenedorBotones}>
        <button
          onClick={() => {
            setBotonActivo(false);
          }}
          className={
            botonActivo
              ? `${styles.botonUno}`
              : `${styles.botonUno} ${styles.botonActivo}`
          }
        >
          INFO
        </button>
        <button
          onClick={() => {
            setBotonActivo(true);
          }}
          className={
            botonActivo
              ? `${styles.botonUno} ${styles.botonActivo}`
              : `${styles.botonUno} `
          }
        >
          EJEMPLO
        </button>
      </div>
      <div className={styles.contenedor}>
        {botonActivo ? (
          <div className={styles.contenidoEjemplo}>
            <div className={styles.contenedorInfo}>
              <h5>PONGAMOS UN EJEMPLO</h5>
              <p className={styles.segundoParrafo}>
                Para un empeño con interés al
                <span>
                  {intereStandar}% mensual y {primerMes}% de interés primer mes:
                </span>{" "}
              </p>
              <div className={styles.ejemplo}>
                <p className={styles.primerParrafo}>
                  Con un valor de tus joyas de {precio}€, recibes {percibes}€.
                </p>
                <p className={styles.tercerParrafo}>
                  Conlleva un pequeño gasto de gestión del {costeTasacion}%
                </p>
              </div>
              <p className={styles.cuartoParrafo}>
                Para recuperar las piezas empeñadas pasado el primer mes y
                finalizar el contrato deberías abonar 100€.
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.contenidoInfo}>
            <div className={styles.contenedorAmbosBloquesEmpeno}>
              <div className={styles.contenedorBloqueEmpeno}>
                <h3>
                  {primerMes}% interés <span>primer mes</span>
                </h3>
                <p className={styles.preciosDelOro}>
                  Precio del oro: {precioMas18k} €/g 18k para más de{" "}
                  {paraMasOro}
                  g.
                </p>
                <div className={styles.contenedorTresBloques}>
                  <div className={styles.contenedorBloques}>
                    <div className={styles.bloqueIzq}>
                      <p>{intereStandar}%</p>
                    </div>
                    <div className={styles.bloqueDer}>
                      <p>Interés mensual</p>
                    </div>
                  </div>
                  <div className={styles.contenedorBloques}>
                    <div className={styles.bloqueIzq}>
                      <p>{tasacion}%</p>
                    </div>
                    <div className={styles.bloqueDer}>
                      <p>Tasación</p>
                    </div>
                  </div>
                  <div className={styles.contenedorBloques}>
                    <div className={styles.bloqueIzq}>
                      <p>{primerMes}%</p>
                    </div>
                    <div className={styles.bloqueDer}>
                      <p>Primer mes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.contenedorBotonLlamar}>
        <a className={styles.botonLlamarTienda} href={`tel:${telefono}`}>
          LLAMA GRATIS
        </a>
      </div>
    </>
  );
}
