# Seguranca do Portfolio

Este projeto e um site estatico publicado pelo GitHub Pages. Tudo que chega ao navegador deve ser tratado como publico: HTML, CSS, JavaScript, rotas, IDs de arquivos do Google Drive e links externos.

## Google Drive

- Use apenas arquivos que podem ser publicos.
- Nao use links do Drive para documentos privados, dados sensiveis, trabalhos ainda embargados, documentos internos da universidade ou arquivos que dependam de sigilo.
- IDs de arquivos do Drive nao sao segredos quando aparecem no site. Se uma imagem ou video e carregado pelo frontend, esse ID pode ser visto no HTML ou nas requisicoes do navegador.
- Evite depender de conta academica para midia permanente. Se a instituicao alterar permissoes ou encerrar o acesso, imagens e videos podem quebrar.
- Para arquivos estaveis e publicos, prefira mover a midia para `public/images/`, para uma conta/projeto proprio ou para um CDN controlado por voce.
- Para conteudo privado, use outro desenho: backend com autenticacao, URLs assinadas temporarias ou um repositorio/CDN com controle de acesso. GitHub Pages sozinho nao criptografa nem protege esses arquivos.

## Padroes Aplicados

- Todas as midias externas devem usar HTTPS.
- Imagens externas sao limitadas a Google Drive ou Googleusercontent pelos helpers em `src/lib/media.ts`.
- Embeds de YouTube sao normalizados para `youtube-nocookie.com`.
- Links externos com `target="_blank"` devem usar `rel="noopener noreferrer"` e `referrerpolicy="no-referrer"`.
- O layout aplica Content Security Policy por meta tag para limitar imagens, frames, scripts, estilos e conexoes.

## Checklist Antes de Publicar

- Rode `npm run build`.
- Confira as rotas geradas em `dist/`.
- Verifique se nenhuma rota em desenvolvimento foi adicionada em `src/pages/`.
- Verifique se novos links externos usam HTTPS.
- Confirme no Google Drive que os arquivos usados pelo site podem ser compartilhados publicamente.
