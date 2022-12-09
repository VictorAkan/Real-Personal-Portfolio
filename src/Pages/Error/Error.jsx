import imageError from '../../assets/images/404.png';

export const Error = () => {
    return (
        <div className="flex justify-center">
            <div className="mt-10">
                <div>
                    <h1 className="text-center text-[2rem] lg:text-[5rem] animate-ping text-sky-600">404</h1>
                </div>
                <div>
                    <h2 className="text-center text-2xl">Page Not Found</h2>
                </div>
                <div className="image">
                    <img src={imageError} alt="" />
                </div>
            </div>
        </div>
    )
}