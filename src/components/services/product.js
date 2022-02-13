const URL_BASE = 'http://localhost:8080';

const createProduct = (data) => {
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    return fetch(`${URL_BASE}/api/products/`, payload);
}

const getProducts = () => {
    const payload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return fetch(`${URL_BASE}/api/products`, payload);
}

const getLastRegister = () => {
    const payload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return fetch(`${URL_BASE}/api/products/last`, payload);
}

const deleteProduct = (id) => {
    return fetch(`${URL_BASE}/api/products/delete/${id}`,  { method: 'DELETE' });
}

const product = {
    createProduct,
    getProducts,
    getLastRegister,
    deleteProduct,
}

export default product;