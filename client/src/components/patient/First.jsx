
function First() {
    return (
        <div className="w-full flex flex-col">
            <h1 className="text-2xl font-bold">Welcome to your dashboard!</h1>
            <div className="mr-5 mt-8 flex flex-row gap-5" >
                <div className="w-1/2 p-2 bg-slate-200 rounded-lg">
                    <h2 className="font-semibold">Your Medical History</h2>

                </div>
                <div className="w-1/2 p-2 bg-slate-200 rounded-lg">
                    <h2 className="font-semibold">Personal Details</h2>

                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default First