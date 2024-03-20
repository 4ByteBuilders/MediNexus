import PropTypes from 'prop-types';

function SwitchComponent({ user, setUser, items }) {
    console.log(items)
    return (
        <div className="grid grid-cols-2 place-items-center rounded-full h-fit bg-slate-200 p-2 my-2">
            {
                items.map((item, index) =>
                (
                    <div key={index} className={`${user === item ? "bg-slate-500 text-white" : ""} p-1 px-4 rounded-full cursor-pointer transition-colors duration-300 ease-in-out`}
                        onClick={() => setUser(item)}>
                        <h1>{item}</h1>
                    </div>))
            }
        </div>
    )
}

//prop Validation
SwitchComponent.propTypes = {
    user: PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
}

export default SwitchComponent
