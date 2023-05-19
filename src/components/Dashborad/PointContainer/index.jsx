import React from 'react';
import './index.css'

function PointContainer() {
    return (
        <div className="d-flex justify-content-between mt-3 max-w">
            <div className=" align-items-center mb-2">
                <div className="text-secondary font-1 font-weight-bold">Point</div>
                <div className="d-flex">
                    <div className="mr-2 font-2">2.510</div>&nbsp;
                    <div className="d-flex align-items-end mb-2 text-secondary font-3">rupee</div>
                </div>
                <div className='font-1 font-weight-bold'>ID:14298537</div>
            </div>
            <div>
                <div>
                    <div className="recharge-btn btn btn-primary text-white font-weight-bold">
                        Recharge</div>
                </div>
                <div>
                    <div className="withdraw-btn btn btn-light mt-2">Withdraw</div>
                </div>
            </div>
        </div>
    );
}

export default PointContainer;

