// Reference the audio file location relative to the public/static build
const bgmUrl = new URL('./exhibit_background_music.mp3', import.meta.url).href;

class ExhibitAudio {
  constructor() {
    this.audio = null;
    this.isMuted = false;
    this.buttonEl = null;
    this.isInitialized = false;
  }

  init(volume = 0.5) {
    if (typeof window === 'undefined' || this.isInitialized) return;

    this.audio = new Audio(bgmUrl);
    this.audio.loop = true;
    this.audio.volume = volume;
    this.isInitialized = true;
  }

  async play() {
    if (!this.audio) this.init();
    try {
      await this.audio.play();
    } catch (err) {
      console.warn('Autoplay blocked. Click anywhere on page to play.', err);
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
  }

  createMuteButton() {
    if (typeof window === 'undefined' || this.buttonEl) return;

    // Create the small floating button
    const btn = document.createElement('button');
    btn.id = 'audio-mute-btn';
    btn.setAttribute('aria-label', 'Toggle Mute');

    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      zIndex: '99999',
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
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      backdropFilter: 'blur(4px)'
    });

    btn.onclick = (e) => {
      e.stopPropagation();
      this.toggleMute();
    };

    document.body.appendChild(btn);
    this.buttonEl = btn;
    this.updateButtonUI();
  }

  updateButtonUI() {
    if (!this.buttonEl) return;
    this.buttonEl.innerHTML = this.isMuted ? '🔇' : '🔊';
  }

  autoStart() {
    if (typeof window === 'undefined') return;

    // Build button when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.createMuteButton());
    } else {
      this.createMuteButton();
    }

    // Play on first user interaction anywhere on the page
    const startAudio = () => {
      if (!this.isMuted) this.play();
      window.removeEventListener('click', startAudio);
      window.removeEventListener('keydown', startAudio);
    };

    window.addEventListener('click', startAudio, { once: true });
    window.addEventListener('keydown', startAudio, { once: true });
  }
}

// Automatically boot the audio engine
const exhibitAudio = new ExhibitAudio();
exhibitAudio.autoStart();

export default exhibitAudio;
