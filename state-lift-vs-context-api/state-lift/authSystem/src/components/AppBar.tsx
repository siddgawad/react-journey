type AppBarprops= {
    user: string|null;
}

export function AppBar({user}:AppBarprops){
    return(
        <header style={{padding:"1rem",background:"black"}}>
            {user?<span>{user}</span>:<span>Not logged</span>}
        </header>
    )
}