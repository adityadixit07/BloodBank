import { toast } from "react-toastify";

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
    console.log(
      email,
      password,
      role,
      name,
      organisationName,
      hospitalName,
      website,
      address,
      phone
    );
  } catch (error) {
    console.log(error);
  }
};

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    // const response = await axios.post(
    //     "http://localhost:5000/api/auth/login",
    //     {
    //         email,
    //         password,
    //         role
    //     }
    // );
    // const { data } = response;
    // localStorage.setItem("token", data.token);
    // localStorage.setItem("user", JSON.stringify(data.user));
    // window.location.href = "/";
    if (!email || !password || !role)
      return toast.error("Please fill all the fields");
    console.log(email, password, role);
  } catch (error) {
    console.log(error);
  }
};
