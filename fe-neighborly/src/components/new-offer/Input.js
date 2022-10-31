import TertiaryButton from "../Buttons/TertiaryButton";

export default function Input({handleSubmit, handleChange, state, setState}){

    return(
        <form onSubmit={handleSubmit} className="submitForm">
            <div className="title">
                <h3>Title</h3> 
                <input className="black" type="text" onChange={handleChange} name="title" value={state.title || setState.title } />
            </div>
            <div className="description">
                <h3>Description</h3>
                <textarea rows={4} onChange={handleChange} name="desc" value={ state.desc || setState.desc }/>
            </div>
           
            <div className="price">
                <h3>Price</h3>
                <div className="d-flex">
                <select name="currency" value={state.currency || setState.currency} onChange={handleChange}>
                <option value="euro">Eur</option>
                <option value="dodge">DodgeCoin</option>
                <option value="bitcoin">Bitcoin</option>
                </select>
                <input type="number" onChange={handleChange} name="price" value={state.price || setState.price} />
                </div>
            </div>
            <div className="category">
                <h3>Category</h3>
                <select name="category" value={state.category || setState.category} onChange={handleChange}>
                <option value="electric">Electric</option>
                <option value="home">Home</option>
                <option value="service">Service</option>
                </select>
            </div>
            <div className="condition">
                <h3>Condition</h3>
                <select name="condition" value={state.condition || setState.condition} onChange={handleChange}>
                <option value="used">Used</option>
                <option value="new">new</option>
                </select>
            </div>
            <div className="location">
                <h3>Location</h3>
                <input type="number" maxLength="5" placeholder="Enter PLZ" name="location" onChange={handleChange} value={state.location || setState.location} />
            </div>
            <div className="upload">
                <h3>Upload picture</h3>
                <input type="file" accept="image/*" />
            </div>
            <TertiaryButton /> 
        </form> 
       
        
    )
}