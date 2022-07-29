import React from 'react'

const Cards = ({ Alldata }) => {
    

    return (

        <>
            {Alldata.map((details , index) => {
                return (
                    <>
                        <div className="col-5 mb-4"  key={index} data-id={details.id}>
                            <div className="card">
                                <div className="imgcover">
                                    <img
                                        src={details.imgdata}
                                        className="w-100  img  "
                                        alt="main-img"/>
                                </div>
                                <div className="card-body">
                                    <div className="parenttitle">
                                        <h3 className="card-title mb-0 fw-bold"> {details.rname}</h3>
                                        <span className="rating">{details.rating} &nbsp;★</span>
                                    </div>
                                    <div className="fooddetails mt-3 mb-3">
                                        <p className="lower_data ">
                                            {details.address}
                                        </p>
                                        <p className="lower_data2"> {details.price} </p>
                                    </div>
                                    <div className="level2 mb-4">
                                        <div className="delivery_partner stylebox">
                                            <img src={details.arrimg} alt="zzz" className="img_delivery" />
                                        </div>
                                        <p className=""></p>
                                        <h5 class="  mb-0 fw-bold text-info1">  {details.somedata}</h5>
                                    </div>
                                    <div className="level3">
                                        <a href="#0" className="btn btn-dark  ">
                                            Order Now
                                        </a>
                                        <div className="offer delivery_partner">
                                            <img src={details.delimg} alt="offer" className="img_offer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
};

export { Cards };