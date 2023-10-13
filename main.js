
// 2.Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.


let a=parseInt(prompt("Enter a deposit amount"));

let b=parseInt(prompt("Enter a withdraw amount"));

class BankAccount{
	
	constructor(accountno,balance){
		
		this.accountno=accountno
		
		this.balance=balance
		
	}
	
	
	
	deposit(a){
		
		let d=this.balance+a
		
		document.write(`Deposit is : ${a} and Total amount is : ${d}`);
		
		document.write("<br>");
		
		document.write("<br>");
		
	}
	
	
	
	widthdraw(b){
		
		if(b<=this.balance){
			
		let wd=this.balance-b
		
		document.write(`Your widthdraw is :${b} and Balance is : ${wd}`)
		
		}
		
		else{
			
			document.write("Insuffcient balance");
			
		}
	}
	
}

let bankaccount=new BankAccount(123456,1000)

bankaccount.deposit(a)

bankaccount.widthdraw(b)