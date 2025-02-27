import React, { useEffect, useState } from "react";

const Loader: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading of all images and content
        const images = Array.from(document.querySelectorAll("img"));
        const totalImages = images.length;
        let loadedImages = 0;

        if (totalImages === 0) {
            // If there are no images, complete loading immediately
            setIsLoading(false);
            onLoadComplete();
            return;
        }

        // Check if each image is loaded
        const imageLoadHandler = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                setIsLoading(false);
                onLoadComplete();
            }
        };

        images.forEach((img) => {
            if ((img as HTMLImageElement).complete) {
                // If the image is already loaded, count it
                imageLoadHandler();
            } else {
                // Otherwise, wait for it to load
                img.addEventListener("load", imageLoadHandler);
            }
        });

        // Cleanup
        return () => {
            images.forEach((img) => {
                img.removeEventListener("load", imageLoadHandler);
            });
        };
    }, [onLoadComplete]);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
        </div>
    );
};

export default Loader;