const Loader = () => {
	return (
		<>
			<div className=" text-black  w-full relative flex flex-col h-full justify-center items-center  text-right bg-white">
				<h1
					style={{
						transform: "translate(60%,-50%)",
					}}
					className="text-black  col-span-1 absolute top-[50%] z-50 hidden lg:flex w-full   px-6 h-fit   text-xl min-[420px]:text-2xl md:text-4xl  justify-start   font-bold tracking-[6px] font-sans"
				>
					<p className="flex items-center w-full text-xl min-[420px]:text-2xl xl:text-4xl  justify-start">
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

				<h1 className="text-black  flex relative  lg:hidden w-full  px-6 h-full text-xl min-[420px]:text-2xl md:text-4xl  justify-center   font-bold tracking-[6px] font-sans">
					<p className="flex sm:text-3xl text-xl mobile-logo items-center w-full justify-center">
						ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
					</p>
				</h1>
			</div>
		</>
	);
};

export default Loader;
