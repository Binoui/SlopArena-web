import './style.css'

const downloadUrl = import.meta.env.VITE_DOWNLOAD_URL || 'https://github.com/Binoui/SlopArena/releases/latest'
const feedbackUrl = import.meta.env.VITE_FEEDBACK_URL || 'mailto:sloparena.feedback@gmail.com?subject=SlopArena%20demo%20feedback'

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="brand" href="#top" aria-label="SlopArena home">SLOP<span>ARENA</span></a>
    <nav aria-label="Main navigation">
      <a href="#play">PLAY</a>
      <a href="#how">INSTALL</a>
      <a href="#feedback">FEEDBACK</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" id="play">
      <img class="fighter fighter--left" src="/characters/manki.png" alt="Manki" />
      <img class="fighter fighter--right" src="/characters/fightguy.png" alt="FightGuy" />

      <div class="hero__copy">
        <p class="eyebrow">A VERY SERIOUS FIGHTING GAME</p>
        <h1>FIGHT YOUR<br /><em>FRIENDS.</em></h1>
        <p class="intro">SlopArena is a small, messy platform fighter.<br />This is the first online PvP demo. It will break.</p>
        <a class="download" href="${downloadUrl}" target="_blank" rel="noreferrer">
          <span>DOWNLOAD PVP DEMO</span>
          <small>WINDOWS · FREE · PROBABLY SAFE</small>
        </a>
      </div>

      <div class="scribble scribble--one" aria-hidden="true">NO BALANCE<br />GUARANTEED</div>
      <div class="scribble scribble--two" aria-hidden="true">↓ click this one</div>
    </section>

    <section class="presence" aria-live="polite">
      <div class="presence__light"></div>
      <strong id="presence-copy">CHECKING WHO'S AROUND…</strong>
      <span id="presence-names"></span>
    </section>

    <section class="gameplay wrap">
      <div class="section-title">
        <span>01</span>
        <h2>WHAT IS THIS?</h2>
      </div>
      <div class="video-card">
        <div class="video-placeholder">
          <span class="play-icon">▶</span>
          <strong>GAMEPLAY CLIP<br />COMING SOON</strong>
        </div>
        <p>HIT PEOPLE. BUILD DAMAGE. SEND THEM FLYING.</p>
      </div>
    </section>

    <section class="install wrap" id="how">
      <div class="section-title">
        <span>02</span>
        <h2>GET IN THE SLOP</h2>
      </div>
      <ol>
        <li><b>01</b><span><strong>DOWNLOAD</strong><small>Grab the latest Windows build.</small></span></li>
        <li><b>02</b><span><strong>UNZIP</strong><small>Put it wherever. We don't care.</small></span></li>
        <li><b>03</b><span><strong>RUN SLOPARENA.EXE</strong><small>Windows may complain. Classic Windows.</small></span></li>
      </ol>
      <p class="controller-note">CONTROLLER HIGHLY RECOMMENDED</p>
    </section>

    <section class="feedback" id="feedback">
      <div>
        <p class="eyebrow">FOUND SOMETHING STUPID?</p>
        <h2>TELL ME WHAT<br />BROKE.</h2>
      </div>
      <a href="${feedbackUrl}" target="_blank" rel="noreferrer">SEND FEEDBACK <span>↗</span></a>
    </section>
  </main>

  <footer>
    <span>SLOPARENA · PRE-ALPHA</span>
    <span>MADE WITH QUESTIONABLE DECISIONS</span>
  </footer>
`

async function updatePresence() {
  const copy = document.querySelector('#presence-copy')
  const names = document.querySelector('#presence-names')

  try {
    const response = await fetch('/api/presence', { signal: AbortSignal.timeout(4000) })
    if (!response.ok) throw new Error('Presence unavailable')
    const data = await response.json()
    const players = Number(data.onlinePlayerCount) || 0
    const matches = Number(data.activeMatchCount) || 0
    copy.textContent = `${players} SLOPPER${players === 1 ? '' : 'S'} ONLINE · ${matches} MATCH${matches === 1 ? '' : 'ES'} HAPPENING`
    names.textContent = Array.isArray(data.playerNames) ? data.playerNames.join(' · ') : ''
  } catch {
    copy.textContent = 'SERVERS ARE QUIET RIGHT NOW'
    names.textContent = 'Grab someone and start a fight.'
  }
}

updatePresence()
window.setInterval(updatePresence, 15000)
