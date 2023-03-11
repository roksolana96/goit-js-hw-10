import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const cardEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch(elem){
    elem.preventDefault();

const name = inputEl.value.trim()

if (!name) {
  listEl.innerHTML = '';
  cardEl.innerHTML = '';
    return;
}
//  if (name === '') {
//   listEl.innerHTML = '';
//   cardEl.innerHTML = '';
//     return;
//   }

fetchCountries(name)
    .then(country => {
        listEl.innerHTML = '';
        cardEl.innerHTML = '';
      if (country.length === 1) {
        listEl.insertAdjacentHTML('beforeend', countryList(country))
        cardEl.insertAdjacentHTML('beforeend', countryInfo(country))
      } else if (country.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name');
        return;      
    } else {
        listEl.insertAdjacentHTML('beforeend', countryList(country))
      }
    })
    .catch(() => { });
}



// додаємо результат пошуку країн (список:прапора та назви країни)
  function countryList(country) {
    const markup = country
      .map(({ name, flags }) => {
        return `
            <li class="country-list__item">
                <img class="country-list__flags" src="${flags.svg}" alt="Flag of ${name.official}" width = 80px height = 50px>
                <h2 class="country-list__name">${name.official}</h2>
            </li>
            `
      })
      .join('')
    return markup
  }
// додаємо результат пошуку однієї краін (список:'countryList = (прапор, назва) ' + столиця, населення і мови.)
  function countryInfo(country) {
    const markup = country
      .map(({ capital, population, languages }) => {
        return `
          <ul class="country-info__list">
              <li class="country-info__item">Capital: <span>${capital}</span></li>
              <li class="country-info__item">Population: <span>${population}</span></li>
              <li class="country-info__item">Languages: <span>${Object.values(languages).join(', ')}</span></li>
          </ul>
          `
      })
      .join('')
    return markup
  }
