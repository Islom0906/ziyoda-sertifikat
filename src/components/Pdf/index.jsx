import {Document, Font, Image, Page, StyleSheet, Text, View} from "@react-pdf/renderer";
import backgroundImage from '../../assets/abstract-gradient-pink-blue-liquid-wave-background-free-vector.jpg'
import signature from '../../assets/photo_2025-01-03_11-50-20-removebg-preview.png'
import logo from '../../assets/logo.png'
import RobotoMono from '../../assets/fonts/RobotoMono-Regular.ttf'
import Dancing from '../../assets/fonts/DancingScript-Regular.ttf'
import dayjs from "dayjs";


// Register fonts
Font.register({
    family: 'RobotoMono',
    fonts: [
        {src: RobotoMono, fontStyle: "normal", fontWeight: "normal"},
    ]
});

Font.register({
    family: 'Dancing',
    fonts: [
        {src: Dancing, fontStyle: "normal", fontWeight: "normal"},
    ]
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    section: {
        margin: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        flexGrow: 1,
        border: '1px solid #37406e',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16
    },
    title: {
        marginTop: 40,
        fontSize: 60,
        fontFamily: 'RobotoMono',
        fontWeight: 'normal',
        color:'#37406e'
    },
    line: {
        width: '80%',
        height: '1px',
        backgroundColor: '#37406e'
    },
    subTitle: {
        fontSize: 30,
        fontFamily: 'RobotoMono',
        fontWeight: 'normal',
        color:'#37406e'


    },
    user: {
        fontSize: 50,
        color:'rgb(120,29,119)',
        fontFamily: 'Dancing',
        fontWeight: 'normal'
    },
    footer: {
        position: "relative",
        width: '100%',
        display: "flex",
        alignItems: "flex-end",
        justifyContent: 'space-between',
        flexDirection: "row"
    },

    date: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center"
    },
    dateLine: {
        width: '180px',
        height: '1px',
        backgroundColor: '#37406e'
    },
    dateText: {
        fontSize: '16px',
        fontFamily: 'RobotoMono',
        fontWeight: 'normal',
        color:'#37406e'

    },
    logo: {
        width: '150px',
        height: '150px',
        objectFit: 'contain'
    },
    userName: {
        width: '160px',
        position: "absolute",
        top: 0,
        right: '60px',
    },
    userNameText: {
        fontSize: '16px',
        fontFamily: 'Dancing',
        fontWeight: 'normal',
        color:'#37406e'
    },
    signature:{
        width:'100px',
        height:'40px',
        // objectFit:'contain'
    }
});

const PDF = ({data}) => {
    return (
        <Document>
            <Page orientation={"landscape"} style={styles.page}>
                <View style={styles.background}>
                    <Image src={backgroundImage} style={styles.bgImage}/>
                </View>
                <View style={styles.section}>
                    <View>
                        <Text style={styles.title}>Sertifikat</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View>

                        <Text style={styles.subTitle}>
                            3D bokallar online kursida qatnashib yaxshi natijalar ko'rsatgan o'quvchi
                        </Text>
                    </View>
                    <View>

                        <Text style={styles.user}>
                            {data}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>
                            maxsus sertifikat bilan taqdirlanadi
                        </Text>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.footer}>
                        <View style={styles.date}>
                            <Text style={styles.dateText}>
                                {dayjs().format('DD.MM.YYYY')}
                            </Text>
                            <View style={styles.dateLine}/>
                            <Text style={styles.dateText}>
                                Sana
                            </Text>
                        </View>
                        <View>
                            <Image style={styles.logo} src={logo}/>
                        </View>
                        <View style={styles.date}>
                            <Image src={signature} style={styles.signature}/>
                            <View style={styles.dateLine}/>
                            <Text style={styles.dateText}>
                                Imzo
                            </Text>
                        </View>
                        <View style={styles.userName}>
                            <Text style={styles.userNameText}>
                                @made_by_ahmadjonova
                            </Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDF;