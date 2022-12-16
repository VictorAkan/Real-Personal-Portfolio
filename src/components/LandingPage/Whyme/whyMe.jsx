import persona from '../../../assets/images/persona.png'

export const WhyMe = () => {
    return (
        <div className="px-14 md:px-32 mt-40">
            <div className="lg:flex lg:space-x-20">
                <div className="block">
                    <div className="flex text-sky-400 space-x-3 items-center">
                        <p>----</p>
                        <p className="text-center md:text-left"><i>Why Me</i></p>
                    </div>
                    <div className="mt-4">
                        <h2 className="capitalize text-4xl">Why Victor</h2>
                    </div>
                    <div className="mt-5">
                        <p className="text-slate-500 text-center md:text-left">Best service is one of <br /> the main things recruiters <br /> look out for.</p>
                    </div>
                    <div className="image mt-10">
                        <img className="w-[18rem]" src={persona} alt="persona" />
                    </div>
                </div>
                <div className="">
                    <hr className="bg-slate-500 w-full" />
                    <div className="md:flex items-center mt-10 mb-10 md:space-x-14 px-4 md:px-10">
                        <div className="bg-gray-300 p-5 flex justify-center">
                        <div className="text-center">
                            <h2 className="text-3xl">2</h2>
                            <p className="text-slate-500">years experience</p>
                        </div>
                        </div>
                        <div className='mt-5 md:mt-0'>
                            <p className="text-slate-400 text-center md:text-left">Building live projects and solving complex problems<br />
                            as well as working and collaborating with teams to <br />
                            to bring websites to it's full potentials.</p>
                        </div>
                    </div>
                    <hr className="bg-slate-500 w-full" />
                    <div className="md:flex items-center mt-10 mb-10 md:space-x-14 px-4 md:px-10">
                        <div className="bg-gray-300 p-5 flex justify-center">
                        <div className="text-center">
                            <h2 className="text-3xl">11</h2>
                            <p className="text-slate-500">successful projects</p>
                        </div>
                        </div>
                        <div className="mt-5 md:mt-0">
                            <p className="text-slate-400 text-center md:text-left">So many projects successfully built with<br />
                            different tech stacks such as javaScript, React,<br />
                            React Native, Typescript.</p>
                        </div>
                    </div>
                    <hr className="bg-slate-500 w-full" />
                    <div className="md:flex items-center mt-10 mb-10 md:space-x-14 px-4 md:px-10">
                        <div className="bg-gray-300 p-5 flex justify-center">
                        <div className="text-center">
                            <h2 className="text-3xl">80+</h2>
                            <p className="text-slate-500">github repositories</p>
                        </div>
                        </div>
                        <div className="mt-5 md:mt-0">
                            <p className="text-slate-400 text-center md:text-left">Various pushes and commit to github repository,<br />
                            collaborations and all as well as git branches.<br />
                            Most projects pushed to git.</p>
                        </div>
                    </div>
                    <hr className='bg-slate-500 w-full' />
                </div>
            </div>
        </div>
    )
}