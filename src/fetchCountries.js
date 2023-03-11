import { Notify } from "notiflix";

export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then(response  => {
    if (response.status === 404) {
      throw new Error(Notify.failure('Oops, there is no country with that name'));
    }
    return response.json();
  });
}

// const BASE_URL = 'https://restcountries.com/v3.1';

// export function fetchCountries(name) {
//   return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => {
//     if (response.status === 404) {
//       throw new Error(Notify.failure('Oops, there is no country with that name'));
//     }
//     return response.json();
//   });
// }




// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов


