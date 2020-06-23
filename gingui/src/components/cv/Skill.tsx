import React, { Component } from "react";
import styled from "styled-components";

type TProps = {
  name: string;
  strength: number;
};

type TState = {};

export default class Skill extends Component<TProps, TState> {
  render() {
    const { name, strength } = this.props;
    return (
      <Container>
        <Name>{name}</Name>
        <Progress>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <ProgressItem filled={value <= strength} key={value}></ProgressItem>
          ))}
        </Progress>
      </Container>
    );
  }
}
const Container = styled.div`
  margin-top: 10px;
  display: block;
`;

const Name = styled.div`
  font-family: Roboto;
  font-weight: normal;
  font-size: 19px;
`;

const Progress = styled.div`
  margin-top: 5px;
  overflow: hidden;
`;
const ProgressItem = styled(({ filled, ...rest }) => <div {...rest}></div>)`
  width: 8%;
  height: 15px;
  transform: skewX(-30deg);
  background-color: ${({ filled }) => (filled ? "white" : "gray")};
  float: left;
  margin-left: 2px;
`;
