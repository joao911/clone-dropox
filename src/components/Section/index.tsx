import React from 'react';

import { Container,
         Content,
         HeaderWrapper,
         Header,
         DropoxLoogo
   } from './styles';

interface Props{
    variant: 'blue'|'beige' | 'white' | 'black';
    title: string;
    description: string;
}
const Section: React.FC<Props> = ({variant, title, description}) => {

  const buttonVariant = Math.round(Math.random()); // vai me retonat oub zero ou um 1
  function hadleToggle(){
    if(window.toggleActiveMenu) window.toggleActiveMenu();
}
  return(
      <Container className={variant}>
        <HeaderWrapper>
          <Header>
            <h1>
              <DropoxLoogo/>
              <span>Dropox</span>
            </h1>
            <button onClick={hadleToggle}>{buttonVariant === 0 ? 'Acessar': 'Interagir'}</button>
          </Header>
        </HeaderWrapper>
          <Content>
            <h2>{title}</h2>
            <p>{description}</p>
          </Content>
      </Container>
  );
}

export default Section;