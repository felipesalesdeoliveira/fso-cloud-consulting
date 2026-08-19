# FSO Cloud Consulting

Site institucional da FSO Cloud Consulting, desenvolvido com Next.js, Tailwind CSS e export estatico para GitHub Pages.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validacao

```bash
npm run lint
npm run build
```

## Build para GitHub Pages

```bash
npm run build:pages
```

O output estatico e gerado na pasta `out/`.

## Publicacao

O workflow `.github/workflows/deploy.yml` publica automaticamente no GitHub Pages quando houver push na branch `main`.
