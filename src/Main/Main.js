import React, { useEffect, useState } from "react";
import Junior from "../Junior/Junior";
import "./Main.css";




const Main = () => {
  // const juniors=[
  //     {
  //         id:"121",
  //         name: "Andrea",
  //         img : "https://randomuser.me/api/portraits/med/women/70.jpg"

  //     },
  //     {
  //         id:"121",
  //         name: "Andrea",
  //         img : "https://randomuser.me/api/portraits/med/women/22.jpg"

  //     },
  //     {
  //         id:"121",
  //         name: "Andrea",
  //         img : "https://randomuser.me/api/portraits/med/women/53.jpg"

  //     },
  //     {
  //         id:"121",
  //         name: "Andrea",
  //         img : "https://randomuser.me/api/portraits/med/women/70.jpg"

  //     },
  //     {
  //         id:"121",
  //         name: "Andrea",
  //         img : "https://randomuser.me/api/portraits/med/women/70.jpg"

  //     },
  //     {
  //         id:"121",
  //         name: "Andrea",
  //         img : "https://randomuser.me/api/portraits/med/women/70.jpg"

  //     },
  // ];

  const [juniors, setJuniors] = useState([]);
  const [count , setCount] = useState(0)


const  handleIncrease=()=> {
      const newCount=count+1
      setCount(newCount)
}


useEffect(() => {
    fetch("/juniors.json")
      .then((res) => res.json())
      .then((data) => setJuniors(data));
  }, []);

  return (
    <main>
      <section className="container">
        <h2 className="text-center mb-5"> Junior developers</h2>
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              {
                //  ekahne amra map korbo and junior dr dkabo

                juniors.map((junior) => (
                    
                  <Junior
                     key={junior.id}   
                     junior={junior} 
                      handleIncrease={handleIncrease}
                      >
              </Junior>
                ))
              }
            </div>
          </div>

          <div className="col-md-2">
            <h2> Added:  {count} </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
