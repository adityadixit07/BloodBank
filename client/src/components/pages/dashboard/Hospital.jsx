import { useEffect, useState } from "react";
import Layout from "../../shared/form/layout/Layout";
import { toast } from "react-toastify";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../assets/Spinner";
import API from "../../../services/API";
import { getHospitals } from "../../../redux/features/donar/getRecordAction";
import { clearMessage } from "../../../redux/features/donar/getRecordSlice";

const Hospital = () => {
  const { record_data, message, loading } = useSelector(
    (state) => state.records
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHospitals());
  }, [dispatch]);
  // useEffect(() => {
  //   if (message) {
  //     toast.success(message);
  //     dispatch(clearMessage());
  //   }
  // });
  // console.log(data);
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
          {record_data?.length === 0 ? (
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
                {record_data?.map((record) => (
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
