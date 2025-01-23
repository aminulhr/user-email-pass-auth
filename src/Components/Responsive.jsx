const Responsive = () => {
  return (
    <div>
      <div>
        <form className="flex flex-col w-96 bg-slate-300 rounded-md shadow-xl justify-center mx-auto mb-4 flex-wrap">
          <input
            className="bg-white p-4 m-4 rounded-md flex-grow-1 flex-shrink-0 basis-3  "
            type="text"
            placeholder="user nazme"
          />
          <input
            className="bg-white p-4 m-4 rounded-md flex-grow-1 flex-shrink-0 basis-3"
            type="password"
            placeholder="password"
          />
          <button className="bg-blue-700 p-2 m-4 mb-2 rounded-md my-auto flex-grow-1 flex-shrink-0 basis-20 text-xl text-white font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Responsive;
