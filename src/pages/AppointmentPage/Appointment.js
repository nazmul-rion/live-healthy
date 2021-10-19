import React from 'react'
import { Card } from 'react-bootstrap'
import appointmentimg from '../../images/apt.jpg'

const Appointment = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img height="350" src={appointmentimg} alt="Card image" />
                <Card.ImgOverlay className="text-center">
                    <h1 className="text-dark">Appoinment</h1>
                </Card.ImgOverlay>
            </Card>

            <div className="appoinment section mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="mt-3">
                                <div className="feature-icon mb-3">
                                    <i className="text-lg"></i>
                                </div>
                                <span className="h3">Call for an Emergency Service!</span>
                                <h2 className="text-color mt-3">+88 01611269298</h2>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                                <h2 className="mb-2 title-color">Book an Appoinment</h2>
                                <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit.Iste dolorum atque similique praesentium soluta.</p>
                                <form id="#" className="appoinment-form" method="post" action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control mb-3" id="exampleFormControlSelect1">
                                                    <option>Choose Department</option>
                                                    <option>Opthomology</option>
                                                    <option>Cardiology</option>
                                                    <option>Dental Care</option>
                                                    <option>Child Care</option>
                                                    <option>Process Query</option>
                                                    <option>Pulmology</option>
                                                    <option>Gynecology</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect2">
                                                    <option>Select Doctors</option>
                                                    <option>Prof. A.T.M. Khalilur Rahman</option>
                                                    <option>Prof. Dr. Farooque Ahmed</option>
                                                    <option>Prof. Dr. Nazir Ahmed</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input name="date" id="date" type="date" className="form-control" placeholder="dd/mm/yyyy" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input name="time" id="time" type="time" className="form-control" placeholder="08:00" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input name="phone" id="phone" type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group-2 mb-4">
                                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
                                    </div>

                                    <button className="btn btn btn-primary  mb-3" href="confirmation.html">Make Appoinment<i className="icofont-simple-right ml-2"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Appointment
