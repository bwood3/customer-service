let findAllCustomers =() =>{
    return fetch('http://localhost:8080/customers'
        .then(response => response.json));
}

let data = {
    findAllCustomers: findAllCustomers
}

export default data;