/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Web Audio API ambient praise synthesizer
class WorshipAtmosphere {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];
  private gainNodes: GainNode[] = [];
  private masterGain: GainNode | null = null;

  // D Major / B Minor ethereal worship pad chord: D3, A3, D4, F#4, A4, C#5
  private frequencies = [146.83, 220.00, 293.66, 369.99, 440.00, 554.37];

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Lowpass filter for warm, heavenly celestial sound
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.5, this.ctx.currentTime);
      filter.connect(this.masterGain);

      // Create shimmering pad oscillators with slight detune
      this.frequencies.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const voiceGain = this.ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // subtle pitch detune for rich choir/pad chorus feel
        const detuneAmount = (idx - 2.5) * 6;
        osc.detune.setValueAtTime(detuneAmount, this.ctx.currentTime);

        voiceGain.gain.setValueAtTime(0.15 / this.frequencies.length, this.ctx.currentTime);

        osc.connect(voiceGain);
        voiceGain.connect(filter);
        osc.start();

        this.oscillators.push(osc);
        this.gainNodes.push(voiceGain);
      });

      this.isPlaying = true;
    } catch (e) {
      console.warn('AudioContext not supported or blocked', e);
      this.isPlaying = false;
    }
  }

  public stop() {
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        this.oscillators = [];
        this.gainNodes = [];
        this.isPlaying = false;
      }, 1500);
    } else {
      this.isPlaying = false;
    }
  }
}

export const worshipAudio = new WorshipAtmosphere();
