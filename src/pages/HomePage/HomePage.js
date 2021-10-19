import React from 'react'
import Banner from './Banner'
import ChooseUs from './ChooseUs'
import Department from './Department'
import Doctors from './Doctors'

const HomePage = () => {
    return (
        <div >
            <Banner></Banner>
            <div>
                <div className="mb-5">
                    <div className="mb-5 container">
                        <Department></Department>
                    </div>
                </div>

                <div className="mb-5 container">
                    <h2 className="welcome-home text-center mb-3 fw-bold">
                        Our Specialist
                    </h2>
                    <Doctors></Doctors>
                </div>

                <div>
                    <ChooseUs />
                </div>



            </div>
        </div>
    )
}

export default HomePage
