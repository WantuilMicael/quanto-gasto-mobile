import React from "react";

import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import { style } from "./styles";
import { themas } from "../../global/themes";
import {MaterialIcons} from '@expo/vector-icons';


export default function home (){
    return(
        <View style={style.container}>

            <View style={style.boxTop}>
                <Text style={style.textUser}> Bem vindo, Wessh!</Text>
                <MaterialIcons name="exit-to-app" size={40} color={themas.colors.textcolor} paddingRight={30}/>
            </View>

            <View style={style.boxMid}>
                <View style={style.titleMid}>
                    <Text style={style.textTitle}> Calcule sua rota </Text>
                </View>

                <View style={style.formMid}>
                    
                    <View style={style.row}>
                        <View style={[style.inputGroup, { marginRight: 10 }]}>
                            <Text>Origem</Text>
                            <TextInput style={style.input} />
                        </View>

                        <View style={style.inputGroup}>
                            <Text>Destino</Text>
                            <TextInput style={style.input} />
                        </View>
                    </View>

                    <View style={style.inputGroupFull}>
                        <Text>Distância a ser percorrida</Text>
                        <TextInput style={style.inputFull} />
                    </View>

                    <View style={style.row}>
                        <View style={[style.inputGroup, { marginRight: 10 }]}>
                            <Text>Consumo km/l</Text>
                            <TextInput style={style.input} />
                        </View>

                        <View style={style.inputGroup}>
                            <Text>Valor do por Litro</Text>
                            <TextInput style={style.input} />
                        </View>
                    </View>

                    <TouchableOpacity style={style.botao}>
                        <Text style={style.botaoTexto}>Calcular</Text>
                    </TouchableOpacity>  

                </View>

                <View style={style.resultMid}>
                    <Text style={style.textResult}>
                        Você vai gastar <Text style={style.textValue}> R$ 1.555,00 </Text> 
                    </Text>
                </View>         

            </View>

            <View style={style.boxBotton}>
                    <MaterialIcons name="person-outline" size={60} color={themas.colors.textcolor} />
                    <MaterialIcons name="home" size={60} color={themas.colors.textcolor} paddingLeft={80} />
                    <MaterialIcons name="location-on" size={60} color={themas.colors.textcolor} paddingLeft={80}/>
            </View>

        </View>
    );
}
