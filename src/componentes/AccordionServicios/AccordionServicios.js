import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./accordion.module.css";
import CalculadoraOro from "../ConversorPlata/CalculadoraOro";
import BloquePrecioPlata from "../ConversorPlata/BloquePrecioPlata";
import Empenos from "../BloqueInfo/Empenos";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowDropDownIcon
        sx={{
          fontSize: "2.5rem",
          color: "#fff",
          background: "#061B2D",
          borderRadius: "50%",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded svg": {
    transform: "rotate(360deg)",
    background: "#0692D0",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function AccordionServicios({ ciudad }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <article className={styles.contenedorAccordion}>
      <section>
        <Accordion
          style={{
            background: "#0F2D45",
            borderRadius: "8px",
            border: "none",
            padding: "10px 20px 0 20px",
          }}
          className={styles.contendorAccordion1}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            style={{
              padding: "0",
              borderBottom: "2px solid #fff",
            }}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <div className={styles.contenedorTituloServicio}>
              {" "}
              <h1
                className={
                  expanded === "panel1"
                    ? `${styles.tituloServicio} ${styles.accordionActivo}`
                    : `${styles.tituloServicio}`
                }
              >
                Precio del oro
              </h1>
              <h2 className={styles.subTituloServicio}>
                Vender <strong>oro al mejor precio</strong> es fácil en nuestras
                tiendas <strong>Compro oro</strong> en{" "}
                {ciudad?.acf?.ciudad_landing}. Más de 15 años en el sector
                siendo la empresa referente en las ciudades donde estamos.
              </h2>
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <CalculadoraOro ciudad={ciudad} />
          </AccordionDetails>
        </Accordion>
      </section>
      <section>
        <Accordion
          style={{
            background: "#0F2D45",
            borderRadius: "8px",
            border: "none",
            padding: "10px 20px 0 20px",
          }}
          className={styles.contendorAccordion2}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            style={{
              padding: "0",
              borderBottom: "2px solid #fff",
            }}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <div className={styles.contenedorTituloServicio}>
              {" "}
              <h1
                className={
                  expanded === "panel2"
                    ? `${styles.tituloServicio} ${styles.accordionActivo}`
                    : `${styles.tituloServicio}`
                }
              >
                Precio de la plata
              </h1>
              <h2 className={styles.subTituloServicio}>
                Compramos <strong>plata al mejor precio</strong>: joyas,
                cuberterías, etc. Somos los líderes en la{" "}
                <strong>compra de joyas</strong> en{" "}
                {ciudad?.acf?.ciudad_landing}.
              </h2>
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <BloquePrecioPlata ciudad={ciudad} />
          </AccordionDetails>
        </Accordion>
      </section>
      <section>
        <Accordion
          style={{
            background: "#0F2D45",
            borderRadius: "8px",
            border: "none",
            padding: "10px 20px 0 20px",
          }}
          className={styles.contendorAccordion4}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            style={{
              padding: "0",
              borderBottom: "2px solid #fff",
            }}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <div className={styles.contenedorTituloServicio}>
              {" "}
              <h1
                className={
                  expanded === "panel4"
                    ? `${styles.tituloServicio} ${styles.accordionActivo}`
                    : `${styles.tituloServicio}`
                }
              >
                Empeño de joyas
              </h1>
              <h2 className={styles.subTituloServicio}>
                Nuestros <strong>empeños sin interés el primer mes</strong>{" "}
                hacen que empeñar oro sea mucho más cómodo y fácil para nuestros
                clientes.
              </h2>
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Empenos ciudad={ciudad} />
          </AccordionDetails>
        </Accordion>
      </section>
    </article>
  );
}
