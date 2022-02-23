import {useEffect, useState} from "react";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";
import { useNavigate } from "react-router-dom";
import imgAirplane from "./airplane.png"
import styles from "./UserForm.module.css"
import {get} from "../../utils/httpCountries";

export function UserForm(){
    const [dataForm, setDataForm] = useState({
        fullName: '',
        countryCode: '',
        travelDate: null
    })
    const [countryList, setCountryList] = useState([])
    const [error, setError] = useState('')

    const minDate = new Date()

    const navigate = useNavigate()

    useEffect(() => {
        get('/all').then(data => {
            setCountryList(data)
        })

    }, [])

    const handleChange = (e) => {
        let updateValue = { [e.target.name]: e.target.value }
        setDataInForm(updateValue)
        if(e.target.name === 'countryCode') localStorage.setItem('country', e.target.options[e.target.selectedIndex].innerHTML)
    }

    const handleChangeDate = (e) => {
        let updateValue = { travelDate: e.value }
        setDataInForm(updateValue)
    }

    const setDataInForm = (updateValue) => {
        setDataForm(dataForm => ({
            ...dataForm,
            ...updateValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(dataForm.fullName.trim().length === 0 || dataForm.countryCode === '' || dataForm.travelDate === null) {
            setError('Todos los campos son requeridos')
            return false
        }

        localStorage.setItem('dataForm', JSON.stringify(dataForm))

        navigate('/welcome', { replace: true })
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__wrap}>
                <img className={styles.form__icon} width={50} src={imgAirplane} alt=""/>
                <div className={styles.form__group}>
                    <input type="text"
                           placeholder="Full name"
                           name="fullName"
                           value={dataForm.fullName}
                           autoComplete="off"
                           onChange={handleChange}
                    />
                </div>

                <div className={styles.form__group}>
                    <select value={dataForm.countryCode} onChange={handleChange} name="countryCode">
                        <option value="" hidden>Search by country</option>
                        {countryList.sort((a, b) => {
                            if (a.name.common < b.name.common) {return -1;}
                            if (a.name.common > b.name.common) {return 1;}
                            return 0;
                        }).map(country => (
                            <option key={country.name.common} value={country.cca3}>{country.name.common}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.form__group}>
                    <DateTimePickerComponent
                        placeholder="Select a date and time"
                        min={minDate}
                        step={60}
                        value={dataForm.travelDate}
                        change={handleChangeDate}
                        name="travelDate"
                        format="dd-MMM-yy HH:mm"
                        cssClass="form__date"
                    />
                </div>
                <span className={styles.form__error}>{error}</span>
                <button className={styles.form__button} type="submit">Get info</button>
            </div>
        </form>
    )
}