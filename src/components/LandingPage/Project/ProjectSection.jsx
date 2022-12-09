import cocktail from '../../../assets/images/projectImages/cocktail.jpg';
import login from '../../../assets/images/projectImages/login.png';
import menu from '../../../assets/images/projectImages/menu.jpg';
import toggle from '../../../assets/images/projectImages/toggle.png';
import useReducer from '../../../assets/images/projectImages/useReducer.png';

export const ProjectSection = () => {
    return (
        <div className="mt-36">
            <div className="flex justify-center">
                <div className="flex space-x-20 items-center">
                    <div className="flex items-center">
                        <p className="text-sky-400">----</p>
                        <i className="ml-3 text-sky-400">Latest Projects</i>
                    </div>
                    <div>
                        <h2 className="text-4xl">Projects that i've <br /> built to solve problems</h2>
                    </div>
                </div>
            </div>
            <div className="projects_liveView mt-7 overflow-x-auto flex scroll-smooth space-x-10 scroll-pl-6 snap-x">
                <button className="scroll-ml-6 snap-center snap-start">
                    <img className="w-5/6" src={cocktail} alt="cocktail" />
                </button>
                <button className="scroll-ml-6 snap-center snap-start">
                    <img className="w-5/6" src={useReducer} alt="useReducer" />
                </button>
                <button className="scroll-ml-6 snap-center snap-start">
                    <img src={menu} alt="menu" />
                </button>
                <button className="scroll-ml-6 snap-center snap-start">
                    <img src={toggle} alt="toggle" />
                </button>
                <button className="snap-start">
                    <img src={login} alt="login" />
                </button>
                <button className="snap-start">ajbshhbd</button>
            </div>
        </div>
    )
}