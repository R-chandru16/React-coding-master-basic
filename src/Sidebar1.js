import {Outlet, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Sidebar1(props) {

    const [state, setstate] = useState(false)

    function myfun(e){

        e.preventDefault();

       
        if(props.state[0]==="none"){
setstate(true)
            var array1 = ["block", "none"]
            props.setstate(array1)
        }

        else{
            var array1 = ["none", "none"]
            props.setstate(array1)
            setstate(false)
        }
    }


    useEffect(()=>{

        if(props.state[0]==="none"){
            setstate(false)
            
        }

        else{
            setstate(true)
        }

    })
    return ( 

<div>

<div class="area">
    <div class="s-layout">

<div class="s-layout__sidebar">
  
<a className="s-sidebar__nav" ></a>
<ul class="no-bullets">
<li>
           <a class="s-sidebar__nav-link" href="#0">
           <i class="zmdi zmdi-view-dashboard">
                                <i class="bi bi-person-circle"></i>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>

                            </i>
                            <i></i><NavLink to="/Chess"> <em>Chess</em></NavLink>
              
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
           <i class="zmdi zmdi-view-dashboard">
                                <i class="bi bi-person-circle"></i>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>

                            </i>
                            <i></i><NavLink to="/VolleyBall"> <em>VolleyBall</em></NavLink>
              
           </a>
        </li>
        



        <li>
           <a class="s-sidebar__nav-link" href="#0">
           <i class="zmdi zmdi-view-dashboard">
                                <i class="bi bi-person-circle"></i>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>

                            </i>
                            <i></i><NavLink to="/FootBall"> <em>FootBall</em></NavLink>
              
           </a>
        </li>
        
        <li>
           <a class="s-sidebar__nav-link" href="#0">
           <i class="zmdi zmdi-view-dashboard">
                                <i class="bi bi-person-circle"></i>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>

                            </i>
                            <i></i><NavLink to="/TableTennis"> <em>TableTennis</em></NavLink>
              
           </a>
        </li>
        
        <li>
           <a class="s-sidebar__nav-link" href="#0">
           <i class="zmdi zmdi-view-dashboard">
                                <i class="bi bi-person-circle"></i>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>

                            </i>
                            <i></i><NavLink to="/Rugby"> <em>Rugby</em></NavLink>
              
           </a>
        </li>
</ul>

        </div>
        </div>



        
        
        
      

                        



</div>
</div>
     );
}

export default Sidebar1;