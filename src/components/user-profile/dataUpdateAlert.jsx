import { useState, useEffect } from "react";


export default function DataUpdateAlert( {showAlert, setShowAlert} ){

    useEffect(() => {
        if (showAlert) {
          const timer = setTimeout(() => {
            setShowAlert(false);
          }, 10000);
    
          return () => clearTimeout(timer);
        }
      }, [showAlert, setShowAlert]);
    
        return (
          <>
            <div
              className = {`bg-red-100 border-2 border-green-400 text-chineseBlack px-5 py-3 rounded leading-tight max-w-max bottom-10 transition-transform duration-500 transform ${showAlert ? "relative" : "relative -translate-x-full"}`}
              role="alert"
            >
              <span className="block sm:inline font-medium text-md">
                Se han actualizado los datos!
              </span>
            </div>
          </>
        );
}