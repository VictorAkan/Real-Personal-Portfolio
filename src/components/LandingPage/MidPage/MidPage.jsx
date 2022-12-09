import google from '../../../assets/images/google.png';
import slack from '../../../assets/images/slack.png';
import instagram from '../../../assets/images/instagram.png';
import linkedin from '../../../assets/images/LinkedIn.png';

export const MidPage = () => {
    return (
        <div className="flex justify-center mt-28">
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