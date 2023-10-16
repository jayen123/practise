"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Layout({ children }) {
    const pathName = usePathname();
  return (
    <>
        <main>
                <div>
                    <div>
                        <Link href="/">
                            <Image src="/images/next.svg"
                             width={100} 
                             height={100}
                             alt="logo" />
                        </Link>
                    </div>
                    {
                        pathName!="/about/aboutcollege"?
                        <ul className='flex gap-5 justify-center items-center font-bold text-lg'>
                            <li>
                                <Link href="/about">About Main</Link>
                            </li>
                            <li>
                                <Link href="/about/aboutstudent">About Student</Link>
                            </li>
                            <li>
                                <Link href="/about/aboutcollege">About College</Link>
                            </li>
                        </ul> : <Link href="/about">Go To Main About Page</Link>
                    }
                </div>
                {children}
            </main>
    </>
  )
}
