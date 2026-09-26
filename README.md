# SlopArena Web

Small bilingual landing and status page for the SlopArena 3D PvP playtest, with Discord/Reddit/community links and direct feedback.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` to override the Steam, feedback API, and presence URLs.

## Feedback API

The form submits `{language, name, message, ratings, favoriteCharacter}` as JSON to
`POST /api/feedback`. A nonblank message (up to 2000 characters) is required; name
is optional (blank means anonymous). Each of the four rating values is either an
integer from 1 to 5, `null` (unanswered), or `"notTried"` (explicit skip).
The API strictly rejects unknown fields and stores version 2 normalized records
in `data/feedback.ndjson` by default. Set `DATA_DIR` to a persistent volume.
`GET /health` provides a container health check.

## Docker

The default image serves the static site through nginx. The Compose file also builds
the dependency-free feedback API and persists its data in a named volume:

```bash
docker compose up -d --build
```

The Compose web service binds to `127.0.0.1:8081`, ready for a reverse proxy or
Cloudflare tunnel. Standalone nginx deployments still expect the master server at
`sloparena-master-server:8080` for `/api/presence`. Until the master server exposes
`GET /internal/presence`, the page shows live status unavailable rather than zero players.

## GitHub Pages

Pushes to `main` deploy automatically through GitHub Actions. In **Settings → Pages**,
select **GitHub Actions** as the source once. The project is served from
`/SlopArena-web/`.

Optional repository variables `VITE_STEAM_URL`, `VITE_FEEDBACK_API_URL`, and
`VITE_PRESENCE_URL` configure the deployed page. The feedback and presence URLs must
be publicly reachable over HTTPS when the frontend is hosted on GitHub Pages.

Deploy the updated feedback API before the new static site: the old API requires four
ratings and rejects the new message field. No compatibility shim is included.
Before sharing the site, set `VITE_STEAM_URL` to the verified direct SlopArena page:
without it the primary button goes to generic Steam search despite its demo wording.
The social preview metadata uses `https://sloparena.barakaslurp.fr/social-preview.png`;
that hostname must serve the deployed `public/social-preview.png` asset for previews.
