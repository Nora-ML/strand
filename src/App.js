import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home_page";
import NotFound from "./components/not_found";
import Shop from "./components/pages/shop/shop";
import SingleProduct from "./components/single_product/single_product";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/shop" element={<Shop />} />
				<Route exact path="/product/:id" element={<SingleProduct />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
