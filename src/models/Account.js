/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */

function Account(fullName, balanceAvailable, numberAccount, lastTransaction){
    this.fullName = fullName
    this.balanceAvailable = balanceAvailable
    this.numberAccount = numberAccount
    this.lastTransaction = lastTransaction

    return{
        fullName: this.fullName,
        balanceAvailable: this.balanceAvailable
    }

}

export default Account;

