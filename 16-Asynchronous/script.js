'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const renderCountry = function (data, className = ''){
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region"${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
//       </div>
//     </article>
//     `
//   countriesContainer.insertAdjacentHTML('beforeend', html)
// }

// const renderError = function(msg){
//   countriesContainer.insertAdjacentText('beforeend', msg)
// }

// btn.addEventListener('click', ()=>getCountryData('Canada'))


// const getJSON = function (url,errorMsg = 'something went wrong'){
//   return fetch(url).then(response=>{
//     if(!response.ok) throw new Error(`${errorMsg} (${response.status})`)
//   return response.json()
//   })

// Old AJAX Call

// const getCountryAndNeighbor = function(country){
//   // AJAX call country 1
//   const request = new XMLHttpRequest()
//   request.open('GET',`https://restcountries.com/v3.1/name/${country}`)
//   request.send()
//   request.addEventListener('load',function(){
//     const [data] = JSON.parse(this.responseText)

//     // Render Country (2)
//     renderCountry(data)

//     // Get neighbor 
//     const [neighbor] = data.borders
//     if(!neighbor) return 
//     console.log(neighbor)

//     // AJAX neighbor country 2
//     const request2 = new XMLHttpRequest()
//     request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbor}`)
//     request2.send()
//     request2.addEventListener('load',function(){
//       const [data2] = JSON.parse(this.responseText)
//       renderCountry(data2, 'neighbour')
//     })
//   })
// }

// getCountryAndNeighbor('Ethiopia')
// getCountryAndNeighbor('USA')

// setTimeout(()=>{
//   console.log()
// },5000)


// const countryData = country => fetch(`https://restcountries.com/v3.1/name/${country}`).then(res=>res.json()).then(data=>console.log(data))

// }

// Improved Version 

// const getCountryData = function(country){
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(response=>{
//     if(!response.ok)
//     throw new Error(`Country Not Found ${response.status}`)
    
//     return response.json()
//   })
  // .then(data=>{
  //   renderCountry(data[0])
  //   const neighbor = data[0].borders[0]
    
  //   if(!neighbor) return;
    
  //   // Country neighbor fetch
  //   return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
  // })
  // .then(response=>response.json())
  // .then(data=>renderCountry(data[0], 'neighbour'))
  // .catch(err=>renderError(`something went wrong-- ${err.message}--Try Again`))
  // .finally(()=>countriesContainer.style.opacity = 1)
// }

// using a fetch function
// const getCountryData = function (country){
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country Not Found')
//     .then(data=>{
//       renderCountry(data[0])
//       const neighbor = data[0].borders[0]
      
//       if(!neighbor) throw new Error('No neighbor found!')
      
//       // Country neighbor fetch
//       console.log(data[0].borders[0])
//       return getJSO
//         `https://restcountries.com/v2/alpha/${neighbor}`, 
//         'Country Not Found'
//         )
//     })
//     .then(data=>renderCountry(data, 'neighbour'))
//     .catch(err=>{
//       renderError(err.message)
//     })
//     .finally(()=>countriesContainer.style.opacity = 1)
// }

// console.log('Test Start')
// setTimeout(()=>console.log('0 sec timeout'),0)
// Promise.resolve('Resolved promise 1').then(res=>console.log(res))
// console.log('Test end')

new promis 
