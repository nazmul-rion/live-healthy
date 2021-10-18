import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import banner from '../../images/banner.png'
const Banner = () => {
    return (
        <Container fluid className="mb-5">

            <Row className="flex-column-reverse flex-lg-row align-items-center justify-content-center">
                <Col sm={12} md={6}>
                    <div className="p-lg-5 p-2">
                        <h1 className=" fw-bold">Intensifying <span className="text-highlighted">Life and Care</span> </h1>
                        <h2>
                            We are here to serve you...
                        </h2>
                        <Button className="my-5">Browse more</Button>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <img className="img-fluid py-5" src={banner} alt="" />
                </Col>
            </Row>

        </Container>
    )
}

export default Banner
