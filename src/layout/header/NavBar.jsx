import React from 'react'
import {  NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
   <>
 <div id="wrapper">
			<div id="overlay-1">

				
				<section id= "navigation">
					<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
	  					<div className="container-fluid">
	    					<div className="navbar-header">
	      						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					        		<span className="ion-navicon"></span>
					      		</button>
					      		<a className="navbar-brand" href="#">Coa revestimientos</a>
					    	</div>
	    					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      					<ul className="nav navbar-nav navbar-right">
		      						<li> <NavLink   to="/home"    >Home</NavLink></li>                
                      <li> <NavLink to="/portfolio"  >Portfolio</NavLink></li>
                      <li> <NavLink to="/contacto"  >Contacto</NavLink></li>
                    
							    </ul>
	    					</div>	
	  					</div>	
					</nav>	
				</section>	




				<section id="starting">
					<div className="text-center starting-text">
						<h1 className="rene">COA</h1>
						<h2>Welcome to our world</h2>
					</div>
				</section>
				<div id="bottom" className="bottom text-center">
			        <a href="#about"><i className="ion-ios7-arrow-down"></i></a>
			    </div>
			</div>
		</div>	
   </>
  )
}
