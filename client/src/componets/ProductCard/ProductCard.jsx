import './ProductCard.css';
export function ProductCard({item}){
    return(
        <div className='ProductCard'>
            <h1>
                {item.name}
            </h1>
            <img src={item.image} alt="Producto" />
            <p>
                {item.price}
            </p>
        </div>
    )
}