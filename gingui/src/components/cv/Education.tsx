import React, { Component, ReactNode, FC } from "react";
import styled from "styled-components";

type TProps = {
  scholl: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  logo?: ReactNode;
};

type TState = {};

export default class Education extends Component<TProps, TState> {
  render() {
    const {
      startDate,
      endDate,
      scholl,
      fieldOfStudy,
      children,
      logo,
    } = this.props;
    return (
      <Container>
        <ASide>
          <Time>{`${startDate} - ${endDate}`}</Time>
          {logo}
        </ASide>
        <Content>
          <Scholl>{scholl}</Scholl>
          <FieldOfStudy>{fieldOfStudy}</FieldOfStudy>
          <Description>{children}</Description>
        </Content>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;
const ASide = styled.div`
  flex: 1;
  img {
    margin: 10px auto 0 auto;
    display: block;
    width: 70px;
  }
`;
const Time = styled.div`
  font-weight: lighter;
  font-size: 14px;
  line-height: 22px;
  word-wrap: break-word;
  color: #555;
`;
const Content = styled.div`
  flex: 3.5;
  margin-left: 5px;
`;
const Scholl = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const FieldOfStudy = styled.div`
  font-size: 19px;
  color: #3c95e3;
`;
const Description = styled.div`
  ul {
    list-style-type: circle;
    li {
      margin-top: 5px;
    }
  }
`;
