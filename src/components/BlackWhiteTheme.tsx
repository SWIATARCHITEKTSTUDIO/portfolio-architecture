import { useProjectContext } from "../context/context";
import { actionTypes } from "../utils/consts";

const BlackWhiteTheme = () => {
  const { state, dispatch } = useProjectContext();

  const isActive = state.theme.text === "black";
  const language = state.language;
  console.log({ language });

  console.log({ isActive });
  // CIEMNY/JASNY
  return (
    <div className="z-10 absolute top-4 flex gap-0 self-start left-[2.5rem] lg:left-auto lg:self-end  ">
      <div
        className={`text-${state.theme.text} tracking-[2px] font-semibold text-xs `}
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
            {language == "pl" && "CIEMNY"}
            {language == "de" && "DUNKEL"}
            {language == "en" && "DARK"}
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
            {language == "pl" && "JASNY"}
            {language == "de" && "HELL"}
            {language == "en" && "BRIGHT"}

            {/* Bright */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlackWhiteTheme;
