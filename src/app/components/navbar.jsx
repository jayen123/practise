'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
export default function Navbar() {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }
  return (
    <>
        <section className='py-5'>
            <div className="container">
                <div className="row flex justify-between">
                    <div className="logo">
                        <Link href="/">
                            <Image src="/images/next.svg" alt='logo' width={100} height={100} />
                        </Link>
                    </div>
                    <div className="menu">
                        <ul className='flex gap-5 items-center'>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <button onClick={()=>navigate("/login/loginstudent")} className='bg-cyan-400 px-5 py-2 rounded text-white font-bold'>Login Student</button>
                            <button onClick={()=>navigate("/about/aboutstudent")} className='bg-cyan-400 px-5 py-2 rounded text-white font-bold'>About Student</button>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
