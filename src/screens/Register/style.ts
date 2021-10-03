import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary_color};
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;


export const Fields = styled.View``

export const TransactionTypes = styled.View `
    flex-direction: row;
  justify-content: space-between;
`
