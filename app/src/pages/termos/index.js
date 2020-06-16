import React from 'react';
import { View, Text } from 'react-native';

import Title from './../../components/Title';
import Paragrafo from './../../components/Paragrado';
import Subtitle from './../../components/Subtitle';


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
                         <Title texto="Política de Cookies Needy"/>
                         <Subtitle texto="O que são cookies?"/>
                         <Paragrafo texto="Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site."/>
                         <Subtitle texto="Como usamos os cookies?"/>
                         <Paragrafo texto="Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa."/>
                         <Subtitle texto="Desativar cookies"/>
                         <Paragrafo texto="Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies."/>
                    </View>
               </View>
          </>
     );
}

export default Termos;