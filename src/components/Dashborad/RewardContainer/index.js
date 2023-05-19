import React from 'react';
import './index.css'

const RewardContainer = () => {
    return (
        <div className="container mt-4 max-w">
            <div className="row">
                <div className="col-6 p-0">
                    <div className="d-flex align-items-center">
                        <div className="task-icon mr-3">
                            <img
                                src="https://res.cloudinary.com/fiewin1/image/upload/images/indexTaskV1.png"
                                alt="Task Icon"
                                className="img-fluid"
                            />
                        </div>
                        <div className="task-label">&nbsp;&nbsp;Task reward</div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex align-items-center justify-content-end">
                        <div className="check-in-icon mr-3">
                            <img
                                src="https://res.cloudinary.com/fiewin1/image/upload/images/indexCheckV1.png"
                                alt="Check-In Icon"
                                className="img-fluid"
                            />
                        </div>
                        <div className="check-in-label me-3">&nbsp;&nbsp;Check in</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RewardContainer;
