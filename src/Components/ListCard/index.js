import Card from "../Card";
import styles from './ListCard.module.scss'

function ListCard() {
    return (
        <div className={styles.wrapper}>

        <div className="d-flex justify-around">
            <div className={styles.defaultButton}>Сервера</div>
            <div className={styles.activeButton}>Хранилища</div>
        </div>

            <div className="d-flex justify-between align-center ">
                <header>Список хранилищ</header>
                <img width={40} height={40} src="" alt=""/>
            </div>

            <div className={styles.wrapperList}>
                <Card
                    name={"Название"}
                    ip={"Ip-адресс"}
                    url={"https://adress-1"}
                />

                <Card
                    name={"Название"}
                    ip={"Ip-адресс"}
                    url={"https://adress-1"}
                />

            </div>

            <div className={styles.buttonBox}>
                <button className={styles.buttonAdd}>Добавить</button>
                <button className={styles.buttonEdit}>Изменить</button>
                <button className={styles.buttonDelete}>Удалить</button>
            </div>
        </div>
    );
}

export default ListCard;