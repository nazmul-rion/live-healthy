import { useEffect } from "react";
import { useState } from "react"

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./DoctorList.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return [doctors, setDoctors];
}

export default DoctorList;