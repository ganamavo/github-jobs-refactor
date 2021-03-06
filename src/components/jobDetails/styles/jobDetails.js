import styled from 'styled-components';

const Article = styled.article`
    :nth-of-type(2) {
        @media(min-width: 1114px) {
            padding-top: 100px;
        }
    }
`;

const Container = styled.section` 
    padding: 16px;

    a {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px; 
        color: #1E86FF;
        word-wrap: break-word;
    }

    @media(min-width: 1114px) {
        max-width: 1114px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        padding: 0; 
        grid-template-columns: 25% 75%; 
        column-gap: 77px;
    }
 
`;

const ArticleHeading = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px; 
    margin-top: 32px;
    text-transform: uppercase;
    color: #B9BDCF;

    @media(min-width: 1114px) {
        margin-top: 36px;
        margin-bottom: 16px;
    }
`;
const TextContainer = styled.div``;
const Link = styled.a``;

const ArticleParagraph = styled.p``;

const Header = styled.header`
    h2 {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #334680;
        text-transform: lowercase;
        margin: 0;
        margin-top: 36px;
        margin-bottom: 9px;


        @media(min-width: 1114px) { 
            margin-top: 0;
            max-width: fit-content;
        }
    }

    p {
        border: 1px solid #334680;
        box-sizing: border-box;
        border-radius: 4px;
        max-width: 25%;
        padding: 4px;
        margin-bottom: 10px;
    }

    @media(min-width: 1114px) {
            display: grid;
            grid-template-columns: auto auto;

            p {
                max-width: max-content;
            }
    }
`;

const Span = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B7BCCE;

    @media(min-width: 1114px) {
                margin-left: 2px;
    }

    svg {
            transform: translate(-4px, 4px);
        }
`;

const Frame = styled.div` 
        display: flex; 
        column-gap: 32px;
        margin-top: 32px;
        margin-bottom: 32px;
 
    img {
        width: 62px;
        height: 62px;   
    }

    img ~ div{ 
        p {
            font-weight: bold;
            font-size: 18px;
            line-height: 21px; 
            color: #334680
        }

        span {
            margin-top: 20px;
            display: block;

            @media(min-width: 1114px) {
                margin-left: 2px; 
            }
        }
        
    }
`;
const Group = styled.div``;
const Image = styled.img``;
export { Container, Article, ArticleHeading, TextContainer, Link, ArticleParagraph, Header, Span, Frame, Group, Image }