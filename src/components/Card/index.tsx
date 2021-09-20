import React from "react";
import {Amount, Container, Footer, Header, Icon, LastTransaction, Title} from "./style";

interface CardProps {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export const Card = ({type, title, amount, lastTransaction}: CardProps) => {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon name={icon[type]} type={type}/>
            </Header>
            <Footer>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}
