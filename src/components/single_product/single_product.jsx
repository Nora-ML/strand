import React, { useContext ,useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/products-context";
import Layout from '../shared/layout';
import './single_product.styles.scss';


const SingleProduct = () => {
    const { products } = useContext(ProductsContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        console.log("Single product useEffect")
        const product = products.find((item) => Number(item.id) === Number(id));
        // if product doesn't exist redirect to shop page
        if (!product) {
            return navigate('/shop')
        } else {
            return setProduct(product);
        }
    },[id, navigate, product, products])
    // that's for the benefit of the first render before useffect runs
    if (!product) return null;
    
    const { imageUrl, title, price, description } = product;

    return (
        <Layout>
            <div className="single-product-container">
                <div className="product-image">
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="product-details">
                    <div className="name-price">
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                    <div className="add-to-cart-btns">
                        <button className="button is-white strands-btn" id='btn-white-outline'>
                            Add to cart
                        </button>
                        <button className="button is-black strands-btn" id='btn-white-outline'>
                            Proceed to checkout
                        </button>
                    </div>
                    <div className="product-description">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default SingleProduct;