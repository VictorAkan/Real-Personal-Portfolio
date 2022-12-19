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
                    <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox" className="google_image">
                        <img className="w-32" src={google} alt="google" />
                    </a>
                    <a target="_blank" href="https://slack.com/workspace-signin" className="slack_image">
                        <img className="w-28" src={slack} alt="slack" />
                    </a>
                    <a href="https://www.instagram.com/" className="instagram">
                        <img className="w-28" src={instagram} alt="instagram" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/victor-ikurekong-583215240/" className="linkedin">
                        <img className="w-28" src={linkedin} alt="linkedin" />
                    </a>
                </div>
            </div>
        </div>
    )
}