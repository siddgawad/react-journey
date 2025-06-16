export default function ListView({data,onBack}){
    return(
        <div>
            {data.map((t,index)=>(
                <ul key={index}>
                    <li>{t.field1}</li>
                    <li>{t.field2}</li>
                </ul>
            ))}
            <button onClick={onBack


            }>Go Back</button>
        </div>
    )
}