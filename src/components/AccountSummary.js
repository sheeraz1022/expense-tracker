import React from 'react'
import { SummaryHeader, IncomeWrapper, ExpenseWrapper } from './AccountSummary.style'

function AccountSummary() {
    return (
        <>
          <SummaryHeader>Income</SummaryHeader>
          <IncomeWrapper>RM 500</IncomeWrapper>
          <SummaryHeader>Expense</SummaryHeader>
          <ExpenseWrapper>RM 500</ExpenseWrapper>
          
        </>
    )
}

export default AccountSummary
