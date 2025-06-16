export default function Form({recipeData,setRecipeData,onSubmit}){
    function handleChange(e){
        setRecipeData({...recipeData,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <h2>Recipe Name</h2>
            <input value={recipeData.name} name="name" onChange={handleChange}/>
            <label>Cuisine Type</label>
            <select name="type" value={recipeData.type} onChange={handleChange}>
                <option value="italian">Italian
                </option>
                <option value="mexican">Mexican</option>
                <option value="asian">Asian</option>
            </select>
            <label>Difficulty</label>
            <select name="difficulty" value={recipeData.difficulty} onChange={handleChange}>

                <option value="1">1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}