import './style.css'

const steamUrl = import.meta.env.VITE_STEAM_URL || 'https://store.steampowered.com/search/?term=SlopArena'
const feedbackApiUrl = import.meta.env.VITE_FEEDBACK_API_URL || '/api/feedback'
const presenceUrl = import.meta.env.VITE_PRESENCE_URL || '/api/presence'
const assetBase = import.meta.env.BASE_URL
const gameplayVideoUrl = 'https://www.youtube-nocookie.com/embed/LFdEtBUN6wU'
const languageStorageKey = 'sloparena-language'

const copy = {
  en: {
    home: 'SlopArena home',
    mainNavigation: 'Main navigation',
    play: 'PLAY',
    community: 'COMMUNITY',
    feedback: 'FEEDBACK',
    fightYour: 'FIGHT YOUR',
    friends: 'FRIENDS.',
    intro: 'A free 3D platform fighter.<br />Beat up your friends, build damage, and send them flying.<br />Early playtest. Questionable balance. Bring a friend.',
    steamCta: 'GET IT ON STEAM',
    steamCtaNote: 'FREE PVP DEMO · STEAM',
    steamCtaAria: 'Get the free SlopArena PvP demo on Steam (opens in a new tab)',
    mankiAlt: 'Manki',
    fightguyAlt: 'FightGuy',
    noBalance: 'NO BALANCE<br />GUARANTEED',
    clickThis: '↓ click this one',
    presenceChecking: "CHECKING WHO'S AROUND…",
    presenceOnline: 'ONLINE',
    slopper: 'SLOPPER',
    sloppers: 'SLOPPERS',
    match: 'MATCH',
    matches: 'MATCHES',
    happening: 'HAPPENING',
    presenceEmpty: 'NO ONE ONLINE YET',
    presenceEmptyNote: 'Bring a friend—or find a match on Discord.',
    presenceUnavailable: 'LIVE STATUS UNAVAILABLE',
    presenceUnavailableNote: 'You can still find players on Discord.',
    whatIsThis: 'WHAT IS THIS?',
    videoTitle: 'SlopArena playtest footage',
    gameplayNote: 'HIT PEOPLE. BUILD DAMAGE. SEND THEM FLYING.',
    getInSlop: 'GET IN THE SLOP',
    accessSteam: 'GET THE DEMO',
    accessSteamInstructions: 'Find the free PvP demo on Steam.',
    accessControls: 'PICK YOUR CONTROLS',
    accessControlsInstructions: 'Keyboard and mouse or gamepad—your call.',
    accessFriends: 'BRING A FRIEND',
    accessFriendsInstructions: 'Find each other in the server browser and meet in a lobby.',
    communityTitle: "DON'T HAVE SOMEONE TO FIGHT?",
    communityIntro: 'Find players, organize matches, and help shape the next playtest.',
    joinDiscord: 'JOIN THE DISCORD',
    reddit: 'Reddit ↗',
    sourceCode: 'Source code ↗',
    foundSomething: 'HOW WAS THE SLOP?',
    feedbackIntro: 'What worked? What sucked? What broke? One sentence is enough.',
    ratingsLegend: 'RATE YOUR SESSION — OPTIONAL',
    fun: 'How fun was it?',
    hitDifficulty: 'How easy was it to land hits?',
    camera: 'How comfortable was the camera?',
    lockOn: 'How useful was lock-on (automatic target focus)?',
    funLow: 'Not fun',
    funHigh: 'Great fun',
    hitDifficultyLow: 'Very hard',
    hitDifficultyHigh: 'Very easy',
    cameraLow: 'Uncomfortable',
    cameraHigh: 'Comfortable',
    lockOnLow: 'Not useful',
    lockOnHigh: 'Very useful',
    notTried: "Didn't try / Not sure",
    addDetails: 'RATE YOUR SESSION — OPTIONAL',
    optionalDetailsHint: 'Scores and favorite fighter, if you played.',
    favoriteLegend: 'FAVORITE CHARACTER — OPTIONAL',
    manki: 'Manki',
    fightguy: 'FightGuy',
    none: 'No favorite',
    unsure: 'Not sure',
    name: 'Name or Discord handle — optional',
    message: 'What worked? What sucked? What broke?',
    messagePlaceholder: 'Tell us what happened…',
    submitFeedback: 'SEND FEEDBACK',
    sending: 'SENDING…',
    retryFeedback: 'TRY AGAIN',
    messageRequired: 'Write at least one sentence before sending.',
    validationError: 'Please add a message before sending.',
    feedbackSuccess: 'Feedback received. Thank you for helping us break it better.',
    feedbackNetworkError: 'Could not reach the feedback service. Your answers are still here.',
    feedbackServiceError: 'The feedback service is unavailable. Your answers are still here.',
    feedbackRejected: 'The feedback was not accepted. Check your answers and try again.',
    footerAlpha: 'SLOPARENA · PRE-ALPHA',
    footerDecisions: 'MADE WITH QUESTIONABLE DECISIONS',
    language: 'Language',
  },
  fr: {
    home: 'Accueil SlopArena',
    mainNavigation: 'Navigation principale',
    play: 'JOUER',
    community: 'COMMUNAUTÉ',
    feedback: 'AVIS',
    fightYour: 'AFFRONTEZ VOS',
    friends: 'AMIS.',
    intro: 'Un jeu de combat de plateformes 3D gratuit.<br />Frappez vos amis, accumulez les dégâts et envoyez-les valser.<br />Playtest précoce. Équilibre douteux. Venez avec un ami.',
    steamCta: 'TÉLÉCHARGER SUR STEAM',
    steamCtaNote: 'DÉMO PVP GRATUITE · STEAM',
    steamCtaAria: 'Télécharger la démo PvP gratuite de SlopArena sur Steam (s’ouvre dans un nouvel onglet)',
    mankiAlt: 'Manki',
    fightguyAlt: 'FightGuy',
    noBalance: 'ÉQUILIBRE<br />GARANTI : NON',
    clickThis: '↓ cliquez ici',
    presenceChecking: 'VÉRIFICATION DES JOUEURS…',
    presenceOnline: 'EN LIGNE',
    slopper: 'JOUEUR',
    sloppers: 'JOUEURS',
    match: 'MATCH',
    matches: 'MATCHS',
    happening: 'EN COURS',
    presenceEmpty: 'PERSONNE EN LIGNE POUR LE MOMENT',
    presenceEmptyNote: 'Venez avec un ami ou trouvez un match sur Discord.',
    presenceUnavailable: 'STATUT EN DIRECT INDISPONIBLE',
    presenceUnavailableNote: 'Vous pouvez toujours trouver des joueurs sur Discord.',
    whatIsThis: "C'EST QUOI ?",
    videoTitle: 'Extraits du playtest SlopArena',
    gameplayNote: 'FRAPPEZ. AUGMENTEZ LES DÉGÂTS. ENVOYEZ-LES VALSER.',
    getInSlop: 'ENTREZ DANS LA BOUE',
    accessSteam: 'TROUVEZ LA DÉMO',
    accessSteamInstructions: 'La démo PvP gratuite est sur Steam.',
    accessControls: 'CHOISISSEZ VOS COMMANDES',
    accessControlsInstructions: 'Clavier et souris ou manette : à vous de choisir.',
    accessFriends: 'VENEZ AVEC UN AMI',
    accessFriendsInstructions: 'Retrouvez-vous dans la liste des serveurs, puis dans un salon.',
    communityTitle: 'PERSONNE À AFFRONTER ?',
    communityIntro: 'Trouvez des joueurs, organisez des matchs et contribuez au prochain playtest.',
    joinDiscord: 'REJOINDRE LE DISCORD',
    reddit: 'Reddit ↗',
    sourceCode: 'Code source ↗',
    foundSomething: 'ALORS, CETTE BAGARRE ?',
    feedbackIntro: 'Qu’est-ce qui a marché, déçu ou cassé ? Une phrase suffit.',
    ratingsLegend: 'NOTEZ VOTRE SESSION — FACULTATIF',
    fun: 'C’était amusant ?',
    hitDifficulty: 'Était-il facile de toucher vos adversaires ?',
    camera: 'La caméra était-elle confortable ?',
    lockOn: 'Le verrouillage (ciblage automatique) était-il utile ?',
    funLow: 'Pas amusant',
    funHigh: 'Très amusant',
    hitDifficultyLow: 'Très difficile',
    hitDifficultyHigh: 'Très facile',
    cameraLow: 'Inconfortable',
    cameraHigh: 'Confortable',
    lockOnLow: 'Inutile',
    lockOnHigh: 'Très utile',
    notTried: 'Pas essayé / Je ne sais pas',
    addDetails: 'NOTEZ VOTRE SESSION — FACULTATIF',
    optionalDetailsHint: 'Notes et combattant préféré, si vous avez joué.',
    favoriteLegend: 'PERSONNAGE PRÉFÉRÉ — FACULTATIF',
    manki: 'Manki',
    fightguy: 'FightGuy',
    none: 'Aucun préféré',
    unsure: 'Je ne sais pas',
    name: 'Nom ou pseudo Discord — facultatif',
    message: 'Qu’est-ce qui a marché, déçu ou cassé ?',
    messagePlaceholder: 'Racontez-nous ce qui s’est passé…',
    submitFeedback: 'ENVOYER L’AVIS',
    sending: 'ENVOI…',
    retryFeedback: 'RÉESSAYER',
    messageRequired: 'Écrivez au moins une phrase avant d’envoyer.',
    validationError: 'Ajoutez un message avant d’envoyer.',
    feedbackSuccess: 'Avis reçu. Merci de nous aider à mieux casser le jeu.',
    feedbackNetworkError: 'Impossible de joindre le service d’avis. Vos réponses sont toujours ici.',
    feedbackServiceError: 'Le service d’avis est indisponible. Vos réponses sont toujours ici.',
    feedbackRejected: 'Votre avis n’a pas été accepté. Vérifiez vos réponses et réessayez.',
    footerAlpha: 'SLOPARENA · PRÉ-ALPHA',
    footerDecisions: 'FAIT AVEC DES DÉCISIONS DISCUTABLES',
    language: 'Langue',
  },
}

