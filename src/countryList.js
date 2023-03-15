// // додаємо результат пошуку країн (список:прапора та назви країни)
// export function countryList(country) {
//     const markup = country
//       .map(({ name, flags }) => {
//         return `
//             <li class="country-list__item">
//                 <img class="country-list__flags" src="${flags.svg}" alt="Flag of ${name.official}" width = 80px height = 50px>
//                 <h2 class="country-list__name">${name.official}</h2>
//             </li>
//             `
//       })
//       .join('')
//     return markup;

//   }
// // додаємо результат пошуку однієї краін (список:'countryList = (прапор, назва) ' + столиця, населення і мови.)
// export function countryInfo(country) {
//     const markup = country
//       .map(({ capital, population, languages }) => {
//         return `
//           <ul class="country-info__list">
//               <li class="country-info__item">Capital: <span>${capital}</span></li>
//               <li class="country-info__item">Population: <span>${population}</span></li>
//               <li class="country-info__item">Languages: <span>${Object.values(languages).join(', ')}</span></li>
//           </ul>
//           `
//       })
//       .join('')
//     return markup
//   }
