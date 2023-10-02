import { Coin } from '../types/Coin-type.js';
import { getAboutPage } from './About.js';
import { generateCards } from './Card.js';

const homeButton = document.getElementById('home-button');
const realTimeChartsButton = document.getElementById('real-time-charts-button');
const aboutButton = document.getElementById('about-button');

export function removeActiveClassFromLinks() {
  if (homeButton && realTimeChartsButton && aboutButton) {
    homeButton.classList.remove('active');
    realTimeChartsButton.classList.remove('active');
    aboutButton.classList.remove('active');
  }
}

export function navigationHandlers(coinData: Coin[]) {
  const homeButton = document.querySelector('#home-button');
  const realTimeChartsButton = document.querySelector(
    '#real-time-charts-button'
  );
  const aboutButton = document.querySelector('#about-button');

  if (homeButton) {
    homeButton.addEventListener('click', () => {
      if (!homeButton.classList.contains('active')) {
        removeActiveClassFromLinks();
        generateCards(coinData);
        homeButton.classList.add('active');
      }
    });
  }

  if (aboutButton) {
    aboutButton.addEventListener('click', () => {
      if (!aboutButton.classList.contains('active')) {
        removeActiveClassFromLinks();
        getAboutPage();
        aboutButton.classList.add('active');
      }
    });
  }
}
