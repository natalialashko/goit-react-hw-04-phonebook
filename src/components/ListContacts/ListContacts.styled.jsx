import styled from '@emotion/styled'

export const Contacts = styled.div`
padding: 10px;
width:400px;
margin: 0 auto;
`
export const ItemContacts = styled.li`

justify-content: space-between;
margin-bottom: 10px;
list-style: initial;

`
export const InfContacts = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`
export const DeleteBtn = styled.button`
padding-left: 10px;
padding-right: 10px;
border-radius: 4px;
border: 1px solid #ccc;
background-color: white;
color: black;
font-size: 16px;
margin-top: 8px;
margin-right: 10px;

&:hover {
    color: white;
    background-color: #4d90fe;
    cursor: pointer; 
    border: 1px solid #4d90fe;
  };
  `