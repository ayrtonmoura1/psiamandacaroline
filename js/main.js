/* ============================================================
   Psicóloga Amanda Caroline — Lógica do site
   Renderiza o conteúdo definido em js/conteudo.js
   ============================================================ */
(function () {
  "use strict";

  // CONTEUDO é declarado com `const` em conteudo.js, portanto não fica
  // em window — acessamos pelo nome direto (com fallback por segurança).
  const C = typeof CONTEUDO !== "undefined" ? CONTEUDO : window.CONTEUDO;
  if (!C) {
    console.error("Arquivo js/conteudo.js não encontrado.");
    return;
  }

  /* ---------- Utilidades ---------- */
  const $ = (sel) => document.querySelector(sel);

  // O index.html já traz uma cópia estática de todo o conteúdo, para que
  // buscadores e bots de IA (que não executam JavaScript) consigam lê-lo.
  // Antes de renderizar a partir de js/conteudo.js, esvaziamos o container
  // para não duplicar os itens. Como os scripts ficam no final do <body>,
  // essa troca acontece antes da primeira pintura — sem piscar na tela.
  const limpar = (el) => { if (el) el.innerHTML = ""; return el; };

  // Monta um ícone do sprite SVG declarado no início do index.html.
  // `nome` é o id sem o prefixo "i-" (ex.: "cerebro", "whatsapp").
  const icone = (nome, classe) =>
    nome ? `<svg class="${classe || "ico"}" aria-hidden="true"><use href="#i-${nome}"/></svg>` : "";
  const linkWhats = (numero, msg) =>
    `https://wa.me/${numero}?text=${encodeURIComponent(msg || "Olá! Gostaria de agendar um atendimento.")}`;

  function setLinks() {
    const msg = "Olá, Amanda! Gostaria de agendar um atendimento.";
    const wa = linkWhats(C.whatsapp, msg);
    // Qualquer elemento marcado com data-agendar vira um link de agendamento
    document.querySelectorAll("#ctaAgendar, #navAgendar, #whatsappFloat, [data-agendar]")
      .forEach((el) => el.setAttribute("href", wa));
    $("#linkInstagram") && $("#linkInstagram").setAttribute("href", C.instagram);
    $("#linkMaps") && $("#linkMaps").setAttribute("href", C.maps);
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    if (C.crp) $("#heroCrp").textContent = C.crp;
    if (C.subtitulo) $("#heroSub").innerHTML = C.subtitulo;
    if (C.descricao) $("#heroDesc").textContent = C.descricao;

    const chips = limpar($("#heroChips"));
    (C.chips || []).forEach((c) => {
      const li = document.createElement("li");
      // aceita tanto { icone, texto } quanto uma string simples
      if (typeof c === "string") li.textContent = c;
      else li.innerHTML = `${icone(c.icone)} ${c.texto}`;
      chips.appendChild(li);
    });

    const foto = document.createElement("img");
    foto.src = C.fotoPerfil;
    foto.alt = `Foto de ${C.nome}`;
    foto.onerror = () => {
      foto.remove();
      $("#heroFoto").textContent = "🌿";
    };
    limpar($("#heroFoto")).appendChild(foto);
  }

  /* ---------- Destaques ---------- */
  function renderDestaques() {
    const grid = limpar($("#destaques"));
    (C.destaques || []).forEach((d) => {
      const art = document.createElement("article");
      art.className = "destaque reveal";
      art.innerHTML = `
        <div class="destaque__icone">${icone(d.icone)}</div>
        <h3>${d.titulo}</h3>
        <p>${d.texto || d.legenda || ""}</p>`;
      grid.appendChild(art);
    });
  }

  /* ---------- Sobre ---------- */
  function renderSobre() {
    if (C.crp) $("#sobreCrp").textContent = C.crp;
    const img = $("#sobreFoto");
    img.src = C.fotoSobre;
    img.alt = `Foto de ${C.nome}`;
    img.onerror = () => { img.src = C.fotoPerfil; };

    const paragrafos = limpar($("#sobreParagrafos"));
    (C.sobreParagrafos || []).forEach((p) => {
      const pEl = document.createElement("p");
      pEl.textContent = p;
      paragrafos.appendChild(pEl);
    });

    const equipe = limpar($("#sobreEquipe"));
    (C.sobreLinks || []).forEach((l) => {
      const a = document.createElement("a");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `${icone(l.icone)} ${l.texto}`;
      equipe.appendChild(a);
    });
  }

  /* ---------- Serviços ---------- */
  function renderServicos() {
    if (C.servicosLead) $("#servicosLead").textContent = C.servicosLead;
    const grid = limpar($("#servicosGrid"));
    (C.servicos || []).forEach((s) => {
      const card = document.createElement("article");
      card.className = "servico reveal";
      const itens = (s.itens || []).map((i) => `<li>${i}</li>`).join("");
      card.innerHTML = `
        <div class="servico__icone">${icone(s.icone)}</div>
        <h3>${s.titulo}</h3>
        <p>${s.descricao}</p>
        <ul>${itens}</ul>
        <a class="servico__cta" href="${linkWhats(C.whatsapp, `Olá! Tenho interesse em: ${s.titulo}`)}">Agendar este serviço ${icone("seta")}</a>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Como funciona ---------- */
  function renderComo() {
    const grid = limpar($("#comoGrid"));
    (C.passos || []).forEach((p) => {
      const div = document.createElement("div");
      div.className = "passo reveal";
      div.innerHTML = `
        <div class="passo__numero"></div>
        <h3>${p.titulo}</h3>
        <p>${p.texto}</p>`;
      grid.appendChild(div);
    });
  }

  /* ---------- Valores ---------- */
  function renderValores() {
    const grid = limpar($("#valoresGrid"));
    (C.valores || []).forEach((v) => {
      const div = document.createElement("div");
      div.className = "valor reveal";
      div.innerHTML = `
        <div class="valor__icone">${icone(v.icone)}</div>
        <h3>${v.titulo}</h3>
        <p>${v.texto}</p>`;
      grid.appendChild(div);
    });
  }

  /* ---------- Conteúdos (galeria) ---------- */
  function renderConteudos() {
    if (C.conteudosLead) $("#conteudosLead").textContent = C.conteudosLead;
    const grid = limpar($("#conteudosGrid"));
    // Junta os itens manuais (js/conteudo.js) com os importados
    // (js/galeria_importada.js, gerado por importar_conteudo.py)
    const importadas = typeof GALERIA_IMPORTADA !== "undefined"
      ? GALERIA_IMPORTADA
      : (window.GALERIA_IMPORTADA || []);
    const itens = (C.conteudos || []).concat(importadas);
    itens.forEach((c) => {
      const card = document.createElement("article");
      card.className = "conteudo reveal";
      card.innerHTML = `
        <a class="conteudo__img" href="${c.link}" target="_blank" rel="noopener" aria-label="Abrir no Instagram: ${c.legenda}">
          <img src="${c.img}" alt="${c.legenda}" loading="lazy" />
        </a>
        <div class="conteudo__corpo">
          <div class="conteudo__data">${c.data || ""}</div>
          <p class="conteudo__legenda">${c.legenda}</p>
        </div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Depoimentos ----------
     A seção foi retirada da página (ver comentário no index.html).
     O código fica aqui caso ela volte a ser usada: só roda se o
     container existir E houver depoimentos reais cadastrados. */
  function renderDepoimentos() {
    if (!$("#depoimentosGrid") || !(C.depoimentos || []).length) return;
    const grid = limpar($("#depoimentosGrid"));
    (C.depoimentos || []).forEach((d) => {
      const div = document.createElement("div");
      div.className = "depoimento reveal";
      div.innerHTML = `
        <div class="depoimento__estrelas">${d.estrelas}</div>
        <p class="depoimento__texto">${d.texto}</p>
        <div class="depoimento__autor">${d.autor}<small>${d.detalhe}</small></div>`;
      grid.appendChild(div);
    });
  }

  /* ---------- FAQ ----------
     Usa <details>/<summary> nativo: abre e fecha sem JavaScript, já é
     acessível por teclado e leitores de tela, e o atributo `name`
     mantém só uma resposta aberta por vez nos navegadores que o
     suportam (nos demais, mais de uma pode ficar aberta — sem problema). */
  function renderFaq() {
    const lista = limpar($("#faqLista"));
    (C.faq || []).forEach((f) => {
      const item = document.createElement("details");
      item.className = "faq__item reveal";
      item.name = "faq";
      item.innerHTML = `
        <summary class="faq__pergunta">
          <span>${f.pergunta}</span>
          ${icone("seta", "ico faq__icone")}
        </summary>
        <div class="faq__resposta"><p>${f.resposta}</p></div>`;
      lista.appendChild(item);
    });
  }

  /* ---------- Contato ---------- */
  function renderContato() {
    if (C.contatoLead) $("#contatoLead").textContent = C.contatoLead;

    const cartoes = limpar($("#contatoCartoes"));
    (C.contatoCartoes || []).forEach((cc) => {
      const a = document.createElement("a");
      a.className = "contato__cartao reveal";
      a.href = cc.link;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `
        <div class="contato__cartao-icone contato__cartao--${cc.icone}">${icone(cc.icone)}</div>
        <div><strong>${cc.titulo}</strong><span>${cc.valor} · ${cc.dica}</span></div>`;
      cartoes.appendChild(a);
    });

    // Mapa: tenta carregar o embed do Google Maps; se falhar, mostra o fallback
    const frame = $("#mapaFrame");
    const fallback = $("#mapaFallback");
    const q = encodeURIComponent(C.mapsNome + " " + C.local);
    frame.src = `https://www.google.com/maps?q=${q}&output=embed`;
    frame.addEventListener("load", () => { fallback.style.display = "none"; });
    frame.addEventListener("error", () => { fallback.style.display = "flex"; });
    // Garantia: se o iframe não carregar conteúdo em alguns segundos, exibe fallback
    setTimeout(() => {
      try {
        if (frame.contentDocument && frame.contentDocument.body && frame.contentDocument.body.children.length === 0) {
          fallback.style.display = "flex";
        }
      } catch (e) { /* cross-origin: mantém o iframe */ }
    }, 6000);
  }

  /* ---------- Rodapé ---------- */
  function renderFooter() {
    if (C.crp) $("#footerCrp").textContent = C.crp;
    if (C.rodapeBase) {
      const p = $("#footerBase");
      p.textContent = C.rodapeBase;
      const extra = document.createElement("span");
      extra.innerHTML = ` &middot; ${C.local} &middot; <a href="${C.instagram}" target="_blank" rel="noopener">Instagram</a>`;
      p.appendChild(extra);
    }
    const social = limpar($("#footerSocial"));
    const redes = [
      { icone: "instagram", url: C.instagram, nome: "Instagram @amandacarolinepsi" },
      { icone: "instagram", url: C.instagramEscola, nome: "Instagram @psiconaescola" },
      { icone: "linkedin", url: C.linkedin, nome: "LinkedIn de " + C.nome },
      { icone: "googlemaps", url: C.maps, nome: "Consultório no Google Maps" }
    ];
    redes.forEach((r) => {
      const a = document.createElement("a");
      a.href = r.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", r.nome);
      a.innerHTML = icone(r.icone);
      social.appendChild(a);
    });
  }

  /* ---------- Navegação e animações ---------- */
  function initNav() {
    const toggle = $("#navToggle");
    const menu = $("#navMenu");
    const nav = $("#nav");

    toggle.addEventListener("click", () => {
      const aberto = menu.classList.toggle("aberto");
      toggle.classList.toggle("aberto", aberto);
      toggle.setAttribute("aria-expanded", aberto);
    });

    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("aberto");
        toggle.classList.remove("aberto");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    marcarSecaoAtiva(menu);
  }

  /* Destaca no menu a seção que está sendo lida no momento. */
  function marcarSecaoAtiva(menu) {
    const links = [...menu.querySelectorAll('a[href^="#"]')];
    const secoes = links
      .map((a) => ({ a, alvo: document.querySelector(a.getAttribute("href")) }))
      .filter((x) => x.alvo);
    if (!secoes.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          secoes.forEach(({ a, alvo }) => {
            const ativo = alvo === e.target;
            a.classList.toggle("ativo", ativo);
            if (ativo) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    secoes.forEach(({ alvo }) => io.observe(alvo));
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visivel"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Inicialização ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    setLinks();
    renderHero();
    renderDestaques();
    renderSobre();
    renderServicos();
    renderComo();
    renderValores();
    renderConteudos();
    renderDepoimentos();
    renderFaq();
    renderContato();
    renderFooter();
    initNav();
    initReveal();
  });
})();
