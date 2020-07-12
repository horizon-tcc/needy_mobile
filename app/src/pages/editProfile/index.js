import React from 'react';
import styles from './styles';
import {View, Text, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import CardInfo from '../../components/CardInfo';
import AuthContext from '../../contexts/auth';



const editProfile = () => {
    const {user} = React.useContext(AuthContext);
    console.log("USERRRRRRRRRRRRRR" + user)
    return(
        <ScrollView style={styles.container}>
            <CardInfo
                titulo="Nome"
                dado={user.nomeDoador}
            />
            <CardInfo 
                titulo="Responsável"
                dado=""
            />
            <CardInfo 
                titulo="Sexo"
                dado={user.descricaoSexo}
            />
            <CardInfo 
                titulo="Data de Nascimento"
                dado={user.dataNascimentoDoador}
            />
            <CardInfo 
                titulo="Fator RH"
                dado={user.descricaoFatorRh}
            />
            <CardInfo 
                titulo="Tipo Sanguíneo"
                dado={user.descricaoTipoSanguineo}
            />
            <CardInfo 
                titulo="CPF"
                dado={user.cpfDoador}
            />
            <CardInfo 
                titulo="RG"
                dado={user.rgDoador}
            />
            <CardInfo 
                titulo="Logradouro"
                dado={user.logradouroDoador}
            />
            <CardInfo 
                titulo="Bairro"
                dado={user.bairroDoador}
            />
            <CardInfo 
                titulo="CEP"
                dado={user.cepDoador}
            />
            <CardInfo 
                titulo="N°"
                dado={user.numeroEndDoador}
            />
            <CardInfo 
                titulo="Complemento"
                dado={user.complementoEndDoador}
            />
            <CardInfo 
                titulo="Cidade"
                dado={user.cidadeDoador}
            />
            <CardInfo 
                titulo="UF"
                dado={user.ufDoador}
            />
            <CardInfo 
                titulo="Status"
                dado={user.statusDoador}
            />
            <CardInfo 
                titulo="E-mail"
                dado={user.emailUsuario}
            />
            <CardInfo 
                titulo="Número Doador"
                dado={user.numeroTelefoneDoador.slice(", ")}
            />
        </ScrollView>
    ) 
}

export default editProfile;

