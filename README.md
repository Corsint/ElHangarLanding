# El Hangar — Landing

Landing de una sola página para El Hangar, distribuidora de frutos secos, especias, legumbres,
harinas, repostería y aceitunas de Mar del Plata y zona.

Sitio estático hecho con Astro, sin frameworks de UI y con diseño responsive.

## Requisitos

- Node.js 22.23.4 o superior.
- npm.

## Instalar

```bash
npm install
```

## Correr en local

```bash
npm run dev
```

Abrí la dirección que muestra la terminal (por defecto, `http://localhost:4321`).

## Build y preview

```bash
npm run build
npm run preview
```

El sitio compilado queda en `dist/`.

## Deploy en Netlify

El proyecto incluye `netlify.toml` con los valores necesarios:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: `24`

Podés conectar el repositorio desde Netlify o desplegar con la CLI:

```bash
npx netlify-cli deploy --prod
```

## Dónde editar

- WhatsApp, catálogo, fecha de precios, horarios y redes: `src/data/config.ts`.
- Logo provisorio: reemplazar `public/logo.svg` manteniendo el nombre y, si cambia la proporción,
  ajustar el tamaño en `src/components/Header.astro`.
- Textos genéricos: buscar `EDITAR` en el proyecto.

## EDITAR pendientes

| Archivo | Dato que falta reemplazar |
| --- | --- |
| `src/components/Header.astro` | Logo real de El Hangar (`public/logo.svg`). |
| `src/components/QuienesSomos.astro` | Historia real de la marca. |
| `src/components/QuienesSomos.astro` | Origen real de los productos y proveedores. |
| `src/components/QuienesSomos.astro` | Diferencial real de El Hangar. |
| `src/components/ComoComprar.astro` | Compra mínima real. |
| `src/components/ComoComprar.astro` | Compra máxima o cupos reales por producto. |
| `src/components/ComoComprar.astro` | Zona de entrega, costo de envío y condiciones de retiro reales. |
| `src/components/ComoComprar.astro` | Medios de pago reales. |
| `src/data/config.ts` | Horarios de atención reales. |
| `src/data/config.ts` | URL del perfil y usuario visible de Instagram. Mientras la URL esté vacía se muestra “perfil a confirmar”. |
| `src/data/config.ts` | URL de la página y nombre visible de Facebook. Mientras la URL esté vacía se muestra “perfil a confirmar”. |
