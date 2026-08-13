# Random Fighter Manager — landing

Software de gestión para gimnasios y academias. Esta es la página de los
dueños; la de alumnos es Random Fighter, un repositorio aparte con la misma
estructura y paleta roja.

React 18 + Vite 5. **Sin Tailwind**: cada componente tiene su `.css` al
lado y todo sale de los tokens de `src/styles/global.css`.

```
npm install
npm run dev      # 5180, con --strictPort
npm run build
```

## Idioma

Nombres de componentes, variables y comentarios en **español**. Mensajes de
commit en **inglés**. La interfaz es español de Chile.

## Paleta

Solo desde `global.css`. Nunca un color escrito a mano en un componente.

```
--azul #1E90FF   --azul-oscuro #0268C2   --azul-hondo #0A2540
--bg   #0B0E12   --bg-hondo    #070A0D
--superficie #131922   --borde #232D3A
--texto #E9EEF4   --texto-suave #97A4B4
--ease-out cubic-bezier(0.32, 0.72, 0, 1)
```

## Precios

En `src/data/site.js`, como **enteros y con IVA incluido**. El formato y el
descuento se calculan al renderizar (`formatearPrecio`, `calcularAhorro`).

Escritos a mano se desincronizan a la primera vez que cambia una tarifa, y
**el descuento no es parejo entre planes**: el anual descuenta 20% en Plus y
32% en Pro. Por eso cada tarjeta calcula el suyo y el selector de período no
muestra ninguna cifra.

Los términos y condiciones dicen que los precios incluyen IVA. Si eso
cambia, hay que cambiar las dos cosas.

## Reglas que costaron caro

Cada una viene de un error real. Romperlas los trae de vuelta.

**Nunca `window.addEventListener('scroll')`.** Todo lo que dependa de dónde
está el lector va con `IntersectionObserver` — ver `useReveal` y
`useSeccionActiva`.

**Estado imperativo en el DOM va en `data-*`, no en `classList`.** React
reescribe `className` en cada render y se lleva puesta la clase agregada a
mano.

**Para animar un colapso, grilla de `1fr` a `0fr`.** Nunca un `max-width`
estimado: el del logotipo quedó a 1.7px del ancho real y cortaba la última
letra.

**Respetar `prefers-reduced-motion` siempre.** `usePunteroFino` para lo que
sigue al cursor; además apaga los efectos donde no hay mouse.

**Los componentes de React Bits se bajan del registro a mano**, con
`curl https://reactbits.dev/r/NOMBRE-JS-CSS.json`. El CLI de shadcn falla:
el registro etiqueta los `.css` como `registry:component` y el CLI intenta
parsearlos como JavaScript.

**Los fondos con shader hay que recalibrarlos según la forma de la caja.**
Sus parámetros de alcance se normalizan contra *un solo eje*, casi siempre
el corto. La banda del lema mide 9.2:1 y ahí los valores de la
documentación fallan: la viñeta del Scanner apagaba todo menos el centro y
el `fadeFar` del túnel borraba las dos puntas.

**Ojo con las ganancias internas de los shaders al elegir color.** El pulso
del túnel se multiplica por 3 antes de pintarse, así que cualquier azul de
la paleta satura verde y azul juntos y sale cian. Solo el `--azul-hondo`
sobrevive leyéndose azul.

**Un contenedor con `overflow-x: auto` necesita `overflow-y` explícito.** Si
el otro eje queda en `visible`, el navegador lo convierte a `auto` y el
contenedor se traga los gestos verticales. Pasó con el carrusel de planes:
arrastrar desde arriba movía la fila y no la página.

**Las capas de fondo fijas van con `height: 100lvh`, no con `inset: 0`.**
Atadas al viewport se redimensionan cuando el navegador del celular esconde
su barra, y el fondo salta al soltar el dedo.

## Despliegue

GitHub Actions publica en Pages con cada push a `main`. `dev` no despliega.

`base: './'` en `vite.config.js`: Pages sirve los proyectos bajo `/<repo>/`
y con rutas absolutas la página carga sin ningún script. Los enlaces
absolutos dentro de componentes tienen que pasar por
`import.meta.env.BASE_URL`.

En *Settings → Pages*, **Source tiene que decir "GitHub Actions"**. El
`enablement` del workflow no alcanza para cambiarlo si ya estaba fijado a
una rama, y mientras tanto ganan los despliegues de rama, que publican el
repositorio crudo. Este repositorio ya estuvo roto por eso dos veces.

## Documentos legales

`public/terminos/` y `public/privacidad/` son HTML estático, copiados de los
repositorios `Termns-Conditions-RR` y `Politicas-privacidad--RFM`.

**Están duplicados y se sincronizan a mano.** Nada lo verifica. Las copias
de acá llevan además el enlace de vuelta al sitio y el favicon, que en los
repositorios de origen no van.

## Andamiaje temporal

`BandaLema` recibe una prop `efecto` y `SelectorFondo` es un botón flotante
con trece fondos candidatos para la banda del lema. Es para comparar
mientras se decide.

Sale cuando se elija: el selector entero, la prop, los componentes
descartados y las dependencias que dejen de usarse. **Silk y Beams son los
únicos que necesitan `@react-three/fiber` y `@react-three/drei`**, unos
126 KB gzip; si el elegido es otro, esas dos dependencias se van.

Ojo con las versiones: el registro pide fiber 9 y drei 10, que **exigen
React 19**. Acá van fiber 8 y drei 9, las últimas compatibles con React 18.
