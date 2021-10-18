import React from 'react'
import Banner from './Banner'
import Doctors from './Doctors'

const HomePage = () => {
    return (
        <div >
            <Banner></Banner>
            <div>
                <div className="mb-5">
                    <h2 className="welcome-home text-center mb-3">
                        WELCOME TO OUR CLINIC
                    </h2>
                </div>

                <div className="mb-5 container">
                    <h2 className="welcome-home text-center mb-3 fw-bold">
                        Our Specialist
                    </h2>
                    <Doctors></Doctors>
                </div>

            </div>
        </div>
    )
}

export default HomePage
