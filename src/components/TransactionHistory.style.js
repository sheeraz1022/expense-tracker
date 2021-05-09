import styled from 'styled-components';

export const ListWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-bottom: 40px;
    width: 100%;
`;

export const TransactionWrapper = styled.li`
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);;
    color: #333;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    margin: 10px 0;
    border-right: 5px solid ${props=> props.color};
`