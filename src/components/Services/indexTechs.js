import React from 'react';

import img7 from "./images/img7.png";
import img10 from './images/img10.png';
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import img14 from './images/img14.png';
import img16 from './images/img16.png';


import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Techs = () => {
  return (
    <ServicesContainer id='techs'>
      <ServicesH1>Algumas Tecnologias que Utilizamos</ServicesH1>
      <ServicesWrapper>

      <ServicesCard>
  <ServicesIcon src={img7} />
  <ServicesH2>Mercado Livre API</ServicesH2>
  <ServicesP>Integrações com a API do Mercado Livre para controle de estoque, campanhas e relatórios.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img10} />
  <ServicesH2>Whaticket</ServicesH2>
  <ServicesP>Configuração e suporte para o sistema de atendimento via WhatsApp.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img8} />
  <ServicesH2>iFood API</ServicesH2>
  <ServicesP>Ferramentas para gerenciar pedidos, integrar cardápios e melhorar sua operação.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img14} />
  <ServicesH2>Automatização  Planilhas Google Sheets</ServicesH2>
  <ServicesP>Criação de scripts e automações para gerenciar dados e fluxos de trabalho.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img9} />
  <ServicesH2>Shopify API</ServicesH2>
  <ServicesP>Conexão com Shopify para gerenciar produtos e vendas de forma eficiente.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img16} />
  <ServicesH2>WordPress</ServicesH2>
  <ServicesP>Desenvolvimento e manutenção de sites utilizando WordPress.</ServicesP>
</ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>

    
  );
};

export default Techs;
