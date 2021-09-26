import React from "react";
import {
    CardWrapper,
    Container,
    Header,
    Icon,
    ProfilePicture,
    Title,
    TransactionList,
    Transactions,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserWrapper
} from "./styles";
import {Card} from "../../components/Card";
import {TransactionCard, TransactionCardPropsData} from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardPropsData {
    id: string;
}

export const Dashboard = () => {
    const data: DataListProps[] = [
        {
            id: '1',
            title: 'Mobile development',
            amount: 'R$ 12.000,00',
            category: {name: 'Sales', icon: 'dollar-sign'},
            date: '13/04/2021',
            type: 'positive'
        },
        {
            id: '2',
            title: 'Website development',
            amount: 'R$ 12.000,00',
            category: {name: 'Sales', icon: 'coffee'},
            date: '13/04/2021',
            type: 'negative'
        },
        {
            id: '3',
            title: 'erp development',
            amount: 'R$ 15.000,00',
            category: {name: 'Sales', icon: 'shopping-bag'},
            date: '13/04/2021',
            type: 'negative'
        }
    ]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <ProfilePicture source={{uri: 'https://github.com/mustafahamandosh.png'}}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Mustafa</UserName>
                        </User>
                    </UserInfo>
                    <Icon name='power'/>
                </UserWrapper>
            </Header>
            <CardWrapper>
                <Card type='up' title='Income' amount='R$ 17.400,00' lastTransaction='Last transaction yesterday'/>
                <Card type='down' title='Outcome' amount='R$ 1.400,00' lastTransaction='Last transaction today'/>
                <Card type='total' title='Total' amount='R$ 10.000,00' lastTransaction='Last transaction yesterday'/>
            </CardWrapper>
            <Transactions>
                <Title>Transactions list</Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item}/>}/>
            </Transactions>
        </Container>
    )
}
