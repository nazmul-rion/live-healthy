import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

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
        <div>
            <h1>{singleService?.name}</h1>
        </div>
    )
}

export default ServiceDetailsPage
