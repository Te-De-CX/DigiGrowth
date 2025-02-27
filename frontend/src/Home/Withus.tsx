import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Withus:React.FC = () => {

    // const reviews = []

    return (
        <>
            <section className="py-20 px-10">
                <div className="flex justify-between items-center py-5 px-10 bg-black rounded-xl text-white">
                    <h2 className="text-3xl font-semibold capitalize ">
                        would you like to work with us ?
                    </h2>
                    <button className="bg-white text-black font-bold capitalize px-4 py-1 rounded-full text-[0.8rem]">
                        inquiry
                    </button>
                </div>
                <div className="flex gap-4 mt-10 mb-3">
                    <img src="/src/assets/photo/profile5.jpg" alt="" className="w-12 h-12 rounded-full" />
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque sequi officia placeat quia architecto dignissimos soluta, fugiat ducimus nobis! Voluptas, optio exercitationem! Delectus ut blanditiis tempora ducimus a ad.
                    </p>
                </div>
                <div className="flex gap-2 items-center justify-end text-2xl">
                    <FaArrowLeftLong className=" p-[3px] rounded-full border-[2px] w-10" />
                    <p className="text-sm"> next</p>
                    <FaArrowRightLong className=" p-[3px] text-white bg-black border-black rounded-full border-[2px] w-10" />
                </div>
            </section>
        </>
    )
}

export default Withus;