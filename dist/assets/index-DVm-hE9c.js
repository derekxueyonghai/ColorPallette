(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();const i=[{id:"emerald",title:"Emerald 翡翠",subtitle:"复古 / 沉静 / 高级",tags:["#复古","#沉静","#高级"],note:"冷静、克制的经典复古绿调。",colors:["#D5E3D2","#003153","#0A3D2E"],colorNames:["米白色","普鲁士蓝","墨绿"],surface:"#10281f",accent:"#dbe8d8"},{id:"ruby",title:"Ruby 红宝",subtitle:"浓郁 / 戏剧 / 怀旧",tags:["#浓郁","#戏剧","#怀旧"],note:"高对比红蓝组合，戏剧感强。",colors:["#E6DDD1","#203850","#7A1F2B"],colorNames:["米白色","深靛蓝","深酒红"],surface:"#24131b",accent:"#f1e8dd"},{id:"temple",title:"Temple 庙街",subtitle:"温暖 / 复古 / 港味",tags:["#温暖","#复古","#港味"],note:"暖橙与墨绿，港风复古气质明显。",colors:["#E8DED0","#26473E","#B86B2E"],colorNames:["象牙白","墨绿色","琥珀橙"],surface:"#2a2118",accent:"#f2e7d8"},{id:"plum",title:"Plum 梅子",subtitle:"神秘 / 优雅 / 文艺",tags:["#神秘","#优雅","#文艺"],note:"紫调与深海蓝组合，安静且文艺。",colors:["#E8E2D7","#233E5A","#69456B"],colorNames:["燕麦白","深海蓝","柿子紫"],surface:"#201a22",accent:"#efe8df"},{id:"coral",title:"Coral 珊瑚",subtitle:"鲜活 / 年轻 / 复古",tags:["#鲜活","#年轻","#复古"],note:"更鲜活的红绿对比，适合年轻表达。",colors:["#EFE5D7","#28504D","#C85B4A"],colorNames:["奶油白","深松石绿","珊瑚红"],surface:"#2a201b",accent:"#f4ebde"},{id:"harbor",title:"Harbor 港口",subtitle:"理性 / 国际 / 都市",tags:["#理性","#国际","#都市"],note:"偏理性的都市蓝灰方案，适合信息型界面。",colors:["#E3E2DB","#2F3137","#2A4C8B"],colorNames:["云雾白","深墨灰","钴蓝"],surface:"#1e222b",accent:"#ecebe4"},{id:"rose",title:"Rose 蔷薇",subtitle:"浪漫 / 复古 / 精致",tags:["#浪漫","#复古","#精致"],note:"柔和蔷薇调，更偏精致与浪漫。",colors:["#EEDFD4","#6F4A52","#A55C66"],colorNames:["米杏白","玫瑰褐","蔷薇红"],surface:"#2a2024",accent:"#f5e8df"},{id:"teal",title:"Teal 青碧",subtitle:"冷静 / 高级 / 东方",tags:["#冷静","#高级","#东方"],note:"东方语境下的青碧与深咖灰，更耐看。",colors:["#E3E5DD","#403A38","#0D6B67"],colorNames:["月白色","深咖灰","青碧色"],surface:"#22211f",accent:"#eceee6"},{id:"mustard",title:"Mustard 芥末",subtitle:"怀旧 / 浓郁 / 艺术",tags:["#怀旧","#浓郁","#艺术"],note:"芥末黄与墨蓝的组合，艺术感强。",colors:["#E7E0D5","#263D5A","#A88B2C"],colorNames:["亚麻白","墨蓝色","芥末黄"],surface:"#2a261b",accent:"#f0eadf"},{id:"lye",title:"Lye 碱液",subtitle:"素雅 / 自然 / 安静",tags:["#素雅","#自然","#安静"],note:"低饱和的灰绿与深色组合，克制且耐看。",colors:["#F0F0EC","#B8C49A","#2A2E2C"],colorNames:["米白","若竹","漆黑"],surface:"#1d2220",accent:"#edf0e9"},{id:"soot",title:"Soot 煤烟",subtitle:"暗调 / 冷静 / 克制",tags:["#暗调","#冷静","#克制"],note:"紫灰中性色阶，适合沉稳和内容导向的界面。",colors:["#D8C8D8","#9A8C9A","#2A282A"],colorNames:["淡紫","菖蒲","煤烟"],surface:"#1f1c20",accent:"#e7dfe8"},{id:"techbluegray",title:"TechBlueGray 科技蓝灰",subtitle:"科技 / 理性 / 都市",tags:["#科技","#理性","#都市"],note:"科技感强烈的冷调蓝灰，专业可信。",colors:["#38BDF8","#334155","#0F172A"],colorNames:["亮蓝","蓝灰","深蓝黑"],surface:"#0a0f1a",accent:"#e0f2fe"},{id:"minimalblackwhite",title:"MinimalBlackWhite 极简黑白",subtitle:"极简 / 高级 / 品牌",tags:["#极简","#高级","#品牌"],note:"至简至美的黑白中灰，高级质感十足。",colors:["#F5F5F5","#A3A3A3","#0A0A0A"],colorNames:["米白","中灰","纯黑"],surface:"#050505",accent:"#fafafa"},{id:"coolbluegreen",title:"CoolBlueGreen 冷调蓝绿",subtitle:"环保 / 健康 / 自然",tags:["#环保","#健康","#自然"],note:"清新生态的绿调，充满自然活力。",colors:["#D8F3DC","#40916C","#1B4332"],colorNames:["浅绿","青绿","深绿"],surface:"#0f2818",accent:"#ecfdf5"},{id:"brandredblack",title:"BrandRedBlack 品牌红黑",subtitle:"运动 / 品牌 / 激情",tags:["#运动","#品牌","#激情"],note:"强势冲击的红黑组合，充满活力与张力。",colors:["#E5E5E5","#1F1F1F","#B91C1C"],colorNames:["浅灰","深灰","深红"],surface:"#0a0a0a",accent:"#fafafa"},{id:"texturedbrown",title:"TexturedBrown 质感棕色",subtitle:"质感 / 家居 / 生活",tags:["#质感","#家居","#生活"],note:"温暖质朴的棕调，生活气息浓郁。",colors:["#F2E8CF","#A68A64","#3E2C23"],colorNames:["米白","浅棕","深棕"],surface:"#2a1f17",accent:"#faf8f3"},{id:"premiumgraypurple",title:"PremiumGrayPurple 高级灰紫",subtitle:"设计 / 艺术 / 女性",tags:["#设计","#艺术","#女性"],note:"高级优雅的灰紫调，艺术感十足。",colors:["#EDF2F4","#8D99AE","#2B2D42"],colorNames:["浅灰白","灰蓝","深灰蓝"],surface:"#16171e",accent:"#f5f7fa"},{id:"businessblue",title:"BusinessBlue 商务蓝系",subtitle:"企业 / 金融 / 咨询",tags:["#企业","#金融","#咨询"],note:"专业可信的蓝调，商务正式感强。",colors:["#F1FAEE","#457B9D","#1D3557"],colorNames:["浅白绿","蓝色","深蓝"],surface:"#0f1b2e",accent:"#f8fcf9"},{id:"warmbeigegray",title:"WarmBeigeGray 暖调米灰",subtitle:"家居 / 室内 / 生活",tags:["#家居","#室内","#生活"],note:"温暖舒适的米灰调，居家氛围浓厚。",colors:["#F5F3EF","#B7B7A4","#4A4A48"],colorNames:["奶白","灰米","深灰"],surface:"#2a2a28",accent:"#faf9f7"}],l=document.querySelector("#app");if(!l)throw new Error("App container not found");var n;const r={selectedId:((n=i[0])==null?void 0:n.id)??"",sidebarScrollTop:0},u=()=>i.find(t=>t.id===r.selectedId)??i[0],f=()=>i.map(e=>{const t=e.id===r.selectedId?"is-active":"",[o=e.title,a=""]=e.title.split(" "),s=e.tags.slice(0,3).join(" ");return`
        <button class="palette-card ${t}" data-palette-id="${e.id}" type="button" aria-pressed="${e.id===r.selectedId}">
          <div class="palette-card__frame">
            <div class="palette-card__swatches">
              <section class="palette-card__swatch palette-card__swatch--top" style="--swatch-color:${e.colors[0]};">
                <div class="palette-card__hero">
                  <h3>
                    <span>${o}</span>
                    <small>${a}</small>
                  </h3>
                  <p class="palette-card__subtitle">${e.subtitle}</p>
                </div>
                <p class="palette-card__code">
                  <strong>${e.colors[0]}</strong>
                  <em>${e.colorNames[0]}</em>
                </p>
              </section>

              <section class="palette-card__swatch palette-card__swatch--mid" style="--swatch-color:${e.colors[1]};">
                <p class="palette-card__tags">${s}</p>
                <p class="palette-card__code">
                  <strong>${e.colors[1]}</strong>
                  <em>${e.colorNames[1]}</em>
                </p>
              </section>

              <section class="palette-card__swatch palette-card__swatch--bottom" style="--swatch-color:${e.colors[2]};">
                <p class="palette-card__code">
                  <strong>${e.colors[2]}</strong>
                  <em>${e.colorNames[2]}</em>
                </p>
              </section>
            </div>
          </div>
        </button>
      `}).join(""),m=e=>e.tags.map(t=>`<span class="chip">${t}</span>`).join(""),b=e=>e.colors.map((t,o)=>`
        <button class="color-row" type="button" data-copy-color="${t}" aria-label="复制色值 ${t}（${e.colorNames[o]}）">
          <span class="color-row__index">0${o+1}</span>
          <span class="color-row__chip" style="background:${t}"></span>
          <span class="color-row__value">${t} · ${e.colorNames[o]}</span>
          <span class="color-row__action">复制</span>
        </button>
      `).join(""),p=()=>{const e=u(),t=e.brand?`<span class="preview__brand">${e.brand}</span>`:"";l.innerHTML=`
    <main class="shell">
      <section class="hero">
        <div class="hero__copy">
          <p class="eyebrow">Color Palette Gallery</p>
          <h1>${i.length} 套复古气质配色</h1>
        </div>
        <div class="hero__tools">
          <label class="search-box">
            <span>搜索主题 / 标签</span>
            <input type="search" placeholder="例如：复古、自然、沉静" />
          </label>
          <div class="hero__stats">
            <div><strong>${i.length}</strong><span>套配色</span></div>
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
            ${t}
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
              ${m(e)}
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
            ${f()}
          </div>
        </aside>
      </section>
    </main>
  `;const o=l.querySelector(".palette-grid");o&&(o.scrollTop=r.sidebarScrollTop),l.querySelectorAll("[data-palette-id]").forEach(a=>{a.addEventListener("click",()=>{const s=l.querySelector(".palette-grid");s&&(r.sidebarScrollTop=s.scrollTop),r.selectedId=a.dataset.paletteId??r.selectedId,p()})}),l.querySelectorAll("[data-copy-color]").forEach(a=>{a.addEventListener("click",async()=>{const s=a.dataset.copyColor;if(s)try{await navigator.clipboard.writeText(s),a.classList.add("is-copied"),window.setTimeout(()=>a.classList.remove("is-copied"),900)}catch{window.alert(`已选中：${s}`)}})})};p();
