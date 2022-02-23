import {UserForm} from "../components/UserForm/UserForm";
import styles from "../assets/css/HomePage.module.css"

export function HomePage(){
    return(
        <main className={styles.main}>
            <UserForm/>
        </main>
    )
}