import styled from 'styled-components';
import { shade } from 'polished';

export const Details = styled.div`
    background-color: #fff;
    margin-top: 24px;
    min-height: 600px;
    max-width: 800px;
    border-radius: 48px;

    img {
        margin-top: 24px;
        margin-left: 24px;
        border-radius: 24px;
    }

    p {
        margin-top: 24px;
        margin-left: 24px;
        font-size: 48px;
        font-weight: bold;
    }

    button {
        width: 160px;
        margin-left: 24px;
        margin-top: 24px;
        height: 70px;
        background: blue;
        border-radius: 5px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        // Ao utilizar o & estamos nos referindo ao próprio elemento, nesse caso ao button
        &:hover {
            background: ${shade(0.2, 'blue')};
        }
    }

    button + button {
        background: red;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.3, 'red')};
        }
    }

    .details {
        display: flex;
    }

    .inputs {
        margin-left: 24px;
        margin-top: 24px;

        p {
            font-size: 16px;
            margin-bottom: 12px;
            font-weight: bold;
        }

        input {
            height: 50px;
            margin-left: 24px;
            padding: 0 25px;
            border: 1px solid black;
            min-width: 500px;
            border-radius: 5px;
            color: #3a3a3a;
            margin-bottom: 32px;

            &::placeholder {
                color: black;
            }
        }
    }
`;
