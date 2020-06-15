import React from 'react';
import { View, Text } from 'react-native';

import Title from './../../components/Title';
import Paragrafo from './../../components/Paragrado';

const Termos = () => {
     return (
          <>
               <View style={{padding: 25}}>
                    <View>
                         <Title texto="Política Privacidade"/>
                         <Paragrafo texto="A sua privacidade é importante para nós. É política do Needy respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Needy, e outros sites que possuímos e operamos."/>
                         <Paragrafo texto="Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado."/>
                         <Paragrafo texto="Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados."/>
                         <Paragrafo texto="Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei."/>
                         <Paragrafo texto="O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade."/>
                         <Paragrafo texto="Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados."/>
                         <Paragrafo texto="O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco."/>
                    </View>
               </View>
          </>
     );
}

export default Termos;