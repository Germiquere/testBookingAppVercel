import React from "react";

export const Componentes = () => {
    return (
        <>
            {/*---------- BUTTON 1 RELLENO ----------*/}
            <button
                className="middle none center mr-3 rounded-full bg-primary py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-sm  transition-all  hover:shadow-secondary  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
            >
                1
            </button>

            {/*---------- BUTTON 2 SIN RELLENO CON BORDES ----------*/}
            <button
                className="middle none center mr-3 rounded-full border border-primary py-3 px-6 font-sans text-xs font-bold uppercase text-primary transition-all hover:opacity-75 focus:ring focus:ring-tertiary active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-dark="true"
            >
                2
            </button>
            {/*---------- BUTTON 3 SIN RELLENO NI BORDES ----------*/}
            <button
                className="middle none center rounded-full py-3 px-6 font-sans text-xs font-bold uppercase text-primary transition-all hover:bg-tertiary active:bg-tertiary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                data-ripple-dark="true"
            >
                3
            </button>
            {/*---------- BUTTON 4 CIRCULAR SIN RELLENO NI BORDES  ----------*/}
            <button
                className="flex  items-center justify-center middle none center rounded-full  h-7 w-7 font-sans text-xs font-bold uppercase  transition-all hover:bg-tertiary active:bg-tertiary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                data-ripple-dark="true"
            >
                4
            </button>
            {/*---------- INPUT 1----------*/}
            <div className="relative h-11 w-full min-w-[200px]">
                <input
                    className="peer h-full w-full   p-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:outline-0  disabled:bg-blue-gray-50"
                    placeholder="Text"
                />
            </div>

            {/*---------- TEXT AREA----------*/}

            <textarea
                className="peer h-full w-full p-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0 disabled:bg-blue-gray-50"
                placeholder="Text"
                style={{ resize: "none" }}
                rows="4" // Puedes ajustar la cantidad de filas que desees
            ></textarea>
            {/*---------- SELECT ----------*/}
            <div className="relative h-11 w-full min-w-[200px]">
                <select
                    name="selectValue"
                    // value={formState.category}
                    // onChange={onInputChange}

                    className="peer h-full w-full p-2 font-sans text-sm font-normal  outline outline-0 transition-all focus:outline-0 disabled:bg-blue-gray-50"
                >
                    <option value="" className="text-gray-300 ">
                        Selecciona una opción
                    </option>
                    {/* hacer el map con los options */}
                </select>
            </div>
        </>
    );
};
