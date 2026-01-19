import React, { useState } from 'react'

export default function Signup() {
    const [formData,setData]=useState({
        name:"",
        email:"",
        image:null
    })

    const handleChnage=(e)=>{
        const { name, value } = e.target;
        setData((prev)=>({...prev, [name]:value}))
    }

    const handleImageChange=(e)=>{
        const file=e.target.files[0];
        if(!file){
            alert('upload image')
            return
        }
        setData((prev)=>({...prev,image:file}))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!formData.image){
            alert("please upload image")
            return
        }
        try {
            const data=new FormData(); 
            data.append("name",formData.name);
            data.append("email",formData.email);
            data.append("image",formData.image);

            //to connect from server backend(api call)
            const response=await fetch("http://localhost:5473/user/signup",{
                method:"POST",
                body:data
            })   //from server auth routs,server.js

            const result=await response.json();
            if(response.ok){
                alert("User Signup successfully")
            }
        } 
        catch (error) {
            alert("Signup failed")  
        }
    }

    return (
        <div>
            <div>
                <h2>Create Accoumt</h2> 
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div>
                        <input type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleChnage}/>
                    </div>
                    <div>
                        <input type='email' name='email' placeholder='Enter Email' value={formData.email} onChange={handleChnage}/>
                    </div>
                    <div>
                        <input type='file' accept='image/*' onChange={handleImageChange}/>
                    </div>
                    <button type='submit'>
                        Sign up
                    </button>
                </form> 
            </div> 
        </div>
    )
}
