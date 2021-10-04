import React from "react";
import {Container, Icon, Title} from "./styles";

interface SelectProps {
    title: string;
}

export const Select = ({title}: SelectProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Icon name='chevron-down'/>
        </Container>
    )
}
