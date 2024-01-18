import styles from './sidenavigation.module.css'
import humanIcon from '../../public/humanIcon.png'
import Image from 'next/image'
import Menultem from '../Menultem'

export default function SideNavigation(){
return(
<div className={styles.sidenavigation}>
    <p></p>
<Image className={styles.human} src={humanIcon}/>
<p>Nathan Schroter</p>

<p>Digital Designer</p>
<Menultem
title='experiences'
bgColor= 'blue'
tabLeft='10px'
textColor='white'
/>
<Menultem
title='Education'
/>
<Menultem
title='Projects'

/>
<Menultem
title='Volunteering'

/>
<Menultem
title='Skills'

/>
<Menultem
title='Interest'

/>

</div>


)
}