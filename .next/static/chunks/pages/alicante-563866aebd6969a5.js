(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9806],{6634:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alicante",function(){return n(9088)}])},49:function(e,o,n){"use strict";n.d(o,{Z:function(){return h}});var a=n(5893),i=n(7294),d=n(9618),l=n.n(d),t=n(8145),r=n.n(t),c=n(6261),s=n(1123),u=n(1108);n(1664);let _=e=>{let{markers:o,ciudad:n}=e,d=o.arrayMarker,[l,t]=(0,i.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),_=(0,i.useRef)(),p=()=>{var e;v(!1),null===(e=_.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[m,v]=(0,i.useState)(null),x=()=>{v(!0)},[f,h]=(0,i.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[j,b]=(0,i.useState)(""),g=e=>{var o;h({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=_.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),b(e.id)},T=o.arrayMarker[o.arrayMarker.length-1];return(0,a.jsxs)("section",{className:r().contenedorMapa,children:[(0,a.jsxs)("div",{className:r().contenedorbloqueIzq,children:[(0,a.jsx)("div",{className:r().bloqueIzq,children:(0,a.jsxs)("p",{children:["Tiendas: ",(0,a.jsx)("span",{children:null==T?void 0:T.id})]})}),(0,a.jsx)("div",{className:r().contenedorTiendas,children:d.map(e=>(0,a.jsx)(c.rU,{onClick:()=>{x(),g(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,a.jsxs)("div",{onClick:()=>{x(),g(e)},className:j===e.id&&m?"".concat(r().contenedorInfoTiendaMapa," ").concat(r().contenedorInfoTiendaMapaActivo):" ".concat(r().contenedorInfoTiendaMapa),children:[(0,a.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,a.jsxs)("div",{className:r().tienda,children:[(0,a.jsx)("p",{children:null==e?void 0:e.direccion}),(0,a.jsx)("p",{children:null==e?void 0:e.telefono})]})]})},e.id))})]}),(0,a.jsx)("div",{className:r().bloqueDer,id:"contenedorMapa2",children:(0,a.jsxs)(u.ZP,{onStyleLoad:!0,ref:_,...l,onMove:e=>t(e.viewState),className:r().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,a.jsx)(u.ot,{})," ",(0,a.jsx)(u.$j,{})," ",(0,a.jsx)(u.Pv,{}),(0,a.jsx)("button",{className:r().reset_map,onClick:()=>{p()},children:"Reset Map"}),d.map(e=>(0,a.jsx)(u.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{g(e),x()},children:m?(0,a.jsx)(u.GI,{style:{top:-25,maxWidth:255},longitude:null==f?void 0:f.longitude,className:"popup",latitude:null==f?void 0:f.latitude,closeOnClick:!1,anchor:null,onClose:()=>v(!1),children:(0,a.jsxs)("div",{className:r().contenedor_popuop,children:[(0,a.jsx)("p",{className:r().nombre_ciudad_popup,children:null==f?void 0:f.nombreTienda}),(0,a.jsx)("a",{title:"Direcci\xf3n",href:null==f?void 0:f.comoLlegar,rel:"noreferrer",target:"_blank",className:r().direccion_popup,children:null==f?void 0:f.direccion}),(0,a.jsx)("br",{}),(0,a.jsxs)("a",{href:"tel:".concat(null==f?void 0:f.telefono),className:r().telefono_popup,title:"Tel\xe9fono",children:[(0,a.jsxs)("span",{children:[(0,a.jsx)(s.Z,{})," "]}),null==f?void 0:f.telefono]}),(0,a.jsx)("a",{title:"C\xf3mo llegar",href:null==f?void 0:f.comoLlegar,rel:"noreferrer",className:r().boton_popUp,children:"C\xf3mo llegar"}),(0,a.jsx)("a",{title:"Llamar",href:"tel:".concat(null==f?void 0:f.telefono),rel:"noreferrer",className:r().boton_popUp,children:"Llamar"}),(0,a.jsx)("a",{title:"C\xf3mo llegar",href:"".concat(null==f?void 0:f.url),rel:"noreferrer",className:r().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})},p=e=>{let{markers:o}=e;return(0,a.jsx)("div",{className:l().contenedorListadoTiendas,children:(0,a.jsx)(_,{markers:o})})};var m=n(2281),v=n.n(m),x=n(9647);let f=e=>{let{ciudad:o,markers:n,telefono:i}=e;return(0,a.jsxs)("div",{className:v().contenedorSeccionDos,children:[(0,a.jsx)(x.Z,{ciudad:o}),(0,a.jsx)(p,{ciudad:o,markers:n,telefono:i})]})};var h=f},3381:function(e,o,n){"use strict";var a=n(5893);n(7294);var i=n(1806),d=n.n(i);let l=e=>{let{nombreCiudad:o,telefono:n}=e;return(0,a.jsx)("seccion",{className:d().contenedor,children:(0,a.jsxs)("h1",{className:d().titulo,children:["Tiendas quickgold en ",o]})})};o.Z=l},9088:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return p}});var a=n(5893),i=n(9008),d=n.n(i),l=n(3867),t=n(49),r=n(2013),c=n(3381);n(7294);var s=n(4298),u=n.n(s);let _=e=>{var o,n,i,s,_,p,m;let{ciudad:v,general:x,markers:f,landing:h}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d(),{children:[(0,a.jsxs)("title",{children:["El mejor precio del oro en ",null==v?void 0:null===(o=v.acf)||void 0===o?void 0:o.ciudad_landing," lo tienes aqu\xed | Quickgold"]}),(0,a.jsx)("meta",{name:"description",content:"Conoce el precio por gramo de oro de ".concat(null==v?void 0:null===(n=v.acf)||void 0===n?void 0:n.ciudad_landing,". Obt\xe9n la mejor tasaci\xf3n por tus joyas de oro con el mejor servicio garantizado")}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/icon.png"}),null==v?void 0:null===(i=v.acf)||void 0===i?void 0:i.nonscript_chat]}),(0,a.jsx)(u(),{id:"livechat",property:"lazyOnload",children:null==v?void 0:null===(s=v.acf)||void 0===s?void 0:s.script_chat}),(0,a.jsxs)(l.Z,{ciudad:v,children:[(0,a.jsx)(c.Z,{nombreCiudad:null==v?void 0:null===(_=v.acf)||void 0===_?void 0:_.ciudad_landing}),(0,a.jsx)(t.Z,{ciudad:v,comprar:null==v?void 0:null===(p=v.acf)||void 0===p?void 0:p.vende_divisa,markers:f,telefono:null==v?void 0:null===(m=v.acf)||void 0===m?void 0:m.telefono}),(0,a.jsx)(r.Z,{landing:h})]})]})};var p=!0;o.default=_},9618:function(e){e.exports={contenedorListadoTiendas:"listadoTienda_contenedorListadoTiendas__FmudN",img_stars:"listadoTienda_img_stars__Xf4gd",imgValoracion:"listadoTienda_imgValoracion__9pkop",bloqueResenas:"listadoTienda_bloqueResenas__Fx7ea",contenedorValoraciones:"listadoTienda_contenedorValoraciones__gcW1M",valoracionResenas:"listadoTienda_valoracionResenas__m05eL",contenedorResenas:"listadoTienda_contenedorResenas__aVkZe",contenedorLogoGoogle:"listadoTienda_contenedorLogoGoogle__oACQW",numero_reviews:"listadoTienda_numero_reviews__exWNo",resenasGoogle:"listadoTienda_resenasGoogle__e_2MU",verResenas:"listadoTienda_verResenas__TJ0Aa",direccion:"listadoTienda_direccion__1axn0",telefono:"listadoTienda_telefono__HK_ak",mapa:"listadoTienda_mapa__z4xSE",nombreTienda:"listadoTienda_nombreTienda__dH7_T"}},8145:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__DHLB8",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__Rp7gq",bloqueDer:"mapaCiudades_bloqueDer__mH701",bloqueIzq:"mapaCiudades_bloqueIzq__DKR5L",linea:"mapaCiudades_linea__O4vPS",reset_map:"mapaCiudades_reset_map__lr2TZ",contenedorTiendas:"mapaCiudades_contenedorTiendas__hZuvd",tienda:"mapaCiudades_tienda__fBGAS","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button___PgA_",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__YLhzk",direccion_popup:"mapaCiudades_direccion_popup__IS9wP",telefono_popup:"mapaCiudades_telefono_popup__eqt8Z",boton_como_llegar:"mapaCiudades_boton_como_llegar__8it0V",boton_popUp:"mapaCiudades_boton_popUp__yw3fW",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__ibqhv",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"}},2281:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__hOLQ4"}},1806:function(e){e.exports={contenedor:"seccionUno_contenedor__frWSH",titulo:"seccionUno_titulo__U9UoA",botonLamar:"seccionUno_botonLamar__48xxc"}},4298:function(e,o,n){e.exports=n(5442)}},function(e){e.O(0,[959,969,5911,6611,9774,2888,179],function(){return e(e.s=6634)}),_N_E=e.O()}]);