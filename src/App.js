import "./App.css";
import countriesJSON from "./countries.json"
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [countries, setCountries] = useState(countriesJSON)
  useEffect(() => {

    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountries(response.data)
      })
      .catch(err => console.log(err))
  })

  return <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <CountriesList />
        <Routes>
          <Route path="/:countryName" element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>

    </div>


  </div>;
}
export default App;