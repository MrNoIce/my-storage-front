import React, { useEffect, useState } from 'react'

const FileStored = props => {

    const [getData, setData] = useState({})

    const getFiles = () => {
        fetch('http://localhost:5002/files', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        .then(e => e.json())
        .then(e => console.log(e, "response"))
        .then(data => setData(data))
    }
    console.log(getData, 'data')

    useEffect(() => {
        getFiles()
    }, [])

    return(
        <>
            <section>
                <h1>The damn data</h1>
                    {
                        // getData.id.map( data =>
                        //     <div key={data.id}>{data.title}</div>)
                    }
            </section>
        </>
    )
}
// const FileStored = () => {
//     const [hasError, setErrors] = useState(false);
//     const [planets, setPlanets] = useState({});

//     async function fetchData() {
//       const res = await fetch("http://localhost:5002/files");
//       res
//         .json()
//         .then(res => setPlanets(res))
//         .catch(err => setErrors(err));
//     }

//     useEffect(() => {
//       fetchData();
//     });

//     return (
//       <div>
//         <span>{JSON.stringify(planets)}</span>
//         <hr />
//         <span>Has error: {JSON.stringify(hasError)}</span>
//       </div>
//     );
//   };

export default FileStored

// const data = () => {
    //     for(let i=0; i < getData.length; i++){
    //         return i
    //     }
    // }
    // console.log(i, 'data')
