import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user] = useAuthState(auth);

  //handle form submit
  const { register, formState: { errors }, handleSubmit } = useForm();

  //get image bb key
  const imageStorageKey = '65b8398d570c809df443e117827071b5';
  
  //submit form
  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(result => {
      if(result.success){
        const img = result.data.url;
        const review = {
          name: data.name,
          email: data.email,
          description: data.description,
          img: img
        }
        // send to your database
        fetch('https://whispering-fortress-42847.herokuapp.com/review', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
          if(data.success){
            toast.success('Review Added Successful!');
          }else{
            toast.error('You already have an Review');
          }
        })
      }
    })
  }
  return (
    <div>
      <div class="card lg:w-96 sm:w-lg max-w-md bg-base-100 shadow-xl mb-20">
          <div class="card-body">
            <h4 className='text-xl text-center font-bold'>Add Your Review</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">UserName</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  readOnly
                  placeholder="Your Name"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'Name is Required'
                    }
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">UserEmail</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  defaultValue={user.email}
                  readOnly
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Email is Required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                    }
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea placeholder='Description' className='form-control rounded border border-secondary p-5' rows='3' {...register("description", {
                    required: {
                      value: true,
                      message: 'Description is Required'
                    }
                  })} />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  placeholder="Your Name"
                  className="input input-bordered input-secondary p-1 w-full max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: 'Description is Required'
                    }
                  })}
                />
                <label className="label">
                  {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                </label>
              </div>

              <input className='btn w-50 max-w-xs text-white bg-primary' type="submit" value="Add" />
            </form>
          </div>
      </div>
    </div>
  );
};

export default AddReview;