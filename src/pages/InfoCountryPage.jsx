import {useEffect, useState} from "react";
import {get} from "../utils/httpCountries";
import {CountryInfo} from "../components/CountryInfo/CountryInfo";
import styles from "../assets/css/InfoCountryPage.module.css"
import {useNavigate} from "react-router-dom";

export function InfoCountryPage(){
    const countryCode = JSON.parse(localStorage.getItem('dataForm')).countryCode.toLowerCase()
    console.log(countryCode)
    const [countryInfo, setCountryInfo] = useState([])
    const [images, setImages] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        get('/alpha/'+ countryCode)
            .then(data => {
                console.log(data)
                setCountryInfo(data)
                console.log(countryInfo)
        })

    }, [])

    if(countryInfo.length === 0){
        return false
    }

    const handleExit = () => {
        localStorage.clear()
        navigate('/', { replace: true })
    }


    return(
        <div>
            <div>
                <CountryInfo country={countryInfo[0]} />
            </div>
            <button className={styles.button} onClick={handleExit}>Go to Home</button>
        </div>
    )
}