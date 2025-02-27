import React from "react";
import { FaPlay } from "react-icons/fa";

const Process: React.FC = () => {
    return (
        <>
            <section className="bg-yellow-100">
                <div className="px-4 md:px-10 py-4">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center py-3">
                        <h3 className="text-3xl md:text-4xl font-bold capitalize text-center md:text-left mb-6 md:mb-0">
                            how our proven process <br /> delivers results
                        </h3>
                        <p className="w-full md:w-5/12 text-sm text-center md:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor eligendi enim, sint doloremque ipsum fugit animi modi facilis quas praesentium sapiente. Totam, amet. Provident quis laboriosam quisquam aut assumenda.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between h-auto md:h-[18rem] mt-6 md:mt-0">
                        {/* Black Card */}
                        <div className="bg-black text-white w-full md:w-[30rem] rounded-3xl flex flex-col h-full justify-between p-7 capitalize">
                            <div className="flex flex-col items-start">
                                <h2 className="text-4xl md:text-6xl font-semibold">
                                    830+
                                </h2>
                                <p className="text-sm text-gray-300">
                                    projects completed with experience
                                </p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <div className="flex gap-1 items-center">
                                    <img src="/src/assets/photo/profile2.jpg" alt="profile1" className="rounded-full w-10 h-10 md:w-13 md:h-13 border-white border-[1.5px]" />
                                    <img src="/src/assets/photo/profile3.jpg" alt="profile2" className="rounded-full w-10 h-10 md:w-13 md:h-13 border-white border-[1.5px]" />
                                    <img src="/src/assets/photo/profile1.jpg" alt="profile3" className="rounded-full w-10 h-10 md:w-13 md:h-13 border-white border-[1.5px]" />
                                    <img src="/src/assets/photo/profile6.jpg" alt="profile4" className="rounded-full w-10 h-10 md:w-13 md:h-13 border-white border-[1.5px]" />
                                </div>
                                <div className="text-2xl md:text-4xl">+</div>
                            </div>
                        </div>

                        {/* Image Card */}
                        <div className="bg-[url('/src/assets/team.jpg')] bg-cover bg-center w-full md:w-auto flex justify-center items-center text-3xl md:text-5xl text-slate-200 capitalize font-semibold rounded-3xl h-48 md:h-full">
                            how we work
                        </div>

                        {/* Play Button */}
                        <div className="absolute left-[80%] md:left-[92vw] text-md mt-48 md:mt-60 bg-white rounded-full p-1">
                            <div className="p-4 md:p-6 bg-black text-white rounded-full">
                                <FaPlay />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Process;