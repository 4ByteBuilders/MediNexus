const items = [
    {
        title: "Hospital",
    },
    {
        title: "Doctor",
    }
]

function SwitchComponent({ user, setUser }) {

    return (
        <div className="grid grid-cols-2 place-items-center rounded-full h-fit bg-slate-200 p-2 my-2">
            {
                items.map((item, index) =>
                (
                    <div key={index} className={`${user === item.title ? "bg-slate-500 text-white" : ""} p-1 px-4 rounded-full cursor-pointer transition-colors duration-300 ease-in-out`}
                        onClick={() => setUser(item.title)}>
                        <h1>{item.title}</h1>
                    </div>))
            }
        </div>
    )
}

export default SwitchComponent
