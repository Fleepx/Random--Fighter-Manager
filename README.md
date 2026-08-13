# Random Fighter Manager

Pagina del software de gestion para gimnasios y academias: alumnos,
asistencia, pagos y torneos en un solo panel.

**En vivo:** https://fleepx.github.io/Random--Fighter-Manager/

## Correr en local

```
npm install
npm run dev      # http://localhost:5180
npm run build
npm run preview
```

Node 20. Hay un `.devcontainer`, asi que en Codespaces arranca solo: crea
el espacio desde la rama y el puerto se abre en una vista previa, tambien
desde el celular.

## Ramas

- `main` — lo que esta publicado. Cada push despliega a GitHub Pages.
- `dev` — donde se trabaja. No despliega nada.

Para pasar a produccion, pull request de `dev` a `main`.

## Estructura

```
src/
  components/    un .jsx y su .css al lado, sin Tailwind
  hooks/         useReveal, usePunteroFino, useSeccionActiva
  data/site.js   textos, precios y enlaces; nada de eso va en los componentes
  styles/        global.css con todos los tokens
public/
  terminos/      documentos legales, HTML estatico
  privacidad/
```

## Antes de tocar nada

Lee `CLAUDE.md`. Estan ahi las reglas del proyecto y los errores que ya se
cometieron una vez, con el motivo de cada una.
