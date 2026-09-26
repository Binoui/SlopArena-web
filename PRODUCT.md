# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are friends invited to a SlopArena playtest. They need to get the current demo on Steam, understand the short installation flow, join one another online, and report what happened after playing.

## Product Purpose

SlopArena-web turns an invitation into a completed playtest: players get and launch the free online PvP demo on Steam, fight their friends, and send useful feedback that informs the next build. Success means that this full loop works reliably, not merely that the page receives visits or clicks.

## Positioning

SlopArena is a transparent, community-built pre-alpha. Players are invited into an unfinished platform fighter, shown its rough edges honestly, and given a direct role in making the next demo less broken.

## Operating Context

- Players arrive through a shared link before a playtest.
- The demo is distributed through Steam and installed from its Steam store page.
- A controller is highly recommended.
- Live presence can show online players and active matches; when unavailable, the page invites the visitor to bring a friend instead of presenting stale data.
- After playing, users rate fun, hit difficulty, camera awkwardness, and lock-on usefulness, can choose a favorite character, and can add optional written feedback.

## Capabilities and Constraints

- The product is a small, chaotic online platform-fighting demo for friends.
- The public experience supports English and French, including automatic language selection and a persistent manual switch.
- Manki and FightGuy are the current named playable characters represented on the site.
- The demo is free and the primary call to action must point to the SlopArena Steam store page.
- The feedback flow supports anonymous submission, requires all four ratings, and accepts optional identity, favorite-character context, and written comments.
- The site must remain usable when live presence is unavailable.
- The project can be deployed as a Vite static site through GitHub Pages or as Docker services with nginx and the feedback API.

## Brand Commitments

Preserve the SlopArena name, Manki and FightGuy, the candid pre-alpha status, and the self-aware humor about messiness, breakage, and questionable decisions. Preserve the current product facts: a free online PvP demo on Steam for fighting friends, English/French support, controller recommendation, presence information, installation guidance, and the feedback loop.

## Evidence on Hand

- `public/characters/manki.png` and `public/characters/fightguy.png`: current character artwork.
- `https://youtu.be/LFdEtBUN6wU`: the playtest video embedded in the gameplay card.
- `src/main.js`: complete English and French product copy, install flow, presence experience, and feedback questionnaire.
- `README.md`: confirmed development, deployment, Steam, feedback, and presence behavior.
- `server.js`: strict feedback record contract and local newline-delimited storage.
- The gameplay card embeds the playtest video at `https://youtu.be/LFdEtBUN6wU`. There is no committed testimonial, player count, benchmark, press quote, pricing plan, or other third-party proof. Future work must not fabricate these.

## Product Principles

1. Complete the invitation-to-feedback loop: every product decision should help friends get into a match and report what they learned.
2. Be honest about the pre-alpha: expose uncertainty and rough edges with humor rather than making unsupported polish or quality claims.
3. Make community input consequential: feedback is a core part of how the prototype improves, not a decorative contact form.
4. Keep the playtest accessible: preserve bilingual content, a short install path, resilient offline states, and practical inclusive interaction.
5. Preserve product truth over promotional convention: use real builds, characters, status, and evidence; never invent social proof.

## Accessibility & Inclusion

Maintain a practical inclusive baseline: keyboard-operable interactions, semantic structure, readable contrast, reduced-motion respect, and usable responsive layouts. English and French must remain first-class product languages. No formal accessibility certification target is currently committed.
