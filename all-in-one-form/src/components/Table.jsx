export default function Table({submission,onBack}){

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Subscription</th>
                    <th>Pet</th>
                    </tr>
                </thead>
                <tbody>
                    {submission.map((t,i)=>(
                        <tr key={i}>
                            <td>{t.name}</td>
                            <td>{t.age}</td>
                            <td>{t.gender}</td>
                            <td>{t.subscription}</td>
                            <td>{t.pet}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={onBack}>Go Back</button>
        </div>
    )
}