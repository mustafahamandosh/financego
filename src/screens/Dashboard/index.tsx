import React from "react";
import {
    CardWrapper,
    Container,
    Header,
    Icon,
    ProfilePicture,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserWrapper
} from "./styles";
import {Card} from "../../components/Card";

export const Dashboard = () => {
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
        </Container>
    )
}
