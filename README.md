Requisições api banco
/users/home
    method: GET
    headers: {
        "Authorization": "Bearer ${Token}"
    }

/users/user/:cpf
    method: GET

/users/contacts
    method: GET
    headers: {
        "Authorization": "Bearer ${Token}"
    }

/users/deposit
    method: PUT
    headers: {
        "Authorization": "Bearer ${Token}"
    }
    body: {
        value: Number,
    }

/users/withdraw
    method: PUT
    headers: {
        "Authorization": "Bearer ${Token}"
    }
    body: {
        value: Number,
    }

/users/transfer
    method: PUT
    headers: {
        "Authorization": "Bearer ${Token}"
    }
    body: {
        beneficiary_cpf: String,
        value: Number,
    }

/users/pay
    method: PUT
    headers: {
        "Authorization": "Bearer ${Token}"
    }
    body: {
        value: Number
    }

/users/statement
    method: GET
    headers: {
        "Authorization": "Bearer ${Token}"
    }

/users/signup
    method: POST
    body: {
        cpf: String,
        name: String,
        password: Number,
    }   

/users/signin
    method: POST
    body: {
        cpf: String,
        password: Number
    }