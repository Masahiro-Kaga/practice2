import React, { Fragment } from 'react'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation></MainNavigation>
            <main className='main'>{props.children}</main>
        </Fragment>
    )
}

export default Layout
