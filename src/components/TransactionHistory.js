import { ListWrapper, TransactionWrapper } from './TransactionHistory.style';

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function TransactionHistory() {
    const { transactions } = useContext(GlobalContext);
    console.log('Sheeraz => transactions',transactions);
    // const sign = transaction.transactionAmount > 0 ? '+' : '-';
    return (
        <ListWrapper>
           
            {transactions.map((transaction)=>
                <TransactionWrapper color={(transaction.transactionAmount > 0) ? "#b6960a" : "#2da3ad"}>
                    {transaction.description}
                    <span>${Math.abs(transaction.transactionAmount)}</span>
                </TransactionWrapper>
            )}
        </ListWrapper>
    )
}

export default TransactionHistory
