export default function Table({movieData,onBack}){


    return(
        <div>

            
                <table>
                    <thead>
                        <tr>
                            <th>Movie Name</th>
                            <th>Genres</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    {movieData.map((t,i)=>(
                        <tr key={i}>
                            <td>{t.name}</td>
                            <td>{t.genre}</td>
                            <td>{t.rating}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
           
            <button onClick={onBack}>Go Back</button>
        </div>
    )
}