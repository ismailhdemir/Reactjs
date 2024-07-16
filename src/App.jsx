
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import CreateProductGroup from './components/ProductGroup/CreateProductGroup';
import UpdateProductGroup from './components/ProductGroup/UpdateProductGroup';
import DeleteProductGroup from './components/ProductGroup/DeleteProductGroup';
import CreateProduct from './components/Product/CreateProduct';
import UpdateProduct from './components/Product/UpdateProduct';
import DeleteProduct from './components/Product/DeleteProduct';
import SearchProduct from './components/SearchProduct';
import ListProducts from './components/Product/ListProducts';

const App = () => {
    return (
        <Router>
            <div className="app">
                <nav>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/product-group/create">Create Product Group</Link></li>
                        <li><Link to="/product-group/update">Update Product Group</Link></li>
                        <li><Link to="/product-group/delete">Delete Product Group</Link></li>
                        <li><Link to="/product/create">Create Product</Link></li>
                        <li><Link to="/product/update">Update Product</Link></li>
                        <li><Link to="/product/delete">Delete Product</Link></li>
                        <li><Link to="/product/search">Search Product</Link></li>
                        <li><Link to="/product/list">List Products</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/product-group/create" element={<CreateProductGroup />} />
                    <Route path="/product-group/update" element={<UpdateProductGroup />} />
                    <Route path="/product-group/delete" element={<DeleteProductGroup />} />
                    <Route path="/product/create" element={<CreateProduct />} />
                    <Route path="/product/update" element={<UpdateProduct />} />
                    <Route path="/product/delete" element={<DeleteProduct />} />
                    <Route path="/product/search" element={<SearchProduct />} />
                    <Route path="/product/list" element={<ListProducts />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
