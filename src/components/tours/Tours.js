
import './tours.css'
import Tour from '../tours/tour/Tour'


function Tours(props) {

    return (
     <>
            {
                props.data.map(element => {
                    return (
                    <Tour element={element}/>
                    )
                })
            }
      </> 
    );
}
export default Tours;