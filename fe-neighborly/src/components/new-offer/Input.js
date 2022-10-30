import TertiaryButton from "../Buttons/TertiaryButton";

export default function Input({handleSubmit, handleChange, title}){

    return(
        <form onSubmit={handleSubmit} className="submitForm">
            <div className="title">
                <h3>Title</h3> 
                <input className="searchInput" type="text" onChange={handleChange} value={title} />
            </div>
            <div className="description">
                <h3>Description</h3>
                <textarea rows={4} onChange={handleChange}/>
            </div>
            <div className="price">
                <h3>Price</h3>
                <div className="d-flex">
                <select name="currency">
                <option value="euro">Eur</option>
                <option value="dodge">DodgeCoin</option>
                <option value="bitcoin">Bitcoin</option>
                </select>
                <input type="number" onChange={handleChange} />
                </div>
            </div>
            <div className="category">
                <h3>Category</h3>
                <select name="category">
                <option value="electric">Electric</option>
                <option value="home">Home</option>
                <option value="service">Service</option>
                </select>
            </div>
            <div className="condition">
                <h3>Condition</h3>
                <select name="condition">
                <option value="used">Used</option>
                <option value="new">new</option>
                </select>
            </div>
            <div className="location">
                <h3>Location</h3>
                <input type="number" maxLength="5" placeholder="Enter PLZ"/>
            </div>
            <div className="upload">
                <h3>Upload picture</h3>
                <input type="image" />
            </div>
            <TertiaryButton />
        </form> 
       
        
    )
}