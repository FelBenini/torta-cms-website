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
        <MenuLink title='installation' url='/docs/quick-start' />
    </aside>
    <section>
      {children}
    </section>
    </div>
  )
}

export default DocsLayout