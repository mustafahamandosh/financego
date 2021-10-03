import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";
import {getBottomSpace, getStatusBarHeight} from "react-native-iphone-x-helper";
import {FlatList} from "react-native";
import {DataListProps} from "./index";

export const Container = styled.View`
  flex: 1;
  background: ${(({theme}) => theme.colors.background)};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({theme}) => theme.colors.primary_color};
  align-items: flex-start;
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ProfilePicture = styled.Image.attrs({
    source: {uri: 'https://github.com/mustafahamandosh.png'}
})`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`

export const User = styled.View`
  margin-left: 17px;
`

export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
`

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.bold};
`

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary_color};
  font-size: ${RFValue(24)}px;
`

export const CardWrapper = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: 16px;
`

export const TransactionList = styled(FlatList as new () => FlatList<DataListProps>).attrs({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})``
