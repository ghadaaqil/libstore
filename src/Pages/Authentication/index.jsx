import React from 'react';
import FormWithActions from "../../Components/Form";
import styled from "styled-components";

const Authentication = () => <StyledAuthentication><FormWithActions/></StyledAuthentication>
export default Authentication;

const StyledAuthentication = styled.div`
  width: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 72px;
  height: 1080px;
  padding: 90px 100px 50px
  
`;


