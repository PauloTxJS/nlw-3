import React from 'react';
import {FiArrowRight} from 'react-icons/fi';

import logoImg from '../../assets/img/Logo.svg';
import {PageLanding,Location,EnterApp} from './styled';
import {Wrapper} from '../../Styles/Wrapper';
const LandingPage = () => {
  return (
    <PageLanding>
      <Wrapper>
        <img src={logoImg}  alt="logo"/>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <Location>
          <strong>Caucaia</strong>
          <span>Ceará</span>
        </Location>
        <EnterApp href="#">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
      </Wrapper>
    </PageLanding>
  )
}

export default LandingPage;
