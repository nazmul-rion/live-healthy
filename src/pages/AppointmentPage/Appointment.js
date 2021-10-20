import { react, useState } from 'react'
import { Card } from 'react-bootstrap'
import appointmentimg from '../../images/apt.jpg'
import swal from 'sweetalert';


const Appointment = () => {
    const [dep, setDep] = useState();
    const [doc, setDoc] = useState();
    const [phone, setPhone] = useState();
    const [date, setdate] = useState();
    const [time, settime] = useState();
    const [name, setname] = useState();
    const [msg, setmsg] = useState();
    const handledep = e => {
        setDep(e.target.value);
    }
    const handledoc = e => {
        setDoc(e.target.value);
    }
    const handlephone = e => {
        setPhone(e.target.value);
    }
    const handledate = e => {
        setdate(e.target.value);
    }
    const handletime = e => {
        settime(e.target.value);
    }
    const handlename = e => {
        setname(e.target.value);
    }
    const handlemsg = e => {
        setmsg(e.target.value);
    }

    const appointmentSubmit = e => {
        e.preventDefault();
        if (dep && doc && phone && date && time && msg && name) {
            swal({
                title: "Are you sure?",
                text: "You want to confirm your Appointment?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("You Appointment is Confirm. We will notify you via email.", {
                            icon: "success",
                        });
                    } else {
                        swal(" Sorry for your changing mind.");
                    }
                });
        }
    }
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
                                <p className="mb-4">Please make sure you are provided authentic information</p>
                                <div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select required onBlur={handledep} className="form-control mb-3" id="exampleFormControlSelect1">
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
                                                <select onBlur={handledoc} className="form-control" id="exampleFormControlSelect2">
                                                    <option>Select Doctors</option>
                                                    <option>Prof. A.T.M. Khalilur Rahman</option>
                                                    <option>Prof. Dr. Farooque Ahmed</option>
                                                    <option>Prof. Dr. Nazir Ahmed</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input onBlur={handledate} name="date" id="date" type="date" className="form-control" placeholder="dd/mm/yyyy" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input onBlur={handletime} name="time" id="time" type="time" className="form-control" placeholder="08:00" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input required onBlur={handlename} name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group">
                                                <input onBlur={handlephone} name="phone" id="phone" type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group-2 mb-4">
                                        <textarea onBlur={handlemsg} name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
                                    </div>

                                    <button onClick={appointmentSubmit} className="custom-button btn btn btn-primary mb-3">Make Appoinment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Appointment
