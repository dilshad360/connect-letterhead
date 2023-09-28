/* eslint-disable react/prop-types */

import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from "../assets/connect_full.png"
import Watermark from "../assets/logo.png"

const WatermarkLogo = (
    <Image src={Watermark} style={{ width: "300px", height: "200px" }} />
  );

const Doc = ({ data }) => {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#f6f6f6',
            padding: '20'
        },
        watermark: {
            position: "absolute",
            opacity: 0.1,
            width: "50%",
            height: "50%",
            top: "23%",
            left: "25%",
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                <View style={styles.watermark}>{WatermarkLogo}</View>
                    <Image
                        style={styles.image}
                        src={Logo}
                    />
                    <Text>{data.recipient}</Text>
                    <Text>{data.date}</Text>
                    <Text>{data.subject}</Text>
                    <Text>{data.body}</Text>
                </View>
            </Page>
        </Document>
    )
};

export default Doc;