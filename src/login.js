import React,{useState} from 'react';
import data from './data.js';
import firebase from './firebase.js';
function Login()
{

  	const sign=false;
	const [state,setState]=useState
    ({ email:"",
       pass:"",
    }); 

	const p=(event)=>
	{
       state.pass=event.target.value;
       console.log(event.target.value);
	}
	const u=(event)=>
	{
		state.email=event.target.value;
		console.log(state.email);
            this.history.push('nigga');

	}
  const Verify=()=>
  {
  	
      firebase.auth().signInWithEmailAndPassword(state.email,state.pass).then((u)=>{
        this.history.push('nigga');
    }).catch((err)=>{
        alert(err);
    })
  }
	return(
	<React.Fragment>

	 <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <form class="box">
                    <h1>Login</h1>
                    <p class="text-muted"> Please enter your login and password!</p> 
                    <input type="text" name="" placeholder="Username" onChange={(e)=>u(e)}/> 
                    <input type="password" name="" placeholder="Password" onChange={(e)=>p(e)}/> 
                    <a class="forgot text-muted" href="#">Forgot password?</a> 
                    <button onClick={Verify} class="btn btn-secondary">Login</button>
                    <div class="col-md-12">
                        <ul class="social-network social-circle">
                            <li><a href="#" class="fa fa-facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" class="fa fa-twitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" class="fa fa-google" title="Google +"><i class="fab fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
     </React.Fragment>
	)
}
export default Login;