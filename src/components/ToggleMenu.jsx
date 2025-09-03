import { useEffect, useState } from "react";

const ToggleMenu = ({color, handleFilter, isVeg, isActive}) => {
  const [isChecked, setIsChecked] = useState(isActive || false);

  useEffect(() => {
    setIsChecked(isActive);
  }, [isActive]);

    return (
        <div className="w-22 h-10 rounded-3xl border-1 flex items-center justify-center ">
          <div
            className={`transition-all duration-200 ease-in-out ${
              isChecked ? (color === 'green' ? "bg-green-400" : "bg-red-400") : "bg-gray-300"
            } p-2 w-14 h-4 rounded-3xl relative`}
          >
            <div
              className={`transition-all duration-200 ease-in-out cursor-pointer absolute w-6 h-6 border-2 ${color === 'green' ? "border-green-600" : "border-red-600" } bg-white rounded-md bottom-[-4px] ${
                isChecked ? "right-0" : "right-8"
              }  flex items-center justify-center`}
              onClick={() => {
                handleFilter(isVeg);
              }}
            >
              <div className={`w-3 h-3 ${color === 'green' ? "bg-green-400" : "bg-red-400" } rounded-full`}></div>
            </div>
          </div>
        </div>
    )
}

export default ToggleMenu;