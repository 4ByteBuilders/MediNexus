
function Card({ imglink, title, description}) {
    return (
        <div className="w-full flex flex-col items-center justify-center m-4 bg-gradient-to-t from-green-100 to-green-200 rounded-xl min-h-72">
            <div className="w-1/4 grid place-items-center py-3">
                <img src={imglink}/>
            </div>
            <div className="grid place-items-center pb-5">
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="grid place-items-center pb-5 px-10 text-center">{description}</div>
        </div>
    )
}

export default Card