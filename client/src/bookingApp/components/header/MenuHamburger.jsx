import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
export const MenuHamburger = () => {
    const location = useLocation();
    let [open, setOpen] = useState(false);
    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className=" text-3xl  cursor-pointer lg:hidden  flex  text-primary"
            >
                <FaBars name={open ? "close" : "menu"}></FaBars>
            </div>

            <div
                className={`bg-white flex flex-col items-end gap-4 left-0 w-full pr-3 transition-all duration-500 ease-in ssm:pr-8 lg:flex lg:flex-row lg:pr-0  absolute lg:static lg:z-50  ${
                    open ? "top-[50px] " : "top-[-490px]"
                }`}
            >
                <div className="">
                    <Link
                        to="/auth/login"
                        state={{
                            prevUrl: location.pathname,
                            prevSearch: location.search,
                        }}
                    >
                        <button
                            className="middle none center rounded-full border border-primary w-[120px] h-[40px] py-3 px-6 font-sans text-xs font-bold uppercase text-primary transition-all hover:opacity-75 focus:ring focus:ring-tertiary active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-dark="true"
                        >
                            Ingresar
                        </button>
                    </Link>
                </div>
                <div className="">
                    <Link to="/auth/register">
                        <button
                            className="middle none center rounded-full bg-primary w-[120px] h-[40px] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-sm transition-all hover:shadow-secondary active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            Registrarse
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MenuHamburger;
