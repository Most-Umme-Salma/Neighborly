import { BsFillCartDashFill } from "react-icons/bs";
import PrimaryButton from '../Buttons/PrimaryButton'


export default function Summary({state, file, preview}){
    console.log(state)
    return(
    <section className="summary">   
            <div className="summary-head d-flex">
                <BsFillCartDashFill size={25}/>
                <h3 className="p-8">Summary</h3>
            </div>
            <div className="summary-body">
                <h4>Price</h4>
                <p>{state.currency || "Eur"}</p>
                {console.log(state.price )}
                <p>{state.price || "0"}</p>
            </div>
            <div className="preview">
                <h4>Preview</h4>
                {console.log({file})}
                <p>{ file ? <img src={preview} className="card-img-top"/> : <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" className="card-img-top" alt="cardtitle" />}</p>
                <h5>{state.title || "Title"}</h5>
                <p>{state.description || "Non occaecat qui voluptate cillum ut quis elit ex eu velit exercitation commodo eu ut ea occaecat. Reprehenderit consequat duis sit nostrud non dolore ad qui voluptate irure duis nulla sint sit minim voluptate aute non exercitation. Lorem cupidatat proident irure occaecat tempor"}</p>
            </div>
            <div className="d-flex p-8">
            <span className="tag p-8">{state.condition || "new"}</span>
            <span className="tag p-8">{state.category || "all"}</span>
            </div>
            
        
    </section>
    )};