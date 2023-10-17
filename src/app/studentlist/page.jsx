import Link from "next/link"
export default function StudentList () {
    return (
        <>
            <h1>Student List</h1>
            <ul>
                <li><Link href='/studentlist/hasan'>Hasan</Link></li>
                <li><Link href='/studentlist/sabbir'>Sabbir</Link></li>
                <li><Link href='/studentlist/ishtiuq'>Ishtiuq</Link></li>
                <li><Link href='/studentlist/fasany'>Fasany</Link></li>
                <li><Link href='/studentlist/foysal'>Foysal</Link></li>
            </ul>
        </>
    )
}