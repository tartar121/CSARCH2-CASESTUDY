import bgmUrl from './exhibit_background_music.mp3';

class ExhibitAudio {
  constructor() {
    this.audio = null;
    this.isInitialized = false;
    this.isMuted = false;
    this.buttonEl = null;
  }

  init(volume = 0.5) {
    if (typeof window === 'undefined' || this.isInitialized) return;
    this.audio = new Audio(bgmUrl);
    this.audio.loop = true;
    this.audio.volume = Math.max(0, Math.min(1, volume));
    this.isInitialized = true;
  }

  async play() {
    if (!this.audio) this.init();
    try {
      await this.audio.play();
    } catch (err) {
      console.warn('Autoplay blocked. User interaction required.', err);
    }
  }

  toggleMute() {
    if (!this.audio) this.init();
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
    this.updateButtonUI();

    if (!this.isMuted && this.audio.paused) {
      this.play();
    }
    return this.isMuted;
  }

  createMuteButton() {
    if (typeof window === 'undefined' || this.buttonEl) return;

    const btn = document.createElement('button');
    btn.id = 'audio-mute-btn';
    btn.setAttribute('aria-label', 'Toggle Mute');
    
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      zIndex: '9999',
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: '#ffffff',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(4px)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
    });

    btn.onclick = () => this.toggleMute();
    document.body.appendChild(btn);
    this.buttonEl = btn;
    this.updateButtonUI();
  }

  updateButtonUI() {
    if (!this.buttonEl) return;
    this.buttonEl.innerHTML = this.isMuted ? '🔇' : '🔊';
  }

  enableAutoplayOnInteraction() {
    if (typeof window === 'undefined') return;
    this.createMuteButton();

    const startOnInteraction = () => {
      if (!this.isMuted) this.play();
      window.removeEventListener('click', startOnInteraction);
      window.removeEventListener('keydown', startOnInteraction);
    };

    window.addEventListener('click', startOnInteraction, { once: true });
    window.addEventListener('keydown', startOnInteraction, { once: true });
  }
}

export const exhibitAudio = new ExhibitAudio();