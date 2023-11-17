import Form from "../../shared/form/Form";

const Login = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <div className="logo mt-6">
        <img
          src="https://cdn.pixabay.com/photo/2018/06/09/17/37/doctor-3464798_1280.jpg"
          alt=""
          className="form-logo"
        />
      </div>
      <div className="content mt-10 ">
        <form action="" className="flex items-center flex-col">
          <Form formTitle={"Login"} submitBtn={"Login"} formType="login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
