import styled from 'styled-components';

export const List = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
    column-gap: 30px;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Input = styled.input `
    width: 100%;
    font-size: 1.2rem;
    color: #17171b;
    pad: 0.5rem 1rem;
    margin-bottom: 80px;
`;