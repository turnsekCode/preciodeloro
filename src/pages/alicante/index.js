import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";

import React from "react";
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

      <Layout ciudad={ciudad}>
        <SeccionUno nombreCiudad={ciudad?.acf?.ciudad_landing} />

        <SeccionDos
          ciudad={ciudad}
          comprar={ciudad?.acf?.vende_divisa}
          telefono={ciudad?.acf?.telefono}
          markers={markers}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "4975";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const madrid = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await madrid.json();

  const res = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  //fin datos de los campos personalizados de la ciudad
  //fin datos de los campos personalizados de tiendas
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
