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
  const linkWhats = (numero, msg) =>
    `https://wa.me/${numero}?text=${encodeURIComponent(msg || "Olá! Gostaria de agendar um atendimento.")}`;

  function setLinks() {
    const msg = "Olá, Amanda! Gostaria de agendar um atendimento.";
    const wa = linkWhats(C.whatsapp, msg);
    ["#ctaAgendar", "#navAgendar", "#whatsappFloat"].forEach((s) => {
      const el = $(s);
      if (el) el.setAttribute("href", wa);
    });
    $("#linkInstagram") && $("#linkInstagram").setAttribute("href", C.instagram);
    $("#linkMaps") && $("#linkMaps").setAttribute("href", C.maps);
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    if (C.crp) $("#heroCrp").textContent = C.crp;
    if (C.subtitulo) $("#heroSub").innerHTML = C.subtitulo;
    if (C.descricao) $("#heroDesc").textContent = C.descricao;

    const chips = $("#heroChips");
    (C.chips || []).forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      chips.appendChild(li);
    });

    const foto = document.createElement("img");
    foto.src = C.fotoPerfil;
    foto.alt = `Foto de ${C.nome}`;
    foto.onerror = () => {
      foto.remove();
      $("#heroFoto").textContent = "🌿";
    };
    $("#heroFoto").appendChild(foto);
  }

  /* ---------- Destaques ---------- */
  function renderDestaques() {
    const grid = $("#destaques");
    (C.destaques || []).forEach((d) => {
      const div = document.createElement("div");
      div.className = "destaque reveal";
      div.innerHTML = `
        <div class="destaque__icone">${d.icone}</div>
        <strong>${d.titulo}</strong>
        <small>${d.legenda}</small>`;
      grid.appendChild(div);
    });
  }

  /* ---------- Sobre ---------- */
  function renderSobre() {
    if (C.crp) $("#sobreCrp").textContent = C.crp;
    const img = $("#sobreFoto");
    img.src = C.fotoSobre;
    img.alt = `Foto de ${C.nome}`;
    img.onerror = () => { img.src = C.fotoPerfil; };

    const paragrafos = $("#sobreParagrafos");
    (C.sobreParagrafos || []).forEach((p) => {
      const pEl = document.createElement("p");
      pEl.textContent = p;
      paragrafos.appendChild(pEl);
    });

    const equipe = $("#sobreEquipe");
    (C.sobreLinks || []).forEach((l) => {
      const a = document.createElement("a");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = l.texto;
      equipe.appendChild(a);
    });
  }

  /* ---------- Serviços ---------- */
  function renderServicos() {
    if (C.servicosLead) $("#servicosLead").textContent = C.servicosLead;
    const grid = $("#servicosGrid");
    (C.servicos || []).forEach((s) => {
      const card = document.createElement("article");
      card.className = "servico reveal";
      const itens = (s.itens || []).map((i) => `<li>${i}</li>`).join("");
      card.innerHTML = `
        <div class="servico__icone">${s.icone}</div>
        <h3>${s.titulo}</h3>
        <p>${s.descricao}</p>
        <ul>${itens}</ul>
        <a class="servico__cta" href="${linkWhats(C.whatsapp, `Olá! Tenho interesse em: ${s.titulo}`)}">Agendar este serviço →</a>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Como funciona ---------- */
  function renderComo() {
    const grid = $("#comoGrid");
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
    const grid = $("#valoresGrid");
    (C.valores || []).forEach((v) => {
      const div = document.createElement("div");
      div.className = "valor reveal";
      div.innerHTML = `
        <div class="valor__icone">${v.icone}</div>
        <h3>${v.titulo}</h3>
        <p>${v.texto}</p>`;
      grid.appendChild(div);
    });
  }

  /* ---------- Conteúdos (galeria) ---------- */
  function renderConteudos() {
    if (C.conteudosLead) $("#conteudosLead").textContent = C.conteudosLead;
    const grid = $("#conteudosGrid");
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
        <a class="conteudo__img" href="${c.link}" target="_blank" rel="noopener">
          <img src="${c.img}" alt="${c.legenda}" loading="lazy" />
        </a>
        <div class="conteudo__corpo">
          <div class="conteudo__data">${c.data || ""}</div>
          <p class="conteudo__legenda">${c.legenda}</p>
        </div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Depoimentos ---------- */
  function renderDepoimentos() {
    const grid = $("#depoimentosGrid");
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

  /* ---------- FAQ ---------- */
  function renderFaq() {
    const lista = $("#faqLista");
    (C.faq || []).forEach((f, i) => {
      const item = document.createElement("div");
      item.className = "faq__item reveal";
      item.innerHTML = `
        <button class="faq__pergunta" type="button" aria-expanded="false" aria-controls="faqResp${i}">
          ${f.pergunta}<span class="faq__icone">+</span>
        </button>
        <div class="faq__resposta" id="faqResp${i}"><p>${f.resposta}</p></div>`;
      lista.appendChild(item);

      const btn = item.querySelector(".faq__pergunta");
      const resp = item.querySelector(".faq__resposta");
      btn.addEventListener("click", () => {
        const aberto = item.classList.contains("aberto");
        lista.querySelectorAll(".faq__item.aberto").forEach((el) => {
          el.classList.remove("aberto");
          el.querySelector(".faq__resposta").style.maxHeight = "0px";
          el.querySelector(".faq__pergunta").setAttribute("aria-expanded", "false");
        });
        if (!aberto) {
          item.classList.add("aberto");
          resp.style.maxHeight = resp.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------- Contato ---------- */
  function renderContato() {
    if (C.contatoLead) $("#contatoLead").textContent = C.contatoLead;

    const cartoes = $("#contatoCartoes");
    (C.contatoCartoes || []).forEach((cc) => {
      const a = document.createElement("a");
      a.className = "contato__cartao reveal";
      a.href = cc.link;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `
        <div class="contato__cartao-icone">${cc.icone}</div>
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
    const social = $("#footerSocial");
    const redes = [
      { icon: "📸", url: C.instagram, nome: "Instagram" },
      { icon: "🎓", url: C.instagramEscola, nome: "Instagram Escolar" },
      { icon: "💼", url: C.linkedin, nome: "LinkedIn" },
      { icon: "📍", url: C.maps, nome: "Localização" }
    ];
    redes.forEach((r) => {
      const a = document.createElement("a");
      a.href = r.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", r.nome);
      a.textContent = r.icon;
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
