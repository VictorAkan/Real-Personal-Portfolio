import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebookF,faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="px-24">
            <nav className="md:flex space-y-3 md:space-y-0 block items-center xl:space-x-[27.7rem] 2xl:space-x-[50rem] md:space-x-48 lg:space-x-[27.7rem] mt-7">
                <div className="flex items-center space-x-2">
                    <Link to="/" className="uppercase">menu</Link>
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Victor.</h2>
                </div>
                <div className="flex items-center space-x-6 ml-auto">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100084209444829" className="bg-white rounded-full py-1 px-3 border border-slate-400">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a target="_blank" href="https://twitter.com/VIkurekong" className="bg-white rounded-full py-1 px-2 border border-slate-400">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a target="_blank" href="https://github.com/VictorAkan" className="bg-white rounded-full py-1 px-2 border border-slate-400">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </nav>
        </div>
    )
}