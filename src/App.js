import React from 'react';
import {connect} from "react-redux";
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCard from "./CreateCard";

const App = (props) => {
    console.log(props)
    return (
        <div className="container">
            <h1>Kanban Redux</h1>
            <CreateCard/>
            <div className="row align-items-start">
                {props.statuses.map(el => <Column key={el.id} status={el}/>)}
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    statuses: state.statuses
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);