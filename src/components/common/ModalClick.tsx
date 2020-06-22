import React from 'react';
import {RenderFunction} from "antd/lib/_util/getRenderPropValue";
import {Modal} from 'antd';
import styled from "styled-components";

type TProps = {
    title?: React.ReactNode | RenderFunction;
    content?: React.ReactNode | RenderFunction;
    children?: React.ReactElement;
}
type TState = {
    visible: boolean
}

class ModalClick extends React.Component<TProps, TState> {
    state = {visible: false};

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const {title, content, children} = this.props;
        return (
            <>
                <div onClick={this.showModal}>{children}</div>
                <Modal
                    width={540}
                    title={title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {content}
                </Modal>
            </>
        );
    }
}

export default ModalClick;

// const  ModalStyled = styled(Modal)`
//
// `