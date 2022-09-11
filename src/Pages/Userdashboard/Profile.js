import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Navi from './nav';
import Message from './Message';
import Progress from './Progress';
const Profile = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [resume,setResume]=useState("");
    const [phone,setPhone] = useState('');
    const [profile ,setProfile]=useState("");
    const[showUpdate,setShowUpdate] = useState(false);
    useEffect(()=>{
        const userid = localStorage.getItem('userId');
        console.log("userid",userid);
        axios.post('http://localhost:9000/profile',{userid})
        .then((res)=>{
            console.log("res from profile = ",res.data);
            setName(res.data.name);
            setEmail(res.data.email)
        })
        .catch((err)=>{
            console.log("err from profile",err);
        })
    },[])

    const handleChange=(e,key)=>{
        if(key==='name'){
            console.log("name",name);
            setName(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='resume'){
            setResume(e.target.value)
        }if(key==='profile'){
            setProfile(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submit clicked by",name);
        const user = {
          'id':localStorage.getItem('userId'),
          'name':name,
          'phone':phone,
          'resume':resume,
          'profile':profile,
      }
        axios.post('http://localhost:9000/profile/update',{user})
        .then((res)=>{
            console.log("data ",res.data);
            console.log("success");
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId',res.data.userId);
            localStorage.setItem('name',name)
            
        })
        .catch((err)=>{
            console.log("err",err);
        })
          
      }
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:9000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
       
      });
      
      

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      
    }
  };
  return (
    <div>
        <Navi></Navi>
<h2>Profile Details</h2>
<h3>Name : {name}</h3>
<h3>Email: {email}</h3>
{
    showUpdate?

        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>handleChange(e,'name')}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPhone">Phone Number</label>
    <input type="phone" class="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="Enter Phone" onChange={(e)=>handleChange(e,'phone')}/>
  </div>
  
<label class="form-label" for="customFile">Upload Profile Picture</label>
<input type="file" class="form-control" id="customFile" onChange={(e)=>handleChange(e,profile)}/>
{message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
      <label class="form-label" for="customFile">Upload Resume</label>
     <input type="file" class="form-control" id="customFile" onChange={onChange}/>
        
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
  
  <button type="submit" className="m-2 btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
  <button type="submit" className="m-2 btn btn-danger" onClick={(e)=>setShowUpdate(false)}>Cancel</button>
</form>
:<div>
    <button type="submit" class="btn btn-primary" onClick={(e)=>setShowUpdate(true)}>Update</button>
</div>
}
      </div>
 
   
  )
}

export default Profile;