import Header from "../Header/Header"
import styles from './Layout.module.css'
import Content from "../Content/Content"
import { useState } from "react"


function Layout() {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <div className={styles.content}>
            <Header
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <Content
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
        </div>
    )
}

export default Layout