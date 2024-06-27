export const metadata = {
  title: "Login Notification",
 
};

export default function Login() {
  return (
    <main className='pt-20'>
      
      <div className='flex justify-center items-center  pb-7'>
        <img src='/Content.png' alt="logo" />
      </div>
      <div className="bg-white rounded-sm shadow-lg overflow-hidden max-w-xl w-fit mx-auto justify-center items-center">
        <div className="flex items-center justify-center py-5">
          <img src="/emails with media files.png" alt="" className="w-25 h-20 mt-5 " />
        </div>
      <div className="px-11 ">
          <h5 className="font-semibold  text-sm text-center pb-7 text-gray-600">A new sign-in on Windows</h5>
          <p id="account-user" className="text-sm   text-gray-600  mb-4">Hello Micheal,</p>
          <p id="message" className="text-sm text-gray-700 mb-7">
            We noticed a new sign-in to your Karrabo Account on a Windows device . If this was you, you don't needt to do anything.
            If not, we'll help you secure your account.
            </p>
          <p className="text-gray-600 text-sm mb-7">Do you recognize this activity?</p>
        <div className="flex justify-start pb-11">
          <button id="true-user-button" className="bg-green-900 text-white py-2 px-6 rounded mr-2 flex gap-2 items-center "><img src="/Vector.png" alt="true" /> Yes,it was me</button>
          <button id="false-user-button" className="bg-transparent text-red-700 py-2 px-5 rounded border border-gray-300 flex gap-2 items-center"><img src="MdWarningAmber.png" alt="false" /> No, secure account</button>
        </div>  
          
      </div>
      
    </div>
    
      
    </main>
  )
}
