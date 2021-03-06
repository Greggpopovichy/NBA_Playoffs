import React from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import './RecapModal.css';

export default class RecapModal extends React.Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div className="recapModal">
                <div className="col-sm-12" onClick={this.onOpenModal}></div>
                <Modal open={open} onClose={this.onCloseModal} little className="rounded">
                    <div className="rounded">
                        Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent
                        rhoncus congue ipsum elementum lobortis. Ut ligula purus, ultrices id
                        condimentum quis, tincidunt quis purus. Proin quis enim metus. Nunc
                        feugiat odio at eros porta, ut rhoncus lorem tristique. Nunc et ipsum eu
                        ex vulputate consectetur vel eu nisi. Donec ultricies rutrum lectus, sit
                        ame feugiat est semper vitae. Proin varius imperdiet consequat. Proin eu
                        metus nisi. In hac habitasse platea dictumst. Vestibulum ac ultrices
                        risus. Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar
                        interdum velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent
                        aliquet justo vitae rutrum volutpat. Ut quis pulvinar est.
                    </div>
                </Modal>
            </div>
        );
    }
}