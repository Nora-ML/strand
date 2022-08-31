import React,{useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { isIncart } from "../../helpers";
import { CartContext } from "../../context/cart-context";
import "./featured_product.styles.scss";


const FeaturedProduct = (product) => {
    console.log("Featured_Product running")
    
    const { title, imageUrl, price, id ,description} = product;
    //const product = { title, imageUrl, price, id, description };
    const { addProduct, cartItems } = useContext(CartContext);

    const navigate = useNavigate();

    return (
        <div className="featured-product">
            <div className="featured-image">
                <img src={imageUrl} alt={title} onClick={() => navigate(`/product/${id}`)}/>
            </div>
            <div className="name-price">
                <h3>{title}</h3>
                <p>$ {price}</p>
                {!isIncart(product, cartItems) &&
                    <button className="button is-black strands-btn" onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
                }
                {isIncart(product, cartItems) &&
                    <button className="button is-black strands-btn" id='btn-white-outline' onClick={()=>{}}>
                       Add More
                    </button>
                }
            </div>
        </div>
    )
}
export default FeaturedProduct;