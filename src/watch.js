import React,{useState,useEffect} from 'react';
import firebase from './firebase.js';
export default function Watch()
{
		const [
	state,setState]=useState
    ({ 
      results:[], 
      id:[],
    }); 
		useEffect(()=>{
	
	const r=async()=>{
        const ref=firebase.database().ref("Mov");
		ref.on('value',(snapshot)=>{
       const mo=snapshot.val();
         for(let id in mo)
         {
              state.id.push(id);
              state.results.push(mo[id]);
              console.log(state.id);
         }
        console.log(state.results);   
        console.log(state.id[0]); 
      });
	 }
	 r();
	},[])
    var a=-1;
const sam = state.results.map((item, index) => {
    a++;
    return (
      <div className="col-md-6 col-sm-12"  key={index} id={a}>
        <div className="card" id="c">
            <img className="img-fluid" id="P" src={item.poster} alt={item.title}></img>
             <h2 className="center">{item.title}></h2>
             <button class="s" id={a} onClick={(e)=>rem(e.target.id)}>X</button>
      </div>
      </div>
       );
  });
const rem=(id)=>
{
  const t=firebase.database().ref('Mov').child(state.id[id]);
  t.remove();
  document.getElementById(id).remove();  
}

	return(
	<div className="container">
     <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a href="#" class="navbar-brand">MOVIE</a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav">
            <a href="/" class="nav-item nav-link">Home</a>
            <a href="#" class="nav-item nav-link active">Watchlist</a>
            
        </div>
        <form class="form-inline">
            <div class="input-group">                    
                <input type="text" class="form-control" placeholder="Search"/>
                <div class="input-group-append">
                    <button type="button" class="btn btn-secondary"><i class="fa fa-search"></i></button>
                </div>
            </div>
        </form>
        <div class="navbar-nav">
            <a href="#" class="nav-item nav-link">Login</a>
        </div>
  </div>
</nav>
<div>
{ state.results?sam:''}
</div>
</div>
     
	)
}