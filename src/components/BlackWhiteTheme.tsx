import { useContext } from "react";
import { useProjectContext } from "../context/context";
import { actionTypes } from "../utils/consts";

const BlackWhiteTheme = () => {
  const { state, dispatch } = useProjectContext();

  const isActive = state.theme.text === "black";

  console.log({ isActive });

  return (
    <div
      className={`text-${state.theme.text}  z-10 absolute top-4 flex gap-0 self-end tracking-[2px] font-semibold text-xs`}
    >
      <div className="flex items-center justify-center gap-[1px]">
        <button
          onClick={() => {
            dispatch({
              type: actionTypes.UPDATE_THEME,
              payload: {
                text: "white",
                bg: "black",
              },
            });
          }}
          className={`outline-none border-none uppercase ${
            isActive && "font-extrabold  text-gray-500"
          } text-${state.theme.text}`}
        >
          Dark
        </button>
        /
        <button
          onClick={() => {
            dispatch({
              type: actionTypes.UPDATE_THEME,
              payload: {
                text: "black",
                bg: "white",
              },
            });
          }}
          className={`outline-none border-none uppercase ${
            !isActive ? "text-gray-500 " : "font-extrabold  "
          } `}
        >
          Bright
        </button>
      </div>
    </div>
  );
};

export default BlackWhiteTheme;
