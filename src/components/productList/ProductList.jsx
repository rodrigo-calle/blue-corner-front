import React, {useState, useEffect} from 'react';
import productService from '../services/product';
import './ProductList.scss';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState();

    const getAllProducts = async () => {
        const response = await productService.getProducts();
        const data = await response.json();

        if(!response) {
            console.log("error al listar productos");
        }
        setProducts(data);
    }
    useEffect (()=> {
        getAllProducts();
    }, [refresh])

    const handleDelete = async (e) => {
        const id = e.target.getAttribute('id');
        const response = await productService.deleteProduct(id)
        if(response.ok){
            alert('Producto Eliminado');
            setRefresh(Math.random())
        } else {
            alert('Ocurrió un error');
        }
    }

    return (
        <div className="product-list-container">
            <h2 className="product-list-container__title">Productos</h2>
            {(products === undefined || products.length === 0) ?
                <p>No existen productos registrado</p>
                :
                products?.map((product) => (
                <div className="product-list-container__card" key={product.id}>
                    <div className="product-list-container__card--content">
                        <p className="product-name">{product.name}</p>
                        <button  onClick={handleDelete}  id={product.id} type="button" className="product-btn">Eliminar</button>
                    </div>                
                </div>
                ))
            }            
            
        </div>
    )
}

export default ProductList;