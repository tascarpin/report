import React from 'react';
import Modal from 'react-modal';
import PositionedMenu from "../PositionedMenu";
import Button from "@mui/material/Button";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function PopUpModal(props){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function print(){
        window.print();
    }

    return (
        <div>
            <Button onClick={openModal}>Adicionar</Button>
            <Button onClick={print}>Imprimir</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <PositionedMenu
                    alt={props}
                ></PositionedMenu>
                <Button onClick={closeModal}>Fechar</Button>
                <Button onClick={props.handleClear}>Limpar</Button>
            </Modal>
        </div>
    );
}
