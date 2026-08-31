# SlopArena Web

Small download and status page for the SlopArena PvP demo.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` to override the download and feedback links.

## Docker

The nginx configuration expects the master-server container to be reachable as `sloparena-master-server:8080`. Put both containers on the same Docker network, or adjust `proxy_pass` in `nginx.conf`.

```bash
docker build -t sloparena-web .
docker run --rm -p 8081:80 sloparena-web
```

The page polls `/api/presence` every 15 seconds. Until the master server exposes `GET /internal/presence`, it gracefully displays an offline invitation.
