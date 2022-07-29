import React, { useEffect, useState } from "react";
import Fooddata from "./Carddata";
import { Cards } from "./Card";
import {Set} from "./Set";
 

const Search = () => {
  const Applogo = "https://i0.wp.com/logotaglines.com/wp-content/uploads/2021/01/Swiggy-Logo-Tagline-Slogan.jpg?fit=1200%2C900&ssl=1";
   
    const [currdata, setdata] = useState([]) // for current filter data

    const [filldata, setfilldata] = useState() // for current inputtype data


    // filter by function and usestate
  // const changeData =(e)=>{
  //   var InputSearchdata = e.toLowerCase();
  //   if(InputSearchdata = ""){
  //     setdata(Searchdata)
  //   }else{
  //     var InputSearchdata = e.toLowerCase();
  //     let FilterData = currdata.filter((elm )=>  elm.rname.toString().toLowerCase().match(InputSearchdata))
  //     setdata(FilterData);
  //   }
  // }

 

  useEffect(() => {
    setTimeout(() => {
      setdata(Fooddata)
    }, 3000);
  }, []);


  return (
    <>
       
      <div className="Searchpage">
        <nav className="navbar navbar-expand-lg py-2">
          <div className="container-fluid">
            <a className="navbar-brand" href="#0">
              <img src={Applogo} alt="logo" className="logo" />
            </a>
            <h2 className="headtext">Search Filter App</h2>
            <form className="d-flex Search-Section">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                // onChange={(e)=> changeData(e.target.value)}
                 onChange={(e)=> setfilldata(e.target.value.toString().toLowerCase())}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="section-1 container">
          <h1 className="section-1-head  mt-5 mb-2">
          Search Card Title And Get Results  
          </h1>
          <h3 className="section-1-head fs-3 mb-5">Restaurants in Ahmedabad Open now</h3>
          <div className="row">
          {currdata && currdata.length  ?   <Cards Alldata={currdata} input={filldata} />  : <Set dummy={Fooddata} /> }
          </div>
        </div>
      </div>
     
    </>
  );
};

export { Search };
