import Image from "next/image";
import bellIconButton from '@/public/Images/bellIconButton'
import styles from './bell.module.css'

export default function BellIcon() {
    return(
            <div className={styles.bellIcon}>
            <Image src={bellIconButton}></Image>


            </div>

    )
}