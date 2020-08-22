import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    StatusBar,
    TouchableOpacity,
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

    ListItems,
    ItemContainer,
    ItemContent,
    ItemAvatar,
    ItemUserInfos,
    ItemUserInfosTitle,
    ItemUserInfosDescription,
    ItemMoneyBlock,
    ItemMoneyBlockTitle,
    ItemMoneyBlockDescription,
} from './styles';

function Statement() {

    const { goBack } = useNavigation();

    const scrollOffset = useRef(new Animated.Value(0)).current;
    const AnimatedHeader = Animated.createAnimatedComponent(Header);

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#60992D" />
            <AnimatedHeader
                style={{
                    height: scrollOffset.interpolate({
                        inputRange: [0, 80],
                        outputRange: [180, 150],
                        extrapolate: 'clamp'
                    }),
                }}
            >
                <HeaderBlock>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Icon name="arrow-left" size={32} color="#FFF" />
                    </TouchableOpacity>
                    <HeaderBlockTitles>
                        <HeaderTitle>Statement</HeaderTitle>
                        <HeaderSubTitle>safe your money</HeaderSubTitle>
                    </HeaderBlockTitles>
                </HeaderBlock>
            </AnimatedHeader>

            <ListItems
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: { y: scrollOffset }
                    },
                }], { useNativeDriver: false })}
            >
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Britania</ItemUserInfosTitle>
                            <ItemUserInfosDescription>15 dez 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 129</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Carlos</ItemUserInfosTitle>
                            <ItemUserInfosDescription>30 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived={false}>$ 85</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Sent</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
                <ItemContainer>
                    <ItemContent>
                        <ItemAvatar />
                        <ItemUserInfos>
                            <ItemUserInfosTitle>Pedro</ItemUserInfosTitle>
                            <ItemUserInfosDescription>28 nov 2020</ItemUserInfosDescription>
                        </ItemUserInfos>
                    </ItemContent>
                    <ItemMoneyBlock>
                        <ItemMoneyBlockTitle isReceived>$ 200</ItemMoneyBlockTitle>
                        <ItemMoneyBlockDescription>Received</ItemMoneyBlockDescription>
                    </ItemMoneyBlock>
                </ItemContainer>
            </ListItems>
        </Container>
    );
}

export default Statement;