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
                    <li><Link href={'/nav/gensets'}>Gensets</Link></li>
                    <li><Link href={'/nav/about-page'}>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar