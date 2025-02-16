import axios from "axios";
import { toast } from "sonner";

const BaseURL = 'https://project-management-1ifn.onrender.com/api/v1';

//Registration Method
export function RegistrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  let URL = BaseURL + '/registration';
  let PostBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };

  return axios.post(URL, PostBody).then(res => {

    if (res.status === 201) {

      if (res.data['status'] === 'Fail') {
        if (res.data['err']['keyPattern']['email'] === 1) {
          toast.error('Email alreay exist.');
        } else if (
          res.data['err']['keyPattern']['mobile'] === 1
        ) {
          toast.error('Phone alreay exist.');
        } else {
          toast.error('Something went wrong');
        }

        return false;
      } else {
        toast.success('Registration Successfull!');
        return true;
      }

     
      
    } else {
      toast.error("201 Status Not found");
      return false;
    }
    
  }).catch(err => {
   
    toast.error('Something went wrong');
    return false;

  })
}



//Login
export function LoginRequest(email, password) {
  let URL = BaseURL + '/login';
  let PostBody = { email: email, password: password };

  return axios.post(URL, PostBody).then(res => {

    if (res.status === 200) {
      
      setToken(res.token);
      setUserDetails(res.data)
      toast.success("Login Success")
      return true;

    } else {

      toast.error("Email and Password is Not Match.")
      return false;

    }

  }).catch(err => {

    toast.error("Something Went Wrong.");
    return false;

  })
}
