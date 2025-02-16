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

      toast.success('Registration Successfull!');
      return true;
      
    } else {
      toast.error("201 Status Not found");
      return false;
    }
    
  }).catch(err => {
   
   
    if (err.status === 400) {

      if (err['response']['data']['status'] === 'Fail') {

        if (err['response']['data']['err']['keyPattern']['email'] === 1) {
          toast.error('Email alreay exist.');
        } else if (
          err['response']['data']['err']['keyPattern']['mobile'] === 1
        ) {
          toast.error('Phone alreay exist.');
        } else {
          toast.error('Something went wrong one.');
        }

        return false;

      } else {
        
        toast.error('Errors');
        return false;

      }



    } else {
      
      return false;
    }
    
    
    
  //  console.log(err['response']['data']['err']['keyPattern']['email']);
    // toast.error('Erros');
    // return false;
  })
}
