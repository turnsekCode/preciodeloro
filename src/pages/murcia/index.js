import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";

import Script from "next/script";

const index = ({ ciudad, general, markers }) => {
  return (
    <>
      <Head>
        <title>
          El mejor precio del oro en {ciudad?.acf?.ciudad_landing} lo tienes
          aquí | Quickgold
        </title>
        <meta
          name="description"
          content={`Conoce el precio por gramo de oro de ${ciudad?.acf?.ciudad_landing}. Obtén la mejor tasación por tus joyas de oro con el mejor servicio garantizado`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon.png" />
        {ciudad?.acf?.nonscript_chat}
      </Head>
      <Script id="livechat" property="lazyOnload">
        {ciudad?.acf?.script_chat}
      </Script>

      <Layout ciudad={ciudad} telefono="968 416 924">
        <SeccionUno
          nombreCiudad={ciudad?.acf?.ciudad_landing}
          //telefono={ciudad?.acf?.telefono}
          telefono="968 416 924"
        />

        <SeccionDos
          ciudad={ciudad}
          comprar={ciudad?.acf?.vende_divisa}
          markers={markers}
          telefono="968 416 924"
          //telefono={ciudad?.acf?.telefono}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "8960";
const apiGeneral = "13848";
export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const madrid = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await madrid.json();

  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  const tienda = ciudad?.acf?.ciudad_oro;
  const marker = await fetch(
    `https://panel.quickgold.es/markersMapa/markers${tienda}.json`
  );
  const markers = await marker.json();

  return {
    props: {
      ciudad,
      general,
      markers,
    },
    revalidate: 1,
  };
}
