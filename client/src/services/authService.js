import { toast } from "react-toastify";
import store from "../redux/store";
import { userLogin, userRegister } from "../redux/features/auth/authActions";

export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        email,
        password,
        role,
        name,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
    // console.log(
    //   email,
    //   password,
    //   role,
    //   name,
    //   organisationName,
    //   hospitalName,
    //   website,
    //   address,
    //   phone
    // );
  } catch (error) {
    console.log(error);
  }
};

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !password || !role) {
      return toast.error("Please fill all the fields");
    }
    // console.log(email, password, role);
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};
