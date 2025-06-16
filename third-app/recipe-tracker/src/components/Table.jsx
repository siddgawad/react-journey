export default function Table({submission,onBack}){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Recipe Name
                        </th>
                        <th>Cuisine Type</th>
                        <th>Difficulty</th>

                    </tr>
                </thead>
                <tbody>
                    {submission.map((t,i)=>(
                         <tr key={i}>
                         <tb>{t.name}
                         </tb>
                         <tb>{t.type}</tb>
                         <tb>{t.difficulty}</tb>
                     </tr>
                    ))}
                   
                </tbody>
            </table>
            <button onClick={onBack}>Go Back</button>
        </div>
    )
}