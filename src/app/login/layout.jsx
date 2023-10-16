'use client'
import Image from "next/image"
import Link from "next/link"
export default function Layout({ children }){
    return(
        <>
            <main>
                <div>
                    <div>
                        <Link href="/">
                            <Image src="/images/next.svg" width={100} alt="logo" height={100} />
                        </Link>
                    </div>
                    <ul className='flex gap-5 justify-center items-center font-bold text-lg'>
                        <li>
                            <Link href="/login">Login Main</Link>
                        </li>
                        <li>
                            <Link href="/login/loginstudent">Login Student</Link>
                        </li>
                        <li>
                            <Link href="/login/loginteacher">Login Teacher</Link>
                        </li>
                    </ul>
                </div>
                {children}
            </main>
        </>
    )
}