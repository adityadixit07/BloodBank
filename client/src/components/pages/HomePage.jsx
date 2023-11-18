import { useSelector } from "react-redux";
import Layout from "../shared/form/layout/Layout";
import Spinner from "../../assets/Spinner";
import ModalForm from "../shared/modal/ModalForm";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <Layout>
      {error && <span className="text-red-500">{alert(error)} </span>}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="text-4xl text-center mt-0">Welcome to BloodBank</h1>
          <ModalForm />
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
