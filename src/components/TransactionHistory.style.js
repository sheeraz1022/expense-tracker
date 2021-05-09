import styled from 'styled-components';

export const ListWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-bottom: 40px;
`;

export const TransactionWrapper = styled.li`
    background-color: #fff;
    box-shadow: var(--box-shadow);
    color: #333;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    margin: 10px 0;
    border-right: 5px solid ${props=> props.color};
`