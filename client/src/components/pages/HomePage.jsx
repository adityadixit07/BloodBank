import { useSelector } from "react-redux";
import Layout from "../shared/form/layout/Layout";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layout>
      {error && <span className="text-red-500">{alert(error)} </span>}
      {loading ? <div>loading..........</div> : <div>Home Page</div>}
    </Layout>
  );
};

export default HomePage;
