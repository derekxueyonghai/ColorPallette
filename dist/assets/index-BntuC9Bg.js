(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}})();const r=[{id:"emerald",title:"Emerald",subtitle:"复古 / 沉静 / 高级",tags:["#复古","#沉静","#高级"],note:"偏森林感的冷静配色，适合强调安定和质感。",brand:"SEA SOUL",colors:["#D5E3D2","#003153","#0A3D2E"],surface:"#10281f",accent:"#dbe8d8"},{id:"sepia",title:"Sepia Noon",subtitle:"复古 / 温柔 / 纸感",tags:["#怀旧","#纸感","#柔和"],note:"更接近旧照片和手工海报的温暖底色。",brand:"ATELIER",colors:["#E9D8C3","#9B6B4A","#5A3B2E"],surface:"#2b1c14",accent:"#f1e0cd"},{id:"clay",title:"Clay Archive",subtitle:"克制 / 手作 / 书卷气",tags:["#克制","#手作","#书卷气"],note:"低饱和的陶土色系，适合带一点艺术馆感。",brand:"ARCHIVE",colors:["#E8C9B5","#8A5A44","#45322B"],surface:"#271c18",accent:"#f0d8cc"},{id:"olive",title:"Olive Field",subtitle:"自然 / 安静 / 轻工业",tags:["#自然","#安静","#轻工业"],note:"偏植物和织物气质的平衡方案。",brand:"ROOTS",colors:["#DCE0C8","#7A8553","#334D3B"],surface:"#1f2a23",accent:"#e8eadc"},{id:"cocoa",title:"Cocoa Ground",subtitle:"稳重 / 深色 / 有分量",tags:["#稳重","#深色","#分量"],note:"更适合做标题型展示，层次非常明确。",brand:"GROUND",colors:["#E5CDB8","#7E5539","#37231D"],surface:"#201612",accent:"#f1ddd0"},{id:"ink",title:"Ink Studio",subtitle:"冷静 / 文艺 / 版式感",tags:["#文艺","#版式感","#冷静"],note:"加入更强的蓝黑调，强调现代编辑感。",brand:"STUDIO",colors:["#D7E0E2","#4E6770","#16313D"],surface:"#111f25",accent:"#e4eef0"},{id:"sand",title:"Sand Loft",subtitle:"轻盈 / 中性色 / 生活方式",tags:["#轻盈","#中性色","#生活方式"],note:"适合更明亮、空间感更大的展示场景。",brand:"LOFT",colors:["#F1E8D9","#B28F6B","#70604F"],surface:"#31261f",accent:"#f7f0e5"},{id:"moss",title:"Moss Studio",subtitle:"植物感 / 安稳 / 低饱和",tags:["#植物感","#安稳","#低饱和"],note:"更偏大地与苔藓的组合，适合强调自然。",brand:"MOSS",colors:["#DCE5D4","#8DA06D","#496045"],surface:"#213126",accent:"#edf3e7"},{id:"stone",title:"Stone Quiet",subtitle:"静物 / 克制 / 展陈感",tags:["#静物","#克制","#展陈感"],note:"最接近展览说明牌的气质，适合信息感最强的卡片。",brand:"GALLERY",colors:["#E6E1D8","#9A9389","#4C4740"],surface:"#26211c",accent:"#f4f0ea"}],o=document.querySelector("#app");if(!o)throw new Error("App container not found");var n;const i={selectedId:((n=r[0])==null?void 0:n.id)??""},u=()=>r.find(s=>s.id===i.selectedId)??r[0],v=()=>r.map(e=>`
        <button class="palette-card ${e.id===i.selectedId?"is-active":""}" data-palette-id="${e.id}" type="button" aria-pressed="${e.id===i.selectedId}">
          <div class="palette-card__swatches">
            <span style="background:${e.colors[0]}"></span>
            <span style="background:${e.colors[1]}"></span>
            <span style="background:${e.colors[2]}"></span>
          </div>
          <div class="palette-card__meta">
            <p class="palette-card__brand">${e.brand}</p>
            <h3>${e.title}</h3>
            <p>${e.subtitle}</p>
          </div>
        </button>
      `).join(""),f=e=>e.tags.map(s=>`<span class="chip">${s}</span>`).join(""),b=e=>e.colors.map((s,c)=>`
        <button class="color-row" type="button" data-copy-color="${s}" aria-label="复制色值 ${s}">
          <span class="color-row__index">0${c+1}</span>
          <span class="color-row__chip" style="background:${s}"></span>
          <span class="color-row__value">${s}</span>
          <span class="color-row__action">复制</span>
        </button>
      `).join(""),p=()=>{const e=u();o.innerHTML=`
    <main class="shell">
      <section class="hero">
        <div class="hero__copy">
          <p class="eyebrow">Color Palette Gallery</p>
          <h1>从参考图整理出的 9 套复古气质配色。</h1>
          <p class="hero__desc">这是一个展示型画廊：左侧看当前方案，右侧快速切换九套主题，保留参考图里的海报感、深浅层次和色块节奏。</p>
        </div>
        <div class="hero__tools">
          <label class="search-box">
            <span>搜索主题 / 标签</span>
            <input type="search" placeholder="例如：复古、自然、沉静" />
          </label>
          <div class="hero__stats">
            <div><strong>${r.length}</strong><span>套配色</span></div>
            <div><strong>${e.tags.length}</strong><span>当前标签</span></div>
          </div>
        </div>
      </section>

      <section class="layout">
        <article class="preview" style="--preview-surface:${e.surface};--preview-accent:${e.accent};">
          <div class="preview__top">
            <div>
              <p class="preview__label">Selected palette</p>
              <h2>${e.title}</h2>
              <p class="preview__subtitle">${e.subtitle}</p>
            </div>
            <span class="preview__brand">${e.brand}</span>
          </div>

          <div class="preview__band">
            <div class="preview__large" style="background:${e.colors[0]}"></div>
            <div class="preview__stack">
              <div class="preview__mid" style="background:${e.colors[1]}"></div>
              <div class="preview__dark" style="background:${e.colors[2]}"></div>
            </div>
          </div>

          <div class="preview__info">
            <p>${e.note}</p>
            <div class="chip-row">
              ${f(e)}
            </div>
          </div>

          <div class="preview__colors">
            ${b(e)}
          </div>
        </article>

        <aside class="sidebar">
          <div class="sidebar__header">
            <div>
              <p class="eyebrow">All schemes</p>
              <h2>配色列表</h2>
            </div>
            <p class="sidebar__hint">点击任意一张卡切换主预览</p>
          </div>
          <div class="palette-grid">
            ${v()}
          </div>
        </aside>
      </section>
    </main>
  `,o.querySelectorAll("[data-palette-id]").forEach(s=>{s.addEventListener("click",()=>{i.selectedId=s.dataset.paletteId??i.selectedId,p()})}),o.querySelectorAll("[data-copy-color]").forEach(s=>{s.addEventListener("click",async()=>{const c=s.dataset.copyColor;if(c)try{await navigator.clipboard.writeText(c),s.classList.add("is-copied"),window.setTimeout(()=>s.classList.remove("is-copied"),900)}catch{window.alert(`已选中：${c}`)}})})};p();
