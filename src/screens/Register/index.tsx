import React from "react";
import {Container, Header, Title, Form} from "./style";
import {Input} from "../../components/Forms/Input";

export const Register = () => {
    return (
        <Container>
            <Header>
                <Title>Register</Title>
            </Header>

            <Form>
                <Input placeholder='Name'/>
                <Input placeholder='Price'/>
            </Form>
        </Container>
    )
}
