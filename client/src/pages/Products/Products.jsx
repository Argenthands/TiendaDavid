import './Products.css';
import { ProductCard } from '../../componets/index.js'; 
export function Products() {
    const test = [0,1,2,3,4,5,6,7,8,9]
    return (
        <div className='Products'>
            {test.map(item => (
                <ProductCard key={item} item={item}/>
            ))}
        </div>
    )
}
