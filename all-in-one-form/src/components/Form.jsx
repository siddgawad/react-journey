export default function Form({data,setData}){

    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value});
    }
    return(
        <div>
            <h2>Name</h2>
            <input type="text" value={data.name} name="name"  onChange={handleChange}/>
            <h2>Age</h2>
            <input type="number" value={data.age} name="age" onChange={handleChange} />
            <label>Gender</label>
            <select name="gender" value={data.gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <h2>Subscription</h2>
            <input type="checkbox" name="subscription" value="premium" /><label>Premium</label>
            <input type="checkbox" name="subscription" value="standard"/><label>Standard</label>
            <input type="checkbox" name="subscription" value="free"/><label>Free</label>

            <h2>Favourite Pet</h2>
            
        </div>
    )
}