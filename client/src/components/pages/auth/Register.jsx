import { useSelector } from "react-redux";
import Form from "../../shared/form/Form";
import Spinner from "../../../assets/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span className="text-red-500">{alert(error)} </span>}
      {loading ? (
        // <div>loading..........</div>
        <Spinner/>
      ) : (
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="logo mt-6">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/06/05/34/doctor-3457027_1280.jpg"
              alt=""
              className="form-logo"
            />
          </div>
          <div className="content mt-5 ">
            <div action="" className="flex items-center flex-col">
              <Form
                formTitle="Register"
                submitBtn="Register"
                formType="register"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
