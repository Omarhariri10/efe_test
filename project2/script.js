const BASE_URL = 'https://countriesnow.space/api/v0.1/countries'
let countryList = document.querySelector('#countryList')

let dialCode = document.querySelector('#dialCode')
let currency = document.querySelector('#currency')
let capital = document.querySelector('#capital')
let flag = document.querySelector('#flag')
let iso2 = document.querySelector('#iso2')
let iso3 = document.querySelector('#iso3')

let getCountries = async () => {
  let data = await fetch(BASE_URL).then(response => response.json())
  const countries = data.data
  countries.forEach((country) => {
    let option = document.createElement("option")
    option.appendChild(document.createTextNode(`${country.country}`))
    countryList.appendChild(option)
  })
}

let getDialCode = async () => {
  dialCode.innerHTML = 'Fetching...'

  const country = document.getElementById("countryList").value
  const payload = { country }

  const response = await fetch(`${BASE_URL}/codes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload)
  }).then(response => response.json())

  if (!response.error) {
    let { data } = response
    dialCode.innerHTML = `Dial Code for ${country}: ${data.dial_code}`
    return
  }
  dialCode.innerHTML = 'We could not get that'

  
};

let getCurrencies = async () => {
  currency.innerHTML = 'Fetching...'

  const country = document.getElementById("countryList").value
  const payload = { country }

  const response = await fetch(`${BASE_URL}/currency`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload)
  }).then(response => response.json())

  if (!response.error) {
    let { data } = response
    currency.innerHTML = `currency for ${country}: ${data.currency}`
    return
  }
  currency.innerHTML = 'We could not get that'
}


let getCapital = async () => {
  capital.innerHTML = 'Fetching...'

  const country = document.getElementById("countryList").value
  const payload = { country }

  const response = await fetch(`${BASE_URL}/capital`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload)
  }).then(response => response.json())

  if (!response.error) {
    let { data } = response
    capital.innerHTML = `capital for ${country}: ${data.capital}`
    return
  }
  capital.innerHTML = 'We could not get that'
}

let getIso2 = async () => {
  flag.innerHTML = 'Fetching...'

  const country = document.getElementById("countryList").value
  const payload = { country }

  const response = await fetch(`${BASE_URL}/iso`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload)
  }).then(response => response.json())

  if (!response.error) {
    let { data } = response
    iso2.innerHTML = `iso2 for ${country}: ${data.Iso2}` 
    return
  }
  iso2.innerHTML = 'We could not get that'
}

let getIso3 = async () => {
  flag.innerHTML = 'Fetching...'

  const country = document.getElementById("countryList").value
  const payload = { country }

  const response = await fetch(`${BASE_URL}/iso`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload)
  }).then(response => response.json())

  if (!response.error) {
    let { data } = response
    iso3.innerHTML = `iso3 for ${country}: ${data.Iso3}` 
    return
  }
  iso3.innerHTML = 'We could not get that'
}

let getFlag = async () => {
  flag.innerHTML = 'Fetching...'

  const country = document.getElementById("countryList").value
  const payload = { country }

  const response = await fetch(`${BASE_URL}/flag/images`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload)
  }).then(response => response.json())

  if (!response.error) {
    let { data } = response
    flag.innerHTML = `<img src="${country}: ${data.flag}" class="flag">` 
    return
  }
  flag.innerHTML = 'We could not get that'
}

getCountries()
