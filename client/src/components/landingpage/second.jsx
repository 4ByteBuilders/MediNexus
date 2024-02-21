

function Second() {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">
                <h1>
                    Why Nexus?
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="flex flex-col items-center">
                    <img src="/icon1.png" alt="" />
                    <div className="pt-4">
                        <h1>
                            Accessible
                        </h1>
                        <p>
                            Nexus is accessible from anywhere and anytime
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/icon2.png" alt="" />
                    <div className="pt-4">
                        <h1>
                            Secure
                        </h1>
                        <p>
                            Nexus is secure and safe for all your health data
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/icon3.png" alt="" />
                    <div className="pt-4">
                        <h1>
                            Reliable
                        </h1>
                        <p>
                            Nexus is reliable and trustworthy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second