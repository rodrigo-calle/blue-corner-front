import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import productService from '../../components/services/product'
import labelService from '../../components/services/labels'

import './ProductRegister.scss';

const ProductRegister = () => {
    const [label, setLabel] = useState();
    const [labelList, setLabelList] = useState([]);
    const [product, setProduct] = useState("");

    const navigate = useNavigate()

    const captureProduct = (e) => {
        const productText = e.target.value;
        setProduct(productText);
    }


    const captureLabel = (e) => {
        const labelText = e.target.value;
        setLabel(labelText)
    }

    const saveLabel = (e) => {
        e.preventDefault();
        if(labelList.includes(label)) {
            alert(`Ya existe la etiqueta ${label} por favor inserte otra`)
        } else {
            if(label.length === 0) {
                alert(`El etiqueta no puede estar vacia`)
            } else {
                setLabelList(oldArray=>[...oldArray, label])
            }            
        }       
    }

    const removeLabel = (e) => {
        const name = e.target.getAttribute('name');
        setLabelList(labelList.filter(item => item !== name));
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        if(product === ""){
            alert(`El producto no puede registrarse sin nombre`);
        }else {
            const response = await productService.createProduct({name: product})
               
            try{           
                if(response.ok) alert('Producto registrado');
                const lastProduct = await productService.getLastRegister();
                const data = await lastProduct.json();
                const product_id = data[0].id;

                labelList.forEach((lbl) => {
                    const res =  labelService.createLabel({
                        name: lbl,
                        product_id: product_id,
                    })

                    if(res.ok) console(`Label ${lbl} registrado con product id ${lastProduct}`);
                })          

                navigate('/');
            }catch(err){
                throw err;
            }  
        }      
    }

    return ( 
        <div className="product-register">
            <h2>Registrar Productos</h2>
            <div className="input-name-container">
                    <label  className="label-name-product" >Nombre:</label>
                    <input onChange={captureProduct} type="text" className="input-product-name"/>
            </div>
            
            <div className="labels-form">
                <h3 className="label-title">Etiquetas</h3>
                <div className="labels-form__title">
                    <p className="label-title-form">Etiqueta</p>
                    <input type="text" className="label-input" onChange={captureLabel}/>
                    <button type="button" onClick={saveLabel}>Agregar</button>
                </div>
                <div className="labels-add-container" >
                    {labelList?.map((item) => (
                        <div className="label-box" name={item} key={(Math.random)}>
                            <p className="label-box__item">{item}</p>
                            <button  name={item} onClick={removeLabel} className="label-box__delete">X</button>
                        </div>
                        
                    ))}
                </div>
            </div>
            <div className="save-product-btn-container">
                <button onClick={saveProduct} className="save-product-btn" type="button">Guardar Producto</button>
            </div>       
        </div>
    );
}

export default ProductRegister;