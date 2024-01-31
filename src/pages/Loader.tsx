import { useProjectContext } from "../context/context";

const Loader = () => {
  const { state } = useProjectContext();
  const { theme } = state;

  return (
    <>
      <div
        className={` text-${theme.text}  w-full relative flex flex-col h-full justify-center items-center  text-right bg-${theme.bg}`}
      >
        <h1
          style={{
            transform: "translate(60%,-50%)",
          }}
          className={`text-${theme.text}  col-span-1 absolute top-[50%] z-50 hidden lg:flex w-full   px-6 h-fit   text-xl min-[420px]:text-2xl md:text-4xl  justify-start   font-bold tracking-[6px] font-sans`}
        >
          <p className="flex items-center w-full text-xl min-[420px]:text-2xl xl:text-4xl  justify-start ">
            ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
          </p>
        </h1>

        {/* <>
					<div className=" lg:flex justify-end pointer-events-none hidden  lg:pointer-events-auto">
						<section className="flex w-5/12 justify-start cursor-pointer relative    bg-cover bg-fixed bg-center   items-center">
							<img
								src={`/images/${projects[0].en.img[0]}`}
								alt={projects[0].en.img[0]}
							/>
						</section>
					</div>
					<div className=" lg:flex justify-end pointer-events-none hidden  lg:pointer-events-auto">
						<section className="flex  w-5/12 justify-start cursor-pointer relative    bg-cover bg-fixed bg-center   items-center">
							<img
								src={`/images/${projects[1].en.img[0]}`}
								alt={projects[1].en.img[0]}
							/>
						</section>
					</div>
					<div className=" lg:flex justify-end pointer-events-none hidden  lg:pointer-events-auto">
						<section className="flex  w-5/12 justify-start cursor-pointer relative    bg-cover bg-fixed bg-center   items-center">
							<img
								src={`/images/${projects[2].en.img[0]}`}
								alt={projects[2].en.img[0]}
							/>
						</section>
					</div>
				</> */}

        {/* <h1
          className={`text-${theme.text}  flex relative  lg:hidden w-full h-full justify-center   font-bold tracking-[6px] font-sans bg-red-500`}
        >
          <p className="ml-2 absolute !left-0 flex sm:text-3xl text-xl mobile-logo py-3 font-bold max-[300px]:tracking-[1px] max-[350px]:tracking-[2px] max-[400px]:tracking-[4px] max-[450px]:tracking-[7px] max-[500px]:tracking-[12px] max-[550px]:tracking-[14px] max-[600px]:tracking-[18px] max-[650px]:tracking-[22px] max-[700px]:tracking-[25px] max-[750px]:tracking-[28px] max-[800px]:tracking-[28px] max-[900px]:tracking-[31px] tracking-[35px] bg-${theme.bg}  text-${theme.text} ml-2 justify-center  px-3  text-[1.75rem] md:text-[2.25rem] flex items-center w-full ">
            ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
          </p>
        </h1> */}
        <div
          className={`text-${theme.text}  flex relative  lg:hidden w-full h-full justify-center   font-bold font-sans`}
        >
          <h1 className="lg:hidden">
            <p
              className={`py-3 font-bold max-[300px]:tracking-[1px] max-[350px]:tracking-[2px] max-[400px]:tracking-[4px] max-[450px]:tracking-[7px] max-[500px]:tracking-[12px] max-[550px]:tracking-[14px] max-[600px]:tracking-[18px] max-[650px]:tracking-[22px] max-[700px]:tracking-[25px] max-[750px]:tracking-[28px] max-[800px]:tracking-[28px] max-[900px]:tracking-[31px] tracking-[35px] bg-${theme.bg}  text-${theme.text} ml-2 justify-center  px-3  text-[1.75rem] md:text-[2.25rem] flex items-center w-full`}
            >
              ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
            </p>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
