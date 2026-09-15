# SlopArena Web

Small download and status page for the SlopArena PvP demo.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` to override the download, feedback API, and presence URLs.

## Feedback API

The feedback form submits validated JSON to `POST /api/feedback`. The API stores one
normalized record per line in `data/feedback.ndjson` by default. Set `DATA_DIR` to a
persistent volume in deployments. `GET /health` provides a container health check.

## Docker

The default image serves the static site through nginx. The Compose file also builds
the dependency-free feedback API and persists its data in a named volume:

```bash
docker compose up -d --build
```

The Compose web service binds to `127.0.0.1:8081`, ready for a reverse proxy or
Cloudflare tunnel. Standalone nginx deployments still expect the master server at
`sloparena-master-server:8080` for `/api/presence`. Until the master server exposes
`GET /internal/presence`, the page gracefully displays an offline invitation.

## GitHub Pages

Pushes to `main` deploy automatically through GitHub Actions. In **Settings → Pages**,
select **GitHub Actions** as the source once. The project is served from
`/SlopArena-web/`.

Optional repository variables `VITE_DOWNLOAD_URL`, `VITE_FEEDBACK_API_URL`, and
`VITE_PRESENCE_URL` configure the deployed page. The feedback and presence URLs must
be publicly reachable over HTTPS when the frontend is hosted on GitHub Pages.
