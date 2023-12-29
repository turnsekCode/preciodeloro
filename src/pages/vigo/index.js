import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import SeccionCuatroTexto from "@/componentes/SeccionCuatroTexto/SeccionCuatroTexto";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";

const index = ({ ciudad, general, markers, landing }) => {
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
      </Head>
      <Layout ciudad={ciudad}>
        <SeccionUno nombreCiudad={ciudad?.acf?.ciudad_landing} />
        <SeccionDos
          ciudad={ciudad}
          comprar={ciudad?.acf?.vende_divisa}
          markers={markers}
          telefono={ciudad?.acf?.telefono}
        />{" "}
        <SeccionCuatroTexto landing={landing} />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "7491";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
const id1 = "7493";
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
    `https://panel.quickgold.es/markersMapaLandings/markers${tienda}.json`
  );
  const markers = await marker.json();
  const landing1 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/17546`
  );
  const landing = await landing1.json();

  return {
    props: {
      ciudad,
      general,
      markers,
      landing,
    },
    revalidate: 1,
  };
}
