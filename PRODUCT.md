# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are friends invited to a SlopArena playtest. They need to find the demo on Steam, understand the controls and lobby flow, find other players, and report what happened after playing.

## Product Purpose

SlopArena-web turns an invitation into a completed playtest: players discover the free online PvP demo on Steam, fight friends or meet players on Discord, and send useful feedback that informs the next build.

## Positioning

SlopArena is a transparent, community-built pre-alpha. Players are invited into an unfinished platform fighter, shown its rough edges honestly, and given a direct role in making the next demo less broken.

## Operating Context

- Players arrive through a shared link before a playtest.
- The demo is presented as available on Steam; the site falls back to a Steam search URL unless `VITE_STEAM_URL` supplies a direct destination. Verify the deployed destination and actual availability before sharing widely.
- Keyboard/mouse and gamepad controls are supported in the game; players meet through the server browser and lobby.
- Discord helps players find matches; Reddit hosts public discussion, and the game repository shows its source.
- Live presence distinguishes confirmed zero players from an unavailable request.
- After playing, users can send one required message anonymously or with an optional handle. Four 1–5 ratings and favorite character are optional.

## Capabilities and Constraints

- The product is a small, chaotic free 3D online platform fighter for friends.
- The public experience supports English and French, including automatic language selection and a persistent manual switch.
- Manki and FightGuy are the current named playable characters represented on the site.
- The primary call to action points to Steam; provide a direct SlopArena destination via `VITE_STEAM_URL` when verified.
- The feedback flow requires only a nonblank message; blank name means anonymous, while four ratings can be unselected, scored, or explicitly marked `notTried`.
- The site must remain usable when live presence is unavailable.
- The project can be deployed as a Vite static site through GitHub Pages or as Docker services with nginx and the feedback API.

## Brand Commitments

Preserve the SlopArena name, Manki and FightGuy, the candid early-playtest status, and the self-aware humor about questionable balance. Preserve the free 3D fighter pitch, bilingual copy, video, keyboard/gamepad guidance, purposeful community links, presence states, and message-first feedback.

## Evidence on Hand

- `public/characters/manki.png` and `public/characters/fightguy.png`: current character artwork.
- `https://youtu.be/LFdEtBUN6wU`: the playtest video embedded in the gameplay card.
- `src/main.js`: complete English and French copy, community/access content, presence experience, and feedback form.
- `README.md`: development, deployment, Steam, feedback, and presence behavior.
- `server.js`: strict v2 feedback record contract and local newline-delimited storage.
- The gameplay card embeds the playtest video at `https://youtu.be/LFdEtBUN6wU`. There is no committed testimonial, player count, benchmark, press quote, pricing plan, or other third-party proof. Future work must not fabricate these.
- `public/social-preview.png`: 1200×630 bilingual-safe share card using the existing character renders and wordmark.

## Product Principles

1. Complete the invitation-to-feedback loop: every product decision should help friends get into a match and report what they learned.
2. Be honest about the pre-alpha: expose uncertainty and rough edges with humor rather than making unsupported polish or quality claims.
3. Make community input consequential: feedback is a core part of how the prototype improves, not a decorative contact form.
4. Keep the playtest accessible: preserve bilingual content, a short install path, resilient offline states, and practical inclusive interaction.
5. Preserve product truth over promotional convention: use real builds, characters, status, and evidence; never invent social proof.

## Accessibility & Inclusion

Maintain a practical inclusive baseline: keyboard-operable interactions, semantic structure, readable contrast, reduced-motion respect, and usable responsive layouts. English and French must remain first-class product languages. No formal accessibility certification target is currently committed.
