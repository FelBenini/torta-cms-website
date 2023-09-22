import React from 'react'
import styles from './layout.module.scss'
import MenuLink from './MenuLink'
import { BiLogoDocker } from 'react-icons/bi'
import { AiFillApi, AiOutlineCaretRight } from 'react-icons/ai'

const DocsLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className={styles.docsLayout}>
    <aside>
        <h5><AiOutlineCaretRight size={20} style={{marginBottom: -4, marginLeft: -4}} /> Getting started</h5>
        <MenuLink title='Quick Start' url='/docs/quick-start' />
        <MenuLink title='Installation with MongoDB' url='/docs/mongo-installation' />
        <MenuLink title='Installation with Postgres' url='/docs/postgres-installation' />
        <MenuLink title='Installation with MySQL' url='/docs/mysql-installation' />
        <h5><BiLogoDocker size={24} style={{marginBottom: -6}} /> Docker</h5>
        <MenuLink title='Running tortaCMS on Docker' url='/docs/docker-images' />
        <h5><AiFillApi size={20} style={{marginBottom: -4}} /> API Implementation</h5>
        <MenuLink title='Quick Guide' url='/docs/docker-images' />
        <MenuLink title='Retrieving Posts' url='/docs/docker-images' />
        <MenuLink title='Retrieving Pages' url='/docs/docker-images' />
    </aside>
    <section>
      {children}
    </section>
    </div>
  )
}

export default DocsLayout
