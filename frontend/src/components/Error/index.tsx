/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Menu from '../Menu';
import { Image, Description } from './styles';

import errorImg from '../../assets/errorImg.jpg';

interface ErrorProps {
    title: string;
}

const Error: React.FC<ErrorProps> = props => {
    return (
        <>
            <Menu />
            <Description>{props.title}</Description>
            <Image src={errorImg} alt="" />
        </>
    );
};

export default Error;
