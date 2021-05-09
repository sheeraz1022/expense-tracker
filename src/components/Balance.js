import React, { useContext } from 'react'
import { BalanceHeaderWrapper, BalanceWrapper } from './Balance.style';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <BalanceHeaderWrapper>
                Current Balance
            </BalanceHeaderWrapper>
            <BalanceWrapper>
                RM {balance}
            </BalanceWrapper>
        </>
    )
}

export default Balance
