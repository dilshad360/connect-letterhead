/* eslint-disable react/prop-types */

import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import Header from "../assets/letter_header.png"
import Footer from "../assets/letter_footer.png"
import fontRegular from "../assets/fonts/Montserrat-Regular.ttf"
import fontBold from "../assets/fonts/Montserrat-Medium.ttf"

Font.register({ family: 'Montserrat', src: fontRegular });
Font.register({ family: 'Montserrat-Bold', src: fontBold });


const Doc = ({ data }) => {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#f6f6f6',
            fontFamily: 'Montserrat',
        },
        body: {
            paddingTop: '16',
            paddingHorizontal: '42',
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
        },
        to:{
            paddingBottom: 24
        },
        date:{
            paddingBottom: 36
        },
        subject:{
            paddingBottom: 24
        },
        content:{
            paddingBottom: 36,
            paddingRight: 48,
            textAlign: 'left'
        },
        bold:{
            fontFamily: 'Montserrat-Bold',
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
                    <View style={styles.to}>
                    <Text>To,</Text>
                    <Text>{data.recipient}</Text>
                    <Text>EMEA College of Arts and Science</Text>
                    </View>
                    <View style={styles.date}>
                    <Text>{data.date}</Text>
                    <Text>{data.day}</Text>
                    </View>
                    <Text style={styles.subject}>Subject: {data.subject}</Text>
                    <Text>Sir,</Text>
                    <Text style={styles.content}>&nbsp;&nbsp;&nbsp;{data.body}</Text>
                    <Text>Yours sincerely,</Text>
                    <Text style={styles.bold}>CONNECT</Text>
                    </View>
                    <Image
                        style={styles.footer}
                        src={Footer}
                    />
                </View>
            </Page>
        </Document>
    )
};

export default Doc;