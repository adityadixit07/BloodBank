import { useSelector } from "react-redux";
import Form from "../../shared/form/Form";
import Spinner from "../../../assets/Spinner";
import { toast } from "react-toastify";
const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span className="text-red-500"> {toast.error(error)} </span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="logo mt-6">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/09/17/37/doctor-3464798_1280.jpg"
              alt=""
              className="form-logo"
            />
          </div>
          <div className="content mt-10 ">
            <div className="flex items-center flex-col">
              <Form formTitle={"Login"} submitBtn={"Login"} formType="login" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
