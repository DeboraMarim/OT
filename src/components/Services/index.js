import React from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img11 from './images/img11.png';
import img12 from './images/img12.png';
import img13 from './images/img13.png';
import img15 from './images/img15.png';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>

      <ServicesCard>
  <ServicesIcon src={img1} />
  <ServicesH2>Desenvolvimento Web</ServicesH2>
  <ServicesP>Sites modernos e responsivos para destacar sua presença online.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img2} />
  <ServicesH2>Soluções Mobile</ServicesH2>
  <ServicesP>Aplicativos móveis para iOS e Android, com experiência do usuário otimizada.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img3} />
  <ServicesH2>Integração de Sistemas</ServicesH2>
  <ServicesP>Conecte suas plataformas para otimizar processos e resultados.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img4} />
  <ServicesH2>Consultoria em TI</ServicesH2>
  <ServicesP>Aconselhamento especializado para transformar sua visão em realidade.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img5} />
  <ServicesH2>Banco de Dados</ServicesH2>
  <ServicesP>Gestão eficiente de dados para o seu negócio, garantindo segurança e acessibilidade.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img6} />
  <ServicesH2>Lojas Virtuais</ServicesH2>
  <ServicesP>Criação de e-commerces completos para impulsionar suas vendas online.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img11} />
  <ServicesH2>Soluções com Inteligência Artificial</ServicesH2>
  <ServicesP>Desenvolvimento de sistemas inteligentes para otimizar processos e criar novas oportunidades.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img12} />
  <ServicesH2>Chatbots</ServicesH2>
  <ServicesP>Automatize o atendimento ao cliente com chatbots personalizados.</ServicesP>
</ServicesCard>

<ServicesCard>
  <ServicesIcon src={img13} />
  <ServicesH2>Design</ServicesH2>
  <ServicesP>Criação de identidades visuais, design para web e material promocional.</ServicesP>



  
</ServicesCard>

{/* <ServicesCard>
  <ServicesIcon src={img15} />
  <ServicesH2>Servidores</ServicesH2>
  <ServicesP>Instalação, gerenciamento e suporte para servidores locais e na nuvem.</ServicesP>
</ServicesCard> */}



      </ServicesWrapper>
    </ServicesContainer>

    
  );
};

export default Services;
