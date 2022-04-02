import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Subheading, Button, Card, Paragraph } from "react-native-paper";

export const Main = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Subheading>Card</Subheading>
                <Card>
                    <Card.Cover source={require('../assets/favicon.png')}/>
                    <Card.Title 
                        title="ラーメン紀行　2日目"
                        subtitle="炎のラーメンチャンネル"
                    />
                    <Card.Content>
                        <Paragraph>
                            とうとう伝説のお店にやってきました。
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions style={{ justifyContent: 'flex-end' }}>
                        <Button>見ない</Button>
                        <Button mode="contained">見る</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
}