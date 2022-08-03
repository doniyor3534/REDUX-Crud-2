import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { Editfun } from './REdux/Action';
import { ToastContainer,toast } from 'react-toastify';

const Edit = () => {
    const {data}=useSelector(state=>state)
    const dispatch=useDispatch()
    const paramsId=useParams()
    const editdata=data.find(val=>val.id === parseInt(paramsId.id))
    console.log(parseInt(paramsId.id));
    const [input,setInput]=useState({
        id:editdata.id,
        name:editdata.name,
        email:editdata.email,
        number:editdata.number
    })
    const toastok=()=>toast.success('Contact yuklandi',{theme:'colored'});
    const toasterr=()=>toast.error('iltimos qaytadan toldiring',{theme:'colored'});
    const toastname=()=>toast.warning('Bu name band',{theme:'colored'});
    const toastemail=()=>toast.warning('Bu email band',{theme:'colored'});
    const toastnumber=()=>toast.warning('Bu number band',{theme:'colored'});
    const nametest=data.find(val=>val.id!==input.id && val.name===input.name && data)
    const emailtest=data.find(val=>val.id!==input.id && val.email===input.email && data)
    const numbertest=data.find(val=>val.id!==input.id && val.number===input.number && data)
    console.log(nametest);
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
        setInput(editdata)
        dispatch(Editfun(input))
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
                       <h1 className='my-3 '>Edit Contact Page</h1>
                </div>
                <form className='col-md-6 mx-auto shadow p-5 text-center ' onSubmit={send}>
                <input type="text" name='name' placeholder='name' className='form-control' value={input.name} onChange={inputfun}  />
                    <input type="email" name='email' placeholder='email' className='form-control my-3'  value={input.email} onChange={inputfun} />
                    <input type="number" name='number' placeholder='number' className='form-control'  value={input.number} onChange={inputfun} />
                    <button type='submit' className='btn btn-primary px-5 mx-3 my-3 shadow'>Submit</button>
                    <Link to='/' className='btn btn-danger px-5 shadow ' >Close</Link>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Edit;