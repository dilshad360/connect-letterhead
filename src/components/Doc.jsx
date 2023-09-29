/* eslint-disable react/prop-types */

import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Header from "../assets/letter_header.png"

const Doc = ({ data }) => {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#f6f6f6',
        },
        body: {
            paddingHorizontal: '30',
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Image
                        style={styles.image}
                        src={Header}
                    />
                    <View style={styles.body}>
                    <Text>{data.recipient}</Text>
                    <Text>{data.date}</Text>
                    <Text>{data.day}</Text>
                    <Text>{data.subject}</Text>
                    <Text>{data.body}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
};

export default Doc;