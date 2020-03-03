// Ícones feitos por <a href="https://www.flaticon.com/br/autores/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
// Ícones feitos por <a href="https://www.flaticon.com/br/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles'

export default class Maps extends React.Component {
	render() {
		return (
			<MapView
				style={styles.mapStyle}
				initialRegion={{
					latitude: -23.5530698,
					longitude: -46.4002202,
					latitudeDelta: 0.0043,
					longitudeDelta: 0.0034
				}}
			>

				<Marker
					coordinate={{
						latitude: -23.5584294,
						longitude: -46.6348969,
					}}
					title={"Hemocentro São Lucas - Unidade Liberdade"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5575896,
						longitude: -46.6689441,
					}}
					title={"Fundação Pró-Sangue Hemocentro de São Paulo"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5438673,
						longitude: -46.650106,
					}}
					title={"Hemocentro da Santa Casa de São Paulo"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.4678736,
						longitude: -46.5249643,
					}}
					title={"Hemocentro São Lucas - Guarulhos"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5519394,
						longitude: -46.3095214,
					}}
					title={"Hemocentro Suzano"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.595087,
						longitude: -46.6457452,
					}}
					title={"Hemocentro HSP Unifesp"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5805124,
						longitude: -46.6796303,
					}}
					title={"Fundação Hemocentro de Ribeirão Preto"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.6055957,
						longitude: -46.6780212,
					}}
					title={"Hemocentro São Lucas - Unidade Vila Olimpia"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>


				<Marker
					coordinate={{
						latitude: -23.6988796,
						longitude: -46.557605,
					}}
					title={"Colsan Hemocentro Regional de São Bernardo do Campo"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.6686605,
						longitude: -46.5298258,
					}}
					title={"Hemocentro São Lucas - Unidade Santo André"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5545718,
						longitude: -46.4659528,
					}}
					title={"Banco de Sangue do Hospital Santa Marcelina"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>


				<Marker
					coordinate={{
						latitude: -23.5533402,
						longitude: -46.7439652,
					}}
					title={"Banco de Sangue de São Paulo"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5955197,
						longitude: -46.6514364,
					}}
					title={"Banco de Sangue de São Paulo"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5901346,
						longitude: -46.6730441,
					}}
					title={"Banco de Sangue Paulista"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.6560008,
						longitude: -46.7055666,
					}}
					title={"Banco Sangue Paulista"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5662194,
						longitude: -46.6379501,
					}}
					title={"A.C.Camargo Cancer Center Castro Alves Assistencial"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5700886,
						longitude: -46.6420417,
					}}
					title={"Hospital Beneficência Portuguesa de São Paulo - Banco de Sangue"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.6187199,
						longitude: -46.664189,
					}}
					title={"Colsan Associação Beneficente de Coleta de Sangue"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5790025,
						longitude: -46.6796319,
					}}
					title={"Banco De Sangue Do Hospital Do Servidor Publico Estadual"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5972479,
						longitude: -46.6566069,
					}}
					title={"Banco de Sangue - Unidade Einstein Morumbi"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5685683,
						longitude: -46.6454757,
					}}
					title={"Instituto HOC de Hemoterapia"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.549864,
						longitude: -46.661429,
					}}
					title={"Banco de Sangue de São Paulo e Serviços de Hemoterapia"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>

				<Marker
					coordinate={{
						latitude: -23.5495421,
						longitude: -46.6597153,
					}}
					title={"Banco de Sangue de São Paulo e Serviços de Hemoterapia"}
					image={require('../../assets/images/telaMaps/sangue.png')}
				/>
			</MapView>
		);
	}
}





