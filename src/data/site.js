/**
 * Datos verificables del producto. Todo lo que la landing muestra sale de
 * aca, para que no haya cifras ni promesas escritas a mano en los componentes.
 *
 * Regla: si un dato no es verificable, no entra. A la fecha no hay
 * gimnasios clientes ni testimonios, asi que la pagina no lleva seccion
 * de prueba social.
 */

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mpdm.refereefighters.referee_fighters_dev";

export const FIGHTER_URL = "https://randomfighter.cl";

export const CONTACTO = {
  telefono: "+56 9 8187 2697",
  telefonoHref: "tel:+56981872697",
  soporte: "soporte@mpdm.cl",
  contacto: "contacto@mpdm.cl",
};

export const NAV_LINKS = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#planes", label: "Planes" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

/* El primer mes sin costo es la unica reduccion de riesgo que tenemos.
   Sin clientes que mostrar todavia, es la palanca principal de la pagina. */
export const PRIMER_MES_GRATIS = "Primer mes gratis";

export const BENEFICIOS = [
  {
    titulo: "Sabes quién está por vencer antes de que venza",
    detalle:
      "Alumnos activos, ingresos del mes y planes por caducar en la primera pantalla. Dejas de enterarte cuando ya pasó.",
  },
  {
    titulo: "Cobras sin tener que pedirlo dos veces",
    detalle:
      "El alumno paga su mensualidad desde su propia app con Mercado Pago y el pago queda registrado con fecha y monto.",
  },
  {
    titulo: "Pasas asistencia en dos toques",
    detalle:
      "Marcas quién asistió desde el celular, en la clase, sin planilla ni cuaderno que después hay que pasar a limpio.",
  },
  {
    titulo: "Organizas torneos con un código",
    detalle:
      "Creas el torneo y compartes un código para que se inscriban. Las solicitudes te llegan al panel.",
  },
  {
    titulo: "Tus alumnos se matriculan solos",
    detalle:
      "Te encuentran en Random Fighter, ven tus planes y se inscriben. Tú no cargas a nadie a mano.",
  },
];

export const PASOS = [
  {
    numero: "01",
    titulo: "Crea tu academia y carga tus planes",
    detalle:
      "Defines tus mensualidades, tus horarios y tus instructores. Es la única carga inicial.",
  },
  {
    numero: "02",
    titulo: "Tus alumnos te encuentran y se matriculan",
    detalle:
      "Aparecen buscando academias en Random Fighter, ven tus planes y se inscriben desde su celular.",
  },
  {
    numero: "03",
    titulo: "Cobras y administras desde el panel",
    detalle:
      "Pagos, asistencia, clases y torneos en un solo lugar, desde el celular o el computador.",
  },
];

/* Precios reales del proyecto. En pesos chilenos, sin IVA incluido. */
export const PERIODOS = [
  { clave: "mensual",   etiqueta: "Mensual",   descuento: null },
  { clave: "semestral", etiqueta: "Semestral", descuento: "15%" },
  { clave: "anual",     etiqueta: "Anual",     descuento: "20%" },
];

export const PLANES = [
  {
    id: "silver",
    nombre: "Silver",
    descripcion:
      "Para academias que están comenzando y quieren ordenar su gestión.",
    precios: {
      mensual:   { monto: "$39.900", periodo: "+ IVA al mes" },
      semestral: { monto: "$203.490", periodo: "+ IVA al semestre" },
      anual:     { monto: "$382.900", periodo: "+ IVA al año" },
    },
    incluye: [
      "Hasta 120 alumnos",
      "Hasta 2 instructores",
      "32 clases al mes",
      "Cobros con Mercado Pago",
      "Soporte en hasta 72 horas hábiles",
    ],
    cta: "Comenzar gratis",
    destacado: false,
  },
  {
    id: "gold",
    nombre: "Gold",
    descripcion:
      "Para academias en crecimiento, con más sedes e instructores.",
    precios: {
      mensual:   { monto: "$69.900", periodo: "+ IVA al mes" },
      semestral: { monto: "$356.900", periodo: "+ IVA al semestre" },
      anual:     { monto: "$671.900", periodo: "+ IVA al año" },
    },
    incluye: [
      "Todo lo del plan Silver",
      "Hasta 250 alumnos",
      "Hasta 5 instructores",
      "Hasta 240 clases al mes",
      "Soporte en hasta 48 horas hábiles",
    ],
    cta: "Comenzar gratis",
    destacado: true,
    insignia: "Más elegido",
  },
  {
    id: "platinum",
    nombre: "Platinum",
    descripcion: "Para academias consolidadas que necesitan todo el control.",
    precios: {
      mensual:   { monto: null, periodo: "Solo semestral o anual" },
      semestral: { monto: "$1.121.949", periodo: "+ IVA al semestre" },
      anual:     { monto: "$2.111.900", periodo: "+ IVA al año" },
    },
    incluye: [
      "Hasta 1.000 alumnos",
      "Hasta 10 instructores",
      "Clases ilimitadas",
      "Reportes y gráficos de asistencia",
      "Plataforma adaptada a tu operación",
      "Soporte prioritario en hasta 36 horas hábiles",
    ],
    cta: "Hablar con ventas",
    destacado: false,
    soloLargoPlazo: true,
  },
];

export const PREGUNTAS = [
  {
    pregunta: "¿Cómo funciona el primer mes gratis?",
    respuesta:
      "Creas tu academia, cargas tus planes y usas la plataforma completa durante el primer mes sin costo. Recién después empieza a correr el plan que elijas.",
  },
  {
    pregunta: "¿Mis alumnos tienen que pagar algo?",
    respuesta:
      "No. Random Fighter es gratis para ellos. Lo único que pagan es la mensualidad de tu academia, que ahora te llega por Mercado Pago en vez de en efectivo o por transferencia.",
  },
  {
    pregunta: "¿Cómo llegan los pagos a mi cuenta?",
    respuesta:
      "A través de Mercado Pago. Conectas tu cuenta una vez y los pagos de tus alumnos entran ahí, con el detalle de quién pagó, cuándo y por qué plan.",
  },
  {
    pregunta: "¿Necesito que todos mis alumnos tengan smartphone?",
    respuesta:
      "Para que se matriculen y paguen solos, sí. Igual puedes registrar alumnos y pagos a mano desde el panel, así nadie queda fuera.",
  },
  {
    pregunta: "¿Qué pasa si supero el límite de alumnos de mi plan?",
    respuesta:
      "Cambias de plan cuando lo necesites y el cobro se ajusta desde ese momento. No se bloquea tu academia de un día para otro.",
  },
  {
    pregunta: "¿Sirve para cualquier disciplina?",
    respuesta:
      "Sí. Está pensada para deportes de contacto con clases por horario y categorías por peso, pero funciona en cualquier academia que maneje alumnos, mensualidades y asistencia.",
  },
  {
    pregunta: "¿Puedo cancelar cuando quiera?",
    respuesta:
      "Sí. No hay permanencia mínima. Si cancelas, mantienes el acceso hasta que termine el período que ya pagaste.",
  },
  {
    pregunta: "¿Qué pasa con los datos de mi academia si me voy?",
    respuesta:
      "Son tuyos. Puedes pedirnos la exportación de tus alumnos, pagos y asistencia antes de cerrar tu cuenta, escribiendo a soporte@mpdm.cl.",
  },
  {
    pregunta: "¿Está disponible en iPhone?",
    respuesta:
      "Por ahora está publicada en Google Play para Android. La versión de iOS ya fue enviada y está en revisión en la App Store.",
  },
];
