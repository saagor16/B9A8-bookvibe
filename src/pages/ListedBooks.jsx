import Listed from "../section/Listed";

const ListedBooks = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="mt-5 bg-gray-400 h-10 ">
          <h3 className="text-center pt-2">Books</h3>
        </div>
        <div>
          <div className="flex-none text-center mt-5">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className="bg-green-600 text-white w-[160px]">Sort By</summary>
                  <ul className=" w-[160px] bg-gray-200 rounded-t-none">
                    <li>
                      <a>Rating</a>
                    </li>
                    <li>
                      <a>Number of pages</a>
                    </li>
                    <li>
                      <a>Publisher year </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>




        <div className="mt-10">
            <Listed></Listed>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
