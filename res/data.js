import {formatStringDate, getMonthString} from '../src/utils'

export const contas = {
    "1": {
        nomeCompleto: "Lucas Martins de Castro",
        saldoDisponivel: 2500.50,
        numeroConta: "899.215-5",
        lastTransaction: {
            status: "Transferência",
            estabelecimento: "Lucas Martins de Castro",
            valor: 1000
        },
    },
    "2": {
        nomeCompleto: "Joao da Silva",
        saldoDisponivel: 500.50,
        numeroConta: "888.888-6",
        lastTransaction: {
            status: "Compra",
            estabelecimento: "Super Mercado da Monica",
            valor: 12
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
                    estabelecimento: "Super Mercado da Monica",
                    valor: 12,
                    date: "2020-08-02"
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
                    valor: 12,
                    date: "2020-08-02"
                },
                {
                    id: "2",
                    status: "Compra",
                    estabelecimento: "Posto do Afonso",
                    valor: 100,
                    date: "2020-08-02"
                },
                {
                    id: "3",
                    status: "Depósito",
                    estabelecimento: "Padaria do Irineu",
                    valor: 22,
                    date: "2020-09-02"
                },
                {
                    id: "4",
                    status: "Compra",
                    estabelecimento: "Lavação do Donizete",
                    valor: 45,
                    date: "2020-09-02"
                },
                {
                    id: "5",
                    status: "Compra",
                    estabelecimento: "Super Mercado Elizeu",
                    valor: 25,
                    date: "2020-08-02"
                },
                {
                    id: "6",
                    status: "Compra",
                    estabelecimento: "Livraria do Armando",
                    valor: 225,
                    date: "2020-07-02"
                },
                {
                    id: "7",
                    status: "Compra",
                    estabelecimento: "Magazine Luiza",
                    valor: 2125,
                    date: "2020-07-02"
                },
                {
                    id: "8",
                    status: "Compra",
                    estabelecimento: "Super Mercado Elizeu",
                    valor: 25,
                    date: "2020-08-02"
                },
                {
                    id: "9",
                    status: "Transferência",
                    estabelecimento: "Lucas Martins de Castro",
                    valor: 1000,
                    date: "2020-08-02"
                }
            ]
    }
}

export const logins = [
    {
        id: 1,
        email: "lucas",
        nome: "Lucas",
        password: "1234",
        foto: 'https://img.elo7.com.br/product/zoom/2A128B7/caricatura-individual-de-rosto-caricatura-menino.jpg',
    },
    {
        id: 2,
        email: "joao",
        nome: "Joao",
        password: "1234",
        foto: 'https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png',
    },

]



export const contasCadastradas = {
    "1": [
        {
            nomeFavorecido: "Lucas Martins de Castro",
            numeroConta: "02.452-6",
            numberRegister: "089.369.789-92",
            agencia: "3689"
        },
        {
            nomeFavorecido: "Sandro Afonso da Silva",
            numeroConta: "02.078-5",
            numberRegister: "089.369.875-78",
            agencia: "3689"
        },
        {
            nomeFavorecido: "Carlos da Silveira",
            numeroConta: "02.047-9",
            numberRegister: "089.369.789-98",
            agencia: "3689"
        },
        {
            nomeFavorecido: "Augusto Charles Silva",
            numeroConta: "02.035-1",
            numberRegister: "089.369.1478-56",
            agencia: "3689"
        },
    ],
    "2": []

}

export const banks = [
    {
        nome: "Banco Santander",
        numeroBanco: 580
    },
    {
        nome: "Banco do Brasil",
        numeroBanco: 380
    },
    {
        nome: "Tiziu Bank",
        numeroBanco: 600
    }
]

export const getLogin = (email, password) => {
    let index = logins.findIndex((login) => { return login.email === email })
    if (index >= 0) {
        if (logins[index].password === password) {
            return logins[index]
        } else {
            return "Error"
        }
    } else {
        return "Error"
    }
}


export const getExtractByAccountAndDate = (account, date) => {
    let dateToday = new Date()
    let stringDateToday = formatStringDate(dateToday)
    let stringDate = formatStringDate(date)
    console.log(getMonthString(stringDateToday))

    if(stringDate === stringDateToday){
        return extrato[account].extratos
    }else{
        let extractForDate = []

        let extracts = extrato[account].extratos

        extracts.forEach((extract) => {
            let dateByAccount = extract.date
            if(getMonthString(dateByAccount) === getMonthString(stringDate)){
                extractForDate.push(extract)
                console.log(extractForDate)
            }

        });
        
        return extractForDate
    }
    
}

export const transaction = (type, idAccount, value) => {
    let account = contas[idAccount.toString()]
    if(type === 1){
        account.saldoDisponivel -= value
        contas[id.toString()] = account
    }
}