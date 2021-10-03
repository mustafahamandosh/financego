import React from "react";
import {Container, Title} from "./style";
import {TouchableOpacityProps} from "react-native";

interface ButtonsProps extends TouchableOpacityProps {
    title: string;
}

export const Button = ({title, ...rest}: ButtonsProps) => {
    return (
        <Container {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}
