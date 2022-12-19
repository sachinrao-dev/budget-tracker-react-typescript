interface AllExpense {
    food:[{
        expenseCategory:string,
        date: string,
        amount: number
    },],
  rent: [{
    expenseCategory:string,
    date: string,
     amount: number
    }],
    travel:[{
        expenseCategory:string,
        date: string,
        amount: number
    }],
    fun:[{
        expenseCategory:string,
        date: string,
        amount: number
    }],
}

const getDataFromApi = () =>{
    const dataPromise= new Promise((resolve)=>{
        const expense:AllExpense[] = [
            food: [{
                expenseCategory:"Food",
                date:"6",
                amount: 78
            },],

        ]
    }
    )
}


export default getDataFromApi;