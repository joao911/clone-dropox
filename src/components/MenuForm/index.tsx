import React from 'react';

import { Container,
         Navigation, 
         DropoxLogo, 
         Form } from './styles';

const MenuForm: React.FC = () => {
    function hadleToggle(){
        if(window.toggleActiveMenu) window.toggleActiveMenu();
    }
  return (
      <Container>
          <Navigation>
              <h1>
                  <DropoxLogo/>
                  <span>Dropox</span>
              </h1>
              <button className="action--close"onClick={hadleToggle}>x</button>
          </Navigation>
          <Form>
              <span className="title">Registre-se</span>
              <span className="subtitle">preencha o formulário abaixo</span>
              
              <input type="text" placeholder="Nome"/>
              <input type="text" placeholder="Sobrenome"/>
              <input type="text" placeholder="E-mail"/>
              <input type="text" placeholder="Senha"/>
              <button>Proseguir</button>

              <span className="terms">
                  Esta págian está sujeita aos termos de privacidade e aos Termos de serviço.
              </span>
          </Form>
      </Container>
  );
}

export default MenuForm;