export default function FormView({data,setData,onSubmit}){

function handleChange(e){
    setData({...data,[e.target.name]:e.target.value})
}

    return(
    <div>
          <h2>Field 1</h2>
          <input name="field1" value = {data.field1} onChange={handleChange}/>
          <h2>Input 2</h2>
          <input name ="field2" value={data.field2} onChange={handleChange} />
          <button onClick={onSubmit}>Submit</button>

    </div>
  
)

} 