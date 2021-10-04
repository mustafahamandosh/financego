import React, {useState} from "react";
import {Container, Form, Header, Title, TransactionTypes} from "./style";
import {Button} from "../../components/Forms/Button";
import {TransactionTypeButton} from "../../components/Forms/TransactionTypeButton";
import {Modal, View} from "react-native";
import {Select} from "../../components/Forms/Select";
import {CategorySelect} from "../CategorySelect";
import {InputForm} from "../../components/Forms/InputForm";
import {useForm} from "react-hook-form";

interface FormData {
    name: string
    price: string;
}

export const Register = () => {
    const [transactionType, setTransactionType] = useState<'up' | 'down'>()
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Category',
    })
    const [isOpen, setIsOpen] = useState(false)
    const {control, handleSubmit} = useForm()

    function handleRegister(form: FormData) {
        const data = {
            name: form.name,
            price: form.price
        }
        console.log(data)
    }

    return (
        <Container>
            <Header>
                <Title>Register</Title>
            </Header>

            <Form>
                <View>
                    <InputForm
                        name='name'
                        placeholder='Name'
                        control={control}
                    />
                    <InputForm
                        name='price'
                        placeholder='Price'
                        control={control}
                    />
                    <TransactionTypes>
                        <TransactionTypeButton
                            type='up'
                            title='Income'
                            onPress={() => setTransactionType('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type='down' title='Outcome'
                            onPress={() => setTransactionType('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <Select
                        title={category.name}
                        onPress={() => setIsOpen(true)}
                    />
                </View>
                <Button
                    title='Send'
                    onPress={handleSubmit(handleRegister)}
                />
            </Form>

            <Modal visible={isOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelect={() => setIsOpen(false)}
                />
            </Modal>
        </Container>
    )
}
