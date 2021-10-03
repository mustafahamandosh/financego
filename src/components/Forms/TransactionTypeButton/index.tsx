import React from "react";
import {Container, Icon, Title} from "./styles";
import {TouchableOpacityProps} from "react-native";

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface TransactionTypeButtonProps extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down',
    isActive: boolean;
}

export const TransactionTypeButton = ({title, type, isActive, ...rest}: TransactionTypeButtonProps) => {
    return (
        <Container isActive={isActive} type={type} {...rest}>
            <Icon name={icons[type]} type={type}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}
