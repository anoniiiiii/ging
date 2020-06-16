import React, { Component, ReactNode, FC } from "react";
import styled from "styled-components";

type TProps = {
  position: string;
  company: string;
  websize?: string;
  startDate: string;
  endDate: string;
  logo?: ReactNode;
};

type TState = {};

export default class WorkExperience extends Component<TProps, TState> {
  render() {
    const {
      startDate,
      endDate,
      position,
      company,
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
          <Position>{position}</Position>
          <Company>{company}</Company>
          <Description>{children}</Description>
        </Content>
      </Container>
    );
  }
}

const WorkExperienceEmpty: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <ASide></ASide>
      <Content>
        <Description>{children}</Description>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;
const ASide = styled.div`
  flex: 1;
  img {
    margin: 40px auto 0 auto;
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
const Position = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const Company = styled.div`
  font-size: 19px;
  color: #3c95e3;
`;
const Project = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 0;
`;
const Description = styled.div`
  ul {
    list-style-type: circle;
    li {
      margin-top: 5px;
    }
  }
`;
export { Project, WorkExperienceEmpty };
