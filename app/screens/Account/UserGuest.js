import React from 'react';
import { StyleSheet,View,ScrollView,Text,Image } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

function UserGuest(props){

    const { navigation } = props;

    return(
       <ScrollView style = {style.viewBody} centerContent={true} >
        <Image
        source={require("../../../assets/img/user-guest.jpg")}
        style={style.image}
        resizeMode="contain"
          />
        <Text style={style.title}>  Consulta tu perfil de Pizzeria  </Text>
        <Text style={style.description}> ¿Como describirias tu mejor experiencia con nostros?
        Busca los mejores combos de una forma sencilla.
        vota cual de ellas te ha gustado mas y comenta tu experiencia
          </Text>
          
          <View style={style.viewBtn}>
              <Button 
                buttonStyle={style.btnStyle}
                containerStyle = {style.btnContainer}
                title="Ver tu perfil"
                 onPress={() => navigation.navigate("Login")}
                // navigation.navigate("Login") Ojo : toda esta linea esta llegando como false 
              /> 
          </View>

       </ScrollView>
    );
}

export default withNavigation(UserGuest);

const style = StyleSheet.create({

    viewBody: {
        marginLeft:30,
        marginRight:30,
    },

    image: {
        height:300,
        width:"100%",
        marginBottom:40,
    },

    title: {
        fontWeight:"bold",
        fontSize:19,
        marginBottom:10,
        textAlign:"center",
    },

    description: {
        marginBottom:20,
        textAlign:"center",
    },

    viewBtn:{
        flex:1,
        alignItems:"center",
    },

    btnStyle:{
        backgroundColor:"#00a680",
    },

    btnContainer:{
        width:"70%",
    }

})