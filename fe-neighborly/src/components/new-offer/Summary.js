import "./style/newOffer.css";

export default function Summary(){

    return(
    <section className="summary">
     
            <div className="summary-head">
                <p>icon</p>
                <h3>Summary</h3>
            </div>
            <div className="summary-body">
                <h4>Price</h4>
                <p>icon</p>
                <p>11.98</p>
                <button>Fixed</button>
            </div>
            
            <div className="preview">
                <h4>Preview</h4>
                <p>image</p>
                <h5>Asset title + maybe id</h5>
                <p>Non occaecat qui voluptate cillum ut quis elit ex eu velit exercitation commodo eu ut ea occaecat. Reprehenderit consequat duis sit nostrud non dolore ad qui voluptate irure duis nulla sint sit minim voluptate aute non exercitation. Lorem cupidatat proident irure occaecat tempor</p>
                <button >New</button>
                <button >New</button>
            </div>
            <button>Post your listing</button>
        
    </section>
    )};