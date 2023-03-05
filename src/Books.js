

function Books({booksToChoose}){
return(
    <div className="products ">
        {booksToChoose.map((element => {
            const {id,name,image,price,author} = element;
            return(
                
                <div className="product-card" key={id}>
                    <div className="book-card">
                <img  src={image} width="240px" height="350px" alt="book"/>
                <div className="product-info">
                    <h3>"{name}"</h3>
                    <h4>{author}</h4>
                    <h2>{price}$</h2>
                    
                </div>
                </div>
                </div>
            )
        }))}
        
    </div>
)
}

export default Books;