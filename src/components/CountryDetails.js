import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"

function CountryDetails({ countries }) {

    const { countryName } = useParams()
    const currentCountry = countries.find(country => country.alpha3Code === countryName)
    const country = countries.find((c) => c.alpha3Code === countryName);
    const borderCountries = countries.filter((c) => country.borders.includes(c.alpha3Code));
    const [paises, setPaises] = useState(countries)
    console.log(countryName)
    useEffect(() => {

        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryName}`)
            .then(response => {
                console.log("HOLAA")
                setPaises(response.data)
                
            })
            .catch(err => console.log(err))
    }, [])  


    return (


        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="imagen" />
            <h1>{currentCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{currentCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {currentCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borderCountries.map((border => (<li><Link to={"/" + border.alpha3Code}>{border.name.common}</Link></li>)))}

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    )
}

export default CountryDetails;