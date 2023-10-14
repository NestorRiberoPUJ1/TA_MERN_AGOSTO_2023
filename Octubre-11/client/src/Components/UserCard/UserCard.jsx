
import styles from "./UserCard.module.css";


const UserCard = (props) => {

    return (
        <li>
            <div className={styles.card}>
                <h3>{props.nombre} {props.apellido}</h3>
                <h4>{props.email}</h4>
            </div>
        </li>
    )
}

export default UserCard;