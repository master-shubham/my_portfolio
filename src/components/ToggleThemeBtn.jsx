import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
const ToggleThemeBtn = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  return (
    <>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="
                ml-4 px-3 py-1 rounded-md text-sm
                bg-gray-200 text-black
                dark:bg-gray-800 dark:text-white
                hover:scale-105 transition
              "
      >
        {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </>
  );
};

export default ToggleThemeBtn;
