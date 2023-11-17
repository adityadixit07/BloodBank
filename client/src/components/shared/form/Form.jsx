import { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, formTitle, submitBtn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="mb-10">
      <form
        className="flex items-center flex-col"
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
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
            );
        }}
      >
        <h1 className="text-3xl text-gray-600 font-mono  mb-4">{formTitle}</h1>

        {/* role buttons*/}
        <div className="radiobuttons flex gap-3 items-center">
          <div className="form-check">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "donar"}
            />
            <label htmlFor="donarRadio" className="ml-2 text-gray-700">
              Donar
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="ml-2 text-gray-700">
              Admin
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="ml-2 text-gray-700">
              Organization
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="ml-2 text-gray-700">
              Hospital
            </label>
          </div>
        </div>

        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <div>
                  <InputType
                    labelFor={"email"}
                    labelText="Email"
                    inpuType="email"
                    placeholder="enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelFor={"password"}
                    labelText="Password"
                    inpuType="password"
                    placeholder="enter password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelFor={"name"}
                      labelText="Name"
                      inpuType="text"
                      placeholder="enter name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelFor={"organisationName"}
                      labelText="Organization Name"
                      inpuType="text"
                      placeholder="enter organization name"
                      name="organisationName"
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelFor={"hospitalName"}
                      labelText="Hospital Name"
                      inpuType="text"
                      placeholder="enter hospital name"
                      name="hostpitalName"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  <InputType
                    labelFor={"email"}
                    labelText="Email"
                    inpuType="email"
                    placeholder="enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelFor={"password"}
                    labelText="Password"
                    inpuType="password"
                    placeholder="enter password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputType
                    labelFor={"website"}
                    labelText="website"
                    inpuType="text"
                    placeholder="enter website name"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelFor={"address"}
                    labelText="Address"
                    inpuType="text"
                    placeholder="enter address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelFor={"phone"}
                    labelText="Phone Number"
                    inpuType="text"
                    placeholder="enter phone no."
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="form-group w-full submit-btn">
          <div className="mb-3">
            {formType === "login" ? (
              <p>
                Not Registered Yet?
                <Link to="/register" className="text-blue-500 underline">
                  {" "}
                  Register
                </Link>
              </p>
            ) : (
              <p>
                Already registered, Please{" "}
                <Link to="/login" className="text-blue-500 underline">
                  Login
                </Link>
              </p>
            )}
          </div>
          <button
            className="bg-orange-400 w-full p-2 text-2xl font-medium border-none rounded-sm"
            type="submit"
          >
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
