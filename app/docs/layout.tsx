import React from 'react'
import styles from './layout.module.scss'
import MenuLink from './MenuLink'

const DocsLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className={styles.docsLayout}>
    <aside>
        <h5>Getting started</h5>
        <MenuLink title='Quick Start' url='/docs/quick-start' />
        <MenuLink title='Installation with MongoDB' url='/docs/mongo-istallation' />
        <MenuLink title='Installation with Postgres' url='/docs/postgres-installation' />
        <MenuLink title='Installation with MySQL' url='/docs/mysql-installation' />
    </aside>
    <section>
      {children}
    </section>
    </div>
  )
}

export default DocsLayout