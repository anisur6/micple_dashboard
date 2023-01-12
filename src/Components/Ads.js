import React, { useEffect, useState } from 'react';

const Ads = () => {

    const [data, setData] = useState([]);



    useEffect(() => {
        fetch("user.json")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const uniqueContendor = [];
 
    data.map((user) => {
        const userId = user.userId;
        const index = uniqueContendor.findIndex((item) => item.userId === userId);

        if (index === -1) {
            const contendor = { ...user, count: 1 };
            uniqueContendor.push(contendor);
          } else {
            uniqueContendor[index]["count"] += 1;
          }
    }, [])



 return (
        <div className='external'>
                 {
                        uniqueContendor.map((contendor) => {
                            return (                              
                              <div>
                                <p className=' fs-5 fw-bold'>{contendor.userId}</p>
                                <p className='mt-3 text-primary fs-2 fw-bold'>{contendor.count}</p>
                              </div>                                       
                            )
                          })
                }
          
        </div>
    );
};

export default Ads;