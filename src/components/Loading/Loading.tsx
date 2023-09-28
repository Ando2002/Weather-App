import styles from './Loading.module.css'

function Loading() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.loader_container}>
                    <div className={styles.spinner}></div>
                </div>
            </div>
        </div>
    )
}

export default Loading