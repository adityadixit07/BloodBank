import moment from "moment";
import Layout from "../../shared/form/layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../assets/Spinner";
import { getConsumerRecords } from "../../../redux/features/donar/getRecordAction";

const Consumer = () => {
  const { user } = useSelector((state) => state.auth);
  const { record_data, loading } = useSelector((state) => state.records);
  const dispatch = useDispatch();
  const userId = user?._id;
  useEffect(() => {
    dispatch(getConsumerRecords(userId));
  }, [dispatch, userId]);

  const colName = [
    "Blood Group",
    "Inventory",
    "Quantity",
    "Email",
    "Date & Time",
  ];

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : record_data.length === 0 ? (
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
                  {record.bloodGroup}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.inventoryType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{record.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
};

export default Consumer;
