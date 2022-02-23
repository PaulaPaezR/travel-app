import {useEffect, useState} from "react";
import styles from "./CountDownTimer.module.css"

export function CountDownTimer({dateTime, onFinishCountDown}){
    const timerFormat = new Date(dateTime)

    const calculateTimeLeft = () => {
        let difference = +timerFormat - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div className={styles.countDown__timer} key={index}>
                <div className={styles.countDown__interval}>
                    {interval.toUpperCase()}{" "}
                </div>
                <div className={styles.countDown__time}>
                    {timeLeft[interval]}
                </div>
            </div>
        );
    });


    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return(
        <div className={styles.countDown}>
            <div className={styles.countDown__container}>
                {timerComponents.length ? timerComponents : onFinishCountDown(true)}
            </div>
        </div>
    )
}