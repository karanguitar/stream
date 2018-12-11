import React, { Component } from 'react';
import Modal from '../Modal'
import {Link} from 'react-router-dom'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream, deleteStream } from '../actions'


class StreamDelete extends Component {

    componentDidMount(){
        fetchStream(this.props.match.params.id)
    }

    actions = (
        <React.Fragment >
            <button onClick={() =>this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
    )

    renderContent =() =>{
        if(!this.props.stream){
            return "Are you sure you want to delete this stream?"
        }
        return `Are you sure you want to delete the stream ${this.props.stream.title}`
    }

    render() {


        return (
            <div>
                
                <Modal title="Delete stream" 
                        content={this.renderContent()}
                        actions={this.actions}
                        onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
