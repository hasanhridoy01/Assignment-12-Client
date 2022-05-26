import React from 'react';
import img from '../../img/20220211_163754-01.jpeg';

const MyPortfolio = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 mr-10 ml-10 mt-10 mb-10 gap-5'>
      <div className="card p-10 shadow-xl">
        <h1 className='text-3xl text-secondary'>Zahid Hasan Hridoy</h1>
        <p className='mt-2'>Hey my name is Zahid Hasan Hridoy. <b className='text-secondary'>I am studying in Bagladesh University of Business and Technology at CSE(Computer Science Engineering)</b>. I am full stack Web Developer. I have learned many programming languages. which are HTML, CSS, Bootstrap, Tailwind, Dasiyui, React Bootstrap, Vanilla Java Script, React JS, Node JS, Express JS, Mongo DB. </p>
        <p className='text-orange-500'>Currently I live in Dhaka, Mirpur-11.</p>
      </div>
      <div className="card p-5 shadow-xl">
        <img style={{"height": '300px', "width": '300px'}} src={img} alt="" />
      </div>
    </div>
  );
};

export default MyPortfolio;