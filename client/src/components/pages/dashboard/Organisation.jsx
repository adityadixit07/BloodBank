import { useEffect, useState } from "react";
import Layout from "../../shared/form/layout/Layout";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Spinner from "../../../assets/Spinner";
import moment from "moment";
import API from "../../../services/API";

const Organisation = () => {
  const { loading, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const organisationRecords = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-organisations");
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get("/inventory/get-org-for-hospital");
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    organisationRecords();
  }, [user]);
  const colName = ["Name", "Type", "Email", "Phone", "Address", "Date & Time"];
  return (
    <Layout>
      <h1 className="text-4xl text-center mt-0 mb-4">Organisation Records</h1>
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
                  {record.organisationName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{record.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.address}
                </td>
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

export default Organisation;
