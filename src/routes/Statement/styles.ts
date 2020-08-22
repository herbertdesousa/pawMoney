import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #F6F6F6;
`;

export const Header = styled.View`
    width: 100%;
    height: 270px;
    background: #60992D;
    padding: 0px 16px;

    flex-direction: row;
    align-items: flex-start;
`;

export const HeaderBlock = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    
`;

export const HeaderBlockTitles = styled.View`
    margin-left: 16px;
`;

export const HeaderTitle = styled.Text`
    font-family: "Montserrat-Medium";
    color: #FFF;
    font-size: 27px;
`;

export const HeaderSubTitle = styled.Text`
    font-family: "Montserrat-Medium";
    color: #FFF;
    font-size: 18px;
    opacity: .8;
    text-align: left;
`;

export const ListItems = styled.ScrollView`
    padding: 0 16px;
    margin-top: -30px;
`;

export const ItemContainer = styled.View`
    width: 100%;
    height: 60px;
    background: #FFF;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const ItemAvatar = styled.View`
    width: 45px;
    height: 45px;
    background: #E7E7E7;
    border-radius: 4px;
    margin-left: 8px;
`;

export const ItemUserInfos = styled.View`
    margin-left: 8px;
`;

export const ItemContent = styled.View`
    flex-direction: row;
`;

export const ItemUserInfosTitle = styled.Text`
    font-family: "Montserrat-Regular";
    font-size: 18px;
    color: #707070;
`;

export const ItemUserInfosDescription = styled.Text`
    font-family: "Montserrat-Regular";
    font-size: 12px;
    color: #E7E7E7;
`;

export const ItemMoneyBlock = styled.View`
    align-items: flex-end;
    margin-right: 8px;
`;


interface ItemMoneyBlockTitleProps {
    isReceived: boolean
}
export const ItemMoneyBlockTitle = styled.Text<ItemMoneyBlockTitleProps>`
    font-family: "Montserrat-Regular";
    font-size: 18px;
    color: ${props => props.isReceived ? "#60992D" : "#BF060B"};
`;

export const ItemMoneyBlockDescription = styled.Text`
    font-family: "Montserrat-Regular";
    font-size: 12px;
    color: #707070
`;