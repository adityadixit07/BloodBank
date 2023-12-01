import { useSelector } from "react-redux";

const Admin = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold">Welcome, {user.name}</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">About Admin:</h2>
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
    </div>
  );
};

export default Admin;
