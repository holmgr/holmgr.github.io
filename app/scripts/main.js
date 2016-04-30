
/* global document */
/* eslint-disable no-new */
'use strict';

class PushNav {
  constructor() {
    this.toggleButtonEl = document.querySelector('.js-menu');
    this.pushNavEl = document.querySelector('.js-push-nav');

    this.togglePushNav = this.togglePushNav.bind(this);
    this.toggleButtonEl.addEventListener('click', this.togglePushNav);
  }

  togglePushNav() {
    if (this.pushNavEl.classList.contains('push-nav__show')) {
      this.toggleButtonEl.innerHTML = 'menu';
    } else {
      this.pushNavEl.style.maxHeight = this.pushNavEl.style.height;
      this.toggleButtonEl.innerHTML = 'close';
    }
    this.pushNavEl.classList.toggle('push-nav__show');
  }
}

new PushNav();
