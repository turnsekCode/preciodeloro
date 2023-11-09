import { useState, useEffect } from "react";
import styles from "./conversor.module.css";

const CalculadoraOro = ({ ciudad }) => {
  const nombreCiudad = ciudad?.acf?.ciudad_oro;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
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
        setLoading(true);
      });
  }, []);
  const [valorInput, setValorInput] = useState("0.00");
  const [valorSelect, setValorSelect] = useState("0.00");
  const [masDe, setMasDe] = useState(true);
  const precio24k = data?.result?.Tarifas?.Oro[12].Productos[0].Precio / 1000;
  const precio18k = data?.result?.Tarifas?.Oro[2].Productos[0].Precio / 1000;
  const precio14k = data?.result?.Tarifas?.Oro[10].Productos[0].Precio / 1000;
  const masDeOro = ciudad?.acf?.precio_mas_de_oro;
  const precioMas24k = (precio24k + parseFloat(masDeOro)).toFixed(2);
  const precioMas18k = (precio18k + parseFloat(masDeOro)).toFixed(2);
  const precioMas14k = (precio14k + parseFloat(masDeOro)).toFixed(2);
  const paraMasOro = ciudad?.acf?.para_mas_de_oro;
  const valorSelectSuma = parseFloat(valorSelect) + parseFloat(masDeOro);
  const valorSelectNormal = parseFloat(valorSelect);
  return (
    <div className={styles.contenedorAmbosBloquesOro}>
      <div className={styles.contenedorBloqueSuperior}>
        <div className={styles.botones}>
          <button
            onClick={() => {
              setMasDe(true);
            }}
            className={
              masDe
                ? `${styles.button} ${styles.botonActivo}`
                : `${styles.button} `
            }
          >
            Más de {paraMasOro}g
          </button>
          <button
            onClick={() => {
              setMasDe(false);
            }}
            className={
              masDe
                ? `${styles.button} `
                : `${styles.button} ${styles.botonActivo}`
            }
          >
            Menos de {paraMasOro}g
          </button>
        </div>
        {masDe ? (
          <div className={styles.contenedorPrecios}>
            <div className={styles.contenedorprecioDestacado}>
              <div className={styles.precioDestacado}>
                <p className={styles.kilates}>18K</p>
                {!loading ? (
                  <p className={styles.precio18k}>Cargando</p>
                ) : (
                  <p className={styles.precio18k}>
                    {precioMas18k}
                    <span>€/g</span>
                  </p>
                )}
              </div>
            </div>
            <div className={styles.contenedorOtrosPrecios}>
              <div className={styles.OtrosPrecios}>
                <p className={styles.preciok}>24K</p>
                {!loading ? (
                  <p className={styles.precio}>Cargando</p>
                ) : (
                  <p className={styles.precio}>
                    {precioMas24k} <span>€/g</span>
                  </p>
                )}
              </div>
              <div className={styles.OtrosPrecios}>
                <p className={styles.preciok}>14K</p>
                {!loading ? (
                  <p className={styles.precio}>Cargando</p>
                ) : (
                  <p className={styles.precio}>
                    {precioMas14k} <span>€/g</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.contenedorPrecios}>
            <div className={styles.contenedorprecioDestacado}>
              <div className={styles.precioDestacado}>
                <p className={styles.kilates}>18K</p>
                <p className={styles.precio18k}>
                  {precio18k.toFixed(2)}
                  <span>€/g</span>
                </p>
              </div>
            </div>
            <div className={styles.contenedorOtrosPrecios}>
              <div className={styles.OtrosPrecios}>
                <p className={styles.preciok}>24K</p>
                <p className={styles.precio}>
                  {precio24k.toFixed(2)} <span>€/g</span>
                </p>
              </div>
              <div className={styles.OtrosPrecios}>
                <p className={styles.preciok}>14K</p>
                <p className={styles.precio}>
                  {precio14k.toFixed(2)} <span>€/g</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.contenedorCalculadora}>
        <h2>
          ¿Cuánto <span>te vamos a dar</span> por tus joyas?
        </h2>
        <div className={styles.contenedorSelect}>
          <div className={styles.Select}>
            <p>Selecciona kilates</p>
            <select
              onChange={(e) => {
                setValorSelect(e.target.value);
              }}
            >
              <option value={0}>---</option>
              <option value={precio14k.toFixed(2)}>14K</option>
              <option value={precio18k.toFixed(2)}>18K</option>
              <option value={precio24k.toFixed(2)}>24K</option>
            </select>
          </div>
          <div className={styles.input}>
            <p>Introduce gramos</p>
            <input
              type="number"
              placeholder="Cantidad"
              onChange={(event) => setValorInput(event.target.value)}
            />
            <span>g</span>
          </div>
        </div>
        <p className={styles.tituloInferior}>Te daremos por tu oro</p>
        <p className={styles.precioFinal}>
          {valorInput >= parseFloat(paraMasOro)
            ? (valorInput * valorSelectSuma).toLocaleString("es", {
                style: "currency",
                currency: "EUR",
              })
            : (valorInput * valorSelectNormal).toLocaleString("es", {
                style: "currency",
                currency: "EUR",
              })}
          <span></span>
        </p>
      </div>
      <p className={styles.promocion}>Promoción Online</p>
      <a
        title={`Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`}
        className={styles.botonLlamarTienda}
        href={`tel:${ciudad?.acf?.telefono}`}
      >
        LLAMA GRATIS
      </a>
    </div>
  );
};

export default CalculadoraOro;
