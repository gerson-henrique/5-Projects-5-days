import styled from "styled-components";
const mainColor: string = '#17181f';
const fontColor: string = '#797a81';


export const Container = styled.div`
background-color: ${mainColor};
color: ${fontColor};
min-height: 100vh;`;

export const WorkArea = styled.div`
margin:auto;
max-width: 900px;
padding: 10px;`;

export const Header = styled.h1`
margin:0;
padding:0;
color:white;
text-align: center;
border-bottom: 1px solid #444;
padding-bottom: 20px`