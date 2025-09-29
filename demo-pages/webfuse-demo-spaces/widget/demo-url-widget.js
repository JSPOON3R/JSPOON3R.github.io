// /widget/demo-url-widget.js
(async function(){
  const host = document.getElementById("demo-url-helper");
  if (!host) return;

  // Load config
  let config = { tiles: [] };
  try{
    const r = await fetch("widget/demo-url-config.json");
    if (r.ok) config = await r.json();
  }catch(e){
    console.warn("Demo URL config not found or failed:", e);
  }

  // Component DOM
  host.innerHTML = `
    <section class="duh-card">
      <div class="duh-titlebar">
        <div>
          <div class="duh-title">Create Demo Page URL</div>
          <div class="duh-sub">Pick a base page, enter your <code class="kbd">spaceId</code> and <code class="kbd">widgetKey</code>, then generate a sharable/demoable URL.</div>
        </div>
      </div>

      <div class="duh-tiles" id="duh-tiles"></div>

      <div class="duh-form" id="duh-form" data-open="false">
        <div class="duh-row">
          <div class="duh-field">
            <label for="duh-space">spaceId</label>
            <input id="duh-space" class="duh-input" placeholder="e.g. abc123" />
          </div>

          <div class="duh-field">
            <label for="duh-widget">widgetKey</label>
            <input id="duh-widget" class="duh-input" placeholder="paste your widgetKey…" />
          </div>

          <div class="duh-actions">
            <button id="duh-generate" class="duh-btn" disabled>Get Demo URL</button>
          </div>
        </div>
      </div>

      <div class="duh-result" id="duh-result">
        <div class="duh-url" id="duh-url"></div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button id="duh-copy" class="duh-copy">Copy URL</button>
          <button id="duh-open" class="duh-open">Open & Bookmark</button>
        </div>
      </div>
    </section>
  `;

  const tilesEl = host.querySelector("#duh-tiles");
  const formEl = host.querySelector("#duh-form");
  const resEl = host.querySelector("#duh-result");
  const urlEl = host.querySelector("#duh-url");
  const spaceEl = host.querySelector("#duh-space");
  const widgetEl = host.querySelector("#duh-widget");
  const genBtn = host.querySelector("#duh-generate");
  const copyBtn = host.querySelector("#duh-copy");
  const openBtn = host.querySelector("#duh-open");

  let selected = null;

  // Render tiles
  tilesEl.innerHTML = config.tiles.map(t => `
    <button class="duh-tile" data-id="${t.id}" aria-pressed="false">
      <span class="duh-icon">
        <iconify-icon icon="${t.icon || 'fa6-solid:link'}" width="20" height="20"></iconify-icon>
      </span>
      <span class="duh-label">${t.label}</span>
    </button>
  `).join("");

  // Selection
  tilesEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".duh-tile");
    if (!btn) return;
    const id = btn.dataset.id;
    selected = config.tiles.find(t => t.id === id);

    // Mark selected tile
    tilesEl.querySelectorAll(".duh-tile").forEach(b => {
      const sel = b.dataset.id === id;
      b.setAttribute("data-selected", sel ? "true" : "false");
      b.setAttribute("aria-pressed", sel ? "true" : "false");
    });

    // Reveal form
    formEl.setAttribute("data-open", "true");
    resEl.setAttribute("data-open", "false");
    urlEl.textContent = "";
    spaceEl.focus();
    validate();
  });

  // Validation
  function validate(){
    genBtn.disabled = !(spaceEl.value.trim() && widgetEl.value.trim() && selected?.url);
  }
  spaceEl.addEventListener("input", validate);
  widgetEl.addEventListener("input", validate);

  // Build URL with params, merging any existing query params
  function buildUrl(base, params){
    try{
      const u = new URL(base);
      for (const [k,v] of Object.entries(params)){
        if (v != null && String(v).length) u.searchParams.set(k, v);
      }
      return u.toString();
    }catch{
      // Fallback if base may be path-relative
      const u = new URL(window.location.href);
      u.pathname = base;
      for (const [k,v] of Object.entries(params)){
        if (v != null && String(v).length) u.searchParams.set(k, v);
      }
      return u.toString();
    }
  }

  // Generate
  genBtn.addEventListener("click", () => {
    if (!selected) return;
    const url = buildUrl(selected.url, {
      spaceId: spaceEl.value.trim(),
      widgetKey: widgetEl.value.trim()
    });
    urlEl.textContent = url;
    formEl.setAttribute("data-open", "false");
    resEl.setAttribute("data-open", "true");
  });

  // Copy
  copyBtn.addEventListener("click", async () => {
    const txt = urlEl.textContent.trim();
    if (!txt) return;
    try{
      await navigator.clipboard.writeText(txt);
      copyBtn.textContent = "Copied!";
      setTimeout(() => copyBtn.textContent = "Copy URL", 1200);
    }catch{
      // Fallback
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(urlEl);
      sel.removeAllRanges();
      sel.addRange(range);
      alert("Press Ctrl/Cmd+C to copy");
    }
  });

  // Open & Bookmark hint
  openBtn.addEventListener("click", () => {
    const txt = urlEl.textContent.trim();
    if (!txt) return;
    window.open(txt, "_blank", "noopener");
    setTimeout(() => {
      alert("Tip: press Ctrl+D (Windows) or ⌘+D (Mac) to bookmark the page.");
    }, 300);
  });
})();