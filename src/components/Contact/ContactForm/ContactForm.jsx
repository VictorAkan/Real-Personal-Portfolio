import { send } from "emailjs-com"
import { useState } from "react"

export const ContactForm = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Victor Akan',
        message: '',
        reply_to: '',
    })
    const onSubmit = (e) => {
        e.preventDefault()
        send(
            'p353lfj7KMPOdiaPa',
            'TEMPLATE ID',
            toSend,
            'User ID'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        })
    }
    const handleChange = (e) => {
        setToSend({ [e.target.name]: e.target.value })
    }
    // const canSubmit = Boolean(toSend.from_name) && Boolean(toSend.reply_to) === true
    return (
        <div className="px-32">
            <div>
            <h2 className="text-2xl font-bold text-sky-400 text-center mt-14">Feel free to contact me</h2>
                <form onSubmit={onSubmit} className="px-10 mt-5" action="">
                    <div>
                        <input onChange={handleChange} value={toSend.from_name} className="p-3 focus:outline-none focus:ring bg-slate-200 focus:ring-sky-600 rounded-md w-full" type="text" placeholder="Name" required/>
                    </div>
                    <div className="mt-14">
                        <input onChange={handleChange} value={toSend.reply_to} className="p-3 focus:outline-none focus:ring bg-slate-200 focus:ring-sky-600 rounded-md w-full" type="email" placeholder="Your Email" required/>
                    </div>
                    <div className="mt-14">
                        <textarea onChange={handleChange} value={toSend.message} className="p-3 focus:outline-none bg-slate-200 focus:ring focus:ring-sky-600 rounded-md w-full" cols="30" rows="8" placeholder="Body of contact" required></textarea>
                    </div>
                    <div className="mt-14 flex justify-center">
                        <button className="mb-20 bg-sky-400 hover:bg-sky-500 p-3 text-white rounded-md" type="submit">Send Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}