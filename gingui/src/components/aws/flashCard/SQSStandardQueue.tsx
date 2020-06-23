import React from "react";
import AwsFlashCard from "./AWSFlashCard";
import {Server, SQS, No, SNS} from '../icons';
import {Icon, IconContainer, ScrollContainer, Content} from './FlashCardHelper';

const comp = () => {
    return <AwsFlashCard title='SQS Standard Queue'>
        <ScrollContainer>
            <Content>
                <div>
                    <p>Amazon SQS offers standard as the default queue type. Standard queues support a nearly unlimited
                        number of API calls per second, per API action (SendMessage, ReceiveMessage, or DeleteMessage).
                        Standard queues support at-least-once message delivery. However, occasionally (because of the
                        highly distributed architecture that allows nearly unlimited throughput), more than one copy of
                        a message might be delivered out of order. Standard queues provide best-effort ordering which
                        ensures that messages are generally delivered in the same order as they're sent.</p>
                </div>
            </Content>
        </ScrollContainer>
    </AwsFlashCard>;
}
export default comp;

