import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
        <h1>Home Page</h1>
        <Link href="/productlist">Go To Product List Page </Link>
    </>
  )
}
