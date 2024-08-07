import Image from "next/image";



export default function Home() {
  return (
    <main className='pt-16'>
      
      <div className='flex justify-center items-center  pb-7'>
        <Image 
        src='/Content.png' 
        alt="logo"
        width={189}
        height={28}
        
        />
      </div>
      <div className="bg-white rounded-sm shadow-lg overflow-hidden max-w-xl mx-auto justify-center items-center">
        <div className="flex items-center justify-center py-5">
          <Image 
          src="/emails-with-media-files.png" 
          alt="email-logo"
          width={112}
          height={112}
          />
        </div>
        <div className="px-11 ">
          <h5 className="font-semibold  text-sm text-center pb-7 text-gray-600">A new sign-in on Windows</h5>
          <p id="account-owner" className="text-sm   text-gray-600  mb-4">Hello Micheal,</p>
          <p id="account-text" className="text-sm text-gray-700 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse numquam repudiandae atque sint modi cum voluptatibus qui quibusdam culpa 
          </p>
        <div className="flex justify-start pb-10">
          <button id="accept-button" className="bg-green-900 text-white py-2 px-7 rounded mr-2 w-150 ">Accept</button>
          <button id="decline-button" className="bg-transparent text-black py-2 px-7 rounded border border-gray-300">Decline</button>
        </div>
      </div>
    </div>
    
      
    </main>
  );
}
