import styled from 'styled-components';

const Input = styled.input`
        background-color: #FFFFFF;
        background-image: url(../images/locationIcon.svg);
        background-repeat: no-repeat;
        background-position: 8px 12px;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 5%);
        border-radius: 4px;
        margin-bottom: 16px;
        margin-left: 0;
        margin-right: 12px;
        padding: 16px;
        border: none;
`;

const Checkbox = styled.div`
    :nth-of-type(1) {
        margin-bottom: 32px;
    }
`;

const Container = styled.form`
    display: grid;

    input {
        padding: 16px;
        padding-left: 32px;
    }

   ${Checkbox}:first-of-type ~ label {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px; 
        margin-bottom: 9px;
        text-transform: uppercase;
        color: #B9BDCF;
    }
`;

const Label = styled.label`
    ::first-of-type {
        margin-bottom: 16px;
    }

    span {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px; 
        color: #334680;
    }
`;

const Span = styled.span``;




export { Container, Label, Input, Span, Checkbox }