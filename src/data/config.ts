const whatsappNumero = "5492233044037";
const whatsappMensaje = "Hola! Quiero hacer una consulta sobre El Hangar";

export const site = {
  marca: "El Hangar",
  lema: "Distribuimos calidad",
  catalogo: {
    url: "https://el-hangar.netlify.app/precios",
    categorias: 27,
    productos: 339,
  },
  preciosActualizados: "30/10/26",
  whatsapp: {
    numero: whatsappNumero,
    numeroVisible: "223 304 4037",
    mensaje: whatsappMensaje,
    url: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensaje)}`,
  },
  contacto: {
    zona: "Mar del Plata y zona",
    // EDITAR: reemplazar por los horarios de atención reales de El Hangar.
    horarios: "Lunes a viernes, de 9 a 17 h · Sábados, de 9 a 13 h",
    // EDITAR: cargar la URL real del perfil de Instagram y el usuario visible.
    instagram: { url: "", usuario: "" },
    // EDITAR: cargar la URL real de la página de Facebook y el nombre visible.
    facebook: { url: "", nombre: "" },
  },
} as const;
