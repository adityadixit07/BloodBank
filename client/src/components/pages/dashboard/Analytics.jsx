import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBloodGroupData } from "../../../redux/features/analytics/analyticsAction";
import Spinner from "../../../assets/Spinner";

const Analytics = () => {
  const dispatch = useDispatch();
  const { analyticsData, loading } = useSelector((state) => state.analytics);
  useEffect(() => {
    dispatch(getBloodGroupData());
  }, [dispatch]);
  // console.log(analyticsData);

  return (
    <div className="mt-20">
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
        </div>
      )}
    </div>
  );
};

export default Analytics;
