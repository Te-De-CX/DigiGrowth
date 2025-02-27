import React from 'react';

const Home:React.FC = () => {
    return (
        <>
            <header>
                <div className='flex justify-between items-center py-3 px-10 '>
                    <h1 className='font-semibold text capitalize text-7xl'>
                        empower your <br/> business with digital <br/> excellence
                    </h1>
                    <div className='flex flex-col gap-5 w-4/12'>
                        <p >
                            unlock your buisness full potential with hundreds of digital managers that dive growth endurance and scalability and attain measurable results.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className='text-4xl font-semibold'>
                                    400+
                                </h2>
                                <p className='text-sm'>
                                    chore
                                </p>
                            </div>
                            <div>
                                <h2 className='text-4xl font-semibold'>
                                    2.5k+
                                </h2>
                                <p className='text-sm'>
                                    firewalls
                                </p>
                            </div>
                            <div>
                                <h2 className='text-4xl font-semibold'>
                                    12+
                                </h2>
                                <p className='text-sm'>
                                    your experiences
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-10/12 h-[35rem] mx-auto mt-10 bg-[url("/src/assets/company.jpg")] bg-cover bg-center  rounded-3xl mb-10'>
                    
                </div>
            </header>
        </>
    )
}

export default Home;