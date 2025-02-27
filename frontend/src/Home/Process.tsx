import React from "react";
import { FaPlay } from "react-icons/fa";

const Process:React.FC = () => {

    return (
        <>
            <section className="bg-yellow-100">
                <div className="px-10 py-4">
                <div className="flex justify-between items-center py-3">
                    <h3 className="text-4xl font-bold capitalize">
                        how our proven process <br/> delivers results
                    </h3>
                    <p className="w-5/12 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor eligendi enim, sint doloremque ipsum fugit animi modi facilis quas praesentium sapiente. Totam, amet. Provident quis laboriosam quisquam aut assumenda.
                    </p>
                </div>
                <div className="flex gap-8 items-center justify-between h-[18rem]">
                    <div className="bg-black text-white w-[30rem] rounded-3xl flex flex-col h-full justify-between p-7 capitalize">
                        <div className="flex flex-col items-start">
                            <h2 className="text-6xl font-semibold">
                                830+
                            </h2>
                            <p className="text-sm text-gray-300"> 
                                projects completed with experience
                            </p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="flex gap-1 items-center">
                                <img src="/src/assets/photo/profile2.jpg" alt="profile1" className="rounded-full w-13 h-13 border-white border-[1.5px]" />
                                <img src="/src/assets/photo/profile3.jpg" alt="profile2" className="rounded-full w-13 h-13 border-white border-[1.5px]" />
                                <img src="/src/assets/photo/profile1.jpg" alt="profile3" className="rounded-full w-13 h-13 border-white border-[1.5px]" />
                                <img src="/src/assets/photo/profile6.jpg" alt="profile4" className="rounded-full w-13 h-13 border-white border-[1.5px]" />
                            </div>
                           <div className="text-4xl">+</div>
                        </div>
                    </div>
                    <div className="bg-[url('/src/assets/team.jpg')] bg-cover bg-center w-full flex justify-center items-center text-5xl text-slate-200 capitalize font-semibold  rounded-3xl h-full">
                        how we work
                    </div>
                    <div className="absolute left-[92vw]  text-md mt-60 bg-white rounded-full p-1">
                        <div className="p-6 bg-black text-white rounded-full" >
                        <FaPlay />  
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Process;