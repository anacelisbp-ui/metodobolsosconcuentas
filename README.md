# Método Bolsos con Cuentas

Landing page de ventas de [metodomanosrentables.com](https://metodomanosrentables.com), construida con React, vinext y Vite.

## Requisitos

- Node.js 22 o superior
- npm

## Desarrollo local

```bash
npm ci
npm run dev
```

El contenido principal está en `app/page.tsx`, los estilos en `app/globals.css` y las imágenes en `public/assets/`.

## Build para Netlify

```bash
npm run build
```

El build hace dos pasos:

1. Compila la fuente vinext para conservar el flujo de desarrollo del proyecto.
2. Renderiza la landing como HTML estático, reemplaza las rutas de imagen que requieren servidor y genera `netlify-dist/`.

Netlify usa automáticamente `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `netlify-dist`
- **Node:** 22

`netlify-dist/` es generado y no debe editarse ni versionarse. Cada despliegue se reconstruye desde los archivos de `app/` y `public/`.

## Validación

```bash
npm test
npm run lint
```

Las pruebas comprueban tanto el render de la aplicación como el resultado estático para Netlify, incluido el precio, checkout, imágenes locales y ausencia de rutas de imagen dependientes del Worker.
