import styled from 'styled-components';
 

const Container = styled.div`
    padding-top: 48px;
    padding-bottom: 48px;
    margin-bottom: 19px;
    background-image: url(../images/backgroundImg.png);
    background-size: cover;
    background-position: 99% 100%;
    background-repeat: no-repeat;
    border-radius: 8px
`; 

const SearchForm = styled.form`
    background-color: #FFFFFF;
    box-shadow: 0px 2px 8px rgb(0 0 0 / 10%);
    border-radius: 4px;
    margin-left: 16px;
    margin-right: 16px;
    padding: 6px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    
    @media(min-width: 1114px) {
        max-width: 790px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const  Input = styled.input`
    background-image: url(../images/inputBg.svg);
    background-repeat: no-repeat;
    background-position-y: 9px;
    background-position-x: 3px;
    width: 70%;
    padding: 16px;
    padding-left: 32px;
    border: none;
`;

const  Button = styled.button`
    background: #1E86FF;
    border-radius: 4px;
    outline: none;
    border: none;
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
`;


export {Container, SearchForm, Input, Button }