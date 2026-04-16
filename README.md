# Techviora website (static)

React SPA in `frontend/`. The Python `backend/` is not used for static hosting.

## Where is `index.html`?

There is **no** `index.html` in the **repository root** (what you see on GitHub or in a fresh clone). That is normal.

| Location | What it is |
|----------|------------|
| `frontend/public/index.html` | HTML **template** used when you run the build |
| `frontend/dist/index.html` | **Real** entry file for the server — created **only** after `npm run build` |

Hostinger’s `public_html` must get the **files inside `frontend/dist/`**, including `index.html`, `.htaccess`, and the `static/` folder. Do **not** upload only the repo root (no `dist` yet = no site entry file on the server).

## Build

From the repository root:

```bash
npm install
npm run build
```

After a successful build, `frontend/dist/` should look like:

```text
frontend/dist/
├── .htaccess
├── index.html          ← entry point for Apache
├── asset-manifest.json
└── static/
    ├── css/
    └── js/
```

Upload **everything inside `dist/`** to `public_html` (merge/replace).

## Develop

```bash
cd frontend && npm start
```
