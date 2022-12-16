import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import companyA from '../../../assets/images/company1.jpg';
import companyB from '../../../assets/images/company2.jpg';
import { useRef,useEffect } from 'react';
import '../lp.css';

export const AboutProfile = () => {
    const elementRef = useRef(null)
    const headerRef = useRef(null)
    const pgRef = useRef(null)
    const pgrRef = useRef(null)
    const buttonRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        function handleScroll() {
            const rect = elementRef.current.getBoundingClientRect()
            const rect2 = headerRef.current.getBoundingClientRect()
            const p1 = pgRef.current.getBoundingClientRect()
            const p2 = pgrRef.current.getBoundingClientRect()
            const btn = buttonRef.current.getBoundingClientRect()
            const img = imageRef.current.getBoundingClientRect()

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                elementRef.current.classList.add('visible')
            } else {
                elementRef.current.classList.remove('visible')
            }

            if (rect2.top < window.innerHeight && rect2.bottom > 0) {
                headerRef.current.classList.add('visible')
            } else {
                headerRef.current.classList.remove('visible')
            }

            if (p1.top < window.innerHeight && p1.bottom > 0) {
                pgRef.current.classList.add('visible')
            } else {
                pgRef.current.classList.remove('visible')
            }

            if (p2.top < window.innerHeight && p2.bottom > 0) {
                pgrRef.current.classList.add('visible')
            } else {
                pgrRef.current.classList.remove('visible')
            }

            if (btn.top < window.innerHeight && btn.bottom > 0) {
                buttonRef.current.classList.add('visible')
            } else {
                buttonRef.current.classList.remove('visible')
            }

            if (img.top < window.innerHeight && img.bottom > 0) {
                imageRef.current.classList.add('visible')
            } else {
                imageRef.current.classList.remove('visible')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className="mt-28">
            <div className="text-center">
                <h2 className="text-xl md:text-4xl">I make a good team, i am a <br /> problem solver and i'm passionate.</h2>
            </div>
            <div className="bg-sky-700 w-full md:pb-40 lg:pb-24 mt-14 lg:flex lg:space-x-14 justify-between px-10 md:px-28">
                <div>
                    <div ref={elementRef} className="md:flex mt-20 md:space-x-3 items-center">
                        <p className="text-yellow-500 invisible md:visible">----</p>
                        <p className="text-yellow-500"><i>About Me</i></p>
                    </div>
                    <div ref={pgRef} className="mt-10 text-slate-300">
                        I build projects and deliver them on time. <br />Working with 
                        teams and building projects.
                    </div>
                    <div ref={pgrRef} className="text-slate-300 mt-10">
                        I also manage projects on google cloud, AWS, <br /> optimization 
                        of code. I test website <br /> for usability and also ensure 
                        browser <br />compatibility, as well as ensure that website <br />
                        visitors can easily interact <br />with the page. I use establishing <br />
                        coding standards to streamline debugging,<br /> documentation and 
                        system maintenance.
                    </div>
                    <div className="mt-10">
                        <button ref={buttonRef} className="flex text-white items-center underline">
                            <p className="uppercase">know more</p>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </button>
                    </div>
                </div>
                <div className="about-images">
                    <div ref={imageRef} className="">
                        <img className="mt-28" src={companyA} alt="company-image" />
                        <img className="invisible lg:visible md:-mt-60 lg:-mt-96 md:ml-20 md:w-20 lg:w-32" src={companyB} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}