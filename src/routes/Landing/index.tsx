import React, { useState, useRef } from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
    Container,

    Header,
    HeaderBlock,
    HeaderTitle,
    HeaderSubTitle,
    HeaderBlockTitles,
    HeaderAvatar,
    HeaderBarSeparator,
    HeaderContentBalance,
    HeaderDescription,
    BalanceButton,
    IconEye,

    Cards,
    Card,
    CardTitle,
    CardImage,
    CardDescriptionBlock,
    CardDescriptionLabel,
    CardDescription,

    ChangeGoalButton,
    ChangeGoalButtonTitle,
    ChangeGoalButtonDescription,

    AchivementsContainer,
    AchivementsBlock,
    AchivementIndicator,
    AchivementTitle
} from './styles';

import ChartCard from '../../assets/images/chart/chart.png';

const Landing = () => {

    const { navigate } = useNavigation();

    const [isVisibleBalance, setIsVisibleBalance] = useState(true);

    const scrollOffset = useRef(new Animated.Value(0)).current;
    const AnimatedCard = Animated.createAnimatedComponent(Card);

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#60992D" />
            <Header>
                <HeaderBlock>
                    <HeaderBlockTitles>
                        <HeaderTitle>DashBoard</HeaderTitle>
                        <HeaderSubTitle>Good Afternoon</HeaderSubTitle>
                    </HeaderBlockTitles>
                    <HeaderAvatar
                        source={{ uri: "https://avatars1.githubusercontent.com/u/63599156?s=460&u=c3644ac670d7fd9aca3a6c013230c263cbe5b623&v=4" }}
                    />
                </HeaderBlock>
                <HeaderBarSeparator />

                <HeaderContentBalance>
                    <BalanceButton onPress={() => setIsVisibleBalance(!isVisibleBalance)} activeOpacity={1}>
                        <View>
                            <HeaderSubTitle>Wallet Balance</HeaderSubTitle>
                            <HeaderDescription isVisible={isVisibleBalance}>R$ 9.045.50</HeaderDescription>
                        </View>
                        <IconEye>
                            <Icon name={isVisibleBalance ? "eye" : "eye-off"} size={25} color="#FFF" />
                        </IconEye>
                    </BalanceButton>
                    <View>
                        <HeaderSubTitle sideLeft>Goal</HeaderSubTitle>
                        <HeaderDescription isVisible>R$ 15.745.50</HeaderDescription>
                    </View>
                </HeaderContentBalance>

                <HeaderBarSeparator />
            </Header>
            <Cards
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 16 }}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: { x: scrollOffset }
                    },
                }], { useNativeDriver: false })}
            >
                <AnimatedCard
                    style={[styles.Card, {
                        height: scrollOffset.interpolate({
                            inputRange: [0, 80],
                            outputRange: [120, 100],
                            extrapolate: 'clamp'
                        }),
                        width: scrollOffset.interpolate({
                            inputRange: [0, 80],
                            outputRange: [235, 215],
                            extrapolate: 'clamp'
                        })
                    }]}
                    onPress={() => navigate('StatementPage')}
                    activeOpacity={0.9}
                >
                    <CardTitle>
                        Statement
                    </CardTitle>
                    {/* <CardImage source={ChartCard} /> */}
                </AnimatedCard>
                <AnimatedCard
                    style={[styles.Card, {
                        height: scrollOffset.interpolate({
                            inputRange: [0, 90],
                            outputRange: [100, 115],
                            extrapolate: 'clamp'
                        }),
                        width: scrollOffset.interpolate({
                            inputRange: [0, 90],
                            outputRange: [215, 230],
                            extrapolate: 'clamp'
                        })
                    }]}
                    onPress={() => { }}
                    activeOpacity={0.9}
                >
                    <CardTitle>Goal</CardTitle>

                    <CardDescriptionBlock>
                        <CardDescriptionLabel>To goal</CardDescriptionLabel>
                        <CardDescription>R$ 6.700,00</CardDescription>
                    </CardDescriptionBlock>
                </AnimatedCard>
            </Cards>

            <ChangeGoalButton 
                style={styles.Card} 
                onPress={() => {}}
            >
                <ChangeGoalButtonTitle>Change Goal</ChangeGoalButtonTitle>
                <ChangeGoalButtonDescription>change your goal and have a new begin</ChangeGoalButtonDescription>
            </ChangeGoalButton>
            <AchivementsContainer>
                <AchivementsBlock>
                        <AchivementIndicator/>
                        <AchivementTitle>57% to your goal</AchivementTitle>
                </AchivementsBlock>
                <AchivementsBlock>
                        <AchivementIndicator/>
                        <AchivementTitle>bills</AchivementTitle>
                </AchivementsBlock>
                <AchivementsBlock>
                        <AchivementIndicator/>
                        <AchivementTitle>goals changed</AchivementTitle>
                </AchivementsBlock>
                <AchivementsBlock>
                        <AchivementIndicator/>
                        <AchivementTitle>goals achieved</AchivementTitle>
                </AchivementsBlock>
            </AchivementsContainer>
        </Container>
    );
}

const styles = StyleSheet.create({
    Card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})

export default Landing;