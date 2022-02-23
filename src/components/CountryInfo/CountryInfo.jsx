import styles from "./CountryInfo.module.css";
import iGlobo from "./globo-terraqueo.png"
import iLocation from "./localizacion.png"
import iNavigate from "./navegacion.png"

export function CountryInfo({country}){
    console.log(country.name)
    return(
        <div className={styles.main}>
            <h2 className={styles.title}>Know <strong>everything</strong> about your <span className={styles.title__featured}>next destination</span></h2>

            <div className={styles.country__grid}>
                <div className={styles.country__header}>
                    <div className={styles.thumbnail}>
                        <img className={styles.thumbnail__flag} src={country.flags['png']} alt=""/>
                    </div>
                    <h2 className={styles.country__title}>{country.name['common']}</h2>
                    <p className={styles.country__subtitle}><strong>Capital: </strong>{country.capital}</p>
                </div>
                <div className={styles.country__info}>
                    <div className={styles.country__item}>
                        <img className={styles.thumbnail} src={iGlobo} alt=""/>
                        <p className={styles.country__item_text}><strong>Official name: </strong><br/><span className={styles.country__item_text__value}>{country.name['official']}</span></p>
                    </div>
                    <div className={styles.country__item}>
                        <img className={styles.thumbnail} src={iLocation} alt=""/>
                        <p className={styles.country__item_text}><strong>Continents: </strong><br/><span className={styles.country__item_text__value}>{country.continents}</span></p>
                    </div>
                    <div className={styles.country__item}>
                        <img className={styles.thumbnail} src={iNavigate} alt=""/>
                        <p className={styles.country__item_text}><strong>Languajes: </strong><br/><span className={styles.country__item_text__value}>{Object.values(country.languages)}</span></p>
                    </div>
                </div>
                {/*<img src={country.coatOfArms['png']} alt=""/>*/}
            </div>
        </div>
    )
}