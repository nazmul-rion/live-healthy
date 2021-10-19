import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import bannerService from '../../images/serviceBanner.png'
const ServiceDetailsPage = () => {

    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/DeptList.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    useEffect(() => {
        const found = services.find(service => service.key === parseInt(id))
        setSingleService(found)
    }, [services, id])


    return (
        <Container fluid>
            <Container fluid className="mb-5 bg-custom" >

                <Row className="align-items-center justify-content-center">
                    <Col sm={12} md={6}>
                        <div className="p-lg-5 p-2">
                            <h1>{singleService?.name}</h1>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className="img-fluid py-5" src={bannerService} alt="" />
                    </Col>
                </Row>

            </Container>

            <Container >
                <Row className="flex-column-reverse flex-lg-row align-items-center justify-content-center">
                    <Col sm={12} md={8}>
                        <div>
                            <img width="80%" className=" img-fluid" src={singleService?.img} alt="" />
                        </div>
                        <div className="my-5">
                            <h2 className="fw-bold">
                                {singleService?.name}
                            </h2>
                            <div>
                                <h3>
                                    <Rating
                                        initialRating={singleService?.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly
                                    />
                                    ({singleService?.rating})
                                </h3>

                            </div>
                            <h5>
                                {singleService?.des}
                            </h5>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="card py-5">
                            <h5 className="mb-4 text-center text-highlighted fw-bold">Time Schedule</h5>

                            <Table striped bordered hover>
                                <tbody>
                                    <tr >
                                        <td>Monday - Friday</td>
                                        <td>9:00 - 17:00</td>
                                    </tr>
                                    <tr >
                                        <td>Saturday</td>
                                        <td>9:00 - 16:00</td>
                                    </tr>
                                    <tr >
                                        <td>Sunday</td>
                                        <td>Closed</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <hr />
                            <div className="mt-4 text-center">
                                <p className="mb-0">Need Urgent Help?</p>
                                <h3 className=" text-highlighted">+88 01611269298</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="mb-5">
                    <Button className="custom-button" variant="success">Proceed</Button>{' '}
                </div>
            </Container>

        </Container>
    )
}

export default ServiceDetailsPage
