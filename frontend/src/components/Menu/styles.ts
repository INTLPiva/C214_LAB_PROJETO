import styled from 'styled-components';

export const MenuStyle = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    padding-bottom: 32px;

    img {
        height: 100px;
    }

    a {
        text-decoration: none;
        font-size: 32px;
        font-weight: bold;
        color: #000;
        margin-left: 64px;
    }

    a:hover {
        border-bottom: 4px solid #32a846;
        transition: 200ms;
    }
`;
