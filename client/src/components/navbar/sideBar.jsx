import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
const sideBarItemsUpper = [
    {
        name: 'Dashboard',
        icon: <CiHome size={25} />,
        link: '/home'
    },
    {
        name: 'Settings',
        icon: <CiSettings size={25} />,
        link: '/settings'
    },
];
const sideBarItemsLower = [
    {
        name: 'Help',
        icon: <IoHelpCircleOutline size={25} />,
        link: '/home'
    },
    {
        name: 'Logout',
        icon: <IoIosLogOut size={25} />,
        link: '/settings'
    },
];
function Sidebar() {
    return (
        <div className='fixed left-0 top-0 h-screen w-36 flex flex-col
         justify-between bg-secondary'>
            <div>

                <div className='flex flex-row gap-2 items-center justify-center mb-12 w-full p-3 transition-colors duration-300 cursor-pointer hover:bg-primary hover:text-secondary'>
                    <div className=''>
                        <IoMenu size={25} />
                    </div>
                    <div className=''>
                        Menu
                    </div>
                </div>

                {sideBarItemsUpper.map((item, index) => (
                    <div key={index} className='flex flex-row gap-2 items-center justify-center w-full p-3 transition-colors duration-300 cursor-pointer hover:bg-primary hover:text-secondary'>
                        <div className=''>
                            {item.icon}
                        </div>
                        <div className=''>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar