import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import cocktail from '../../assets/images/projectImages/cocktail.jpg';
import login from '../../assets/images/projectImages/login.png';
import menu from '../../assets/images/projectImages/menu.jpg';
import toggle from '../../assets/images/projectImages/toggle.png';
import useReducer from '../../assets/images/projectImages/useReducer.png';

export const ProjectComponent = () => {
    return (
        <div>
            <div>
                <h2 className="text-center mt-14 underline text-sky-600 text-3xl">All Projects</h2>
            </div>
            <div className="md:px-14 px-1 lg:px-32 mt-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 lg:gap-5 grid-rows-4">
                    <div>
                        <a target="_blank" href="https://react-cocktail-two.vercel.app/">
                            <img className="h-[9rem] w-[20rem]" src={cocktail} alt="cocktail" />
                        </a>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-lg">Cocktail website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://login-form-one-kappa.vercel.app/">
                            <img className="lg:h-[9rem]" src={login} alt="login" />
                        </a>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-lg">Validation website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://react-menu-ecru.vercel.app/">
                            <img className="lg:h-[9rem]" src={menu} alt="menu" />
                        </a>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-lg">Menu website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://react-toggle-mode.vercel.app/">
                            <img src={toggle} alt="toggle" />
                        </a>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-lg">Toggle website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://react-use-reducer-eta.vercel.app/">
                            <img className="h-[9rem]" src={useReducer} alt="useReducer" />
                        </a>
                        <div className="md:flex items-center">
                            <div><h2 className="capitalize md:text-lg">Shopping website</h2></div>
                            <div className="ml-auto">
                                <button className="text-sky-400 hover:text-sky-300 flex items-center uppercase">
                                    <p>details</p>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}