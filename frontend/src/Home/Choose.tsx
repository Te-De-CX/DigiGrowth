import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Choose:React.FC = () => {

    return (
        <>
            <section className="px-10">
                <div className="flex justify-between items-center my-10">
                    <h2 className="font-bold text-5xl capitalize">
                        why choose <br/> digiGroth Pro?
                    </h2>
                    <div className="flex flex-col gap-3 w-5/12 text-sm items-start px-1">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde laudantium, accusamus ipsa in quod rem voluptatum accusantium recusandae nesciunt ducimus doloribus quia blanditiis animi voluptatibus culpa esse! Omnis, cum veritatis.</p>
                        <button className="capitalize bg-black text-white font-semibold px-4 py-1 rounded-full text-[0.8rem]">
                            learn more
                        </button>
                    </div>
                </div>
                <div className="flex gap-8 items-center justify-center">
                    <div className="flex gap-5 flex-col bg-gray-100 w-3/12 px-7 py-8 rounded-lg">
                     <div className="flex justify-end w-full mb-13">
                     <FiArrowUpRight className="text-5xl border-2 border-gray-400 rounded-full p-2" />
                     </div>
                        <div className="text-center">
                            <h4 className="text-2xl capitalize font-semibold my-2">tailored strategies</h4>
                            <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, sit earum. Veniam, sequi magni quod mollitia ea commodi ab eaque optio corrupti! Laboriosam ad quaerat doloremque corporis, ducimus reiciendis iste!</p>
                        </div>
                    </div>
                    <div className="flex gap-5 flex-col bg-gray-100 w-3/12 px-7 py-8 rounded-lg">
                     <div className="flex justify-end w-full mb-13">
                     <FiArrowUpRight className="text-5xl border-2 border-gray-400 rounded-full p-2" />
                     </div>
                        <div className="text-center">
                            <h4 className="text-2xl capitalize font-semibold my-2">tailored strategies</h4>
                            <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, sit earum. Veniam, sequi magni quod mollitia ea commodi ab eaque optio corrupti! Laboriosam ad quaerat doloremque corporis, ducimus reiciendis iste!</p>
                        </div>
                    </div>
                    <div className="flex gap-5 flex-col bg-gray-100 w-3/12 px-7 py-8 rounded-lg">
                     <div className="flex justify-end w-full mb-13">
                     <FiArrowUpRight className="text-5xl border-2 border-gray-400 rounded-full p-2" />
                     </div>
                        <div className="text-center">
                            <h4 className="text-2xl capitalize font-semibold my-2">tailored strategies</h4>
                            <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, sit earum. Veniam, sequi magni quod mollitia ea commodi ab eaque optio corrupti! Laboriosam ad quaerat doloremque corporis, ducimus reiciendis iste!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choose;