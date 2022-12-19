export const ContactForm = () => {
    return (
        <div className="px-32">
            <div>
            <h2 className="text-2xl font-bold text-sky-400 text-center mt-14">Feel free to contact me</h2>
                <form className="px-10 mt-5" action="">
                    <div>
                        <input className="p-3 focus:outline-none focus:ring bg-slate-200 focus:ring-sky-600 rounded-md w-full" type="text" placeholder="Name" />
                    </div>
                    <div className="mt-14">
                        <input className="p-3 focus:outline-none focus:ring bg-slate-200 focus:ring-sky-600 rounded-md w-full" type="email" placeholder="Your Email" />
                    </div>
                    <div className="mt-14">
                        <textarea className="p-3 focus:outline-none bg-slate-200 focus:ring focus:ring-sky-600 rounded-md w-full" cols="30" rows="8" placeholder="Body of contact"></textarea>
                    </div>
                    <div className="mt-14 flex justify-center">
                        <button className="mb-20 bg-sky-400 hover:bg-sky-500 p-3 text-white rounded-md" type="submit">Send Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}