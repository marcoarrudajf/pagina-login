import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Api from '../../Api';
import { AreaLogin } from './styled';
import { BtnDefaultIcons } from '../../components/styled'
import { BtnDefault } from '../../components/styled'
import  FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


 //export default ({onReceiverGoogle}) => {
 const Login = ({onReceiverGoogle}) =>{

    const actionLoginGoogle = async () => {
       let result = await Api.googleLogar();
       if(result){
        onReceiverGoogle(result.user);
       }else{
           alert('Error');
       }
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/registrar'>

                <AreaLogin>
                <h1 className='organize'>
                    <Link to='/'><ArrowBackIosIcon /></Link>
                    Crie sua conta
                    </h1>

                <p>Crie sua conta, é grátis</p>
                <form>
                <div className='form-input'>
                                <label>Nome:</label>
                                <input type='Text' />
                            </div>

                            <div className='form-input'>
                                <label>E-mail:</label>
                                <input type='email' />
                            </div>

                            <div className='form-input'>
                                <label>Senha:</label>
                                <input type='password' />
                            </div>
                            <BtnDefault>
                                Comece Agora!
              </BtnDefault>
                        </form>
                        <div class='FooterLogin'>
                            Já tem uma conta?
        <Link to='/'> Faça o login</Link>
                        </div>
                </AreaLogin>
                </Route>
                
                
                <Route exact path='*'>
                    <AreaLogin>
                        <h1>Faça login em sua conta</h1>
                        <BtnDefaultIcons>
                            <FacebookIcon />
                            <div className='center'>Fazer login com Facebook</div>
                        </BtnDefaultIcons>

                        <BtnDefaultIcons onClick={actionLoginGoogle}>
                            <GTranslateIcon />
                            <div className='center'>Fazer login com Google</div>
                        </BtnDefaultIcons>

                        <p>ou</p>

                        <form>
                            <div className='form-input'>
                                <label>E-mail:</label>
                                <input type='email' />
                            </div>

                            <div className='form-input'>
                                <label>Senha:</label>
                                <input type='password' />
                            </div>
                            <BtnDefault>
                                Entrar
              </BtnDefault>
                        </form>
                        <div class='FooterLogin'>
                            Não tem conta?
        <Link to='/registrar'> Registre-se</Link>
                        </div>

                    </AreaLogin>
                </Route>

            </Switch>

        </BrowserRouter>
    );
}

export default Login;
