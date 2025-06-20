export default function Table({submission,onBack,onEdit,onDelete}){

    return(
        <div>
            <h1>Todos Table</h1>
            <table>
                <thead>
                    <tr>
                    <th>
                        Title
                    </th>
                    <th>Description</th>
                    </tr>
                   
                </thead>
                <tbody>
                    {submission.map((t,i)=>(
                         <tr key={i}>
                         <td>{t.title}</td>
                         <td>{t.description}</td>
                         <td><button onClick={()=>onEdit(t.id)}>Edit</button></td>
                         <td><button onClick={()=>onDelete(t.id)}>Delete</button></td>
                         </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={onBack}>Go Back</button>
        </div>
    )
}