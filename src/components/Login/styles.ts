import styled from "styled-components";


export const Number =styled.button`
font-size:24px ;
background-color:green ;
padding:10px ;
border-radius:8px ;
opacity:0.5 ;
&.active{
    opacity:1;
}
`

export const Container =styled.div`
background-color:#fff ;
margin:10px ;
border-radius: 8px;
padding:30px ;
&.dark{
    background-color:#255 ;
}
`
export const Steps=styled.div`
font-size:24px ;
text-align:right ;
margin-right:100px ;
`


export const BtnContainer=styled.div`
display:flex ;
justify-content:space-between ;
margin:50px 150px ;
`