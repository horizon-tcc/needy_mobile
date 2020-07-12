import React from 'react';
import styles from './styles';
import {View, Text, ScrollView, Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import CardInfo from '../../components/CardInfo';
import AuthContext from '../../contexts/auth';
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


const handleChooseAPhoto = () => {
    const options = {
        mediaTypes: 'Images',
        allowsEditing: false,
        base64: true,
        quality: 0.5,
        maxWidth: 500,
        maxHeight: 500,
    };
    ImagePicker.showImagePicker(options, (response) => {
        console.log(response);
    });
};

const editProfile = () => {
    const {user} = React.useContext(AuthContext);
    const [statusDoador, setStatusDoador] = React.useState("");
    const [complemento, setComplemento] = React.useState("");
    const [foto, setFoto] = React.useState(user.fotoUsuario);

    React.useEffect(() => {
        if (user.statusDoador == 0) {
            setStatusDoador("Doador Inativo");
        } else if (user.statusDoador == 1) {
            setStatusDoador("Pêndencias não resolvidas: Criação de nova senha");
        } else if (user.statusDoador == 2 ) {
            setStatusDoador("Aguardando aprovação de doação");
        } else if (user.statusDoador == 3 ) {
            setStatusDoador("Doador Autorizado");
        }

        if (user.complemento == null) {
            setComplemento("Não Informado")
        }

        if (user.fotoUsuario == null) {
            setFoto("41fe627c50fbcfd50986b70158b6b493.jpg");
        }

    }, [])

    return(
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 300,
                }}
            >
                <TouchableOpacity
                    onPress={handleChooseAPhoto}
                >
                    <Image 
                        source={{
                            uri: `https://needy-api.herokuapp.com/imagens/${foto}`
                        }}
                        style={{
                            borderRadius: 500,
                            width: 256,
                            height: 256,
                        }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>

            <CardInfo
                titulo="Nome"
                dado={user.nomeDoador}
            />
            <CardInfo 
                titulo="Responsável"
                dado="Você mesmo seu otário"
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
                dado={complemento}
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
                dado={statusDoador}
            />
            <CardInfo 
                titulo="E-mail"
                dado={user.emailUsuario}
            />
            <CardInfo 
                titulo="Número Doador"
                dado={user.numeroTelefoneDoador.join("\n")}
            />
        </ScrollView>
    ) 
}

export default editProfile;

