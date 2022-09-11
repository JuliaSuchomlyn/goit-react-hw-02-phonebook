import styled from "@emotion/styled";

export const FormRequest = styled.form`
display: flex;
flex-direction: column;
margin-bottom: 30px;
font-size: 20px;
font-weight: bold;
color: rgba(2, 2, 2, 0.1);
background: #666666;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5);

button{
    margin-left: auto;
    font-size: 20px;
    font-weight: bold;
    color: rgba(2, 2, 2, 0.1);
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
    width: 60%;
}

`
export const FormLabel = styled.label`
display: flex;
margin-bottom: 4px;

input{    
    margin-left: auto;
    width: 70%;
    font-size: 20px;
    
    color: rgba(2, 2, 2, 0.1);
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
}

`