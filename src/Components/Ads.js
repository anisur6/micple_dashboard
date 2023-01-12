import React, { useEffect, useState } from 'react';

const Ads = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("user.json")
      .then(res => res.json())
      .then(country => setData(country))
   }, [])


   const country = [...new Set(data.map(item => item.country))]
   country.sort();



   let userCollection = [];

  data.map((item) => {
        const userId = item.country;
        const index = userCollection.findIndex((item) => item.country === userId);
        console.log(index);
        if (index === -1) {
            const contendor = { ...item, count: 1 };
            userCollection.push(contendor);
          } else {
            userCollection[index]["count"] += 1;
          }

   }, [])


 
  
 return (
        <div className='external'>
         
                {
                        userCollection.map((contendor) => {
                            return (                              
                              <div>
                                <p className=' fs-5 fw-bold'>{contendor.country} = {contendor.userId} ({contendor.count})</p>
                              </div>                                       
                            )
                          })
                }


{/*                 
                 {
                        country.map((contendor) => {
                            return (                              
                              <>
                                <p className='mt-3 text-primary fs-2 fw-bold'>{contendor}({contendor.count})</p>
                              </>                                       
                            )
                          })
                } */}
        </div>
    );
};

export default Ads;