import styled from 'styled-components';

export const AreaHeader = styled.div`
height: 60px;
background-image: linear-gradient(to right, #fe5d26, #370d44);
color: #fff;

.ar-container{
    padding: 6px 15px;
    display: flex;
    align-items: center

}
.ar-logo{
    flex: 1;
    img{
        width: 50px
    }


}
nav{
    display: flex;
    ul{
        display: flex;
        
    }
    li{
        list-style: none;
        margin-left: 20px;
       
        a{
            text-decoration: none;
            color: white;
            &:hover{
                color: #de2534;

            }
        }
    }
    .avatar{
    display:flex;
    align-items: center;
    
    img{
    width: 35px;
    border-radius: 20px;
    margin-left: 20px;
    cursor: pointer;
    margin-right: 10px;

    }
    label{
        font-size: 14px;
        cursor: pointer;
        color: #ccc;

    }

}
@media screen and (max-width: 800px){
    label{
        display: none;
    }
}
}


`;