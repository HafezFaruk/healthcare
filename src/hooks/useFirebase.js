import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,signInWithEmailAndPassword,updateProfile, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser]=useState({});
    const [isLogin, setIsLogin] = useState(false)
    console.log(isLogin);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const auth = getAuth();
    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
       return  signInWithPopup(auth, googleProvider)
    }
    // observe user stet change
    useEffect( () => {
       const unsubscribed =  onAuthStateChanged(auth, user =>{
            if (user) {
                setUser(user);
            }else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked)
    }
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() =>{ })
        .finally(() => setIsLoading(false));
    }
    const loginProcess = e =>{ 
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
         .then(result=>{
          const user = result.user
         setUser(user);
          setError('');
        })
        .catch(error=>{
          setError(error.message)
        })
        
      }
    const registerProcess = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          setError('')
          setUserName();
        }).catch(error=>{
          setError(error.message)
        })
      }
    //set user name
      const setUserName =()=>{
        updateProfile(auth.currentUser,{
          displayName : name
        }).then(result=>{})
      }
    
    //name
      const handleName = e=>{
        setName(e.target.value);
        
      }
      //email
      const handelEmail =e=>{
        setEmail(e.target.value);
        
       }
      //password
      const handelPass =e=>{
        setPassword(e.target.value);
      }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handelPass,
        handelEmail,
        handleName,
        setUserName,
        loginProcess,
        registerProcess,
        error, 
        setIsLoading,
        setUser,
        isLogin, 
        setIsLogin,
        toggleLogin


    }
}
export default useFirebase;