import React from 'react';
import styled from "styled-components";

const Icon = styled.div`
  display: inline-block;
  position: relative;
  svg{
    width: 48px;
    position: absolute;
    top:0; left:0;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  >p{
    margin: 48px 5px 0 5px;
    font-size: 10px;
    font-weight: bold;
    min-width: 58px;
  }
`

const IconContainer = styled(({...rest}) => <div {...rest} onClick={e => e.stopPropagation()}/>)`
  width: 100%;
  margin-bottom: 20px;
  > div {
    display: inline-block;
  }
`
const ScrollContainer = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;

`
const Content = styled.div`
margin: 20px;
width: calc(100% - 40px);
max-height: calc(100% - 40px);
overflow-y: auto;
::-webkit-scrollbar {
    width: 1em;
}
`
export {
    Icon, IconContainer, ScrollContainer, Content
}