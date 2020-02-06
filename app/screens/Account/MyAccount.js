import React,{useState,useEffect} from 'react';
import * as firebase  from 'firebase';
import Loading from '../../components/Loading';
import UserGuest from '../Account/UserGuest';
import UserLogged from '../Account/UserLogged';
 
export default function MyAccount(){
const [login,setLogin] = useState(null);

useEffect(()=>{
firebase.auth().onAuthStateChanged(user => {
    !user ? setLogin(false): setLogin(true)
})
},[] );

console.log(login)

if(login === null)
{
  return <Loading isVisible={true} text="Cargando..." ></Loading>
}

return login ? <UserLogged/> : <UserGuest/>;

}