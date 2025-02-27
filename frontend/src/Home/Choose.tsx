import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Choose: React.FC = () => {
    return (
        <>
            <section className="px-4 md:px-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row mb-30 justify-between items-center my-10 md:my-20">
                    <h2 className="font-bold text-3xl md:text-5xl capitalize text-center md:text-left mb-6 md:mb-0">
                        why choose <br /> digiGroth Pro?
                    </h2>
                    <div className="flex flex-col gap-3 w-full md:w-5/12 text-sm items-start px-1">
                        <p className="text-center md:text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde laudantium, accusamus ipsa in quod rem voluptatum accusantium recusandae nesciunt ducimus doloribus quia blanditiis animi voluptatibus culpa esse! Omnis, cum veritatis.
                        </p>
                        <button className="capitalize bg-black text-white font-semibold px-4 py-1 rounded-full text-[0.8rem] mx-auto md:mx-0">
                            learn more
                        </button>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center my-10 md:my-26">
                    {/* Card 1 */}
                    <div className="flex gap-5 flex-col bg-gray-100 w-full md:w-3/12 px-7 py-8 rounded-lg shadow-lg">
                        <div className="flex justify-end w-full mb-13">
                            <FiArrowUpRight className="text-5xl border-2 border-gray-400 rounded-full p-2" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl capitalize font-semibold my-2">tailored strategies</h4>
                            <p className="text-sm text-center">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, sit earum. Veniam, sequi magni quod mollitia ea commodi ab eaque optio corrupti! Laboriosam ad quaerat doloremque corporis, ducimus reiciendis iste!
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex gap-5 flex-col bg-black shadow-lg w-full md:w-3/12 px-7 py-8 rounded-lg relative md:bottom-14 text-white">
                        <div className="flex justify-end w-full mb-13">
                            <FiArrowUpRight className="text-5xl border-2 border-gray-400 rounded-full p-2" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl capitalize font-semibold my-2">tailored strategies</h4>
                            <p className="text-sm text-center">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, sit earum. Veniam, sequi magni quod mollitia ea commodi ab eaque optio corrupti! Laboriosam ad quaerat doloremque corporis, ducimus reiciendis iste!
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex gap-5 flex-col bg-gray-100 w-full md:w-3/12 px-7 py-8 rounded-lg shadow-lg">
                        <div className="flex justify-end w-full mb-13">
                            <FiArrowUpRight className="text-5xl border-2 border-gray-400 rounded-full p-2" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl capitalize font-semibold my-2">tailored strategies</h4>
                            <p className="text-sm text-center">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, sit earum. Veniam, sequi magni quod mollitia ea commodi ab eaque optio corrupti! Laboriosam ad quaerat doloremque corporis, ducimus reiciendis iste!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Choose;