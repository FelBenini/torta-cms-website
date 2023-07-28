import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

const Database = () => {
  return (
    <section className={styles.database}>
      <div className={styles.description}>
        <h2>Set it up with your <br/> preferred database</h2>
        <p>tortaCMS works with a variety of SQL and NoSQL<br/> databases. Choose your favorite and start<br/> writing your content!</p>
        <div className={styles.containerDb}>
          <Image width={46} height={46} src='/databases/postgres.svg' alt='Postgres'/>
          <Image width={43} height={43} src='/databases/mysql.svg' alt='MySQL'/>
          <Image width={46} height={46} src='/databases/planetscale.svg' alt='PlanetScale'/>
          <Image width={46} height={46} src='/databases/mongodb.svg' alt='MongoDB'/>
        </div>
      </div>
      <div id='databaseIllustration' className={styles.imgContainer}>
        <Image layout='fill' src='/Database.svg' alt='Illustration of a computer, some cogs and a database' />
      </div>
    </section>
  )
}

export default Database