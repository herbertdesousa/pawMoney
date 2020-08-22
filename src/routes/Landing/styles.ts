import styled from 'styled-components/native';

import ChartCard from '../../assets/images/chart/chart.png';

export const Container = styled.View`
    flex: 1;
    background: #FFF;
`;

export const Header = styled.View`
    width: 100%;
    height: 270px;
    background: #60992D;
    padding: 0px 16px;
`;

export const HeaderBlock = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
`;

export const HeaderBlockTitles = styled.View`
`;

export const HeaderTitle = styled.Text`
    font-family: "Montserrat-Medium";
    color: #FFF;
    font-size: 27px;
`;

interface HeaderSubTitleProps {
    sideLeft?: boolean;
};
export const HeaderSubTitle = styled.Text<HeaderSubTitleProps>`
    font-family: "Montserrat-Medium";
    color: #FFF;
    font-size: 18px;
    opacity: .8;
    text-align: ${props => props.sideLeft ? "right" : "left"}
`;

export const HeaderAvatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;

export const HeaderBarSeparator = styled.View`
    width: 100%;
    height: 2px;
    background: #FFF;
    margin: 16px 0px;
`;

export const HeaderContentBalance = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

interface HeaderDescriptionProps {
    isVisible?: boolean;
};
export const HeaderDescription = styled.Text<HeaderDescriptionProps>`
    font-family: "Montserrat-Medium";
    color: #FFF;
    font-size: 18px;
    opacity: ${props => props.isVisible ? 1 : .2};
    color: ${props => props.isVisible ? "#FFF" : "transparent"};
    background: ${props => props.isVisible ? "transparent" : "#FFF"};
`;

export const BalanceButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const IconEye = styled.View`
    left: 8px;
`;

export const Cards = styled.ScrollView`
    top: -50px;
    max-height: 130px;
`;


export const Card = styled.TouchableOpacity`
    width: 215px;
    height: 100px;
    background: #FFF;
    border-radius: 8px;
    margin-right: 16px;
    position: relative;
`;

export const CardTitle = styled.Text`
    font-family: "Montserrat-Regular";
    color: #707070;
    font-size: 18px;
    margin-top: 8px;
    margin-left: 8px;
`;

export const CardImage = styled.Image`
    width: 215px;
    height: 100px;
    border-radius: 8px;
    position: absolute;
    top: 7px;
`;

export const CardDescriptionBlock = styled.View`
    margin-bottom: 8px;
    margin-left: 8px;
`;

export const CardDescriptionLabel = styled.Text`
    font-family: "Montserrat-Regular";
    color: #9D9D9D;
    font-size: 13px;
`;

export const CardDescription = styled.Text`
    font-family: "Montserrat-Medium";
    color: #60992D;
    font-size: 13px;
`;

export const ChangeGoalButton = styled.TouchableOpacity`
    padding: 0 32px;
    height: 50px;
    background: #FFF;
    border-radius: 4px;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
`;

export const ChangeGoalButtonTitle = styled.Text`
    font-family: "Montserrat-Regular";
    color: #60992D;
    font-size: 18px;
`;

export const ChangeGoalButtonDescription = styled.Text`
    font-family: "Montserrat-Regular";
    color: #9D9D9D;
    font-size: 12px;
`;

export const AchivementsContainer = styled.View`
    padding-top: 16px;
    padding-left: 16px;
`;

export const AchivementsBlock = styled.View`
    flex-direction: row;
    padding-top: 8px;
    align-items: center
`;

export const AchivementIndicator = styled.View`
    width: 10px;
    height: 10px;
    background: #60992D;
    border-radius: 10px;
`;

export const AchivementTitle = styled.Text`
    font-family: "Montserrat-Regular";
    color: #707070;
    font-size: 18px;
    padding-left: 16px;
`;