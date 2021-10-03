import React from "react";
import {Container, Header, Title, Form, Fields} from "./style";
import {Input} from "../../components/Forms/Input";
import {Button} from "../../components/Forms/Button";

export const Register = () => {
    return (
        <Container>
            <Header>
                <Title>Register</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder='Name'/>
                    <Input placeholder='Price'/>
                </Fields>
                <Button title='Send'/>
            </Form>
        </Container>
    )
}
