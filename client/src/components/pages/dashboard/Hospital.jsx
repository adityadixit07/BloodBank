import { useEffect, useState } from "react";
import Layout from "../../shared/form/layout/Layout";
import { toast } from "react-toastify";
import moment from "moment";
import { useSelector } from "react-redux";
import Spinner from "../../../assets/Spinner";
import API from "../../../services/API";

const Hospital = () => {
  const { loading } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const hospitalsRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-hospitals");
      if (data?.success) {
        setData(data?.hospitals);
        // toast.success(data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  // console.log(data);
  useEffect(() => {
    hospitalsRecords();
  }, []);
  const colName = [
    "Name",
    "Email",
    "Phone",
    "Address",
    "Hospital",
    "Date & Time",
  ];
  return (
    <Layout>
      <h1 className="text-4xl text-center mt-0 mb-4">Hospitals Records</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {data?.length === 0 ? (
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
                      {record.hospitalName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.phone}
                    </td>
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
        </div>
      )}
    </Layout>
  );
};

export default Hospital;
