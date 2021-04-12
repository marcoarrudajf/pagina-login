import React from 'react';

import { ContainerPage, TitlePag} from '../../components/Main';

const Page = () => { //Fazendo desse jeito, sem chamar function vc joga o elemento dentro de uma variavel e pode usa lo no futuro.
    return (
        
        <ContainerPage>
 <TitlePag>
   Configurações
</TitlePag>
        </ContainerPage>

    );
}
export default Page;