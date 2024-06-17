import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config'
import Backgroundimage from '../components/Backgroundimage';
import Header from '../components/Header';
import styled from 'styled-components';

export default function SignUp() {
  const [showPassword, setshowPassword] = useState(false);
  const [ formvalue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignin = async () => {
    try{
      const { email, password } =formvalue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    }catch(e){
      console.log(e);
  }
};

onAuthStateChanged(firebaseAuth, (currentuser)=>
  {
    if(currentuser) navigate("/")
  }
  )
  return (
    <Container showPassword={showPassword}>
      <Backgroundimage />
      <div className="content">
      <Header login/>
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited movies, TV Shows and more</h1>
          <h4>Watch anywhere. Cancle anytime.</h4>
          <h6>Ready to watch? Enter Your email to create or restart membership</h6>
        </div>
        <div className="form">
          <input 
              type="email" 
              placeholder='Email Address' 
              name='email' 
              value={formvalue.email} 
              onChange={(e)=>
                setFormValue({
                  ...formvalue,
                  [e.target.name]:e.target.value})} />
          {
            showPassword && (<input 
              type="password" 
              placeholder='password' 
              name='password'
              value={formvalue.password} 
              onChange={(e)=>
                setFormValue({
                  ...formvalue,
                  [e.target.name]:e.target.value})} />)
              
          }
          
          {
            !showPassword && (<button onClick={() => setshowPassword(true)}>Get Started</button>)
          }
          
        </div>
         <button onClick={handleSignin}>Sign Up</button>
      </div>
      </div> 
    </Container>
  )
}
const Container = styled.div`
position: relative;
.content{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
  .body{
      gap: 1rem;
    .text{
       gap: 1rem;
       text-align: center;
       font-size: 1.5rem;
    h1{
      padding: 0 25rem;
    }
    }
    .form{
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input{
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus{
            outline: none;

          }
        }
        button{
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
    }
    }
    button{
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.5rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }
  }
`;