# Site da Bilros Web

Site estático de uma página (HTML + CSS + um pouco de JavaScript). Não precisa de build, servidor nem serviços pagos.

## Ficheiros
- `index.html` – conteúdo do site (textos em PT-PT)
- `styles.css` – estilos (cores da marca no topo, em `:root`)
- `script.js` – menu no telemóvel, botão "Copiar" e formulário (abre o email do visitante já preenchido)
- `fonts/` – Cormorant Garamond e Nunito Sans alojadas no próprio site (sem Google Fonts, melhor para RGPD)
- `img/` – logótipo, ícone, imagem de partilha (`og-image.png`)

## Ver no computador
Abrir uma pasta com o terminal e correr:
```
python3 -m http.server 8000
```
e abrir http://localhost:8000. (Abrir o `index.html` com duplo clique também funciona.)

## Publicar grátis (GitHub + Vercel)
1. Criar um repositório no GitHub (ex.: `bilros-web-site`) e enviar o conteúdo desta pasta:
   ```
   git init
   git add .
   git commit -m "Site da Bilros Web"
   git branch -M main
   git remote add origin https://github.com/<utilizador>/bilros-web-site.git
   git push -u origin main
   ```
   (Ou, sem terminal: no GitHub, "Add file → Upload files" e arrastar os ficheiros.)
2. Ir a https://vercel.com, entrar com a conta GitHub (plano Hobby, gratuito).
3. "Add New → Project", escolher o repositório, Framework Preset: **Other**, sem build command. Carregar em **Deploy**.
4. Fica online em `bilros-web-site.vercel.app`. Cada `git push` para `main` atualiza o site sozinho.

Alternativa igualmente grátis: Netlify (https://app.netlify.com → "Add new site → Import from Git"), ou arrastar a pasta para https://app.netlify.com/drop.

## Domínio próprio (opcional, ~10–20 €/ano)
Comprar `bilrosweb.pt` (ou `.com`) num registador, depois em Vercel → Project → Settings → Domains → adicionar o domínio e seguir as instruções de DNS. O https é automático.

Depois de ter o endereço final, vale a pena:
- trocar `img/og-image.png` no `<meta property="og:image">` por um URL absoluto (ex.: `https://bilrosweb.pt/img/og-image.png`) para a pré-visualização funcionar bem no LinkedIn/WhatsApp;
- registar o site no Google Search Console.

## O que editar quando houver novidades
- **Portefólio:** secção `id="portefolio"` no `index.html`; trocar os cartões "Em breve" por imagens reais (`<img src="img/projeto-1.jpg" alt="...">`).
- **Fotos do Martim e do Vasco:** trocar as iniciais (`.pessoa__ini`) por `<img>`.
- **LinkedIn / WhatsApp:** acrescentar links na secção de contacto e no rodapé.
