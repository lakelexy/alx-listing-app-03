const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Property Finder</h1>
        <nav>
          <a href="#" className="px-2">
            Rooms
          </a>
          <a href="#" className="px-2">
            Mansions
          </a>
          <a href="#" className="px-2">
            Countryside
          </a>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="p-1 rounded border"
          />
          <button className="ml-2 px-3 py-1 bg-blue-500 rounded">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
