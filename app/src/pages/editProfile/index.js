import React from 'react';
import styles from './styles';
import {View, Text, ScrollView, Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import CardInfo from '../../components/CardInfo';
import AuthContext from '../../contexts/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const editProfile = () => {
    const {user, responsavel} = React.useContext(AuthContext);
    const [statusDoador, setStatusDoador] = React.useState("");
    const [complemento, setComplemento] = React.useState("");
    const [foto, setFoto] = React.useState(user.fotoUsuario);
    const [responsavelScreen, setResponsavelScreen] = React.useState("");

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
            setFoto("../../assets/images/user.png");
        }

        getPermissionAsync = async () => {
            if (Constants.platform.ios) {
              const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        };

        if (responsavel === null) {
            setResponsavelScreen("Sem Responsável");
        } else {
            setResponsavelScreen(responsavel.nomeResponsavel)
        }

    }, [])


    _pickImage = async () => {
        try {
            let result = await ImagePicker.showImagePicker({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.5,
                maxWidth: 500,
                maxHeight: 500,
            });
            if (!result.cancelled) {
                setFoto(result.uri);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

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
                    onPress={() => _pickImage()}
                >
                    {
                        foto === null 
                        ? 
                        <Image 
                            source={{ uri: `https://needy-api.herokuapp.com/imagens/${foto}` }} 
                            style={{ width: 256, height: 256, borderRadius: 500, }} 
                        /> 
                        : 
                        <Image 
                            source={require('../../assets/images/user.png')} 
                            style={{ width: 256, height: 256, borderRadius: 500, }} 
                        />
                    }
                </TouchableOpacity>
            </View>

            <CardInfo
                titulo="Nome"
                dado={user.nomeDoador}
            />
            <CardInfo 
                titulo="Responsável"
                dado={responsavelScreen}
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

