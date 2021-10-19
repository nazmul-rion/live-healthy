import React from 'react'
import { Button, Table } from 'react-bootstrap';

const DoctorCard = (props) => {
    const { docName, role, montofri, sat, sun, rating, img } = props.doctor;
    return (
        <div className="col">
            <div className="card custom-card h-100">
                <img height="250" src={img} className=" p-3 rounded-circle " alt="..." />
                <div className="card-body">
                    <div className="text-center">
                        <b><p className="text-custom">{docName}</p></b>
                        <p className="text-danger">{role}</p>
                    </div>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <th>Monday - Friday</th>
                                <td className="text-center"><i className="fas fa-clock"></i> {montofri}</td>
                            </tr>
                            <tr>
                                <th>Saturday</th>
                                <td className="text-center"><i className="fas fa-clock"></i> {sat}</td>
                            </tr>
                            <tr>
                                <th>Sunday</th>
                                <td className="text-center"><i className="fas fa-clock"></i> {sun}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className="d-flex justify-content-center">
                        <Button className="custom-button">Read Profile</Button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default DoctorCard
