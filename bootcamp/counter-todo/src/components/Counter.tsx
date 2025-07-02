

type Props = {
    count: number
    increaseCount:()=>void; decreaseCount:()=>void;
}

export const Counter = ({count,increaseCount,decreaseCount}:Props)=>{

    return(
        <div>
            <div>
                <h1>Counter App</h1>
            </div>
            <div>{count}</div>
            <div>
                <button onClick={()=>increaseCount()}>Increase Count</button>
                 </div>
                 <div>
                    <button onClick={()=>decreaseCount()}>Decrease Count</button>
                    </div>
            
        </div>
    )
}