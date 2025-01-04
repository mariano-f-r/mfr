import Prompt from "../Prompt.js"
import LocalTime from "./LocalTime.js"

export default function Contact() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col h-screen w-1/2 max-sm:w-screen max-sm:mx-4">
        <div className="mt-4">
          <div className="text-4xl">
            <Prompt cmd="cat contact.md" />
          </div>
          <div className="my-4">
            <h1 className="text-4xl font-bold">Want to get in touch?</h1>
            <p className="text-2xl mt-2">Have a question or a project in mind? Need to get in touch with me for business reasons? Coming with a job offer? Let's get talking.</p>
            <h2 className="text-3xl mt-4 font-semibold">Here&apos;s how:</h2>
            <p className="text-2xl mt-2">Email me at <a className="text-accent underline hover:no-underline" href="mailto:amr001.us@proton.me">amr001.us@proton.me</a></p>
            <h2 className="text-3xl mt-4 font-semibold">Availability</h2>
            <p className="text-2xl mt-2">
              I am typically most responsive to inquiries from the hours of 10 AM to 5 PM.
              I typically answer inquiries in 1-2 business days max, and most of the time on the same day.
              My timezone is CST (usually UTC-5). It is currently <span className="font-mono bg-white bg-opacity-10 rounded-sm"><LocalTime/></span> for me.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
