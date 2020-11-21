import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Banner from './components/Banner/Banner';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { fetchProducts } from './redux/products/productActions';

function App() {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
      <div className="container">
        {/* breadcrumb */}
        <p className="breadcrumb">Home / Clothing / Mens Clothing / <strong>All Mens Clothing</strong></p>
        {/* details */}
        <h2 className="allProducts">All Products({products.length} Products)</h2>
        <Filters />
        <hr className="filter-division" />
        {/* products */}
        <div className="products__container">
          {products.loading ? (
            <h2>Loading...</h2>
          ) : products.error ? (
            <h2>{products.error}</h2>
          ) : (products.map(product => (
            <Products key={product.id} imgSrc={product.image_src} brand={product.vendor} name={product.name} price={product.price} oldPrice={product.compare_at_price} discount={'50%'} options={product.options} />
          )))}
        </div>
      </div>
    </div>
  );
}

export default App;
