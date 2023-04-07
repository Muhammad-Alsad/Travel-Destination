import { useParams } from "react-router";
import { useState } from "react";


function TourDeails(props) {

    const { id } = useParams();
    const [readData, setReadData] = useState(false);
    //console.log(props.data)
    return (
        <>
            {
                props.data.map(element => {
                    if (element.id === id) {
                        return (
                            <div>
                                <h2>{element.name}</h2>
                                <img src={element.image} alt={element.name} />
                                <div>
                                    {
                                        readData?<>
                                            <p>{element.info}</p>
                                            <button onClick={()=>setReadData(false)}>show-Less</button>
                                        </>
                                        :
                                        <>
                                        <p>{(element.info).substring(0,210)}</p>
                                            <button onClick={()=>setReadData(true)}>show-More</button>
                                        </>
                                    }
                                </div>
                            </div>
                        )
                    }

                })

            }
        </>
    );
}
export default TourDeails;