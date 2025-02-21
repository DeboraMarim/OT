import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: auto;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  // @media screen and (max-width: 768px) {
  //   height: 1100px;
  // }

  // @media screen and (max-width: 480px) {
  //   height: 1300px;
  // }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: rgba(96, 99, 94, 0.17);
  border: 1px solid rgba(7, 252, 7, 0.4);
  color: #fff;
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 350px;
  padding: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 180px;
  width: 290px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 10px;

`;

export const ServicesP = styled.p`
  font-size: 1rem;
  margin: 10px;
  text-align: center;

`;
