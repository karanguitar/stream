import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT,
                scope: 'email'
            })
            .then(() =>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get()) //initial load 
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId()) //this is to action creator
        }else{
            this.props.signOut() //this is to action creator
        }
    }

    signIn = () =>{
        this.auth.signIn()
    }

    signOut = () =>{
       this.auth.signOut()
    }

    renderAuthButton(){
        switch(this.props.isSignedIn){
            case null:
                return null
            
            case true:
                return( 
                    <button onClick={this.signOut} className="ui red google button">
                        <i className="google icon"></i>
                        Sign out
                    </button>)
        
            case false:
                return(
                    <button onClick={this.signIn} className="ui red google button">
                        <i className="google icon"></i>
                        Sign in with google
                    </button>)
   
            default:
                return 
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
