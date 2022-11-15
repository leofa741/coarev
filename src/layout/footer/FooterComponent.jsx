import React from 'react'
import './footer.css'

export const FooterComponent = () => {

    //año actual
    const year = new Date().getFullYear();



  return (
   <>
  	<section id= "footer" className= "main-footer">
			<div className= "row">
				<div className= "logo text-center">
					<h1>Renessa</h1>
				</div>
			</div>
			<div className= "row">
				<div className= "copyright text-center">
					<p> © 
            {year}  Technext. Designed and Developed by <a href="http://themewagon.com"><span className= "theme">Themewagon</span></a></p>
				</div>
			</div>
		</section>
   </>
  )
}
