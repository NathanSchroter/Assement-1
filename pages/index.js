import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Card from '@/componets/Card'
import SideNavigation from '@/componets/SideNavigation'

export default function Home() {
    return (
        <div>
          
      
        <div className={styles.container}>
             <SideNavigation/>
             
            
            
            <div className={styles.rightSide}>
            <h1>Dashboard</h1> <h3>Friday</h3> <bellIconButton></bellIconButton>
            <br></br>
                    <Card 
                        title='Experiences'
                        description='studying at BCIT'
                        borderColor='red'
                    />
                    <Card 
                        title='education'
                         description='Digital Design and Development'
                        borderColor='orange'
                    />
                    <Card 
                        title='Projects'
                         description='created a website using HTML and CSS'
                        borderColor='yellow'
                    />
                    <Card 
                        title='volunteering'
                         description='I helped clean the streets picking up trash with my hockey team'
                        borderColor='green'
                    />
                     <Card 
                        title='Skills'
                         description='Nextjs, HTML, css, Javascript and Jest'
                        borderColor=''
                    />
                    <Card 
                        title='Projects'
                         description='I love to ski'
                        borderColor='pink'
                    />

            </div>
            </div>
            </div>
        
                  


    )
}
