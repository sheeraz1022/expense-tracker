import styled from 'styled-components';

export const SummaryWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    background: white;
    width: 100%
`;

export const SummaryContentWrapper = styled.div`
    display:flex;
    flex-direction: column;
    height: 100%;
`;

export const SummaryHeader = styled.text`
 margin 10px 0;
`;
export const AmountWrapper = styled.text`
    margin 10px 0;
    font-weight: bold;
    color: ${props=>props.color}
`;
// export const ExpenseWrapper = styled.text``