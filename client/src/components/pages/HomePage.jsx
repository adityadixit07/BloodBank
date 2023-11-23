import { useSelector } from "react-redux";
import Layout from "../shared/form/layout/Layout";
import Spinner from "../../assets/Spinner";
import ModalForm from "../shared/modal/ModalForm";
import { useEffect, useState } from "react";
import API from "../../services/API";
import { toast } from "react-toastify";
import moment from "moment";
const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [recordData, setRecordData] = useState([]);
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setRecordData(data?.inventory);
        // console.log(data);
        // toast.success(data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    getBloodRecords();
  }, []);

  const colNames = [
    "BloodGroup",
    "Inventory Type",
    "Quantity",
    "Donar Email",
    "Date & Time",
  ];
  return (
    <Layout>
      {error && <span className="text-red-500">{alert(error)} </span>}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="text-4xl text-center mt-0  ">Welcome to BloodBank</h1>
          <hr />
          <ModalForm />
          {recordData.length === 0 ? (
            <h1 className="text-2xl text-center mt-10">No Entries Found </h1>
          ) : (
            <table className="mt-10 min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  {colNames.map((columnName) => (
                    <th
                      key={columnName}
                      className="px-6 py-3 text-left text-s font-semibold text-gray-800 uppercase tracking-wider"
                    >
                      {columnName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recordData?.map((record) => (
                  <tr key={record._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.bloodGroup}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.inventoryType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {moment(record.createdAt).format("DD/MM/YYYY, h:mm:ss a")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
