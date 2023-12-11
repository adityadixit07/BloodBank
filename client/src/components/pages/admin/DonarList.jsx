import moment from "moment";
import Layout from "../../shared/form/layout/Layout";
import Spinner from "../../../assets/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDonarList } from "../../../redux/features/admin/adminAction";

const DonarList = () => {
  const { recordList, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDonarList());
  }, [dispatch]);

  const colName = ["Name", "Email", "Phone", "Date & Time"];
  return (
    <Layout>
      <h1 className="text-4xl text-center mt-0 mb-4">Donar Records</h1>

      {loading ? (
        <Spinner />
      ) : recordList.length === 0 ? (
        <h1 className="text-2xl text-center mt-10">No Entries Found </h1>
      ) : (
        <div>
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
              {recordList?.map((record) => (
                <tr key={record._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.name || record.organisationName + "(org)"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {moment(record.createdAt).format("DD/MM/YYYY, h:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1 className="mt-10 text-center text-2xl text-gray-900 font-semibold">
            Total Count:{" " + recordList?.length}
          </h1>
        </div>
      )}
    </Layout>
  );
};

export default DonarList;
