const template = document.createElement('template');
template.innerHTML = `
  <style>

    :host {
      --bg: #000;

      display: inline-block;
      width: 56px;
      height: 28px;
      cursor: pointer;
    }

    :host([aria-checked="true"]) {
      --bg: #333;
    }

    span {
      box-sizing: border-box;
      display: inline-block;
      line-height: 1;
    }

    [part="track"] {
      width: 100%;
      height: 100%;
      background-color: var(--bg);
      text-align: left;
      border-radius: 9999rem;
    }

    [part="slider"] {
      position: absolute;
      width: 50%;
      height: 100%;
      background-color: var(--highlight-main);
      vertical-align: text-top;
      border-radius: 9999rem;
    }

    [part="track"], [part="slider"] {
      transition: all 256ms;
    }

    [part="indicators"] {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      gap: 8px;
    }

    [part="light"], [part="dark"] {
      display: block;
      width: 1rem;
      height: auto;
    }

    [part="light"] {
      color: white;
    }

    [part="dark"] {
      color: white;
    }

    :host([aria-checked="true"]) [part="slider"] {
      transform: translateX(100%);
    }
  </style>

  <span part="track">
    <span part="slider"></span>
    <div part="indicators">
    <svg part="light" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path></svg>
    <svg part="dark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path></svg>
    </div>
  </span>
`;

export class ToggleTheme extends HTMLElement {
  static elementName = 'toggle-theme';

  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.setAttribute('role', 'switch');
    this.setAttribute('tabindex', '0');
    this.addEventListener('click', this.toggle);
    this.setAttribute('aria-checked', this.isChecked().toString());
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.toggle);
  }

  getTheme() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  isChecked() {
    return this.getTheme() === 'dark';
  }

  toggle = () => {
    const theme = !this.isChecked() ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    this.setAttribute('aria-checked', this.isChecked().toString());
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };
}

window.customElements.define(ToggleTheme.elementName, ToggleTheme);
