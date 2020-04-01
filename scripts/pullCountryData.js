const axios = require('axios').default
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'data', 'countryData.json')

const fetchCountryData = async () => {
  const { data } = await axios.get(
    'https://pomber.github.io/covid19/timeseries.json'
  )
  await fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

const fetchAllData = async () => {
  await fetchCountryData()
}

;(async () => {
  try {
    await fetchAllData()
  } catch (err) {
    console.error(err)
  }
})()
