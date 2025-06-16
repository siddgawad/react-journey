export default function Form({movieData,setMovieData,onSubmit}){

function handleChange(e){
setMovieData({...movieData,[e.target.name]:e.target.value})
}
    return(
        <div>
            <h2>Movie Title</h2>
            <input name="name" value={movieData.name} onChange={handleChange}  />
            <h2>Genres</h2>
            <label>Choose a Genre:</label>
            <select name="genre" value={movieData.genre} onChange={handleChange}>
                <option  value="Action">Action</option>
                <option  value="Comedy">Comedy</option>
                <option  value="Drama">Drama</option>
                <option  value="Horror">Horror</option>
                <option  value="Sci-Fi">Sci-Fi</option>
            </select>
            <h2>Give rating</h2>
            <select name="rating" value={movieData.rating} onChange={handleChange}>
  <option value="">Select Rating</option>
  <option value="1">1 ⭐</option>
  <option value="2">2 ⭐⭐</option>
  <option value="3">3 ⭐⭐⭐</option>
  <option value="4">4 ⭐⭐⭐⭐</option>
  <option value="5">5 ⭐⭐⭐⭐⭐</option>
</select>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}