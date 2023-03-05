
function Buttons({filteredBooks}){
    return(
        <div className="cont btn">
            <button className="change fantasy" onClick={()=>filteredBooks("fantasy")}>Fantasy</button>
                <button className="change novel" onClick={()=>filteredBooks("novel")}>Novels</button>
            <button className="change detective" onClick={()=>filteredBooks("detective")}>Detective</button>
            <button className="change all" onClick={() => window.location.reload(false)}>All</button>
        </div>
    )
}
export default Buttons;
