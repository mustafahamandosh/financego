import React, {useState} from "react";
import {Container, Form, Header, Title, TransactionTypes} from "./style";
import {Button} from "../../components/Forms/Button";
import {TransactionTypeButton} from "../../components/Forms/TransactionTypeButton";
import {Alert, Keyboard, Modal, TouchableWithoutFeedback, View} from "react-native";
import {Select} from "../../components/Forms/Select";
import {CategorySelect} from "../CategorySelect";
import {InputForm} from "../../components/Forms/InputForm";
import {useForm} from "react-hook-form";
import * as Yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";

interface FormData {
    name: string
    price: string;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    price: Yup.number().typeError('Enter a numeric value')
        .positive('Value must be positive').required('Inform a price')
})

export const Register = () => {
    const [transactionType, setTransactionType] = useState<'up' | 'down'>()
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Category',
    })
    const [isOpen, setIsOpen] = useState(false)
    const {control, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    function handleRegister(form: FormData) {
        if (!transactionType) {
            return Alert.alert('Select the transaction type')
        }
        if (category.key === 'category') {
            return Alert.alert('Select category')
        }
        const data = {
            name: form.name,
            price: form.price
        }
        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                            autoCapitalize='words'
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />
                        <InputForm
                            name='price'
                            placeholder='Price'
                            control={control}
                            keyboardType='numeric'
                            error={errors.price && errors.price.message}
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
        </TouchableWithoutFeedback>
    )
}
