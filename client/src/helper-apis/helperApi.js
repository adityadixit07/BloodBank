import { toast } from "react-toastify";
import API from "../services/API";

export const getBloodRecords = async () => {
  try {
    const { data } = await API.get("/inventory/get-inventory");
    if (data?.success) {
      // setRecordData(data?.inventory);
      // console.log(data);
      //   toast.success(data?.message);
      return data?.inventory;
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

// get donar records
export const getDonars = async () => {
  try {
    const response = await API.get("/inventory/get-donars");
    const { data } = response;
    if (data?.success) {
      return data?.donars;
    }
  } catch (error) {
    // alert(error?.response?.data?.message);
    toast.error(error?.response?.data?.message);
    // console.log(error);
  }
};

// get hospital records
export const getHospitalsRecords = async () => {
  try {
    const response = await API.get("/inventory/get-hospitals");
    const { data } = response;
    if (data?.success) {
      return data?.hospitals;
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
