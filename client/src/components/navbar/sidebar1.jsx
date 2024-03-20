
import { HomeIcon, MonitorPlay, Clock } from 'lucide-react'
import React from 'react'

const items1 = [
    {
        icon: <HomeIcon size={23} />,
        label: 'Home',
        href: '/'
    },
    {
        icon: <MonitorPlay size={23} />,
        label: 'Subscriptions',
        href: '/subscriptions'
    },
    {
        icon: <Clock size={23} />,
        label: 'Watchlist',
        href: '/watchlist'
    }
]

export default function Sidebar() {
    const [currentPage, setCurrentPage] = React.useState(null)
    React.useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [])
    return (
        <div className="fixed top-[9vh] left-0 w-[250px] h-[91vh] overflow-y-auto font-inter">
            <div className='flex flex-col pt-2 w-full'>
                {
                    items1.map((item, index) => (
                        <div key={index} className={`flex flex-row gap-6 items-center rounded-xl cursor-pointer px-5 my-[0.04rem] ${currentPage === item.href
                            ? "py-3 font-semibold bg-slate-200 hover:bg-slate-300"
                            : "py-2 hover:bg-slate-100"
                            }`}>
                            {item.icon}
                            <h2 className=''>{item.label}</h2>
                        </div>
                    ))
                }
                <div className='border-b-2 mt-3 mx-auto w-[90%]' />
            </div>
            {/* Footer */}
            <div className='flex flex-col px-5 py-2 w-full text-sm text-muted-foreground'>
                © Edutube 2024.
            </div>
        </div>
    )
}