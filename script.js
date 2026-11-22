// Bilros Web · pequenas interações

// Menu no telemóvel
const botaoMenu = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
botaoMenu.addEventListener('click', () => {
  const aberto = botaoMenu.getAttribute('aria-expanded') === 'true';
  botaoMenu.setAttribute('aria-expanded', String(!aberto));
  botaoMenu.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  menu.classList.toggle('aberto', !aberto);
});
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.setAttribute('aria-label', 'Abrir menu');
  menu.classList.remove('aberto');
}));

// Linha por baixo do topo ao fazer scroll
const topo = document.querySelector('.topo');
const marcarTopo = () => topo.classList.toggle('com-sombra', window.scrollY > 8);
window.addEventListener('scroll', marcarTopo, { passive: true });
marcarTopo();

// Copiar email
document.querySelectorAll('.copiar').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.email);
      btn.textContent = 'Copiado!';
    } catch {
      btn.textContent = btn.dataset.email;
    }
    setTimeout(() => { btn.textContent = 'Copiar'; }, 2000);
  });
});

// Formulário: abre o email do visitante com a mensagem preenchida (sem servidor)
const form = document.getElementById('form-contacto');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const erro = form.querySelector('.form__erro');
  let valido = true;
  form.querySelectorAll('[required]').forEach((campo) => {
    const ok = campo.value.trim() !== '';
    campo.closest('.campo').classList.toggle('invalido', !ok);
    if (!ok) valido = false;
  });
  erro.hidden = valido;
  if (!valido) return;

  const d = Object.fromEntries(new FormData(form));
  const assunto = `Pedido de site: ${d.negocio}`;
  const corpo = [
    `Olá Bilros Web,`,
    ``,
    d.mensagem,
    ``,
    `Nome: ${d.nome}`,
    `Negócio: ${d.negocio}`,
    d.site ? `Site atual: ${d.site}` : null,
  ].filter((l) => l !== null).join('\n');
  window.location.href = `mailto:bilrosweb@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
});

document.getElementById('ano').textContent = new Date().getFullYear();
