import './styles.css';
import { palettes, type Palette } from './palettes';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App container not found');
}

const state = {
  selectedId: palettes[0]?.id ?? ''
};

const getSelectedPalette = (): Palette => {
  const selected = palettes.find((palette) => palette.id === state.selectedId);
  return selected ?? palettes[0];
};

const paletteListMarkup = () =>
  palettes
    .map((palette) => {
      const active = palette.id === state.selectedId ? 'is-active' : '';
      return `
        <button class="palette-card ${active}" data-palette-id="${palette.id}" type="button" aria-pressed="${palette.id === state.selectedId}">
          <div class="palette-card__swatches">
            <span style="background:${palette.colors[0]}"></span>
            <span style="background:${palette.colors[1]}"></span>
            <span style="background:${palette.colors[2]}"></span>
          </div>
          <div class="palette-card__meta">
            <p class="palette-card__brand">${palette.brand}</p>
            <h3>${palette.title}</h3>
            <p>${palette.subtitle}</p>
          </div>
        </button>
      `;
    })
    .join('');

const tagsMarkup = (palette: Palette) =>
  palette.tags.map((tag) => `<span class="chip">${tag}</span>`).join('');

const colorsMarkup = (palette: Palette) =>
  palette.colors
    .map(
      (color, index) => `
        <button class="color-row" type="button" data-copy-color="${color}" aria-label="复制色值 ${color}">
          <span class="color-row__index">0${index + 1}</span>
          <span class="color-row__chip" style="background:${color}"></span>
          <span class="color-row__value">${color}</span>
          <span class="color-row__action">复制</span>
        </button>
      `
    )
    .join('');

const render = () => {
  const palette = getSelectedPalette();

  app.innerHTML = `
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
            <div><strong>${palettes.length}</strong><span>套配色</span></div>
            <div><strong>${palette.tags.length}</strong><span>当前标签</span></div>
          </div>
        </div>
      </section>

      <section class="layout">
        <article class="preview" style="--preview-surface:${palette.surface};--preview-accent:${palette.accent};">
          <div class="preview__top">
            <div>
              <p class="preview__label">Selected palette</p>
              <h2>${palette.title}</h2>
              <p class="preview__subtitle">${palette.subtitle}</p>
            </div>
            <span class="preview__brand">${palette.brand}</span>
          </div>

          <div class="preview__band">
            <div class="preview__large" style="background:${palette.colors[0]}"></div>
            <div class="preview__stack">
              <div class="preview__mid" style="background:${palette.colors[1]}"></div>
              <div class="preview__dark" style="background:${palette.colors[2]}"></div>
            </div>
          </div>

          <div class="preview__info">
            <p>${palette.note}</p>
            <div class="chip-row">
              ${tagsMarkup(palette)}
            </div>
          </div>

          <div class="preview__colors">
            ${colorsMarkup(palette)}
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
            ${paletteListMarkup()}
          </div>
        </aside>
      </section>
    </main>
  `;

  app.querySelectorAll<HTMLElement>('[data-palette-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedId = button.dataset.paletteId ?? state.selectedId;
      render();
    });
  });

  app.querySelectorAll<HTMLElement>('[data-copy-color]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copyColor;
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        button.classList.add('is-copied');
        window.setTimeout(() => button.classList.remove('is-copied'), 900);
      } catch {
        window.alert(`已选中：${value}`);
      }
    });
  });
};

render();
