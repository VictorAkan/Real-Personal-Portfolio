import ionic from '../../../assets/images/ionic.png';
import preact from '../../../assets/images/preact.png';
import pwa from '../../../assets/images/pwa.png';

export const KeepInTouch = () => {
    return (
        <div className="mt-28 md:px-32 block">
            <div className="lg:flex lg:space-x-20">
                <div>
                    <h2 className="text-4xl text-center lg:text-left">Always keep up <br />to date with me</h2>
                </div>
                <div>
                    <div className="md:flex text-sky-400 md:space-x-4 items-center">
                        <p className="invisible md:visible">----</p>
                        <p className="mt-4 lg:mt-0 text-center lg:text-left"><i>Latest info</i></p>
                    </div>
                    <div className="mt-4 text-slate-400">
                        <p className="text-center lg:text-left">i have come up with strategies <br /> and more optimizations on building <br />the best web apps</p>
                    </div>
                </div>
                <div className="btn mt-6 lg:mt-0 flex lg:block justify-center">
                    <button className="uppercase bg-black text-white p-3 hover:bg-slate-800">all integrations</button>
                </div>
            </div>
            <div className="grid mt-20 gap-5 grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3">
                <button className="relative">
                    <img src={ionic} alt="ionic" />
                    <h2 className="absolute text-yellow-900 ml-4 text-3xl -mt-8">Ionic React</h2>
                </button>
                <button className="relative">
                    <img src={preact} alt="preact" />
                    <h2 className="absolute text-yellow-900 ml-4 text-3xl -mt-8">Preact</h2>
                </button>
                <button className="relative">
                    <img src={pwa} alt="pwa" />
                    <h2 className="absolute text-yellow-900 ml-4 text-3xl -mt-14">Progressive Web App</h2>
                </button>
            </div>
        </div>
    )
}