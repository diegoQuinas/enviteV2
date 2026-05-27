# enviteV2

Frontend en React + TypeScript para **Penca Solidaria Envite Fútbol** — pronóstico deportivo con fines solidarios.

Implementación alternativa al frontend en Rust/Dioxus ([`pypenca-front`](https://github.com/diegoQuinas/pypenca-front)). Comparte el mismo backend.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- ESLint 9

## Pantallas

- `Login` — autenticación de usuario
- `Dashboard` — pantalla principal post-login

## Requisitos

- Node 18+
- Yarn (hay `yarn.lock`) o npm

## Desarrollo

```bash
yarn install
yarn dev          # dev server con HMR
yarn build        # build de producción
yarn lint         # ESLint
yarn preview      # servir el build
```

## Estructura

```
src/
├── main.tsx       # Entrypoint
├── App.tsx        # Componente raíz
├── Dashboard.tsx  # Pantalla principal
├── Login.tsx      # Login
└── index.css      # Estilos globales (Tailwind)
```
