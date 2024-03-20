import Reveal from "../framerMotion/Reveal"
import PropTypes from 'prop-types';

function Card({ imglink, title, description }) {
    return (
        <div className="w-full flex flex-col items-center justify-center m-4 bg-gradient-to-t from-green-100 to-green-200 rounded-xl min-h-72">
            <div className="w-1/4 grid place-items-center py-3">
                <Reveal>
                    <img src={imglink} />
                </Reveal>
            </div>
            <div className="grid place-items-center pb-5">
                <Reveal>
                    <h1 className="text-2xl font-bold">{title}</h1>
                </Reveal>
            </div>
            <Reveal>
                <div className="grid place-items-center pb-5 px-10 text-center">{description}</div>
            </Reveal>
        </div>
    )
}

Card.propTypes = {
    imglink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Card