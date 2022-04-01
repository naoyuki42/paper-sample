import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Headline, Title, Subheading, Paragraph, Caption } from "react-native-paper";

export const Main = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Headline>Paper紹介</Headline>
                <Title>タイトル</Title>
                <Subheading>Typography</Subheading>
                <Paragraph>これが段落です。</Paragraph>
                <Paragraph>じゅげむじゅげむ　ごこうのすりきれ</Paragraph>
                <Caption>キャプションも書けます。</Caption>
                <Subheading>Button</Subheading>
                <Subheading>Card</Subheading>
            </ScrollView>
        </SafeAreaView>
    );
}