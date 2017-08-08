import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:''
		}
	}

	handleClick(event){
	var apiBaseUrl="http://localhost:4000/api/";
	var self = this;
	var payload = {
		"username": this.state.username,
		"password": this.state.password
	}
	axios.post(apiBaseUrl+'login', payload).then(function (response){
		console.log(response);
		if(response == 200){
			console.log("Login successful");
			// var uploadScreen=[];
			// uploadScreen.push(<UploadScreen parentContext={self.props.appContext}/>)
			// self.props.parentContext.setState({loginPage:[],uploadScreen:uploadScreen})
		}
		else if(response.data.code == 204){
			console.log("Username or password do not match");
			alert("Username or password do not match");
		}
		else{
			console.log("Username does not exist");
			alert("Username does not exist");
		}
	})
	.catch(function (error){
		console.log(error);
	});
}

	render(){
		return(
			<div>
			<MuiThemeProvider>
				<div>
				<AppBar
					title = "Login"
					/>
					<TextField
						hintText = "Enter your Username"
						floatingLabelText="Username"
						onChange = {(event, newValue) => this.setState({username:newValue})}
						/>
					<br/>
					<TextField
						hintText = "Enter your Password"
						floatingLabelText="Password"
						onChange = {(event,newValue) => this.setState({password:newValue})}
						/>
					<br/>
				<RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
			</div>
				</MuiThemeProvider>
			</div>
		);
	}
}
const style = {
	margin: 15,
};
export default Login;


