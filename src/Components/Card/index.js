import styles from './Card.module.scss'

function Card(props) {
    return (
        <div className={styles.card}>
            <h1>{props.name}</h1>
            <p>{props.ip}</p>
            <p>{props.url}</p>
        </div>
    );
}

export default Card;