import React from "react";
import {Container, Title} from "./style";
import {RectButtonProps} from "react-native-gesture-handler";

interface ButtonsProps extends RectButtonProps {
    title: string;
    onPress: () => void;
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
