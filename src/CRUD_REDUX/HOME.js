import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { Delfun } from './components/REdux/Action';



const HOME = () => {
  const { data } = useSelector(state => state)
  const dispatch=useDispatch()
  const path=useNavigate()
  const edit=(val)=>{
    path(`/edit/${val.id}`)
  }
  const deletfunc=(id)=>{
    dispatch(Delfun(id))
  }
  return (
    <div className='container '>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <Link to='/add' className='btn btn-primary shadow px-5 my-5 '>Add Contact</Link>
        </div>
        <div className="col-md-12  mx-auto">
          <table className="table table-hover  text-white text-center">
            <thead className=" bg-dark">
              <tr className='row'>
                <th className='col'>#</th>
                <th className='col'>name</th>
                <th className='col'>email</th>
                <th className='col'>number</th>
                <th className='col'>eidt/delet</th>
              </tr>
            </thead>
            <tbody className='text-dark'>
              {
                data.length > 0 ?
                  data.map((val) => (
                    <tr className="row" key={val.id}>
                      <td className="td col">{val.id}</td>
                      <td className="td col">{val.name}</td>
                      <td className="td col">{val.email}</td>
                      <td className="td col">{val.number}</td>
                      <td className="td col-12 col-md-2 d-md-flex">
                        <button className='btn btn-warning shadow mx-md-3 my-3 my-md-0 w-100 w-md-auto' onClick={()=>edit(val)}>Edit</button>
                        <button className='btn btn-danger shadow mx-md-3 my-3 my-md-0 w-100 w-md-auto '  onClick={()=>deletfunc(val.id)}>Delete</button>
                      </td>
                    </tr>
                  )):
                     <>
                       <tr><td><h1>Now Contact..?</h1></td></tr>
                     </>
                      }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HOME;