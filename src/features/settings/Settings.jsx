import { Outlet } from "react-router-dom";


function Settings() {
    return (   
     <header className="flex-1 flex flex-col overflow-hidden ">
      <div className="min-h-16 flex items-center pl-2">
      <h1 className="font-semibold text-xl md:pl-3"> Dishes Settings </h1>
      </div>
      <div className="flex  mb-2 p-3 gap-16">
       <section className="w-[10%] min-w-[fit-content] flex-shrink-[2] py-3 px-2 bg-[#f7f5f1]"> 
    <ul>
        <li className="grid grid-cols-[20px_1fr] p-4	[column-gap:0.3rem;] grid-rows-2 ">
            <img src="/restaurant.svg" alt="products managment" className=" justify-self-center self-center w-4 aspect-square"/>
            <h3 className="text-base">Products Managment</h3>
            <p className="text-xs	col-start-2">Manage your products </p>
        </li>
        <li className="grid grid-cols-[20px_1fr] p-4	[column-gap:0.3rem;] grid-rows-2 ">
            <img src="/products.svg" alt="restaurant profile" className=" justify-self-center self-center w-4 aspect-square"/>
            <h3 className="text-base">Restaurant</h3>
            <p className="text-xs	col-start-2">Manage your restaurant</p>
        </li>
    </ul>
    </section>
    <section className=" w-[75%] flex-shrink-[1] overflow-hidden">
    <Outlet/>
    </section>
    </div>
    </header>  );
}

export default Settings;