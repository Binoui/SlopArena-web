import './style.css'

const downloadUrl = import.meta.env.VITE_DOWNLOAD_URL || 'https://github.com/Binoui/SlopArena/releases/latest'
const feedbackApiUrl = import.meta.env.VITE_FEEDBACK_API_URL || '/api/feedback'
const presenceUrl = import.meta.env.VITE_PRESENCE_URL || '/api/presence'
const assetBase = import.meta.env.BASE_URL
const languageStorageKey = 'sloparena-language'

const copy = {
  en: {
    home: 'SlopArena home',
    mainNavigation: 'Main navigation',
    play: 'PLAY',
    install: 'INSTALL',
    feedback: 'FEEDBACK',
    seriousGame: 'A VERY SERIOUS FIGHTING GAME',
    fightYour: 'FIGHT YOUR',
    friends: 'FRIENDS.',
    intro: 'SlopArena is a small, messy platform fighter.<br />This is the first online PvP demo. It will break.',
    downloadDemo: 'DOWNLOAD PVP DEMO',
    downloadNote: 'WINDOWS BUILD · GITHUB RELEASES',
    downloadAria: 'Download the Windows PvP demo from GitHub Releases (opens in a new tab)',
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
    presenceFallback: 'SERVERS ARE QUIET RIGHT NOW',
    presenceFallbackNote: 'Grab someone and start a fight.',
    whatIsThis: 'WHAT IS THIS?',
    gameplayComing: 'GAMEPLAY FOOTAGE<br />NOT READY YET',
    gameplayNote: 'HIT PEOPLE. BUILD DAMAGE. SEND THEM FLYING.',
    getInSlop: 'GET IN THE SLOP',
    download: 'DOWNLOAD',
    downloadInstructions: 'Grab the latest Windows build from GitHub Releases.',
    unzip: 'UNZIP',
    unzipInstructions: "Put it wherever. We don't care.",
    runGame: 'RUN SLOPARENA.EXE',
    runInstructions: 'Windows may complain. Classic Windows. Probably safe.',
    controller: 'CONTROLLER HIGHLY RECOMMENDED',
    foundSomething: 'FOUND SOMETHING STUPID?',
    tellMe: 'TELL ME WHAT<br />BROKE.',
    feedbackIntro: 'Help make the next demo less broken.',
    ratingsLegend: 'RATE THE DEMO',
    fun: 'How fun was it?',
    hitDifficulty: 'How difficult was it to land hits?',
    camera: 'How awkward was the camera?',
    lockOn: 'How useful was lock-on (automatic target focus)?',
    rating1: '1 — Not at all',
    rating2: '2 — A little',
    rating3: '3 — Somewhat',
    rating4: '4 — A lot',
    rating5: '5 — Extremely',
    chooseRating: 'Choose a rating',
    addDetails: 'ADD OPTIONAL DETAILS',
    optionalDetailsHint: 'Favorite fighter, name, and comments.',
    favoriteLegend: 'FAVORITE CHARACTER',
    manki: 'Manki',
    fightguy: 'FightGuy',
    none: 'No favorite',
    unsure: 'Not sure',
    anonymous: 'Send anonymously',
    name: 'Name (optional)',
    anonymousHint: 'Your name is disabled while anonymous.',
    favoriteReason: 'Why is this your favorite? (optional)',
    generalFeedback: 'Anything else? (optional)',
    favoriteReasonPlaceholder: 'Tell us why…',
    generalFeedbackPlaceholder: 'Bugs, ideas, and questionable opinions…',
    submitFeedback: 'SEND FEEDBACK',
    sending: 'SENDING…',
    retryFeedback: 'TRY AGAIN',
    ratingRequired: 'Please choose a rating from 1 to 5.',
    validationError: 'Please complete each required rating.',
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
    install: 'INSTALLER',
    feedback: 'AVIS',
    seriousGame: 'UN JEU DE COMBAT TRÈS SÉRIEUX',
    fightYour: 'AFFRONTEZ VOS',
    friends: 'AMIS.',
    intro: 'SlopArena est un jeu de combat de plateformes petit et chaotique.<br />Voici la première démo PvP en ligne. Elle va casser.',
    downloadDemo: 'TÉLÉCHARGER LA DÉMO PVP',
    downloadNote: 'VERSION WINDOWS · GITHUB RELEASES',
    downloadAria: 'Télécharger la démo PvP Windows depuis GitHub Releases (s’ouvre dans un nouvel onglet)',
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
    presenceFallback: 'LES SERVEURS SONT CALMES',
    presenceFallbackNote: 'Trouvez quelqu’un et lancez un combat.',
    whatIsThis: "C'EST QUOI ?",
    gameplayComing: 'EXTRAIT DE JEU<br />PAS ENCORE PRÊT',
    gameplayNote: 'FRAPPEZ. AUGMENTEZ LES DÉGÂTS. ENVOYEZ-LES VALSER.',
    getInSlop: 'ENTREZ DANS LA BOUE',
    download: 'TÉLÉCHARGER',
    downloadInstructions: 'Récupérez la dernière version Windows sur GitHub Releases.',
    unzip: 'DÉCOMPRESSER',
    unzipInstructions: 'Mettez-la où vous voulez. Peu importe.',
    runGame: 'LANCER SLOPARENA.EXE',
    runInstructions: 'Windows peut se plaindre. Du Windows classique. Probablement sûr.',
    controller: 'MANETTE VIVEMENT RECOMMANDÉE',
    foundSomething: 'TROUVÉ QUELQUE CHOSE DE BIZARRE ?',
    tellMe: 'DITES-MOI CE QUI<br />A CASSÉ.',
    feedbackIntro: 'Aidez-nous à rendre la prochaine démo moins cassée.',
    ratingsLegend: 'NOTEZ LA DÉMO',
    fun: 'À quel point était-ce amusant ?',
    hitDifficulty: 'Quelle était la difficulté pour toucher ?',
    camera: 'À quel point la caméra était-elle gênante ?',
    lockOn: 'Quelle était l’utilité du verrouillage (ciblage automatique) ?',
    rating1: '1 — Pas du tout',
    rating2: '2 — Un peu',
    rating3: '3 — Moyennement',
    rating4: '4 — Beaucoup',
    rating5: '5 — Énormément',
    chooseRating: 'Choisissez une note',
    addDetails: 'AJOUTER DES DÉTAILS FACULTATIFS',
    optionalDetailsHint: 'Combattant préféré, nom et commentaires.',
    favoriteLegend: 'PERSONNAGE PRÉFÉRÉ',
    manki: 'Manki',
    fightguy: 'FightGuy',
    none: 'Aucun préféré',
    unsure: 'Je ne sais pas',
    anonymous: 'Envoyer anonymement',
    name: 'Nom (facultatif)',
    anonymousHint: 'Votre nom est désactivé en mode anonyme.',
    favoriteReason: 'Pourquoi est-ce votre préféré ? (facultatif)',
    generalFeedback: 'Autre chose ? (facultatif)',
    favoriteReasonPlaceholder: 'Dites-nous pourquoi…',
    generalFeedbackPlaceholder: 'Bugs, idées et opinions discutables…',
    submitFeedback: 'ENVOYER L’AVIS',
    sending: 'ENVOI…',
    retryFeedback: 'RÉESSAYER',
    ratingRequired: 'Choisissez une note de 1 à 5.',
    validationError: 'Veuillez remplir chaque note obligatoire.',
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
  anonymous: true,
  name: '',
  ratings: { fun: '', hitDifficulty: '', camera: '', lockOn: '' },
  favoriteCharacter: '',
  favoriteReason: '',
  generalFeedback: '',
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

function ratingOptions(selected) {
  return [`<option value="">${t('chooseRating')}</option>`, ...[1, 2, 3, 4, 5].map((value) => `<option value="${value}"${selected === String(value) ? ' selected' : ''}>${t(`rating${value}`)}</option>`)].join('')
}

function renderPresence() {
  const copyElement = document.querySelector('#presence-copy')
  const namesElement = document.querySelector('#presence-names')
  if (!copyElement || !namesElement) return
  if (presenceState.status === 'checking') {
    copyElement.textContent = t('presenceChecking')
    namesElement.textContent = ''
  } else if (presenceState.status === 'fallback') {
    copyElement.textContent = t('presenceFallback')
    namesElement.textContent = t('presenceFallbackNote')
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
  const optionalOpen = !feedbackState.anonymous || feedbackState.favoriteCharacter || feedbackState.favoriteReason || feedbackState.generalFeedback
  document.documentElement.lang = language
  document.title = language === 'fr' ? 'SlopArena — Démo PvP' : 'SlopArena — PvP Demo'
  document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="brand" href="#top" aria-label="${t('home')}">SLOP<span>ARENA</span></a>
    <div class="topbar__actions">
      <nav aria-label="${t('mainNavigation')}">
        <a href="#play">${t('play')}</a>
        <a href="#how">${t('install')}</a>
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
        <p class="eyebrow">${t('seriousGame')}</p>
        <h1>${t('fightYour')}<br /><em>${t('friends')}</em></h1>
        <p class="intro">${t('intro')}</p>
        <a class="download" href="${downloadUrl}" target="_blank" rel="noreferrer" aria-label="${t('downloadAria')}">
          <span>${t('downloadDemo')}</span>
          <small>${t('downloadNote')}</small>
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
        <span>01</span>
        <h2>${t('whatIsThis')}</h2>
      </div>
      <div class="video-card">
        <div class="video-placeholder">
          <strong>${t('gameplayComing')}</strong>
        </div>
        <p>${t('gameplayNote')}</p>
      </div>
    </section>

    <section class="install wrap" id="how">
      <div class="section-title">
        <span>02</span>
        <h2>${t('getInSlop')}</h2>
      </div>
      <ol>
        <li><b>01</b><span><strong>${t('download')}</strong><small>${t('downloadInstructions')}</small></span></li>
        <li><b>02</b><span><strong>${t('unzip')}</strong><small>${t('unzipInstructions')}</small></span></li>
        <li><b>03</b><span><strong>${t('runGame')}</strong><small>${t('runInstructions')}</small></span></li>
      </ol>
      <p class="controller-note">${t('controller')}</p>
    </section>

    <section class="feedback" id="feedback">
      <div class="feedback__intro">
        <p class="eyebrow">${t('foundSomething')}</p>
        <h2 id="feedback-title">${t('tellMe')}</h2>
        <p>${t('feedbackIntro')}</p>
      </div>
      <form class="feedback-form" id="feedback-form" aria-labelledby="feedback-title" novalidate>
        <fieldset>
          <legend>${t('ratingsLegend')}</legend>
          <label for="rating-fun">${t('fun')} <span aria-hidden="true">*</span></label>
          <select id="rating-fun" data-rating="fun" required aria-required="true">${ratingOptions(ratings.fun)}</select>
          <label for="rating-hitDifficulty">${t('hitDifficulty')} <span aria-hidden="true">*</span></label>
          <select id="rating-hitDifficulty" data-rating="hitDifficulty" required aria-required="true">${ratingOptions(ratings.hitDifficulty)}</select>
          <label for="rating-camera">${t('camera')} <span aria-hidden="true">*</span></label>
          <select id="rating-camera" data-rating="camera" required aria-required="true">${ratingOptions(ratings.camera)}</select>
          <label for="rating-lockOn">${t('lockOn')} <span aria-hidden="true">*</span></label>
          <select id="rating-lockOn" data-rating="lockOn" required aria-required="true">${ratingOptions(ratings.lockOn)}</select>
        </fieldset>
        <details class="feedback-optional"${optionalOpen ? ' open' : ''}>
          <summary>
            <span>${t('addDetails')}</span>
            <small>${t('optionalDetailsHint')}</small>
          </summary>
          <div class="feedback-optional__fields">
            <fieldset>
              <legend>${t('favoriteLegend')}</legend>
              <label class="choice"><input type="radio" name="favoriteCharacter" value="manki"${feedbackState.favoriteCharacter === 'manki' ? ' checked' : ''} /> ${t('manki')}</label>
              <label class="choice"><input type="radio" name="favoriteCharacter" value="fightguy"${feedbackState.favoriteCharacter === 'fightguy' ? ' checked' : ''} /> ${t('fightguy')}</label>
              <label class="choice"><input type="radio" name="favoriteCharacter" value="none"${feedbackState.favoriteCharacter === 'none' ? ' checked' : ''} /> ${t('none')}</label>
              <label class="choice"><input type="radio" name="favoriteCharacter" value="unsure"${feedbackState.favoriteCharacter === 'unsure' ? ' checked' : ''} /> ${t('unsure')}</label>
            </fieldset>
            <label class="choice anonymous"><input type="checkbox" id="anonymous"${feedbackState.anonymous ? ' checked' : ''} /> ${t('anonymous')}</label>
            <label for="feedback-name">${t('name')}</label>
            <input id="feedback-name" name="name" type="text" maxlength="80" value="${escapeHtml(feedbackState.name)}"${feedbackState.anonymous ? ' disabled' : ''} aria-describedby="anonymous-hint" />
            <small id="anonymous-hint" class="field-hint">${t('anonymousHint')}</small>
            <label for="favorite-reason">${t('favoriteReason')}</label>
            <textarea id="favorite-reason" name="favoriteReason" rows="2" maxlength="2000" placeholder="${t('favoriteReasonPlaceholder')}">${escapeHtml(feedbackState.favoriteReason)}</textarea>
            <label for="general-feedback">${t('generalFeedback')}</label>
            <textarea id="general-feedback" name="generalFeedback" rows="3" maxlength="2000" placeholder="${t('generalFeedbackPlaceholder')}">${escapeHtml(feedbackState.generalFeedback)}</textarea>
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
  form.addEventListener('change', (event) => {
    syncField(event)
    if (event.target.id === 'anonymous') updateNameField()
  })
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
    field.setCustomValidity(field.value ? '' : t('ratingRequired'))
  } else if (field.id === 'anonymous') {
    feedbackState.anonymous = field.checked
  } else if (field.name === 'favoriteCharacter') {
    feedbackState.favoriteCharacter = field.value
  } else if (field.id === 'feedback-name') {
    feedbackState.name = field.value
  } else if (field.id === 'favorite-reason') {
    feedbackState.favoriteReason = field.value
  } else if (field.id === 'general-feedback') {
    feedbackState.generalFeedback = field.value
  }
}

function updateNameField() {
  const nameField = document.querySelector('#feedback-name')
  if (!nameField) return
  nameField.disabled = feedbackState.anonymous
  if (feedbackState.anonymous) {
    feedbackState.name = ''
    nameField.value = ''
  }
}

function setFeedbackStatus(status, focus = false) {
  feedbackState.status = status
  renderFeedbackStatus()
  if (focus) document.querySelector('#feedback-status')?.focus()
}

function validateRatings(form) {
  let valid = true
  form.querySelectorAll('[data-rating]').forEach((field) => {
    field.setCustomValidity(field.value ? '' : t('ratingRequired'))
    if (!field.value) valid = false
  })
  return valid
}

async function submitFeedback(event) {
  event.preventDefault()
  const form = event.currentTarget
  syncField({ target: form.querySelector('#anonymous') })
  if (!validateRatings(form) || !form.checkValidity()) {
    setFeedbackStatus('validationError')
    form.reportValidity()
    return
  }

  const ratings = Object.fromEntries(Object.entries(feedbackState.ratings).map(([key, value]) => [key, Number(value)]))
  if (!Object.values(ratings).every((value) => Number.isInteger(value) && value >= 1 && value <= 5)) {
    setFeedbackStatus('validationError')
    return
  }

  const payload = {
    language,
    anonymous: feedbackState.anonymous,
    name: feedbackState.anonymous ? null : feedbackState.name.trim() || null,
    ratings,
    favoriteCharacter: feedbackState.favoriteCharacter || null,
    favoriteReason: feedbackState.favoriteReason.trim() || null,
    generalFeedback: feedbackState.generalFeedback.trim() || null,
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
    presenceState.status = 'success'
    presenceState.players = Number(data.onlinePlayerCount) || 0
    presenceState.matches = Number(data.activeMatchCount) || 0
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
