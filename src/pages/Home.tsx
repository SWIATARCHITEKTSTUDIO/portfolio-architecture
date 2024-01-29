import { Link } from "react-router-dom";
import HomeContentTabs from "../components/HomeContentTabs";
import { actionTypes, projects } from "../utils/consts";
import { project } from "../utils/types";
import { useProjectContext } from "../context/context";
import { useState } from "react";

const Home = () => {
  const { state, dispatch } = useProjectContext();
  const { language } = state;
  const [showProject, setShowProject] = useState("");

  return (
    <>
      <div className="min-h-screen cursor-auto lg:cursor-none h-screen overflow-hidden max-h-screen relative bg-black lg:bg-white font-sans">
        <h1
          style={{
            transform: "translate(60%,-50%)",
          }}
          className="text-white col-span-1 absolute hidden lg:flex top-[50%] z-50  w-full   px-6 h-fit   text-xl min-[420px]:text-2xl xl:text-4xl  justify-start   font-bold tracking-[6px] font-sans"
        >
          <h1 className="">
            <p
              style={{ textShadow: "0 0 2px white" }}
              className="flex items-center w-full justify-start  text-white px-3 py-2 rounded-md "
            >
              ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
            </p>
          </h1>
        </h1>

        <h1 className="lg:hidden">
          <p className=" py-3 font-bold max-[300px]:tracking-[1px] max-[350px]:tracking-[2px] max-[400px]:tracking-[4px] max-[450px]:tracking-[7px] max-[500px]:tracking-[12px] max-[550px]:tracking-[14px] max-[600px]:tracking-[18px] max-[650px]:tracking-[22px] max-[700px]:tracking-[25px] max-[750px]:tracking-[28px] max-[800px]:tracking-[28px] max-[900px]:tracking-[31px] tracking-[35px] bg-white  text-black justify-center  px-3  text-[1.75rem] md:text-[2.25rem] flex items-center w-full">
            ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
          </p>
        </h1>
        <div className=" absolute right-10 p-2 bottom-10 z-30 flex lg:hidden gap-0 self-end items-center h-10 bg-black tracking-[2px] font-semibold text-xs">
          <p
            className={` cursor-pointer ${
              language === "pl" ? "text-white" : "text-gray-400"
            }`}
            onClick={() =>
              dispatch({
                type: actionTypes.UPDATE_LANGUAGE,
                payload: "pl",
              })
            }
          >
            PL
          </p>
          <p className="text-gray-400">/</p>
          <p
            className={` cursor-pointer ${
              language === "en" ? "text-white" : "text-gray-400"
            }`}
            onClick={() =>
              dispatch({
                type: actionTypes.UPDATE_LANGUAGE,
                payload: "en",
              })
            }
          >
            EN
          </p>

          <p className="text-gray-400">/</p>
          <p
            className={` cursor-pointer ${
              language === "de" ? "text-white" : "text-gray-400"
            }`}
            onClick={() =>
              dispatch({
                type: actionTypes.UPDATE_LANGUAGE,
                payload: "de",
              })
            }
          >
            DE
          </p>
        </div>

        <div className="grid grid-cols-1 mobile-height lg:h-auto lg:grid-cols-12  relative gap-0 bg-black lg:bg-white w-[100%] overflow-y-auto">
          <div
            className="pr-10 relative lg:max-h-screen  md:mt-12 lg:mt-0 lg:sticky top-0 lg:pl-10 xl:pl-20 flex flex-col  w-screen lg:w-full
				  justify-start col-span-1  lg:col-span-7
				  items-start text-center "
          >
            <HomeContentTabs />
            <div className=" absolute bottom-4 hidden lg:flex gap-0 self-end  tracking-[2px] font-semibold text-xs">
              <p
                className={` cursor-pointer ${
                  language === "pl" ? "text-black" : "text-gray-400"
                }`}
                onClick={() =>
                  dispatch({
                    type: actionTypes.UPDATE_LANGUAGE,
                    payload: "pl",
                  })
                }
              >
                PL
              </p>
              <p className="text-gray-400">/</p>
              <p
                className={` cursor-pointer ${
                  language === "en" ? "text-black" : "text-gray-400"
                }`}
                onClick={() =>
                  dispatch({
                    type: actionTypes.UPDATE_LANGUAGE,
                    payload: "en",
                  })
                }
              >
                EN
              </p>

              <p className="text-gray-400">/</p>
              <p
                className={` cursor-pointer ${
                  language === "de" ? "text-black" : "text-gray-400"
                }`}
                onClick={() =>
                  dispatch({
                    type: actionTypes.UPDATE_LANGUAGE,
                    payload: "de",
                  })
                }
              >
                DE
              </p>
            </div>
          </div>
          <div className=" flex flex-col   lg:min-h-screen lg:max-h-screen  h-full md:h-screen relative  w-full col-span-1 lg:col-span-5">
            {projects.map((item: project) => (
              <>
                <div
                  onClick={() => {
                    showProject === ""
                      ? setShowProject(item.en.title)
                      : showProject === item.en.title
                      ? setShowProject("")
                      : setShowProject(item.en.title);
                  }}
                  className=" pointer-events-auto block lg:hidden lg:pointer-events-none"
                >
                  <section className="flex justify-start cursor-pointer relative  w-full   bg-cover bg-fixed bg-center   items-center">
                    <img
                      src={`/images/${item.en.img[0]}`}
                      alt={item.en.img[0]}
                    />
                    {/* <div className="2xl:w-10/12 w-11/12  flex justify-between  items-center mt-32  "></div> */}
                  </section>
                  <div
                    className={`${
                      showProject === item.en.title ? "grid" : "hidden"
                    }  grid-cols-1 gap-y-4 sm:gap-2  sm:grid-cols-12  items-center text-white`}
                  >
                    <div className="text-justify col-span-1 sm:col-span-8 w-full px-10  sm:py-10   flex justify-start h-full text-xs">
                      {item[language]?.description}
                    </div>
                    <div className="col-span-1 tracking-widest leading-5 px-10 pt-4 sm:py-10   sm:col-span-4 order-first sm:order-2  uppercase text-xs w-full flex items-end justify-start  h-full flex-col">
                      <h3>
                        {language === "en" && `Project`}
                        {language === "pl" && `Projekt`}
                        {language === "de" && `Projekt`}
                      </h3>
                      <p className="font-bold">{item[language]?.title}</p>
                      {item.en.year && (
                        <>
                          <h3>
                            {language === "en" && `Year`}
                            {language === "pl" && `Rok`}
                            {language === "de" && `Jahr`}
                          </h3>
                          <p className="font-bold">{item[language]?.year}</p>
                        </>
                      )}

                      {item.en.localisation && (
                        <>
                          <h3>
                            {language === "en" && `Location`}
                            {language === "pl" && `Lokalizacja`}
                            {language === "de" && `Standort`}
                          </h3>
                          <p className="font-bold">
                            {item[language]?.localisation}
                          </p>
                        </>
                      )}
                      {item.en.area && (
                        <>
                          {" "}
                          <h3>
                            {" "}
                            {language === "en" && `Area`}
                            {language === "pl" && `Powierzchnia`}
                            {language === "de" && `Powierzchnia`}
                          </h3>
                          <p className="font-bold">{item[language]?.area}</p>
                        </>
                      )}

                      {item.en.coAuthor && (
                        <>
                          <h3>
                            {language === "en" && `CO-AUTHOR`}
                            {language === "pl" && `współautorzy`}
                            {language === "de" && `co-autoren`}
                          </h3>
                          <p className="font-bold text-end w-full">
                            {item[language]?.coAuthor}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-span-1 sm:col-span-12 order-last">
                      {item.en.img.length > 1 && (
                        <>
                          {item.en.img.map(
                            (imageItem, index) =>
                              index > 0 && (
                                <div key={index}>
                                  <img src={`/images/${imageItem}`} alt="" />
                                </div>
                              )
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className=" pointer-events-none hidden lg:block lg:pointer-events-auto">
                  <Link
                    to={`projects/${item.en.title}`}
                    key={item.en.title}
                    className=""
                  >
                    <section className="flex justify-start cursor-pointer relative  w-full   bg-cover bg-fixed bg-center   items-center">
                      <img
                        src={`/images/${item.en.img[0]}`}
                        alt={item.en.img[0]}
                      />
                      {/* <div className="2xl:w-10/12 w-11/12  flex justify-between  items-center mt-32  "></div> */}
                    </section>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
