import {HeaderWrapper, LabelWrapper, InputWrapper, AddButton} from './AddTransaction.style';

import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }

    return (
        <>
            <HeaderWrapper>
                Add Transaction
            </HeaderWrapper>
            <LabelWrapper>
                Task
            </LabelWrapper>
            <InputWrapper type="text" 
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Detail of Transaction" 
                            required="required"/>
            <LabelWrapper>
                Amount
            </LabelWrapper>
            <InputWrapper type="number" id="transactionamount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder="RM Value of Transaction"
                            required="required"/>
            <AddButton onClick={onSubmit}>
                Add Me
            </AddButton>
        </>
    )
}

export default AddTransaction
