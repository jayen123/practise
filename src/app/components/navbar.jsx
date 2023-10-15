import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './next.svg'
export default function Navbar() {
  return (
    <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <Link href="/">
                            <Image src={Logo} alt='logo' width={100} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
