export const Footer = () => {
    return (
        <div className="mt-40 pt-20 pb-20 bg-sky-600">
            <div className="md:px-32 px-10 lg:flex lg:space-x-96 items-center">
                <div className="block">
                    <div>
                        <h2 className="text-4xl text-slate-800">Let's <button className="underline text-yellow-500">work</button><br />together</h2>
                    </div>
                    <div className="mt-6 text-slate-100"><p className="text-center md:text-left">
                        Let's keep a very smooth and <br /> better business, communicate and <br /> bring all goals to achievements.
                    </p></div>
                </div>
                <div className="grid grid-cols-2 gap-10 mt-7 lg:mt-0 md:grid-cols-3 grid-rows-1">
                    <div>
                        <h2 className="text-yellow-900">Features</h2>
                        <ul className="list-none mt-4 text-slate-200">
                            <li>
                                <button>About Me</button>
                            </li>
                            <li>
                                <button>My Projects</button>
                            </li>
                            <li>
                                <button>Why Me</button>
                            </li>
                            <li>
                                <button>Latest Info</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-yellow-900">Support</h2>
                        <ul className="list-none mt-4 text-slate-200">
                            <li>
                                <button>FAQ</button>
                            </li>
                            <li>
                                <button>Contact</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-yellow-900">Contact Me</h2>
                        <ul className="list-none mt-4 text-slate-200">
                            <li>
                                <button>Nigeria</button>
                            </li>
                            <li>
                                <button>My Projects</button>
                            </li>
                            <li>
                                <button>Why Me</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-10 md:px-32 mt-20 pb-5">
                <div className="bg-slate-200 w-full h-[1px]"></div>
                <h2 className="text-white text-center mt-10">Copyright @VictorAkan2022. All Rights Reserved</h2>
            </div>
        </div>
    )
}