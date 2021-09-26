import React from "react";
import {Amount, Category, CategoryName, Container, Date, Footer, Icon, Title} from "./style";

interface Category {
    name: string;
    icon: string;
}

export interface TransactionCardPropsData {
    title: string;
    amount: string;
    category: Category;
    date: string;
    type: 'positive' | 'negative'
}

interface TransactionCardProps {
    data: TransactionCardPropsData
}

export const TransactionCard = ({data}: TransactionCardProps) => {
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>
                {data.type === 'negative' && '- '}
                {data.amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}
