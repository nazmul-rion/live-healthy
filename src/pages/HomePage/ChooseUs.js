import React from 'react';
const ChooseUs = () => {
    return (
        <div className="container">
            <div className="text-center my-5">
                <h2 className="text-highlighted">
                    Why you should choose us.</h2>
                <h4>Our promises</h4>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 ">
                <div className="card mb-3 shadow">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <i className="fas fa-heartbeat text-highlighted"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    Honesty & transparency</h5>
                                <p className="card-text text-secondary">Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 shadow">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <i className="fas fa-search-dollar text-highlighted"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    Extra Discount</h5>
                                <p className="card-text text-secondary">Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 shadow ">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <i className="fas fa-info-circle text-highlighted"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    24/7 Support</h5>
                                <p className="card-text text-secondary">Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ChooseUs;