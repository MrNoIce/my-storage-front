import React, { useEffect, useState } from 'react'

// const FileStored = () => {

//     const [getData, setData] = useState([])

//     const getFiles = () => {
//         fetch('http://localhost:5002/files', {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             }
//         })
//         .then(e => e.json())
//         .then(e => console.log(e, "response"))
//         .then(data => setData(data))
//     }
//     console.log(getData, 'data')

//     useEffect(() => {
//         getFiles()
//     }, [])

//     return(
//         <>
//             <section>
//                 <h1>The damn data</h1>
//                     {
//                         getData.map( data => (
//                             <div key={data.id}>{data.title}</div>))
//                     }
//             </section>
//         </>
//     )
// }
const FileStored = () => {
    const [hasError, setErrors] = useState(false);
    const [getData, setData] = useState([]);

    async function fetchData() {
      const response = await fetch("http://localhost:5002/files");
      const data = await response.json();
      setData(data);
        console.log(data, 'data')
    }

    useEffect(() => {
      fetchData();
    }, []);

    return (

          <div>
            <span>
              {getData.map(data => (
                <div key={data.id}>{data.title}</div>
              ))}
            </span>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
          </div>
        )

  };

export default FileStored