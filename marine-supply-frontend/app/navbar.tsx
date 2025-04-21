import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="flex-1">
                    <Link href={'/'} className="btn btn-ghost text-3xl">K & Y Marine Supply</Link>
                </div>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 text-lg text-lime-500">
                    <li><Link href={'/nav/engines'}>Engines</Link></li>
                    <li><Link href={'/nav/about-page'}>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                   <h1 className='mr-[60px]'>Owned By: <span className='underline'>Kylan Patton</span> </h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar