import React from "react";
import {Category, Container, Footer, Header, Icon, Name, Separator, Title} from "./styles";
import {FlatList} from "react-native";
import {categories} from "../../utils/categories";
import {Button} from "../../components/Forms/Button";


interface Category {
    key: string;
    name: string;
}

interface CategorySelectProps {
    category: string;
    setCategory: (category: Category) => void;
    closeSelect: () => void;
}

export const CategorySelect = ({category, setCategory, closeSelect}: CategorySelectProps) => {
    return (
        <Container>
            <Header>
                <Title>Category</Title>
            </Header>
            <FlatList
                data={categories}
                style={{flex: 1, width: '100%'}}
                keyExtractor={(item) => item.key}
                ItemSeparatorComponent={() => <Separator/>}
                renderItem={({item}) => (
                    <Category>
                        <Icon name={item.icon}/>
                        <Name>{item.name}</Name>
                    </Category>
                )}
            />
            <Footer>
                <Button title='Select' activeOpacity={0.7}/>
            </Footer>
        </Container>
    )
}
