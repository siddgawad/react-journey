export default function Form({data,setData,onSubmit}){

    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value});
    }
    function onReset(){
        setData({name:"",age:"",gender:"",subscription:"",pet:""})
    }
    return(
        <div>
            <h2>Name</h2>
            <input type="text" value={data.name} name="name"  onChange={handleChange}/>
            <h2>Age</h2>
            <input type="number" value={data.age} name="age" onChange={handleChange} />
            <label>Gender</label>
            <select name="gender" value={data.gender} onChange={handleChange}>
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <h2>Subscription</h2>
<input type="checkbox" name="subscription" value="fatloss" checked={data.subscription==="fatloss"} onChange={handleChange} /><label>Fat Loss</label>
<input type="checkbox" name="subscription" value="bulk" checked={data.subscription==="bulk"} onChange={handleChange}/><label>Bulk</label>
<input type="checkbox" name="subscription" value="lean" checked={data.subscription==="lean"} onChange={handleChange}/><label>Lean</label>

<h2>Favourite Pet</h2>
<input type="radio" name="pet" value="dog" checked={data.pet === "dog"} onChange={handleChange}/><label>Dog</label>
<input type="radio" name="pet" value="cat" checked={data.pet === "cat"} onChange={handleChange}/><label>Cat</label>
<input type="radio" name="pet" value="bird" checked={data.pet === "bird"} onChange={handleChange}/><label>Bird</label>
            
            <button onClick={onSubmit}>Submit</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}