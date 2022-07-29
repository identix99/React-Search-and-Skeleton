import React from 'react';
import {NotFound} from "./NotFound";

const Cards = ({ Alldata , input }   ) => {
// console.log(input);


    return (

        <>
            { Alldata.filter((item)=>{
                if(input === ""){
                    return item
                }else if( item.rname.toString().toLowerCase().match(input) || item.price.toString().toLowerCase().match(input) ||  item.somedata.toString().toLowerCase().match(input) ||  item.address.toString().toLowerCase().match(input) ||  item.rating.toString().toLowerCase().match(input) ){
                    return item
                }
            }).map((item , index) => {
                return (
                    <>
                        <div className="col-5 mb-4"  key={index} data-id={item.id}>
                            <div className="card">
                                <div className="imgcover">
                                    <img
                                        src={item.imgdata}
                                        className="w-100  img  "
                                        alt="main-img"/>
                                </div>
                                <div className="card-body">
                                    <div className="parenttitle">
                                        <h3 className="card-title mb-0 fw-bold"> {item.rname}</h3>
                                        <span className="rating">{item.rating} &nbsp;★</span>
                                    </div>
                                    <div className="fooditem mt-3 mb-3">
                                        <p className="lower_data ">
                                            {item.address}
                                        </p>
                                        <p className="lower_data2"> {item.price} </p>
                                    </div>
                                    <div className="level2 mb-4">
                                        <div className="delivery_partner stylebox">
                                            <img src={item.arrimg} alt="zzz" className="img_delivery" />
                                        </div>
                                        <p className=""></p>
                                        <h5 class="  mb-0 fw-bold text-info1">  {item.somedata}</h5>
                                    </div>
                                    <div className="level3">
                                        <a href="#0" className="btn btn-dark  ">
                                            Order Now
                                        </a>
                                        <div className="offer delivery_partner">
                                            <img src={item.delimg} alt="offer" className="img_offer" />
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