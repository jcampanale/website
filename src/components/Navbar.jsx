import React, {Component} from 'react'

const navitems = [
    {
        label: 'Home',
        url: '/index.html',
        cName: 'nav-links'

    },
    {
        label: 'Projects',
        url: './Projects.html',
        cName: 'nav-links'

    },
    {
        label: 'Resume',
        url: './Resume.html',
        cName: 'nav-links'
    },
    {
        label: 'Contact',
        url: './Contact.html',
        cName: 'nav-links'

    }
]

class Navbar extends Component {
    render() {
        return(
            <nav className='Navbar'>
            <ul className='nav-menu'>
                {navitems.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
            </nav>
        )
    }
}

export default Navbar;