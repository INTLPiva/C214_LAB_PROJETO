import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: block;

    p {
        font-size: 20px;
        margin-bottom: 12px;
        font-weight: bold;
    }

    input {
        height: 70px;
        padding: 0 25px;
        border: 0;
        min-width: 500px;
        border-radius: 5px;
        color: #3a3a3a;
        margin-bottom: 32px;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 5px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        // Ao utilizar o & estamos nos referindo ao próprio elemento, nesse caso ao button
        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;
