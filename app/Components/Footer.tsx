import Link from 'next/link'

export default function Footer() {
  return (
    <main>
  <div className="bg-white rounded-sm flex flex-col gap-8 shadow-lg overflow-hidden max-w-xl  mx-auto justify-center items-center mt-1 px-11 py-5">
    <div className="flex flex-col justify-center gap-5 items-center w-full ">
        <p className=" text-sm text-gray-600">Karrabo Team</p>
      <div className="flex gap-4">
        <a href="/twitter"><img src="/Twitter X New Logo Vector 2.png" alt="twitter_handle" /></a>
        <a href="/facebook"><img src="/Social icon.png" alt="facebook" /></a>
        <a href="/instagram"><img src="/Group.png" alt="instagram" /></a>
      </div>
    </div>
    <div className="text-sm text-gray-600  flex  flex-col justify-center items-center mb-5">
      <p>&copy; {new Date().getFullYear()} Karrabo Africa</p>
      <p>312 Herbert Macaulay way, Sabo Yaba, Lagos</p>
    </div>
  </div>
        

    </main>
   
  )
}
