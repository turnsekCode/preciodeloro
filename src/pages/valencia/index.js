import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "@/componentes/Layout/Layout";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";
import BannerPromoUno from "../../componentes/BannerPromoUno/BannerPromoUno";
import BannerPromoDos from "../../componentes/BannerPromoDos/BannerPromoDos";
import BannerPromoGeneral from "@/componentes/BannerGeneral/BannerPromoGeneral";
//import useSWR from "swr";
//const fetcher = (...args) => fetch(...args).then((res) => res.json());
const index = ({
  ciudad,
  general,
  tienda1,
  tienda2,
  tienda3,
  tienda4,
  tienda5,
  tienda6,
  tienda7,
  tienda8,
  tienda9,
  tienda10,
  tienda11,
  tienda1Google,
  tienda2Google,
  tienda3Google,
  tienda4Google,
  tienda5Google,
  tienda6Google,
  tienda7Google,
  tienda8Google,
  tienda9Google,
  tienda10Google,
  tienda11Google,
}) => {
  /*const nombreCiudad = ciudad.acf.ciudad_oro;
  const { data } = useSWR(
    `https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`,
    fetcher,
    {
      refreshInterval: 300000,
    }
  );*/
  const nombreCiudad = ciudad.acf.ciudad_oro;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(`https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(true);
      });
  }, []);
  const arrayTiendas = [
    {
      id: 1,
      nombreTienda: tienda1?.acf?.nombre_tienda,
      idTienda: tienda1?.acf?.tienda,
      telefono: ciudad?.acf?.telefono,
      mobil: tienda1?.acf?.mobile,
      enlacemobil: tienda1?.acf?.mobile,
      direccion: tienda1Google?.result?.formatted_address,
      mapa: tienda1?.acf?.mapa_landing,
      enlace_resenas: tienda1?.acf?.enlace_resenas,
      escribir_resenas: tienda1?.acf?.escribir_resenas_landings,
      foto1: tienda1?.acf?.foto_1,
      foto2: tienda1?.acf?.foto_2,
      foto3: tienda1?.acf?.foto_3,
      estrellas: tienda1Google?.result?.rating,
      resenas: tienda1Google?.result?.user_ratings_total,
    },
    {
      id: 2,
      nombreTienda: tienda2?.acf?.nombre_tienda,
      idTienda: tienda2?.acf?.tienda,
      telefono: ciudad?.acf?.telefono,
      mobil: tienda2?.acf?.mobile,
      enlacemobil: tienda2?.acf?.mobile,
      direccion: tienda2Google?.result?.formatted_address,
      mapa: tienda2?.acf?.mapa_landing,
      enlace_resenas: tienda2?.acf?.enlace_resenas,
      escribir_resenas: tienda2?.acf?.escribir_resenas_landings,
      foto1: tienda2?.acf?.foto_1,
      foto2: tienda2?.acf?.foto_2,
      foto3: tienda2?.acf?.foto_3,
      estrellas: tienda2Google?.result?.rating,
      resenas: tienda2Google?.result?.user_ratings_total,
    },
    {
      id: 3,
      nombreTienda: tienda3?.acf?.nombre_tienda,
      idTienda: tienda3?.acf?.tienda,
      telefono: ciudad?.acf?.telefono,
      mobil: tienda3?.acf?.mobile,
      enlacemobil: tienda3?.acf?.mobile,
      direccion: tienda3Google?.result?.formatted_address,
      mapa: tienda3?.acf?.mapa_landing,
      enlace_resenas: tienda3?.acf?.enlace_resenas,
      escribir_resenas: tienda3?.acf?.escribir_resenas_landings,
      foto1: tienda3?.acf?.foto_1,
      foto2: tienda3?.acf?.foto_2,
      foto3: tienda3?.acf?.foto_3,
      estrellas: tienda3Google?.result?.rating,
      resenas: tienda3Google?.result?.user_ratings_total,
    },
    {
      id: 4,
      nombreTienda: tienda4?.acf?.nombre_tienda,
      idTienda: tienda4?.acf?.tienda,
      telefono: ciudad?.acf?.telefono,
      mobil: tienda4?.acf?.mobile,
      enlacemobil: tienda4?.acf?.mobile,
      direccion: tienda4Google?.result?.formatted_address,
      mapa: tienda4?.acf?.mapa_landing,
      enlace_resenas: tienda4?.acf?.enlace_resenas,
      escribir_resenas: tienda4?.acf?.escribir_resenas_landings,
      foto1: tienda4?.acf?.foto_1,
      foto2: tienda4?.acf?.foto_2,
      foto3: tienda4?.acf?.foto_3,
      estrellas: tienda4Google?.result?.rating,
      resenas: tienda4Google?.result?.user_ratings_total,
    },
    {
      id: 5,
      nombreTienda: tienda5?.acf?.nombre_tienda,
      idTienda: tienda5?.acf?.tienda,
      telefono: ciudad?.acf?.telefono,
      mobil: tienda5?.acf?.mobile,
      enlacemobil: tienda5?.acf?.mobile,
      direccion: tienda5Google?.result?.formatted_address,
      mapa: tienda5?.acf?.mapa_landing,
      enlace_resenas: tienda5?.acf?.enlace_resenas,
      escribir_resenas: tienda5?.acf?.escribir_resenas_landings,
      foto1: tienda5?.acf?.foto_1,
      foto2: tienda5?.acf?.foto_2,
      foto3: tienda5?.acf?.foto_3,
      estrellas: tienda5Google?.result?.rating,
      resenas: tienda5Google?.result?.user_ratings_total,
    },
  ];
  return (
    <>
      <Head>
        <title>
          El mejor precio del oro en {ciudad.acf.ciudad_landing} lo tienes aquí
          | Quickgold
        </title>
        <meta
          name="description"
          content={`Conoce el precio por gramo de oro de ${ciudad.acf.ciudad_landing}. Obtén la mejor tasación por tus joyas de oro con el mejor servicio garantizado`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../../assets/icon.png" />
      </Head>
      <Layout ciudad={ciudad}>
        <SeccionUno
          nombreCiudad={ciudad.acf.ciudad_landing}
          telefono={ciudad.acf.telefono}
        />
        {ciudad?.acf?.promo_activa_preciodeloro ? (
          <BannerPromoUno
            /*banner para cada tienda o ciudad personalizado (prioridad uno)*/ ciudad={
              ciudad
            }
          />
        ) : ciudad.acf.promo_activa_preciodeloro == false &&
          general?.acf?.promo_activa_preciodeloro ? (
          <BannerPromoDos
            /*banner para cada ciudad de las landings solo preciodeloro (prioridad tres)*/ general={
              general
            }
          />
        ) : general.acf.promo_activa_preciodeloro == false &&
          general?.acf?.promo_general_activa ? (
          <BannerPromoGeneral
            /*banner general para todas las landings (prioridad dos)*/ general={
              general
            }
          />
        ) : (
          ""
        )}
        <SeccionDos
          ciudad={ciudad}
          arrayTiendas={arrayTiendas}
          data={data}
          loading={loading}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "526";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
const id1 = "5596";
const id2 = "5616";
const id3 = "5599";
const id4 = "3808";
const id5 = "5620";
export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const madrid = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await madrid.json();
  //fin datos de los campos personalizados de la ciudad
  //datos para divisas y metales
  const res = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  //fin datos para divisas y metales
  //datos de los campos personalizados de tiendas
  const res1 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id1}`);
  const tienda1 = await res1.json();
  const res2 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id2}`);
  const tienda2 = await res2.json();
  const res3 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id3}`);
  const tienda3 = await res3.json();
  const res4 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id4}`);
  const tienda4 = await res4.json();
  const res5 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id5}`);
  const tienda5 = await res5.json();
  //fin datos de los campos personalizados de tiendas

  //datos de google para tiendas
  const tienda_1 = tienda1.acf?.tienda;
  const tienda_2 = tienda2.acf?.tienda;
  const tienda_3 = tienda3.acf?.tienda;
  const tienda_4 = tienda4.acf?.tienda;
  const tienda_5 = tienda5.acf?.tienda;
  const google1 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_1}.txt`
  );
  const tienda1Google = await google1.json();
  const google2 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_2}.txt`
  );
  const tienda2Google = await google2.json();
  const google3 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_3}.txt`
  );
  const tienda3Google = await google3.json();
  const google4 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_4}.txt`
  );
  const tienda4Google = await google4.json();
  const google5 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_5}.txt`
  );
  const tienda5Google = await google5.json();

  return {
    props: {
      ciudad,
      general,
      tienda1,
      tienda2,
      tienda3,
      tienda4,
      tienda5,
      tienda1Google,
      tienda2Google,
      tienda3Google,
      tienda4Google,
      tienda5Google,
    },
    revalidate: 1,
  };
}
