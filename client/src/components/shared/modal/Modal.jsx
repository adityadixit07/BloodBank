const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute bg-gray-800 opacity-50 inset-0" onClick={closeModal}></div>
          <div className="bg-white rounded-lg p-6 z-50">
            {/* <div className="flex justify-end">
              <button
                className="text-gray-700 hover:text-gray-900 text-3xl font-semibold"
                onClick={closeModal}
              >
                &times;
              </button>
            </div> */}
            <div >{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
