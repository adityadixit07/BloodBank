import { useEffect, useState } from "react";
import Layout from "../../shared/form/layout/Layout";
import API from "../../../services/API";
import moment from "moment";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Spinner from "../../../assets/Spinner";
import { getDonars } from "../../../helper-apis/helperApi";

const Donar = () => {
  const { loading } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  // const getDonars = async () => {
  //   try {
  //     const response = await API.get("/inventory/get-donars");
  //     const { data } = response;
  //     if (data?.success) {
  //       setData(data?.donars);
  //       // toast.success(data?.message);
  //     }
  //   } catch (error) {
  //     // alert(error?.response?.data?.message);
  //     toast.error(error?.response?.data?.message);
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    const fetchDonarsRecords = async () => {
      try {
        const data = await getDonars();
        if (data.length > 0) {
          setData(data);
        }
      } catch (error) {
        toast.error(error);
      }
    };
    fetchDonarsRecords();
  }, []);
  const colName = ["Name", "Email", "Phone", "Date & Time"];
  useEffect(() => {
    getDonars();
  }, []);
  return (
    <Layout>
      <h1 className="text-4xl text-center mt-0 mb-4">Donar Records</h1>
      {loading ? (
        <Spinner />
      ) : data.length === 0 ? (
        <h1 className="text-2xl text-center mt-10">No Entries Found </h1>
      ) : (
        <table className="mt-10 min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              {colName.map((columnName) => (
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
            {data?.map((record) => (
              <tr key={record._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.name || record.organisationName + "(org)"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{record.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {moment(record.createdAt).format("DD/MM/YYYY, h:mm:ss a")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
};

export default Donar;
