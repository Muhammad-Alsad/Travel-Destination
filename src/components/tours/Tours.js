import './tours.css'

function Tours(prop) {
    const data = prop.data;
    console.log(prop.data);
    return(
        <main>
            {
                data.map((element) => {
                    return (
                        <div className='cards' >
                            <div><h1>{element.name}</h1></div>
                            <div className='img'><img src={element.image} alt={element.name}/></div>
                            <div>
                                <p>{element.info}</p>
                                <p>Trip price : {element.price}</p>
                            </div>
                            <div className='space'>
                            </div>
                        </div>
                    )
                })
            }
        </main>
    );
}
export default Tours;