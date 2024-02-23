import TestResults from "../hospitalTestResults/ViewPrescriptions";
function Sidebar({ items }) {
  return (
    <div
      className="fixed left-0 top-0 h-screen w-[200px] flex flex-col
         justify-between bg-secondary"
    >
      <div>
        <div className="flex flex-row gap-2 items-center justify-center mb-12 w-full p-3 transition-colors duration-300 cursor-pointer">
          <div className="w-14 mr-2">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="">
            <span className="font-bold">MediNexus</span>
          </div>
        </div>
        {items.map((item, index) =>
          index === 2 ? (
            <TestResults key={index} item={item} />
          ) : (
            <div
              key={index}
              onClick={() => {
                window.location.pathname = item.link;
              }}
              className={
                window.location.pathname === item.link
                  ? "flex flex-row gap-2 items-center justify-start w-[195px] p-3 transition-colors duration-300 cursor-pointer bg-primary text-white rounded-md mx-auto"
                  : "flex flex-row gap-2 items-center justify-start w-[195px] p-3 transition-colors duration-300 cursor-pointer hover:bg-slate-200 rounded-md mx-auto"
              }
            >
              <div className="">{item.icon}</div>
              <div className="">{item.name}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Sidebar;
