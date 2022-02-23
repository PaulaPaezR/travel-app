import {CountDownTimer} from "../components/CountDownTimer/CountDownTimer";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "../assets/css/WelcomePage.module.css"

export function WelcomePage(){
    const data = JSON.parse(localStorage.getItem('dataForm'))
    const country = localStorage.getItem('country')
    const navigate = useNavigate()
    const [isCountDownFinished, setIsCountDownFinished] = useState(false)

    useEffect(() => {
        if(isCountDownFinished) navigate('/info-country', {replace: true})
    }, [isCountDownFinished])

    return(
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <h1 className={styles.greeting__title}>WELCOME <span className={styles.greeting__username}>{ data.fullName.toUpperCase()} </span></h1>
                    <p className={styles.greeting__text}>Your next trip to <b className={styles.text__main}>{country}</b> will be in</p>
                </div>
                <div className="">
                    <CountDownTimer dateTime={data.travelDate} onFinishCountDown={setIsCountDownFinished} />
                </div>
            </div>
        </main>
    )
}