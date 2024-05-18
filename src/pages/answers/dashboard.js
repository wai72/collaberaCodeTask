import { StyleSheet, View, Text, TouchableOpacity,  } from "react-native"

const Dashboard = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.navBarDesktop}> 
                <Text>My Dashboard</Text>
                <View style={styles.navLinks}>
                    <TouchableOpacity style={styles.navLink}>
                        <Text style={styles.navLinkText}> AEON </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navLink}>
                        <Text style={styles.navLinkText}> Showcase </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navLink}>
                        <Text style={styles.navLinkText}> Doc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navLink}>
                        <Text style={styles.navLinkText}> Blog </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navLink}>
                        <Text style={styles.navLinkText}> Analytics </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navLink}>
                        <Text style={styles.navLinkText}> Template </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navLink}>
                        <Text style={styles.navLinkText}> Enterprise </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBarDesktop:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#333'
    },
    navLinks: {
        flex:'row'
    },
    navLink: {
       marginLeft: 16
    },
    navLinkText: {
        flex:'#fff',
        fontSize: 18
    }
    
});

export default Dashboard;