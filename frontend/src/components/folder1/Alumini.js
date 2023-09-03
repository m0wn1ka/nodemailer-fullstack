// import React, { useState ,useEffect} from 'react';
// import axios from 'axios';

// function Alumini() {
//     const [postData, setPostData] = useState([]); 
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//         console.log("log from seeposts")
//             // const response = await axios.get("https://radha-mounika-forum.onrender.com/forum");
//             const response = await axios.get("http://127.0.0.1:3001/alumini");
//             const data = response;
//             console.log("after call data is ",response.data)
//             console.log("we can see ",response.data[0])
//             // console.log("the total vists",response.data.visits)
//             setPostData(data); 
//           } catch (error) {
//             console.error("Error fetching data:", error);
//           }
//         }}, []);
        
    
//         fetchData();
//        const data=postData
//       }
//   return (
//     <div className="App">
//       hi
//       <div>
//         {data.map((item) => (
            
            

//           <div key={item["Email address"]}>
//             <h1>{item["anything that you want to share with others"]}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Alumini;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Alumini() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("log from see posts");
        // const response = await axios.get("https://radha-mounika-forum.onrender.com/forum");
        const res = await axios.get("http://127.0.0.1:3001/alumini");
        console.log("response is  ", res);
        console.log("response data is ",res.data);
        console.log("response data response is ",res.data.response)
         setPostData(res.data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <center>hi there this is the data of alumini </center><br>
      </br><center>used react,node,redux,mongodb,expres</center>
      <ul>
       
        {postData.map((item) => (
            <div>
                <b><i><u><h4> <li>student details</li></h4></u></i></b>
          <div key={item["Email address"]}>
            <li>{item["passedout year"]}</li>
            <li>{item["branch"]}</li>
            <li>{item["present status"]}</li>
            <li>{item["present location"]}</li>
            <li>{item["salary(if you want to tell)"]}</li>
            <li>{item['"personal mail(if students want to contact you)"']}</li>
            <li>{item["company name or job title (optional)"]}</li>
            <li>{item['"anything that you want to share with others"']}</li>
          </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Alumini;
