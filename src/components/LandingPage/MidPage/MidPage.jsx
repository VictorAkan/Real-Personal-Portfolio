import google from '../../../assets/images/google.png';
import slack from '../../../assets/images/slack.png';
import instagram from '../../../assets/images/instagram.png';
import linkedin from '../../../assets/images/LinkedIn.png';
import { useRef,useEffect } from 'react';
import '../lp.css'

export const MidPage = () => {
    const elementRef = useRef(null)

    useEffect(() => {
        function handleScroll() {
            const rect = elementRef.current.getBoundingClientRect()

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                elementRef.current.classList.add('visible')
            } else {
                elementRef.current.classList.remove('visible')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div ref={elementRef} className="flex animatedElement justify-center mt-28">
            <div className="block">
                <div>
                    <h2 className="font-bold text-center">_Other platforms</h2>
                </div>
                <div className="flex items-center space-x-10">
                    <button className="google_image">
                        <img className="w-32" src={google} alt="google" />
                    </button>
                    <button className="slack_image">
                        <img className="w-28" src={slack} alt="slack" />
                    </button>
                    <button className="instagram">
                        <img className="w-28" src={instagram} alt="instagram" />
                    </button>
                    <button className="linkedin">
                        <img className="w-28" src={linkedin} alt="linkedin" />
                    </button>
                </div>
            </div>
        </div>
    )
}