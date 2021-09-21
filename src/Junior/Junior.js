import React, { useState } from 'react';
import './Junior.css';


const Junior = (props) => {
   
   const [partner,setPartner] =useState("")
   
   
   const  showPartner=(partner)=>{
    setPartner(partner)
   }
   





    return (
        <div className="col-md-4  text-center border">

            <img className="junior-dev" src={props.junior.img} alt="" />
            <h5> {props.junior.name}</h5>

             <h4>Partner: {partner}</h4>

            <button 
              onClick={()=> showPartner(props.junior.partner)}
              className="btn btn-primary">
                  Show Partner
            </button>
            <button 
               onClick={props.handleIncrease}
              className="btn btn-warning">
                  Show Partner
            </button>
          </div>
    );
};

export default Junior;