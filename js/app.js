let filtro = "Todos", busca = "", pedido = {};
const $ = s => document.querySelector(s);
const calcTotal = () => Object.entries(pedido).reduce((s, [id, q]) => s + PRATOS.find(p => p.id == id).preco * q, 0);

function aviso(txt, tipo) {
  $("#mensagem").innerHTML = `<div class="alert alert-${tipo} alert-dismissible fade show" role="alert">${txt}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button></div>`;
}

function renderFiltros() {
  $("#filtros").innerHTML = CATEGORIAS.map(c =>
    `<button class="btn btn-sm ${c === filtro ? "btn-primary" : "btn-outline-primary"}" data-cat="${c}">${c}</button>`).join("");
}

function renderLista() {
  const t = busca.toLowerCase();
  const itens = PRATOS.filter(p => (filtro === "Todos" || p.categoria === filtro) && (p.nome + " " + p.desc).toLowerCase().includes(t));
  $("#lista").innerHTML = itens.length ? itens.map(p => `
    <div class="col-12 col-sm-6 col-xl-4">
      <div class="card h-100 shadow-sm"><div class="card-body d-flex flex-column">
        <div class="display-5">${p.emoji}</div>
        <span class="badge badge-cat align-self-start">${p.categoria}</span>
        <h2 class="h5 mt-2">${p.nome}</h2>
        <p class="text-muted small flex-grow-1">${p.desc}</p>
        <div class="d-flex justify-content-between align-items-center">
          <strong>${brl(p.preco)}</strong>
          <button class="btn btn-primary btn-sm" data-add="${p.id}">Adicionar</button>
        </div>
      </div></div>
    </div>`).join("") : `<p class="text-center text-muted">Nenhum prato encontrado.</p>`;
}

function renderPedido() {
  const ids = Object.keys(pedido);
  $("#pedido").innerHTML = ids.length ? ids.map(id => {
    const p = PRATOS.find(x => x.id == id), q = pedido[id];
    return `<li class="list-group-item d-flex align-items-center gap-2">
      <div class="me-auto"><div class="fw-semibold">${p.nome}</div><small class="text-muted">${brl(p.preco * q)}</small></div>
      <div class="btn-group btn-group-sm">
        <button class="btn btn-outline-secondary" data-menos="${id}" aria-label="Diminuir">−</button>
        <span class="btn btn-light disabled">${q}</span>
        <button class="btn btn-outline-secondary" data-mais="${id}" aria-label="Aumentar">+</button>
      </div></li>`;
  }).join("") : `<li class="list-group-item text-muted">Nenhum item adicionado.</li>`;
  $("#total").textContent = brl(calcTotal());
}

function finalizar() {
  if (!Object.keys(pedido).length) return aviso("Seu pedido está vazio. Adicione um prato.", "warning");
  aviso(`Pedido enviado! Total: ${brl(calcTotal())}.`, "success");
  pedido = {}; renderPedido();
}

document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const d = b.dataset;
  if (d.cat) { filtro = d.cat; renderFiltros(); renderLista(); }
  if (d.add) { pedido[d.add] = (pedido[d.add] || 0) + 1; aviso(`${PRATOS.find(p => p.id == d.add).nome} adicionado ao pedido.`, "success"); renderPedido(); }
  if (d.mais) { pedido[d.mais]++; renderPedido(); }
  if (d.menos) { if (--pedido[d.menos] <= 0) delete pedido[d.menos]; renderPedido(); }
  if (b.id === "btn-finalizar") finalizar();
});
$("#busca").addEventListener("input", e => { busca = e.target.value; renderLista(); });

renderFiltros(); renderLista(); renderPedido();
