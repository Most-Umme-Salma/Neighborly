import { BsFillCartDashFill } from "react-icons/bs";
import PrimaryButton from '../Buttons/PrimaryButton'


export default function Summary(){

    return(
    <section className="summary">   
            <div className="summary-head d-flex">
                <BsFillCartDashFill size={25}/>
                <h3 className="p-8">Summary</h3>
            </div>
            <div className="summary-body">
                <h4>Price</h4>
                <p>icon</p>
                <p>11.98</p>
            </div>
            <div className="preview">
                <h4>Preview</h4>
                <p>image</p>
                <h5>Asset title + maybe id</h5>
                <p>Non occaecat qui voluptate cillum ut quis elit ex eu velit exercitation commodo eu ut ea occaecat. Reprehenderit consequat duis sit nostrud non dolore ad qui voluptate irure duis nulla sint sit minim voluptate aute non exercitation. Lorem cupidatat proident irure occaecat tempor</p>
            </div>
            <div className="d-flex p-8">
            <span className="tag p-8">New</span>
            <span className="tag p-8">Category</span>
            </div>
            <PrimaryButton>Post your listing</PrimaryButton>
        
    </section>
    )};