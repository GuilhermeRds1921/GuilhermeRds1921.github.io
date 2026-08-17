# Guilherme Rodrigues Portfolio

Portfolio pessoal em Astro + Starlight para GitHub Pages.

## Estrutura

- `/` — homepage com sidebar fixa, hero e seções principais.
- `/projects/` — páginas ricas de projetos, com texto, fotos, vídeos e aprendizados.
- `/stories/` — textos longos e narrativos.
- `/gallery/` — área para muitas imagens e álbuns.
- `/videos/` — área para vídeos explicativos e demonstrações.
- `/biblioteca/` — biblioteca técnica em Starlight/MDX.
- `/resume/` — trajetória em linha do tempo.
- `/certifications/` — certificados e cursos.
- `/contact/` — links de contato.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publicar

```bash
git add .
git commit -m "Update portfolio structure"
git push
```

O GitHub Actions está configurado para Node 22 e publicação via GitHub Pages.
