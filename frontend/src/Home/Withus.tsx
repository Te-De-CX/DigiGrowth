import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Withus: React.FC = () => {
    // Array of reviews
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            image: "/src/assets/photo/profile5.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque sequi officia placeat quia architecto dignissimos soluta, fugiat ducimus nobis! Voluptas, optio exercitationem! Delectus ut blanditiis tempora ducimus a ad.",
        },
        {
            id: 2,
            name: "Jane Smith",
            image: "/src/assets/photo/profile6.jpg",
            text: "This is an amazing service! The team is very professional and delivers results beyond expectations. Highly recommended!",
        },
        {
            id: 3,
            name: "Alice Johnson",
            image: "/src/assets/photo/profile1.jpg",
            text: "Working with this team has been a game-changer for our business. Their expertise and dedication are unmatched.",
        },
    ];

    // State to manage the current review index
    const [currentReview, setCurrentReview] = useState(0);

    // Function to handle next review
    const handleNext = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    // Function to handle previous review
    const handlePrevious = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <>
            <section className="py-10 md:py-20 px-4 md:px-10">
                {/* Inquiry Section */}
                <div className="flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-10 bg-black rounded-xl text-white">
                    <h2 className="text-2xl md:text-3xl font-semibold capitalize text-center md:text-left mb-4 md:mb-0">
                        would you like to work with us ?
                    </h2>
                    <button className="bg-white text-black font-bold capitalize px-4 py-1 rounded-full text-[0.8rem]">
                        inquiry
                    </button>
                </div>

                {/* Review Section */}
                <div className="flex gap-4 mt-10 mb-3">
                    <img
                        src={reviews[currentReview].image}
                        alt={reviews[currentReview].name}
                        className="w-12 h-12 rounded-full"
                    />
                    <p className="text-sm">
                        {reviews[currentReview].text}
                    </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-2 items-center justify-end text-2xl">
                    <FaArrowLeftLong
                        className="p-[3px] rounded-full border-[2px] w-10 cursor-pointer hover:bg-gray-100 transition-all"
                        onClick={handlePrevious}
                    />
                    <p className="text-sm">next</p>
                    <FaArrowRightLong
                        className="p-[3px] text-white bg-black border-black rounded-full border-[2px] w-10 cursor-pointer hover:bg-gray-800 transition-all"
                        onClick={handleNext}
                    />
                </div>
            </section>
        </>
    );
};

export default Withus;