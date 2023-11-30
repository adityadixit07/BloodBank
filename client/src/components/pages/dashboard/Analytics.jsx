import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBloodGroupData } from "../../../redux/features/analytics/analyticsAction";
import Spinner from "../../../assets/Spinner";
import { getRecentInventory } from "../../../redux/features/donar/getRecordAction";
import Layout from "../../shared/form/layout/Layout";
import moment from "moment";

const Analytics = () => {
  const dispatch = useDispatch();
  const { analyticsData, loading } = useSelector((state) => state.analytics);
  const { record_data } = useSelector((state) => state.records);
  useEffect(() => {
    dispatch(getBloodGroupData());
  }, [dispatch]);
  // console.log(analyticsData);

  useEffect(() => {
    dispatch(getRecentInventory());
  }, [dispatch]);

  // console.log(record_data);

  const colNames = [
    "Email",
    "Blood Group",
    "Inventory Type",
    "Quantity",
    "Date",
  ];

  return (
    <Layout className="mt-20">
      <h1 className="text-center  text-3xl text-gray-700 font-medium m-3">
        Analytics of Blood Group Data
      </h1>
      {loading ? (
        <Spinner />
      ) : analyticsData.length === 0 ? (
        <h1 className="text-center text-3xl font-medium text-blue-900">
          No data found 👎
        </h1>
      ) : (
        <div className="grid grid-cols-1 ml-20 mr-20 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {analyticsData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            >
              <h2 className="text-lg font-semibold mb-2">
                BloodGroup:{item.bloodGroup}
              </h2>
              <p className="text-blue-700 font-semibold">
                TotalIn:{item.totalIn}
              </p>
              <p className="text-blue-700 font-semibold">
                TotalOut:{item.totalOut}
              </p>
              <p className="text-gray-600 mb-2 font-medium">
                Available Blood:{item.availableBlood}
              </p>
            </div>
          ))}

          {/* recent transaction of blood data  */}
          <div>
            <div>
              <h1 className="text-gray-900 text-2xl ">Recent Transactions</h1>
            </div>
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
                      {record.email}
                    </td>
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
                      {moment(record.createdAt).format("DD/MM/YYYY, hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Analytics;
