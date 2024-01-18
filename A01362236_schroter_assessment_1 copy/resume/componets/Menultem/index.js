import styles from './menultem.module.css'



export default function Menultem({
    title = '',
    bgColor, 
    textColor,
    tabLeft,
}){
return(

<div style = {{backgroundColor:bgColor, color:textColor,paddingLeft:tabLeft}} className={styles.list}>

    <p>{title}</p>



</div>


)
}