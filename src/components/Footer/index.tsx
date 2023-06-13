import {BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import styles from "./styles.module.css";


export default function Footer(){
    return(
        <div className={styles["footer_container"]}>
            <div className={styles["footer_left"]}>
                <h2><BsFacebook /></h2>
                <h2><AiFillInstagram /></h2>
                <h2><AiFillLinkedin /></h2>
                <h2><AiFillGithub /></h2>
            </div>
            <div className={styles["footer_right"]}>
                <p>
                    Contrary to popular belief, Lorem Ipsum
                    is not simply random text. It has roots in a 
                    piece of classical Latin literature from 45 BC,
                    making it over 2000 years old
                </p>
            </div>
        </div>
    )
}