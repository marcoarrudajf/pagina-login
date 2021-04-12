import styled from 'styled-components';

export const AreaLogin = styled.div`
background-color: white;
padding: 30px;
max-width: 300px;
margin: auto;
margin-top: 100px;
text-align: center;
border-radius: 5px;
box-shadow: 0px 0px 10px #014;

h1{
    font-size: 24px;
   
}
.organize{
        display: flex;
    a{
        color: #000;
    }
}
p{
    font-size: 13px;
    color: #9c9c9c;

}
.form-input{
     text-align: left;
     label{
        display:  block;
     }
     input{
         margin-bottom: 20px;
         padding: 2px;
         font-size: 16px;
         outline: none;
         border: 1px solid #ccc;
         border-radius: 5px;
         width: 200px;
         transition: 0.3s;

         &:hover{
             border: 2px solid #7d2ae8;
         }
        }  
    }

.FooterLogin{
   font-size: 13px;
   padding: 5px;
   a{       
       font-weight: bold;
       margin-left: 8px;
       color: #4e129c;
       transition: 0.4s;
       cursor: pointer;
      

       &:hover{
           color: #7d2ae8;
       }
   }
}
`;