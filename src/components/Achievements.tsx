import React from 'react'

const Achievements = () => {
    return (
        <section>
            {/* parent div */}
            <div className=' my-20'>

                {/* child */}
                <div className='text-center  '>
                    <h2 className='text-4xl font-bold mb-5'>Our Achievements</h2>
                    <p className='mb-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Impedit nobis ratione saepe ipsum velit ex. Rem exercitationem quo temporibus quas! <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, omnis!</p>
                </div>

              

                    <div className='text-center gap-5 my-10 max-w-screen-lg grid lg:grid-cols-4 md:grid-col-4 grid-cols-2  mx-auto '>

                        <div>
                            <h1 className='font-bold text-2xl'>+200k</h1>
                            <p className='text-center'>Courses</p>
                        </div>

                        <div>
                            <h1 className='font-bold text-2xl'>+50k</h1>
                            <p className='text-center'>Mentors</p>
                        </div>


                        <div>
                            <h1 className='font-bold text-2xl'>+370k</h1>
                            <p className='text-center'>Students</p>
                        </div>

                        <div>
                            <h1 className='font-bold text-2xl'>100+</h1>
                            <p className='text-center'>Recognition</p>
                        </div>

                    </div>

             


            </div>


            {/* second div */}


        </section>
    )
}

export default Achievements
