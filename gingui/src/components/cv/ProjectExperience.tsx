import React, { Component, Children } from "react";
import styled from "styled-components";

type TProps = {
  projectName: string;
  techandtools?: string;
};

type TState = {};

export default class ProjectExperience extends Component<TProps, TState> {
  render() {
    const { projectName, techandtools, children } = this.props;
    return (
      <>
        <ProjectTitle>{projectName}</ProjectTitle>
        {children}
        {techandtools && (
          <>
            <TechandtoolsTitle>Technologies and Tools: </TechandtoolsTitle>
            {techandtools}
          </>
        )}
      </>
    );
  }
}
const TechandtoolsTitle = styled.div`
  font-weight: bolder;
  display: contents;
`;
const ProjectTitle = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 0;
`;
