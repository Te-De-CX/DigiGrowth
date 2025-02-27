import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <header>
                <div className='flex flex-col lg:flex-row justify-between items-center py-3 px-4 lg:px-10'>
                    <h1 className='font-semibold text-center lg:text-left text-4xl md:text-5xl lg:text-7xl capitalize'>
                        empower your <br className='hidden lg:block'/> business with digital <br className='hidden lg:block'/> excellence
                    </h1>
                    <div className='flex flex-col gap-5 w-full lg:w-4/12 mt-8 lg:mt-0'>
                        <p className='text-sm md:text-base lg:text-lg'>
                            unlock your business full potential with hundreds of digital managers that drive growth, endurance, and scalability to attain measurable results.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                                    400+
                                </h2>
                                <p className='text-xs md:text-sm'>
                                    chore
                                </p>
                            </div>
                            <div>
                                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                                    2.5k+
                                </h2>
                                <p className='text-xs md:text-sm'>
                                    firewalls
                                </p>
                            </div>
                            <div>
                                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                                    12+
                                </h2>
                                <p className='text-xs md:text-sm'>
                                    your experiences
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 lg:w-10/12 h-48 md:h-64 lg:h-[35rem] mx-auto mt-10 bg-[url("/src/assets/company.jpg")] bg-cover bg-center rounded-3xl mb-10'>
                </div>
            </header>
        </>
    )
}

export default Home;