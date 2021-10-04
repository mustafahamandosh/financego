import React from "react";
import {Container, Icon, Title} from "./styles";

interface SelectProps {
    title: string;
    onPress: () => void
}

export const Select = ({title, onPress}: SelectProps) => {
    return (
        <Container onPress={onPress}>
            <Title>{title}</Title>
            <Icon name='chevron-down'/>
        </Container>
    )
}
