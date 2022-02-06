import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import {connect} from "react-redux";

const CreateCard = (props) => {

    const [modal, setModal] = useState(false)
    const [inputName, setInputName] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const toggle = () => setModal(!modal)

    const onCreate = () => {
        props.createCard(inputName, inputDescription)
        toggle()
        setInputName('')
        setInputDescription('')
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>Create task</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create task</ModalHeader>
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
                    <Button color="primary" onClick={onCreate}>Create</Button>
                    <Button color='secondary' onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    createCard: (name, description) => dispatch({
        type: 'CREATE_CARD',
        payload: {name, description, status: 'todo', id: Math.random()}
    })
})
export default connect(null, mapDispatchToProps)(CreateCard);