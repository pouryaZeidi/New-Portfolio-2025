import Link from 'next/link'
import React from 'react'

interface NavbarItemsprops {
    href:string;
    txt:string;
    className?:string;
}

const NavbarItems :React.FC<NavbarItemsprops>= ({href,txt,className}) => {
  return (
    <Link href={href} className={`text-white ${className}`}>{txt}</Link>
  )
}

export default NavbarItems