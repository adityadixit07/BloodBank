import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import InputType from "../form/InputType";

const ModalForm = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex mt-4">
      <button
        className="flex  items-center gap-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        <IoAddOutline /> Add Inventory
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h1 className="text-lg font-bold mb-2">Manage Blood Record</h1>
        <hr />
        <div className="inventoryType">
          <div className="flex mt-4">
            Blood Type: &nbsp;
            <div className="form-check">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-600"
                name="inRadio"
                id="in"
                value={"in"}
                onChange={(e) => setInventoryType(e.target.value)}
                defaultChecked
              />
              <label htmlFor="in" className="ml-2 text-gray-700">
                IN
              </label>
            </div>
            <div className="form-check">
              <h1>&nbsp;&nbsp;</h1>
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-600"
                name="inRadio"
                id="out"
                value={"out"}
                onChange={(e) => setInventoryType(e.target.value)}
              />
              <label htmlFor="out" className="ml-2 text-gray-700">
                OUT
              </label>
            </div>
          </div>
          <hr />
          <select onChange={(e) => setBloodGroup(e.target.value)}>
            <option defaultValue={"open to select blood group"}>
              Open to select blood group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <InputType
            inpuType={"email"}
            labelFor={"email"}
            labelText={"Email"}
            name={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Enter Email"}
          />
          <InputType
            inpuType={"number"}
            labelFor={"quantity"}
            labelText={"Quantity"}
            name={quantity}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder={"Enter Quantity"}
          />
        </div>
        <div className="flex justify-end items-center gap-3">
          <button
            className="text-white bg-gray-800 font-semibold pr-6 pl-6 pb-2 pt-2 rounded-sm"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="submit"
            className="text-white font-semibold bg-gray-800 pr-6 pl-6 pb-2 pt-2 rounded-sm"
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
