'use client'
export default function Student({ params }) {
  return (
    <>
        <h1 className="text-7xl text-teal-500 font-bold">Student Details</h1>
        <h3 className="text-4xl text-teal-500 font-bold capitalize">Name : {params.student}  </h3>
    </>
  )
}
