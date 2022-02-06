import React from 'react';
import {connect} from "react-redux";
import EditTask from "./EditTask";


const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <p className="card-text">{props.task.description}</p>
                    <button className="btn btn-outline-primary" type="button"
                            disabled={props.statuses.indexOf(props.task.status)===0}
                            onClick={()=>props.moveCard(props.task.id, props.task.status, -1)}>left</button>
                    <button className="btn btn-outline-primary" type="button"
                            disabled={props.statuses.indexOf(props.task.status)===props.statuses.length-1}
                            onClick={()=>props.moveCard(props.task.id, props.task.status, +1)}>right</button>
                    <br/>
                    <button className="btn btn-outline-primary" type="button">up</button>
                    <button className="btn btn-outline-primary" type="button" >down</button>
                    <EditTask task={props.task}/>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    statuses: state.statuses.map(el => el.title)
})

const mapDispatchToProps = dispatch => ({
    moveCard: (id, currStatus, direction) => dispatch({type: 'CHANGE_STATUS', payload: {id, currStatus, direction}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);