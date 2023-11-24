import { useDispatch, useSelector } from "react-redux";
import Layout from "../shared/form/layout/Layout";
import Spinner from "../../assets/Spinner";
import ModalForm from "../shared/modal/ModalForm";
import { useEffect } from "react";
import moment from "moment";
import { getInventoryRecords } from "../../redux/features/donar/getRecordAction";
const HomePage = () => {
  const { record_data, loading, error } = useSelector((state) => state.records);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInventoryRecords());
  }, [dispatch]);

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
          {record_data.length === 0 ? (
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
