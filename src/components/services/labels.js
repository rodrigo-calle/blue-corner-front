const URL_BASE = 'http://localhost:8080';

const createLabel = (data) => {
    const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    return fetch(`${URL_BASE}/api/labels/`, payload);
}

const label = {
    createLabel,
}

export default label;