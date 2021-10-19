import React from 'react'
import DepList from '../../hooks/DepList'
import DepartmentCard from '../Card/DepartmentCard'

const Department = () => {

    const [deps] = DepList();
    return (
        <div>

            <h1 className="mb-3 text-center fw-bold">Our Services</h1>

            <div className="row g-4">

                {
                    deps.map(dep => <DepartmentCard
                        key={dep.key}
                        dep={dep}
                    >
                    </DepartmentCard>)
                }


            </div>










        </div>

    )
}

export default Department