const feedbackState = {
  name: '',
  message: '',
  ratings: { fun: '', hitDifficulty: '', camera: '', lockOn: '' },
  favoriteCharacter: '',
  status: '',
  pending: false,
}
const feedbackErrorStatuses = new Set(['feedbackNetworkError', 'feedbackServiceError', 'feedbackRejected'])

const presenceState = { status: 'checking', players: 0, matches: 0, names: [] }
let language = detectLanguage()

function detectLanguage() {
  try {
    const saved = localStorage.getItem(languageStorageKey)
    if (saved === 'en' || saved === 'fr') return saved
  } catch {
    // Storage can be unavailable in private or restricted browsing contexts.
  }
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return browserLanguages.some((value) => value?.toLowerCase().startsWith('fr')) ? 'fr' : 'en'
}

function t(key) {
  return copy[language][key]
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])
}

function ratingChoices(key, selected) {
  return `<fieldset class="rating-group">
    <legend>${t(key)}</legend>
    <div class="rating-choices">
      ${[1, 2, 3, 4, 5].map((value) => `<label><input type="radio" name="rating-${key}" data-rating="${key}" value="${value}"${selected === String(value) ? ' checked' : ''} /><span>${value}</span></label>`).join('')}
    </div>
    <div class="rating-ends"><span>${t(`${key}Low`)}</span><span>${t(`${key}High`)}</span></div>
    <label class="choice"><input type="radio" name="rating-${key}" data-rating="${key}" value="notTried"${selected === 'notTried' ? ' checked' : ''} /> ${t('notTried')}</label>
  </fieldset>`
}

