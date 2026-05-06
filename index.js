const method = process.argv[2];
const endpoint = process.argv[3];

const deleteProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
        .finally(() => console.log(`deleteProduct id ${id} finished`));
}

if (method === 'GET' && endpoint === 'products') {
    const getAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
        .finally(() => console.log('getAllProducts finished'));
    }
    getAllProducts();
}
else if (method === 'GET' && endpoint.startsWith('products/')) {

const getProductByID = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
        .finally(() => console.log(`getProductByID id ${id} finished`));
    }

    const id = endpoint.split('/')[1];
    getProductByID(id);
}
else if (method === 'POST' && endpoint === 'products') {
    
    const newProduct = { title: 'Dinamita, marca ACME', price: 9.99 };
    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
        .finally(() => console.log(`newProduct POST finished`));

}
else if (method === 'DELETE' && endpoint.startsWith('products/')) {
    const id = endpoint.split('/')[1];
    deleteProduct(id);
}
else {
    console.log('Comando no reconocido. Usa npm run start <METHOD> <ENDPOINT>');
}