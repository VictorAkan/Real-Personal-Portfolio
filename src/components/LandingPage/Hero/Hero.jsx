import profile from '../../../assets/images/Victor.png';
import active from '../../../assets/images/active.jpg';
import active2 from '../../../assets/images/active2.jpg';
import '../lp.css'
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="md:px-32 px-14 animated-element">
            <section className="hero__section mt-10 block 2xl:space-x-[30rem] lg:flex lg:space-x-20">
                <div>
                    <div className="flex items-center space-x-3 mt-24">
                        <p className="invisible md:visible"></p>
                        <q><i>I help companies business get reshaped by building quality websites</i></q>
                    </div>
                    <div className="job-title mt-10">
                        <img className="rounded-full picture-element w-10 invisible md:visible absolute lg:ml-10" src={active} alt="active-image" />
                        <h2 className="md:text-4xl text-2xl text-center">I am a</h2>
                        <h2 className="text-center text-sky-700 text-4xl md:text-[4rem] md:mt-4 font-bold">Front End</h2>
                        <h2 className="text-center text-sky-500 text-3xl md:text-[3rem] md:mt-4 font-bold mb-10">Developer</h2>
                        <img className="rounded-full picture-element w-10 invisible md:visible absolute mb-4 lg:ml-[26rem] -mt-14" src={active2} alt="active-image" />
                    </div>
                    <div className='lg:flex block md:space-x-20 mt-14'>
                        <div className="flex justify-center">
                            <Link to="/contact" className="uppercase bg-sky-600 hover:bg-sky-500 px-10 md:py-5 py-3 lg:py-5 text-white">let's talk</Link>
                        </div>
                        <p className="text-slate-400 mt-10 lg:mt-0 md:text-[1rem] text-sm md:text-left text-center">Communicate with me if you need <br />a website service, or you want to <br /> hire a front end developer.</p>
                    </div>
                </div>
                <div className="hero__image lg:mt-10 mt-10">
                    <img className="rounded-full" src={profile} alt="profile-image" />
                </div>
            </section>
        </div>
    )
}