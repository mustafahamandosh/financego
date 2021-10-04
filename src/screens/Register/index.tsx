import React, {useState} from "react";
import {Container, Form, Header, Title, TransactionTypes} from "./style";
import {Input} from "../../components/Forms/Input";
import {Button} from "../../components/Forms/Button";
import {TransactionTypeButton} from "../../components/Forms/TransactionTypeButton";
import {View} from "react-native";
import {Select} from "../../components/Forms/Select";

export const Register = () => {
    const [transactionType, setTransactionType] = useState<'up' | 'down'>()

    const handleTransactionTypeSelect = (type: 'up' | 'down') => {
        setTransactionType(type)
    }

    return (
        <Container>
            <Header>
                <Title>Register</Title>
            </Header>

            <Form>
                <View>
                    <Input placeholder='Name'/>
                    <Input placeholder='Price'/>
                    <TransactionTypes>
                        <TransactionTypeButton
                            type='up'
                            title='Income'
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type='down' title='Outcome'
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <Select title='Categories'/>
                </View>
                <Button title='Send'/>
            </Form>
        </Container>
    )
}
