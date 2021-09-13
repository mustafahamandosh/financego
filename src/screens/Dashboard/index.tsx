import React from "react";
import {Container, Header, Icon, ProfilePicture, User, UserGreeting, UserInfo, UserName, UserWrapper} from "./styles";

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
        </Container>
    )
}
