import React from "react";
import {useSelector} from 'react-redux';

const Navbar = () => {

  const {tasksList,error} = useSelector((state) => state.tasks)

  return (
    <>
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://www.achieversit.com/">
              <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="ACIT_Logo"/>
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      <p className="text-center lead">{`Currently ${tasksList.length} task(s) pending`}</p>
      {
        (error !== '') ? <h5 className="text-center text-danger">{error}</h5> : null
      }
    </>
  );
};

export default Navbar;
