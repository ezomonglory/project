import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navlink = ({ children, href, active = false }) => {

    const child = React.Children.only(children)
    const router = useRouter()




    return (
        <Link href={href}>
            {React.cloneElement(child, { "course-link": router.pathname === href || active ? "page" : "null" })}
        </Link>
    )
}

export default Navlink