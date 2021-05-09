import React, {useContext} from 'react'
import { SummaryHeader, AmountWrapper, SummaryWrapper, SummaryContentWrapper } from './AccountSummary.style';
import { GlobalContext } from '../context/GlobalState';

function AccountSummary() {
    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

    return (
        <SummaryWrapper>
            <SummaryContentWrapper>
                <SummaryHeader>Income</SummaryHeader>
                <AmountWrapper color="#b6960a">RM {income}</AmountWrapper>
          </SummaryContentWrapper>
          <SummaryContentWrapper>
                <SummaryHeader>Expense</SummaryHeader>
                <AmountWrapper color="#2da3ad">RM {expense}</AmountWrapper>
          </SummaryContentWrapper>
          
        </SummaryWrapper>
    )
}

export default AccountSummary
