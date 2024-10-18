import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import { useEffect, useState } from 'react';
import New from './pages/New';
import ProductCart from './components/ProductCart';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import OtpInput from 'otp-input-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from './Firebase.config';

function App() {
  const [otp,serOtp]=useState("")
  const [ph,setPh]=useState(false)
  const [showOtp,setShowOtp]=useState(false)
  const [user,setUser]=useState(null)
  const [cartitems,setCartitems] = useState([]);
  const [product,setProduct]=useState([])
  const API_URL = 'http://localhost:3000/'
  const [fetchError,setFetchError]=useState(null)

  useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const response=await fetch(API_URL);
        const listitems=await response.json();
        setCartitems(listitems);
        setFetchError(null)
        
      }
      catch(err){
        console.log(err.stack);
      }
    }
    (async()=>await fetchItems())()
  },[])

  function onVerify(){
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignup();
        },
        'expired-callback': () => {}
      },
      auth
    );
    }
  }

  const onSignup=()=>{
    onVerify()
    const appVerifier=window.recaptchaVerifier
    const formatph='+'+ph

    signInWithPhoneNumber(auth,formatph,appVerifier)
    .then((confirmationResult)=>{
      window.confirmationResult=confirmationResult;
      setShowOtp(true)
      toast.success("otp sent")
    }).catch((error) =>{
      console.log(error);
    });
  }

  const onOTPVerify=()=>{
    window.confirmationResult.confirm(otp)
    .then(async(res)=>{
      console.log(res);
      setUser(res.user)
      toast.success("login")
    })
  }

  return (
    <div className="App">
      <div id='recaptcha-container'></div>
      <div>
        <label>Enter number</label>
        <PhoneInput country={"in"} value={ph} onChange={setPh}></PhoneInput>
        <button onClick={onSignup}>Send otp</button>
        <OtpInput
          OTPLength={6}
          otpType="number"
          disabled={false}
          autofocus
          value={otp}
          onChange={serOtp}
        ></OtpInput>
        <button onClick={onOTPVerify}>
          <span>Verify otp</span>
        </button>
      </div>
      <Router>
        <ToastContainer theme='dark' position='top-center' />
        <Header cartitems={cartitems}/>
          <Routes>
            <Route path='/' element={<New product={product} setProduct={setProduct}/>} />
            <Route path='/search' element={<New product={product} setProduct={setProduct}/>} />
            <Route path='/components/Contact' element={<Contact product={product} setProduct={setProduct} />} />
            <Route path='/products/:id' element={<ProductDetails cartitems={cartitems} setCartitems={setCartitems} />} />
            <Route path='/components/ProductCart' element={<ProductCart cartitems={cartitems} setCartitems={setCartitems} product={product} setProduct={setProduct}  />} />
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;