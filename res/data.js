import Login from "../src/pages/LoginScreen/Login";

export const conta = {
    "1": {
        nome: "Lucas",
        saldoDisponivel: "2.500,50",
        numeroConta: "899.215-5",
        lastTransaction: {
            status: "Transferência",
            estabelecimento: "Lucas Martins de Castro",
            valor: "R$1.000,00"
        },
    },
    "2": {
        nome: "Joao",
        saldoDisponivel: "500,50",
        numeroConta: "888.888-6",
        lastTransaction: {
            status: "Transferência",
            estabelecimento: "Lucas Martins de Castro",
            valor: "R$1.000,00"
        },
    },
}
export const extrato = {
    "888.888-6": {
        extratos:
            [
                {
                    id: "1",
                    status: "Compra",
                    estabelecimento: "Super Mercado Elizeu",
                    valor: "R$12,00",
                    date: "02/08/2020"
                },
            ]
    },

    "899.215-5": {
        extratos:
            [
                {
                    id: "1",
                    status: "Compra",
                    estabelecimento: "Super Mercado Elizeu",
                    valor: "R$12,00",
                    date: "02/08/2020"
                },
                {
                    id: "2",
                    status: "Compra",
                    estabelecimento: "Posto do Afonso",
                    valor: "R$100,00",
                    date: "02/08/2020"
                },
                {
                    id: "3",
                    status: "Depósito",
                    estabelecimento: "Padaria do Irineu",
                    valor: "R$22,00",
                    date: "02/08/2020"
                },
                {
                    id: "4",
                    status: "Compra",
                    estabelecimento: "Lavação do Donizete",
                    valor: "R$45,00",
                    date: "02/08/2020"
                },
                {
                    id: "5",
                    status: "Compra",
                    estabelecimento: "Super Mercado Elizeu",
                    valor: "R$25,00",
                    date: "02/08/2020"
                },
                {
                    id: "6",
                    status: "Compra",
                    estabelecimento: "Livraria do Armando",
                    valor: "R$225,00",
                    date: "02/08/2020"
                },
                {
                    id: "7",
                    status: "Compra",
                    estabelecimento: "Magazine Luiza",
                    valor: "R$2125,00",
                    date: "02/08/2020"
                },
                {
                    id: "8",
                    status: "Compra",
                    estabelecimento: "Super Mercado Elizeu",
                    valor: "R$25,00",
                    date: "02/08/2020"
                },
                {
                    id: "9",
                    status: "Transferência",
                    estabelecimento: "Lucas Martins de Castro",
                    valor: "R$1.000,00",
                    date: "02/08/2020"
                }
            ]
    }
}

export const logins = [
    {
        id: 1,
        email: "lucas",
        password: "1234",
        foto: 'https://img.elo7.com.br/product/zoom/2A128B7/caricatura-individual-de-rosto-caricatura-menino.jpg',
    },
    {
        id: 2,
        email: "joao",
        password: "1234",
        foto: 'https://img.elo7.com.br/product/zoom/2A128B7/caricatura-individual-de-rosto-caricatura-menino.jpg',
    },

]

export const getLogin = (email, password) => {
    let loginSuccess;
    logins.forEach((login) => {
        if (login.email === email) {
            if (login.password === password) {
                loginSuccess = login
            } else {
                loginSuccess = "Error"
            }
        } else {
            loginSuccess = "Error"
        }
    })

    return loginSuccess;
}

export const contasCadastradas = [
    {
        nomeFavorecido: "Lucas Martins de Castro",
        numeroConta: "02045369",
        cpf: "089.369.789-92",
        agencia: "3689"
    },
    {
        nomeFavorecido: "Sandro Afonso da Silva",
        numeroConta: "02045358",
        cpf: "089.369.875-78",
        agencia: "3689"
    },
    {
        nomeFavorecido: "Carlos da Silveira",
        numeroConta: "02044789",
        cpf: "089.369.789-98",
        agencia: "3689"
    },
    {
        nomeFavorecido: "Augusto Charles Silva",
        numeroConta: "02032541",
        cpf: "089.369.1478-56",
        agencia: "3689"
    },
]

export const fetchLogin = () => {
    return login;
}