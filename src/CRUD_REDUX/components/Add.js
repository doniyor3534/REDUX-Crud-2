import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Addfun } from './REdux/Action';
import { ToastContainer,toast } from 'react-toastify';

const Add = () => {
    const {data}=useSelector(state=>state)
    const dispatch=useDispatch()
    const [input,setInput]=useState({
        id:null,
        name:'',
        email:'',
        number:''
    })
    const toastok=()=>toast.success('Contact yuklandi',{theme:'colored'});
    const toasterr=()=>toast.error('iltimos qaytadan toldiring',{theme:'colored'});
    const toastname=()=>toast.warning('Bu name band',{theme:'colored'});
    const toastemail=()=>toast.warning('Bu email band',{theme:'colored'});
    const toastnumber=()=>toast.warning('Bu number band',{theme:'colored'});
    const nametest=data.find(val=>val.name===input.name)
    const emailtest=data.find(val=>val.email===input.email)
    const numbertest=data.find(val=>val.number===input.number)

    
    const inputfun=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const send=(e)=>{
        e.preventDefault()
        if(!input.name || !input.email || !input.number){
            toasterr()
        }
        if(nametest){
            toastname()
        }
        if(emailtest){
            toastemail()
        }
        if(numbertest){
            toastnumber()
        }
        if(input.name && input.email && input.number && !nametest && !emailtest && !numbertest){
            dispatch(Addfun({...input,id:new Date().getTime()}))
            setInput({
                id:null,
                name:'',
                email:'',
                number:''
            })
            toastok()
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                       <h1 className='my-3 '>Add Contact Page</h1>
                </div>
                <form className='col-md-6 mx-auto shadow p-5 text-center ' onSubmit={send}>
                    <input type="text" name='name' placeholder='name' className='form-control' value={input.name} onChange={inputfun}  />
                    <input type="email" name='email' placeholder='email' className='form-control my-3'  value={input.email} onChange={inputfun} />
                    <input type="number" name='number' placeholder='number' className='form-control'  value={input.number} onChange={inputfun} />
                    <button  className='btn btn-primary px-5 mx-3 my-3 shadow'type ='submit' >Submit</button>
                    <Link to='/' className='btn btn-danger px-5 shadow ' >Close</Link>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Add;