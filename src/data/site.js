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

/* Precios reales del proyecto, en pesos chilenos y CON IVA INCLUIDO.
   Van como numeros enteros a proposito: el formato y el descuento se
   calculan (ver mas abajo). Escritos a mano se desincronizan al primer
   cambio de tarifa, y el descuento ya no es parejo entre planes. */
export const PERIODOS = [
  { clave: "mensual",   etiqueta: "Mensual",   meses: 1 },
  { clave: "semestral", etiqueta: "Semestral", meses: 6 },
  { clave: "anual",     etiqueta: "Anual",     meses: 12 },
];

const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export const formatearPrecio = (monto) =>
  monto == null ? null : clp.format(monto);

/**
 * Cuanto se ahorra frente a pagar mes a mes, redondeado al entero.
 * Devuelve null cuando no hay con que comparar: sin precio mensual no hay
 * ahorro que calcular, y en el periodo mensual no hay nada que comparar.
 */
export function calcularAhorro(precios, clave) {
  const meses = PERIODOS.find((p) => p.clave === clave)?.meses ?? 1;
  if (meses === 1 || precios.mensual == null || precios[clave] == null) return null;
  const ahorro = 1 - precios[clave] / (precios.mensual * meses);
  return ahorro > 0.005 ? Math.round(ahorro * 100) : null;
}

export const PLANES = [
  {
    id: "plus",
    nombre: "Plus",
    descripcion:
      "Para academias que están comenzando y quieren ordenar su gestión.",
    precios: { mensual: 47990, semestral: 244990, anual: 459990 },
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
    id: "blue",
    nombre: "Blue",
    descripcion:
      "Para academias en crecimiento, con más sedes e instructores.",
    precios: { mensual: 83990, semestral: 424990, anual: 799990 },
    incluye: [
      "Todo lo del plan Plus",
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
    id: "pro",
    nombre: "Pro",
    descripcion: "Para academias consolidadas que necesitan todo el control.",
    precios: { mensual: 147990, semestral: 709990, anual: 1199990 },
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
  },
];

/* Suscripcion aparte por cada sede extra, sobre el plan contratado.
   El nivel Pro no tiene tarifa mensual: solo semestral o anual. */
export const SEDES_ADICIONALES = [
  { id: "plus", nombre: "Plus", precios: { mensual: 40900, semestral: 214990, anual: 394990 } },
  { id: "blue", nombre: "Blue", precios: { mensual: 72990, semestral: 369990, anual: 679990 } },
  { id: "pro",  nombre: "Pro",  precios: { mensual: null,  semestral: 609990, anual: 959990 } },
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
