"use strict";
(() => {
var exports = {};
exports.id = 1033;
exports.ids = [1033];
exports.modules = {

/***/ 7797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2932);
/* harmony import */ var _componentes_SeccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8664);
/* harmony import */ var _componentes_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3381);
/* harmony import */ var _componentes_BannerPromoUno_BannerPromoUno__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8332);
/* harmony import */ var _componentes_BannerPromoDos_BannerPromoDos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4284);
/* harmony import */ var _componentes_BannerGeneral_BannerPromoGeneral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5939);









//import useSWR from "swr";
//const fetcher = (...args) => fetch(...args).then((res) => res.json());
const index = ({ ciudad , general , tienda1 , tienda2 , tienda3 , tienda4 , tienda5 , tienda6 , tienda7 , tienda8 , tienda9 , tienda10 , tienda11 , tienda1Google , tienda2Google , tienda3Google , tienda4Google , tienda5Google , tienda6Google , tienda7Google , tienda8Google , tienda9Google , tienda10Google , tienda11Google  })=>{
    /*const nombreCiudad = ciudad.acf.ciudad_oro;
  const { data } = useSWR(
    `https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`,
    fetcher,
    {
      refreshInterval: 300000,
    }
  );*/ const nombreCiudad = ciudad.acf.ciudad_oro;
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetch(`https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
            cache: "no-cache"
        }).then((response)=>response.json()).then((response)=>{
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
            resenas: tienda1Google?.result?.user_ratings_total
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
            resenas: tienda2Google?.result?.user_ratings_total
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
            resenas: tienda3Google?.result?.user_ratings_total
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
            resenas: tienda4Google?.result?.user_ratings_total
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
            resenas: tienda5Google?.result?.user_ratings_total
        },
        {
            id: 6,
            nombreTienda: tienda6?.acf?.nombre_tienda,
            idTienda: tienda6?.acf?.tienda,
            telefono: ciudad?.acf?.telefono,
            mobil: tienda6?.acf?.mobile,
            enlacemobil: tienda6?.acf?.mobile,
            direccion: tienda6Google?.result?.formatted_address,
            mapa: tienda6?.acf?.mapa_landing,
            enlace_resenas: tienda6?.acf?.enlace_resenas,
            escribir_resenas: tienda6?.acf?.escribir_resenas_landings,
            foto1: tienda6?.acf?.foto_1,
            foto2: tienda6?.acf?.foto_2,
            foto3: tienda6?.acf?.foto_3,
            estrellas: tienda6Google?.result?.rating,
            resenas: tienda6Google?.result?.user_ratings_total
        },
        {
            id: 7,
            nombreTienda: tienda7?.acf?.nombre_tienda,
            idTienda: tienda7?.acf?.tienda,
            telefono: ciudad?.acf?.telefono,
            mobil: tienda7?.acf?.mobile,
            enlacemobil: tienda7?.acf?.mobile,
            direccion: tienda7Google?.result?.formatted_address,
            mapa: tienda7?.acf?.mapa_landing,
            enlace_resenas: tienda7?.acf?.enlace_resenas,
            escribir_resenas: tienda7?.acf?.escribir_resenas_landings,
            foto1: tienda7?.acf?.foto_1,
            foto2: tienda7?.acf?.foto_2,
            foto3: tienda7?.acf?.foto_3,
            estrellas: tienda7Google?.result?.rating,
            resenas: tienda7Google?.result?.user_ratings_total
        },
        {
            id: 8,
            nombreTienda: tienda8?.acf?.nombre_tienda,
            idTienda: tienda8?.acf?.tienda,
            telefono: ciudad?.acf?.telefono,
            mobil: tienda8?.acf?.mobile,
            enlacemobil: tienda8?.acf?.mobile,
            direccion: tienda8Google?.result?.formatted_address,
            mapa: tienda8?.acf?.mapa_landing,
            enlace_resenas: tienda8?.acf?.enlace_resenas,
            escribir_resenas: tienda8?.acf?.escribir_resenas_landings,
            foto1: tienda8?.acf?.foto_1,
            foto2: tienda8?.acf?.foto_2,
            foto3: tienda8?.acf?.foto_3,
            estrellas: tienda8Google?.result?.rating,
            resenas: tienda8Google?.result?.user_ratings_total
        },
        {
            id: 9,
            nombreTienda: tienda9?.acf?.nombre_tienda,
            idTienda: tienda9?.acf?.tienda,
            telefono: ciudad?.acf?.telefono,
            mobil: tienda9?.acf?.mobile,
            enlacemobil: tienda9?.acf?.mobile,
            direccion: tienda9Google?.result?.formatted_address,
            mapa: tienda9?.acf?.mapa_landing,
            enlace_resenas: tienda9?.acf?.enlace_resenas,
            escribir_resenas: tienda9?.acf?.escribir_resenas_landings,
            foto1: tienda9?.acf?.foto_1,
            foto2: tienda9?.acf?.foto_2,
            foto3: tienda9?.acf?.foto_3,
            estrellas: tienda9Google?.result?.rating,
            resenas: tienda9Google?.result?.user_ratings_total
        },
        {
            id: 10,
            nombreTienda: tienda10?.acf?.nombre_tienda,
            idTienda: tienda10?.acf?.tienda,
            telefono: ciudad?.acf?.telefono,
            mobil: tienda10?.acf?.mobile,
            enlacemobil: tienda10?.acf?.mobile,
            direccion: tienda10Google?.result?.formatted_address,
            mapa: tienda10?.acf?.mapa_landing,
            enlace_resenas: tienda10?.acf?.enlace_resenas,
            escribir_resenas: tienda10?.acf?.escribir_resenas_landings,
            foto1: tienda10?.acf?.foto_1,
            foto2: tienda10?.acf?.foto_2,
            foto3: tienda10?.acf?.foto_3,
            estrellas: tienda10Google?.result?.rating,
            resenas: tienda10Google?.result?.user_ratings_total
        },
        {
            id: 11,
            nombreTienda: tienda11?.acf?.nombre_tienda,
            idTienda: tienda11?.acf?.tienda,
            telefono: ciudad?.acf?.telefono,
            mobil: tienda11?.acf?.mobile,
            enlacemobil: tienda11?.acf?.mobile,
            direccion: tienda11Google?.result?.formatted_address,
            mapa: tienda11?.acf?.mapa_landing,
            enlace_resenas: tienda11?.acf?.enlace_resenas,
            escribir_resenas: tienda11?.acf?.escribir_resenas_landings,
            foto1: tienda11?.acf?.foto_1,
            foto2: tienda11?.acf?.foto_2,
            foto3: tienda11?.acf?.foto_3,
            estrellas: tienda11Google?.result?.rating,
            resenas: tienda11Google?.result?.user_ratings_total
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "El mejor precio del oro en ",
                            ciudad.acf.ciudad_landing,
                            " lo tienes aqu\xed | Quickgold"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `Conoce el precio por gramo de oro de ${ciudad.acf.ciudad_landing}. Obtén la mejor tasación por tus joyas de oro con el mejor servicio garantizado`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "../../../assets/icon.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ciudad: ciudad,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        nombreCiudad: ciudad.acf.ciudad_landing,
                        telefono: ciudad.acf.telefono
                    }),
                    ciudad?.acf?.promo_activa_preciodeloro ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerPromoUno_BannerPromoUno__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        /*banner para cada tienda o ciudad personalizado (prioridad uno)*/ ciudad: ciudad
                    }) : ciudad.acf.promo_activa_preciodeloro == false && general?.acf?.promo_activa_preciodeloro ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerPromoDos_BannerPromoDos__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        /*banner para cada ciudad de las landings solo preciodeloro (prioridad tres)*/ general: general
                    }) : general.acf.promo_activa_preciodeloro == false && general?.acf?.promo_general_activa ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerGeneral_BannerPromoGeneral__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        /*banner general para todas las landings (prioridad dos)*/ general: general
                    }) : "",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_SeccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        ciudad: ciudad,
                        arrayTiendas: arrayTiendas,
                        data: data,
                        loading: loading
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
const idPaginaWp = "468";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
const id1 = "11108";
const id2 = "6888";
const id3 = "8783";
const id4 = "5458";
const id5 = "5462";
const id6 = "5480";
const id7 = "5470";
const id8 = "5491";
const id9 = "5058";
const id10 = "6186";
const id11 = "14146";
async function getStaticProps() {
    //datos de los campos personalizados de la ciudad
    const madrid = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`);
    const ciudad = await madrid.json();
    //fin datos de los campos personalizados de la ciudad
    //datos para divisas y metales
    const res = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`);
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
    const res6 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id6}`);
    const tienda6 = await res6.json();
    const res7 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id7}`);
    const tienda7 = await res7.json();
    const res8 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id8}`);
    const tienda8 = await res8.json();
    const res9 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id9}`);
    const tienda9 = await res9.json();
    const res10 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id10}`);
    const tienda10 = await res10.json();
    const res11 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id11}`);
    const tienda11 = await res11.json();
    //fin datos de los campos personalizados de tiendas
    //datos de google para tiendas
    const tienda_1 = tienda1.acf?.tienda;
    const tienda_2 = tienda2.acf?.tienda;
    const tienda_3 = tienda3.acf?.tienda;
    const tienda_4 = tienda4.acf?.tienda;
    const tienda_5 = tienda5.acf?.tienda;
    const tienda_6 = tienda6.acf?.tienda;
    const tienda_7 = tienda7.acf?.tienda;
    const tienda_8 = tienda8.acf?.tienda;
    const tienda_9 = tienda9.acf?.tienda;
    const tienda_10 = tienda10.acf?.tienda;
    const tienda_11 = tienda11.acf?.tienda;
    const google1 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_1}.txt`);
    const tienda1Google = await google1.json();
    const google2 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_2}.txt`);
    const tienda2Google = await google2.json();
    const google3 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_3}.txt`);
    const tienda3Google = await google3.json();
    const google4 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_4}.txt`);
    const tienda4Google = await google4.json();
    const google5 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_5}.txt`);
    const tienda5Google = await google5.json();
    const google6 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_6}.txt`);
    const tienda6Google = await google6.json();
    const google7 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_7}.txt`);
    const tienda7Google = await google7.json();
    const google8 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_8}.txt`);
    const tienda8Google = await google8.json();
    const google9 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_9}.txt`);
    const tienda9Google = await google9.json();
    const google10 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_10}.txt`);
    const tienda10Google = await google10.json();
    const google11 = await fetch(`https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_11}.txt`);
    const tienda11Google = await google11.json();
    return {
        props: {
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
            tienda11Google
        },
        revalidate: 1
    };
}


/***/ }),

/***/ 5245:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForwardIosSharp");

/***/ }),

/***/ 6741:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CheckCircle");

/***/ }),

/***/ 2906:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Lock");

/***/ }),

/***/ 9409:
/***/ ((module) => {

module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,2636,5675,29,1664,6921,3051], () => (__webpack_exec__(7797)));
module.exports = __webpack_exports__;

})();