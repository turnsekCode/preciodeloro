(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1033],{7209:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/madrid",function(){return n(7797)}])},49:function(e,o,n){"use strict";n.d(o,{Z:function(){return h}});var a=n(5893),i=n(7294),d=n(9618),l=n.n(d),r=n(8145),t=n.n(r),s=n(6261),c=n(1123),u=n(1108);n(1664);let _=e=>{let{markers:o,ciudad:n}=e,d=o.arrayMarker,[l,r]=(0,i.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),_=(0,i.useRef)(),p=()=>{var e;v(!1),null===(e=_.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[m,v]=(0,i.useState)(null),x=()=>{v(!0)},[f,h]=(0,i.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[j,b]=(0,i.useState)(""),g=e=>{var o;h({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=_.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),b(e.id)},T=o.arrayMarker[o.arrayMarker.length-1];return(0,a.jsxs)("section",{className:t().contenedorMapa,children:[(0,a.jsxs)("div",{className:t().contenedorbloqueIzq,children:[(0,a.jsx)("div",{className:t().bloqueIzq,children:(0,a.jsxs)("p",{children:["Tiendas: ",(0,a.jsx)("span",{children:null==T?void 0:T.id})]})}),(0,a.jsx)("div",{className:t().contenedorTiendas,children:d.map(e=>(0,a.jsx)(s.rU,{onClick:()=>{x(),g(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,a.jsxs)("div",{onClick:()=>{x(),g(e)},className:j===e.id&&m?"".concat(t().contenedorInfoTiendaMapa," ").concat(t().contenedorInfoTiendaMapaActivo):" ".concat(t().contenedorInfoTiendaMapa),children:[(0,a.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,a.jsxs)("div",{className:t().tienda,children:[(0,a.jsx)("p",{children:null==e?void 0:e.direccion}),(0,a.jsx)("p",{children:null==e?void 0:e.telefono})]})]})},e.id))})]}),(0,a.jsx)("div",{className:t().bloqueDer,id:"contenedorMapa2",children:(0,a.jsxs)(u.ZP,{onStyleLoad:!0,ref:_,...l,onMove:e=>r(e.viewState),className:t().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,a.jsx)(u.ot,{})," ",(0,a.jsx)(u.$j,{})," ",(0,a.jsx)(u.Pv,{}),(0,a.jsx)("button",{className:t().reset_map,onClick:()=>{p()},children:"Reset Map"}),d.map(e=>(0,a.jsx)(u.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{g(e),x()},children:m?(0,a.jsx)(u.GI,{style:{top:-25,maxWidth:255},longitude:null==f?void 0:f.longitude,className:"popup",latitude:null==f?void 0:f.latitude,closeOnClick:!1,anchor:null,onClose:()=>v(!1),children:(0,a.jsxs)("div",{className:t().contenedor_popuop,children:[(0,a.jsx)("p",{className:t().nombre_ciudad_popup,children:null==f?void 0:f.nombreTienda}),(0,a.jsx)("a",{title:"Direcci\xf3n",href:null==f?void 0:f.comoLlegar,rel:"noreferrer",target:"_blank",className:t().direccion_popup,children:null==f?void 0:f.direccion}),(0,a.jsx)("br",{}),(0,a.jsxs)("a",{href:"tel:".concat(null==f?void 0:f.telefono),className:t().telefono_popup,title:"Tel\xe9fono",children:[(0,a.jsxs)("span",{children:[(0,a.jsx)(c.Z,{})," "]}),null==f?void 0:f.telefono]}),(0,a.jsx)("a",{title:"C\xf3mo llegar",href:null==f?void 0:f.comoLlegar,rel:"noreferrer",className:t().boton_popUp,children:"C\xf3mo llegar"}),(0,a.jsx)("a",{title:"Llamar",href:"tel:".concat(null==f?void 0:f.telefono),rel:"noreferrer",className:t().boton_popUp,children:"Llamar"}),(0,a.jsx)("a",{title:"C\xf3mo llegar",href:"".concat(null==f?void 0:f.url),rel:"noreferrer",className:t().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})},p=e=>{let{markers:o}=e;return(0,a.jsx)("div",{className:l().contenedorListadoTiendas,children:(0,a.jsx)(_,{markers:o})})};var m=n(2281),v=n.n(m),x=n(9647);let f=e=>{let{ciudad:o,markers:n,telefono:i}=e;return(0,a.jsxs)("div",{className:v().contenedorSeccionDos,children:[(0,a.jsx)(x.Z,{ciudad:o}),(0,a.jsx)(p,{ciudad:o,markers:n,telefono:i})]})};var h=f},3381:function(e,o,n){"use strict";var a=n(5893);n(7294);var i=n(1806),d=n.n(i);let l=e=>{let{nombreCiudad:o,telefono:n}=e;return(0,a.jsx)("seccion",{className:d().contenedor,children:(0,a.jsxs)("h1",{className:d().titulo,children:["Tiendas quickgold en ",o]})})};o.Z=l},7797:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return u}});var a=n(5893),i=n(9008),d=n.n(i),l=n(3867),r=n(49),t=n(2013),s=n(3381);let c=e=>{var o,n,i,c,u;let{ciudad:_,general:p,markers:m,landing:v}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d(),{children:[(0,a.jsxs)("title",{children:["El mejor precio del oro en ",null==_?void 0:null===(o=_.acf)||void 0===o?void 0:o.ciudad_landing," lo tienes aqu\xed | Quickgold"]}),(0,a.jsx)("meta",{name:"description",content:"Conoce el precio por gramo de oro de ".concat(null==_?void 0:null===(n=_.acf)||void 0===n?void 0:n.ciudad_landing,". Obt\xe9n la mejor tasaci\xf3n por tus joyas de oro con el mejor servicio garantizado")}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/icon.png"})]}),(0,a.jsxs)(l.Z,{ciudad:_,children:[(0,a.jsx)(s.Z,{nombreCiudad:null==_?void 0:null===(i=_.acf)||void 0===i?void 0:i.ciudad_landing}),(0,a.jsx)(r.Z,{ciudad:_,comprar:null==_?void 0:null===(c=_.acf)||void 0===c?void 0:c.vende_divisa,markers:m,telefono:null==_?void 0:null===(u=_.acf)||void 0===u?void 0:u.telefono})," ",(0,a.jsx)(t.Z,{landing:v})]})]})};var u=!0;o.default=c},9618:function(e){e.exports={contenedorListadoTiendas:"listadoTienda_contenedorListadoTiendas__FmudN",img_stars:"listadoTienda_img_stars__Xf4gd",imgValoracion:"listadoTienda_imgValoracion__9pkop",bloqueResenas:"listadoTienda_bloqueResenas__Fx7ea",contenedorValoraciones:"listadoTienda_contenedorValoraciones__gcW1M",valoracionResenas:"listadoTienda_valoracionResenas__m05eL",contenedorResenas:"listadoTienda_contenedorResenas__aVkZe",contenedorLogoGoogle:"listadoTienda_contenedorLogoGoogle__oACQW",numero_reviews:"listadoTienda_numero_reviews__exWNo",resenasGoogle:"listadoTienda_resenasGoogle__e_2MU",verResenas:"listadoTienda_verResenas__TJ0Aa",direccion:"listadoTienda_direccion__1axn0",telefono:"listadoTienda_telefono__HK_ak",mapa:"listadoTienda_mapa__z4xSE",nombreTienda:"listadoTienda_nombreTienda__dH7_T"}},8145:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__DHLB8",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__Rp7gq",bloqueDer:"mapaCiudades_bloqueDer__mH701",bloqueIzq:"mapaCiudades_bloqueIzq__DKR5L",linea:"mapaCiudades_linea__O4vPS",reset_map:"mapaCiudades_reset_map__lr2TZ",contenedorTiendas:"mapaCiudades_contenedorTiendas__hZuvd",tienda:"mapaCiudades_tienda__fBGAS","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button___PgA_",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__YLhzk",direccion_popup:"mapaCiudades_direccion_popup__IS9wP",telefono_popup:"mapaCiudades_telefono_popup__eqt8Z",boton_como_llegar:"mapaCiudades_boton_como_llegar__8it0V",boton_popUp:"mapaCiudades_boton_popUp__yw3fW",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__ibqhv",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"}},2281:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__hOLQ4"}},1806:function(e){e.exports={contenedor:"seccionUno_contenedor__frWSH",titulo:"seccionUno_titulo__U9UoA",botonLamar:"seccionUno_botonLamar__48xxc"}}},function(e){e.O(0,[959,969,5911,6611,9774,2888,179],function(){return e(e.s=7209)}),_N_E=e.O()}]);