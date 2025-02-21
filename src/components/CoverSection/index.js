import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import { Button } from '../ButtonElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>Transforme Suas Ideias em Realidade Digital</CoverH1>
        <CoverP>Soluções para impulsionar o seu negócio com tecnologia de ponta! </CoverP>
        <CoverBtnWrapper>
        <Button 
  as="a"  
  href="https://wa.me/5531997088385?text=Ol%C3%A1%2C%20Gostaria%20de%20fazer%20um%20or%C3%A7amento!" 
  target="_blank"  
  rel="noopener noreferrer"
  onMouseEnter={onHover} 
  onMouseLeave={onHover} 
  primary="true" 
  dark="true"
>
  Contratar {hover ? <ArrowForward /> : <ArrowRight />}
</Button>
        </CoverBtnWrapper>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
