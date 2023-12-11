import { useSelector } from "react-redux";
import Layout from "../../shared/form/layout/Layout";

const Admin = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <h1>{user?.name}</h1>
      <br />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">About Admin</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            expedita earum, repudiandae impedit possimus recusandae odit et,
            laboriosam tempore cumque unde magni doloremque quae! Aperiam
            nostrum maxime est, illo sapiente nulla voluptatibus reiciendis
            incidunt cumque inventore. Sit, accusantium modi. Odit assumenda ad
            nostrum non eos earum impedit, deserunt rerum tempore.
          </p>
        </div>
      </main>
      <footer className="bg-gray-200 text-gray-600 text-center py-4">
        <p>© 2023 Your Admin Page. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default Admin;
