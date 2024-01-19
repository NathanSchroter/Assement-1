import styles from './card.module.css'

export default function Card({
    title ='title', 
    description = 'descrpition',
    bgColor,
    borderColor
}){
    return(
        
        <div 
            style = {{borderColor:borderColor}}
            className={styles.card}>
            <h2>{title}</h2>
             <p>{description}</p>

        </div>


)
}