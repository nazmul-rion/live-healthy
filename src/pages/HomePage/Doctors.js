import React from 'react'
import { Container } from 'react-bootstrap';
import DoctorList from '../../hooks/DoctorList';
import DoctorCard from '../Card/DoctorCard';
const Doctors = () => {
    const [doctors] = DoctorList();
    return (
        <Container>
            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                {
                    doctors.slice(0, 3).map(doctor => <DoctorCard
                        key={doctor.key}
                        doctor={doctor}
                    >
                    </DoctorCard>)
                }
            </div>
        </Container>
    )
}

export default Doctors