// import { send } from "emailjs-com"
import { useRef } from "react"
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef()
    const onSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
            .then((result) => {
                console.log('SUCCESS!', result.message)
            }, (error) => {
                console.log('FAILED...', error.message)
            })
    }
    // const canSubmit = Boolean(toSend.from_name) && Boolean(toSend.reply_to) === true
    return (
        <div className="px-32">
            <div>
            <h2 className="text-2xl font-bold text-sky-400 text-center mt-14">Feel free to contact me</h2>
                <form ref={form} onSubmit={onSubmit} className="px-10 mt-5" action="">
                    <div>
                        <input name="user_name" className="p-3 focus:outline-none focus:ring bg-slate-200 focus:ring-sky-600 rounded-md w-full" type="text" placeholder="Name" required/>
                    </div>
                    <div className="mt-14">
                        <input name="user_email" className="p-3 focus:outline-none focus:ring bg-slate-200 focus:ring-sky-600 rounded-md w-full" type="email" placeholder="Your Email" required/>
                    </div>
                    <div className="mt-14">
                        <textarea name="message" className="p-3 focus:outline-none bg-slate-200 focus:ring focus:ring-sky-600 rounded-md w-full" cols="30" rows="8" placeholder="Body of contact" required></textarea>
                    </div>
                    <div className="mt-14 flex justify-center">
                        <button value="Send" className="mb-20 bg-sky-400 hover:bg-sky-500 p-3 text-white rounded-md" type="submit">Send Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}