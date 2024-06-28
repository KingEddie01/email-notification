import Image from "next/image";

export const metadata = {
  title: "Login Notification",
};

export default function Login() {
  return (
    <main className="pt-16">
      <div className="flex justify-center items-center pb-7">
        <Image
          src="/Content.png"
          width={189}
          height={28}
          alt="logo"
        />
      </div>
      <div className="bg-white rounded-sm shadow-lg overflow-hidden max-w-xl w-fit mx-auto justify-center items-center">
        <div className="flex items-center justify-center py-5">
          <Image
            src="/emails-with-media-files.png" 
            alt="email illustration"
            width={112}
            height={112}
          />
        </div>
        <div className="px-11">
          <h5 className="font-semibold text-sm text-center pb-7 text-gray-600">A new sign-in on Windows</h5>
          <p id="account-user" className="text-sm text-gray-600 mb-4">Hello Michael,</p>
          <p id="message" className="text-sm text-gray-700 mb-7">
            We noticed a new sign-in to your Karrabo Account on a Windows device. If this was you, you don&apos;t need to do anything. If not, we&apos;ll help you secure your account.
          </p>
          <p className="text-gray-600 text-sm mb-7">Do you recognize this activity?</p>
          <div className="flex justify-start pb-11">
            <button id="true-user-button" className="bg-green-900 text-white py-2 px-6 rounded mr-2 flex gap-2 items-center">
              <Image
                src="/Vector.png"
                alt="checkmark icon"
                width={18}
                height={14}
              /> 
              Yes, it was me
            </button>
            <button id="false-user-button" className="bg-transparent text-red-700 py-2 px-5 rounded border border-gray-300 flex gap-2 items-center">
              <Image
                src="/MdWarningAmber.png"
                alt="warning icon"
                width={24}
                height={24}
              /> 
              No, secure account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
