import './ProductCard.css';
export function ProductCard({item}){
    return(
        <div className='ProductCard'>
            <h1>
                {item}
            </h1>
        </div>
    )
}