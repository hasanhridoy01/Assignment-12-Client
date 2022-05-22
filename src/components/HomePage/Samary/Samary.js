import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFlag, faComputer, faUser, faHand } from '@fortawesome/free-solid-svg-icons'

const Samary = () => {
  return (
    <div class="mockup-window border border-primary mt-10 mb-20 mr-10 ml-10 shadow-xl">
      <div class="grid justify-center px-4 py-16 border-t border-secondary">
        <h1 className='text-4xl font-bold text-secondary'>MILLIONS BUSINESS TRUST US</h1>
        <h6 className='mt-2 text-xl font-bold text-primary'>TRY TO UNDERSTAND USERS EXPECTATION</h6>
        <div className="divider text-success"></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="country mt-5">
            <FontAwesomeIcon className='mb-5 ml-2' style={{"font-size": '35px'}} icon={faFlag} />
            <h1 className='text-3xl font-bold'>72</h1>
            <h6 className='text-xl'>Country</h6>
          </div>
          <div className="project mt-5">
            <FontAwesomeIcon className='mb-5' style={{"font-size": '35px'}} icon={faComputer} />
            <h1 className='text-3xl font-bold'>535+</h1>
            <h6 className='text-xl'>Complete Project</h6>
          </div>
          <div className="client mt-5">
            <FontAwesomeIcon className='mb-5' style={{"font-size": '35px'}} icon={faUser} />
            <h1 className='text-3xl font-bold'>273+</h1>
            <h6 className='text-xl'>Happy Client</h6>
          </div>
          <div className="feedbacks mt-5">
            <FontAwesomeIcon className='mb-5' style={{"font-size": '35px'}} icon={faHand} />
            <h1 className='text-3xl font-bold'>432+</h1>
            <h6 className='text-xl'>FEEDBACKS</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samary;