import Carousel from 'better-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useRef,useEffect } from 'react';
import cocktail from '../../../assets/images/projectImages/cocktail.jpg';
import login from '../../../assets/images/projectImages/login.png';
import menu from '../../../assets/images/projectImages/menu.jpg';
import toggle from '../../../assets/images/projectImages/toggle.png';
import useReducer from '../../../assets/images/projectImages/useReducer.png';
import '../lp.css'

const MyDot = ({ isActive }) => (
    <span
        style={{
            display: 'inline-block',
            height: isActive ? '8px' : '5px',
            width: isActive ? '8px' : '5px',
            background: '#1890ff'
        }}
    ></span>
)

export const ProjectSection = () => {
    const elementRef = useRef(null)
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(() => {
        function handleScroll() {
            const rect = elementRef.current.getBoundingClientRect()
            const leftHeader = leftRef.current.getBoundingClientRect()
            const rightHeader = rightRef.current.getBoundingClientRect()

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                elementRef.current.classList.add('visible')
            } else {
                elementRef.current.classList.remove('visible')
            }

            if (leftHeader.top < window.innerHeight && leftHeader.bottom > 0) {
                leftRef.current.classList.add('visible')
            } else {
                leftRef.current.classList.remove('visible')
            }

            if (rightHeader.top < window.innerHeight && rightHeader.bottom > 0) {
                rightRef.current.classList.add('visible')
            } else {
                rightRef.current.classList.remove('visible')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className="mt-36">
            <div className="flex justify-center">
                <div className="md:flex md:space-x-20 px-10 md:px-0 items-center">
                    <div ref={leftRef} className="animatedElement flex items-center">
                        <p className="text-sky-400 invisible md:visible">----</p>
                        <i className="ml-3 text-sky-400">Latest Projects</i>
                    </div>
                    <div ref={rightRef} className="animated-right">
                        <h2 className="text-xl text-center md:text-left md:text-4xl">Projects that i've <br /> built to solve problems</h2>
                    </div>
                </div>
            </div>
            <div className="projects_liveView mt-14 overflow-x-auto flex scroll-smooth space-x-10 scroll-pl-6 snap-x">
                <Carousel cols={3} rows={1} gap={10} dot={MyDot} autoplay={5000} loop>
                    <Carousel.Item>
                        <button>
                            <img className="h-60 w-[40rem]" src={cocktail} alt="cocktail" />
                        </button>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-2xl">Cocktail website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>Full details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <button>
                            <img className="lg:h-60" src={login} alt="login" />
                        </button>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-2xl">Cocktail website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>Full details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <button>
                            <img className="lg:h-60" src={menu} alt="menu" />
                        </button>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-2xl">Cocktail website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>Full details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <button>
                            <img src={toggle} alt="toggle" />
                        </button>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-2xl">Cocktail website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>Full details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <button>
                            <img className="h-60" src={useReducer} alt="useReducer" />
                        </button>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-2xl">Cocktail website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>Full details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div ref={elementRef} className="mt-20 animated-down mb-20 flex justify-center">
                <div className="md:flex px-5 md:px-0 md:items-center md:space-x-10">
                    <div className="flex justify-center">
                        <button className="uppercase bg-sky-600 hover:bg-sky-500 text-white p-3 px-4">View all projects</button>
                    </div>
                    <div>
                        <p className="text-slate-500 text-center md:text-left mt-10 md:mt-0">Get to explore different inspiring projects created by me.<br />
                        Some examples are the cocktail website above, color selector for<br />
                        developers, github projects and so on.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}