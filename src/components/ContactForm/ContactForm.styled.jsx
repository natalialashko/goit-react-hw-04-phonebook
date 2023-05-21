import styled from '@emotion/styled'


export const ContactInputForm = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
width:400px;
border: 1px solid #ccc;
border-radius: 4px;
padding: 10px;
background-color: #938d8d;

`;
export const LabelInput = styled.label`
font-size: 16px;
`

export const NameInput = styled.input`

padding: 10px;
border-radius: 4px;
border: 1px solid #ccc;
font-size: 20px;

&:hover{
    outline:none;
    border-color: #4d90fe;
}
`;

export const AddContactButton = styled.button`
padding: 10px 20px;
border-radius: 4px;
border: 1px solid #ccc;
background-color: white;
font-size: 20px;
color: black;
margin-top: 8px;


&:hover {
    color: white;
    background-color: #4d90fe;
    cursor: pointer; 
    border: 1px solid #4d90fe;
  };

`