function renderPresence() {
  const copyElement = document.querySelector('#presence-copy')
  const namesElement = document.querySelector('#presence-names')
  if (!copyElement || !namesElement) return
  document.querySelector('.presence').dataset.state = presenceState.status
  if (presenceState.status === 'checking') {
    copyElement.textContent = t('presenceChecking')
    namesElement.textContent = ''
  } else if (presenceState.status === 'fallback') {
    copyElement.textContent = t('presenceUnavailable')
    namesElement.textContent = t('presenceUnavailableNote')
  } else if (presenceState.players === 0) {
    copyElement.textContent = t('presenceEmpty')
    namesElement.textContent = t('presenceEmptyNote')
  } else {
    const playerLabel = presenceState.players === 1 ? t('slopper') : t('sloppers')
    const matchLabel = presenceState.matches === 1 ? t('match') : t('matches')
    copyElement.textContent = `${presenceState.players} ${playerLabel} ${t('presenceOnline')} · ${presenceState.matches} ${matchLabel} ${t('happening')}`
    namesElement.textContent = presenceState.names.join(' · ')
  }
}

function renderFeedbackStatus() {
  const status = document.querySelector('#feedback-status')
  const submit = document.querySelector('#feedback-submit')
  if (!status || !submit) return
  status.textContent = feedbackState.status ? t(feedbackState.status) : ''
  status.dataset.state = feedbackState.status
  if (feedbackErrorStatuses.has(feedbackState.status)) {
    const retry = document.createElement('button')
    retry.className = 'feedback-retry'
    retry.type = 'button'
    retry.textContent = t('retryFeedback')
    retry.addEventListener('click', () => document.querySelector('#feedback-form')?.requestSubmit())
    status.append(retry)
  }
  submit.disabled = feedbackState.pending
  submit.textContent = feedbackState.pending ? t('sending') : t('submitFeedback')
}

