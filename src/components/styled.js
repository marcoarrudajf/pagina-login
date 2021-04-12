import styled from 'styled-components';


export const BtnDefaultIcons = styled.button`
 display: flex;
 align-items: center;
 width: 100%;
 border-radius: 5px;
 border: 0px;
 outline: none;
 font-size: 16px;
 margin-bottom: 15px;
 transition: 0.4s;

 &:hover{
     background-color: #ccc;
 }
 .center{
     padding: 2px;
     text-align: center;
     width: 100%;
    }
 
`;
export const BtnDefault = styled.button`
width: 150px;
background-color: #7d2ae8;
color: #fff;
display: inline;
border-radius: 5px;
padding:2px;
&:hover{
    background-color:#4c129c
}
`;