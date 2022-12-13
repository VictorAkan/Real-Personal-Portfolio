import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import companyA from '../../../assets/images/company1.jpg';
import companyB from '../../../assets/images/company2.jpg';

export const AboutProfile = () => {
    return (
        <div className="mt-28">
            <div className="text-center">
                <h2 className="text-xl md:text-4xl">I make a good team, i am a <br /> problem solver and i'm passionate.</h2>
            </div>
            <div className="bg-sky-700 pb-24 mt-14 md:flex space-x-14 justify-between px-28">
                <div>
                    <div className="flex mt-20 md:space-x-3 items-center">
                        <p className="text-yellow-500 invisible md:visible">----</p>
                        <p className="text-yellow-500"><i>About Me</i></p>
                    </div>
                    <div className="mt-10 text-slate-300">
                        I build projects and deliver them on time. <br />Working with 
                        teams and building projects.
                    </div>
                    <div className="text-slate-300 mt-10">
                        I also manage projects on google cloud, AWS, <br /> optimization 
                        of code. I test website <br /> for usability and also ensure 
                        browser <br />compatibility, as well as ensure that website <br />
                        visitors can easily interact <br />with the page. I use establishing <br />
                        coding standards to streamline debugging,<br /> documentation and 
                        system maintenance.
                    </div>
                    <div className="mt-10">
                        <button className="flex text-white items-center underline">
                            <p className="uppercase">know more</p>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </button>
                    </div>
                </div>
                <div className="about-images">
                    <div>
                        <img className="mt-28" src={companyA} alt="company-image" />
                        <img src={companyB} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}