function render() {
  const ratings = feedbackState.ratings
  const optionalOpen = feedbackState.favoriteCharacter || Object.values(ratings).some(Boolean)
  document.documentElement.lang = language
  document.title = language === 'fr' ? 'SlopArena — Démo PvP' : 'SlopArena — PvP Demo'
  document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="brand" href="#top" aria-label="${t('home')}">SLOP<span>ARENA</span></a>
    <div class="topbar__actions">
      <nav aria-label="${t('mainNavigation')}">
        <a href="#play">${t('play')}</a>
        <a href="#community">${t('community')}</a>
        <a href="#feedback">${t('feedback')}</a>
      </nav>
      <div class="language-switch" role="group" aria-label="${t('language')}">
        <button type="button" id="language-en" aria-pressed="${language === 'en'}">🇬🇧 EN</button>
        <button type="button" id="language-fr" aria-pressed="${language === 'fr'}">🇫🇷 FR</button>
      </div>
    </div>
  </header>

  <main id="top">
    <section class="hero" id="play">
      <img class="fighter fighter--left" src="${assetBase}characters/manki.png" alt="${t('mankiAlt')}" />
      <img class="fighter fighter--right" src="${assetBase}characters/fightguy.png" alt="${t('fightguyAlt')}" />
      <div class="hero__copy">
        <h1>${t('fightYour')}<br /><em>${t('friends')}</em></h1>
        <p class="intro">${t('intro')}</p>
        <a class="download" href="${steamUrl}" target="_blank" rel="noreferrer" aria-label="${t('steamCtaAria')}">
          <span>${t('steamCta')}</span>
          <small>${t('steamCtaNote')}</small>
        </a>
      </div>
      <div class="scribble scribble--one" aria-hidden="true">${t('noBalance')}</div>
      <div class="scribble scribble--two" aria-hidden="true">${t('clickThis')}</div>
    </section>

    <section class="presence" aria-live="polite">
      <div class="presence__light"></div>
      <strong id="presence-copy"></strong>
      <span id="presence-names"></span>
    </section>

    <section class="gameplay wrap">
      <div class="section-title">
        <h2>${t('whatIsThis')}</h2>
      </div>
      <div class="video-card">
        <div class="video-frame">
          <iframe
            src="${gameplayVideoUrl}"
            title="${t('videoTitle')}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <p>${t('gameplayNote')}</p>
      </div>
    </section>

    <section class="install wrap" id="how">
      <div class="section-title">
        <h2>${t('getInSlop')}</h2>
      </div>
      <div class="access-list">
        <div><strong>${t('accessSteam')}</strong><p>${t('accessSteamInstructions')}</p></div>
        <div><strong>${t('accessControls')}</strong><p>${t('accessControlsInstructions')}</p></div>
        <div><strong>${t('accessFriends')}</strong><p>${t('accessFriendsInstructions')}</p></div>
      </div>
    </section>

    <section class="community wrap" id="community">
      <h2>${t('communityTitle')}</h2>
      <p>${t('communityIntro')}</p>
      <a class="community__cta" href="https://discord.gg/VvfaxDCF6Z" target="_blank" rel="noopener noreferrer">${t('joinDiscord')} ↗</a>
      <div class="community__links">
        <a href="https://www.reddit.com/r/sloparena" target="_blank" rel="noopener noreferrer">${t('reddit')}</a>
        <a href="https://github.com/Binoui/SlopArena" target="_blank" rel="noopener noreferrer">${t('sourceCode')}</a>
      </div>
    </section>

    <section class="feedback" id="feedback">
      <div class="feedback__intro">
        <h2 id="feedback-title">${t('foundSomething')}</h2>
        <p>${t('feedbackIntro')}</p>
      </div>
      <form class="feedback-form" id="feedback-form" aria-labelledby="feedback-title" novalidate>
        <label for="feedback-message">${t('message')} <span aria-hidden="true">*</span></label>
        <textarea id="feedback-message" name="message" rows="5" maxlength="2000" required aria-required="true" placeholder="${t('messagePlaceholder')}">${escapeHtml(feedbackState.message)}</textarea>
        <label for="feedback-name">${t('name')}</label>
        <input id="feedback-name" name="name" type="text" maxlength="80" value="${escapeHtml(feedbackState.name)}" />
        <details class="feedback-optional"${optionalOpen ? ' open' : ''}>
          <summary>
            <span>${t('addDetails')}</span>
            <small>${t('optionalDetailsHint')}</small>
          </summary>
          <div class="feedback-optional__fields">
            <fieldset class="ratings">
              <legend>${t('ratingsLegend')}</legend>
              ${ratingChoices('fun', ratings.fun)}
              ${ratingChoices('hitDifficulty', ratings.hitDifficulty)}
              ${ratingChoices('camera', ratings.camera)}
              ${ratingChoices('lockOn', ratings.lockOn)}
            </fieldset>
            <fieldset>
              <legend>${t('favoriteLegend')}</legend>
              <label class="choice"><input type="radio" name="favoriteCharacter" value="manki"${feedbackState.favoriteCharacter === 'manki' ? ' checked' : ''} /> ${t('manki')}</label>
              <label class="choice"><input type="radio" name="favoriteCharacter" value="fightguy"${feedbackState.favoriteCharacter === 'fightguy' ? ' checked' : ''} /> ${t('fightguy')}</label>
              <label class="choice"><input type="radio" name="favoriteCharacter" value="none"${feedbackState.favoriteCharacter === 'none' ? ' checked' : ''} /> ${t('none')}</label>
              <label class="choice"><input type="radio" name="favoriteCharacter" value="unsure"${feedbackState.favoriteCharacter === 'unsure' ? ' checked' : ''} /> ${t('unsure')}</label>
            </fieldset>
          </div>
        </details>
        <button class="feedback-submit" id="feedback-submit" type="submit">${feedbackState.pending ? t('sending') : t('submitFeedback')}</button>
        <div class="feedback-status" id="feedback-status" role="status" aria-live="polite" aria-atomic="true" tabindex="-1" data-state="${feedbackState.status}"></div>
      </form>
    </section>
  </main>

  <footer>
    <span>${t('footerAlpha')}</span>
    <span>${t('footerDecisions')}</span>
  </footer>
  `

  document.querySelector('#language-en').addEventListener('click', () => setLanguage('en'))
  document.querySelector('#language-fr').addEventListener('click', () => setLanguage('fr'))
  const form = document.querySelector('#feedback-form')
  form.addEventListener('input', syncField)
  form.addEventListener('change', syncField)
  form.addEventListener('submit', submitFeedback)
  renderPresence()
  renderFeedbackStatus()
}

function setLanguage(nextLanguage) {
  if (nextLanguage !== 'en' && nextLanguage !== 'fr') return
  language = nextLanguage
  try {
    localStorage.setItem(languageStorageKey, language)
  } catch {
    // The preference still applies for this page even when storage is blocked.
  }
  render()
}

function syncField(event) {
  const field = event.target
  if (field.dataset.rating) {
    feedbackState.ratings[field.dataset.rating] = field.value
  } else if (field.name === 'favoriteCharacter') {
    feedbackState.favoriteCharacter = field.value
  } else if (field.id === 'feedback-name') {
    feedbackState.name = field.value
  } else if (field.id === 'feedback-message') {
    feedbackState.message = field.value
    field.setCustomValidity(field.value.trim() ? '' : t('messageRequired'))
  }
}

function setFeedbackStatus(status, focus = false) {
  feedbackState.status = status
  renderFeedbackStatus()
  if (focus) document.querySelector('#feedback-status')?.focus()
}

async function submitFeedback(event) {
  event.preventDefault()
  const form = event.currentTarget
  const messageField = form.querySelector('#feedback-message')
  messageField.setCustomValidity(messageField.value.trim() ? '' : t('messageRequired'))
  if (!form.checkValidity()) {
    setFeedbackStatus('validationError')
    form.reportValidity()
    return
  }

  const ratings = Object.fromEntries(Object.entries(feedbackState.ratings).map(([key, value]) =>
    [key, value === '' ? null : value === 'notTried' ? value : Number(value)]))
  const payload = {
    language,
    name: feedbackState.name.trim() || null,
    message: feedbackState.message.trim(),
    ratings,
    favoriteCharacter: feedbackState.favoriteCharacter || null,
  }

  feedbackState.pending = true
  setFeedbackStatus('sending')
  try {
    const response = await fetch(feedbackApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      feedbackState.pending = false
      setFeedbackStatus(response.status === 400 ? 'feedbackRejected' : 'feedbackServiceError', true)
      return
    }
    feedbackState.pending = false
    setFeedbackStatus('feedbackSuccess')
  } catch {
    feedbackState.pending = false
    setFeedbackStatus('feedbackNetworkError', true)
  }
}

async function updatePresence() {
  try {
    const response = await fetch(presenceUrl, { signal: AbortSignal.timeout(4000) })
    if (!response.ok) throw new Error('Presence unavailable')
    const data = await response.json()
    if (!Number.isInteger(data?.onlinePlayerCount) || data.onlinePlayerCount < 0 ||
        !Number.isInteger(data?.activeMatchCount) || data.activeMatchCount < 0) {
      throw new Error('Invalid presence response')
    }
    presenceState.status = 'success'
    presenceState.players = data.onlinePlayerCount
    presenceState.matches = data.activeMatchCount
    presenceState.names = Array.isArray(data.playerNames) ? data.playerNames.map(String) : []
  } catch {
    presenceState.status = 'fallback'
    presenceState.names = []
  }
  renderPresence()
}

render()
updatePresence()
window.setInterval(updatePresence, 15000)
