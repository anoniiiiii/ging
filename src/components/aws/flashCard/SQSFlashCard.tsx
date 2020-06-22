import React from "react";
import AwsFlashCard from "./AWSFlashCard";
import {Server, SQS, No, SNS} from '../icons';
import {Icon, IconContainer, ScrollContainer, Content} from './FlashCardHelper';
import {Popover} from 'antd';
import SQSStandardQueue from './SQSStandardQueue';
import SQSFifoQueue from './SQSFifoQueue';
import ModalClick from "../../common/ModalClick";

const comp = () => {
    return <AwsFlashCard title='SQS'>
        <ScrollContainer>
            <Content>
                <IconContainer>
                    <Icon><Server/><No/>
                        <p>Serverless</p>
                    </Icon>
                    <Icon><SQS/><p>Message Queue</p></Icon>
                </IconContainer>
                <IconContainer>
                    <ModalClick content={<SQSFifoQueue/>}>
                        <Icon><SQS/>
                            <p>FIFO Queue</p>
                        </Icon>
                    </ModalClick>
                    <ModalClick content={<SQSStandardQueue/>}>
                        <Icon><SQS/>
                            <p>Standard Queue</p>
                        </Icon>
                    </ModalClick>
                </IconContainer>
                <IconContainer>
                    <Icon><SQS/>
                        <p>SQS</p>
                    </Icon>
                    <Icon><SNS/>
                        <p>SNS</p>
                    </Icon>
                </IconContainer>
                <div>
                </div>
            </Content>
        </ScrollContainer>
    </AwsFlashCard>;
}
export default comp;

