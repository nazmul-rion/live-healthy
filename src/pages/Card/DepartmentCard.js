import React from 'react'
import { Link } from 'react-router-dom';

const DepartmentCard = (props) => {
    const { key, name, des, img } = props.dep;

    return (
        <div className="col-lg-4 col-md-6 ">
            <div className="card h-100">
                <img height="250" src={img} className=" p-3" alt="..." />
                <div className="card-body">
                    <div >
                        <b><p className="text-custom">{name}</p></b>
                        <p >{des}</p>
                        <Link className="btn btn-info" to={`/serviceDetails/${key}`}>Learn More <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default DepartmentCard
