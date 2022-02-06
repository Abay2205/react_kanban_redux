import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import {connect} from "react-redux";

const EditTask = (props) => {

    const [modal, setModal] = useState(false)
    const [inputName, setInputName] = useState(props.task.name)
    const [inputDescription, setInputDescription] = useState(props.task.description)
    const onEdit =()=>{
        const updatedCard = {...props.task, name: inputName, description: inputDescription}
        props.editCard(updatedCard)
        toggle()
    }

    const toggle = () => {
        setInputName(props.task.name)
        setInputDescription(props.task.description)
        setModal(!modal)
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>Edit task</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit task</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task name" aria-label="Username"
                               aria-describedby="basic-addon1" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task description" aria-label="Username"
                               aria-describedby="basic-addon1" value={inputDescription}
                               onChange={(e) => setInputDescription(e.target.value)}/>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onEdit}>Edit</Button>
                    <Button color='secondary' onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    editCard: (updatedCard) => dispatch ({ type: 'EDIT_CARD', payload: updatedCard })
})

export default connect(null, mapDispatchToProps) (EditTask);