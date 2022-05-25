import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
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
        const product = {
          name: data.name,
          price: data.price,
          email: data.email,
          minimumQuantity: data.minimumQuantity,
          availableQuantity: data.availableQuantity,
          shortDescription: data.shortDescription,
          img: img
        }
        // send to your database
        fetch('http://localhost:5000/items', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          if(data.success){
            toast.success('Product Added Successful!');
          }else{
            toast.error('You already have an Product');
          }
        })
      }
    })
  }
  return (
    <div>
      <div class="card lg:w-96 sm:w-lg max-w-md bg-base-100 shadow-xl mb-20">
          <div class="card-body">
            <h4 className='font-bold ml-3 text-xl text-center'>Add new Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">ProductName</span>
                </label>
                <input
                  type="text"
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
                  readOnly
                  defaultValue={user.email}
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
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Price"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("price", {
                    required: {
                      value: true,
                      message: 'Price is Required'
                    }
                  })}
                />
                <label className="label">
                  {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">minimumQuantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Your minimumQuantity"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("minimumQuantity", {
                    required: {
                      value: true,
                      message: 'minimumQuantity is Required'
                    }
                  })}
                />
                <label className="label">
                  {errors.minimumQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumQuantity.message}</span>}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">availableQuantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Your availableQuantity"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("availableQuantity", {
                    required: {
                      value: true,
                      message: 'availableQuantity is Required'
                    }
                  })}
                />
                <label className="label">
                  {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea placeholder='Description' className='form-control rounded border border-secondary p-5' rows='3' {...register("shortDescription", {
                    required: {
                      value: true,
                      message: 'Description is Required'
                    }
                  })} />
                  <label className="label">
                    {errors.shortDescription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.shortDescription.message}</span>}
                  </label>
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
                      message: 'Image is Required'
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

export default AddProduct;