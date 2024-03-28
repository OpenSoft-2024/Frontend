/* eslint-disable react/prop-types */

function Home() {
    const userName = "Admin";

    
  return (
    <>
      <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar userName={userName} />
        {/* Content for each tab */}
      </div>
    </div>
    </>
  )
}

export default Home



const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-yellow-500 h-screen">
      <div className="p-4">
        <a href="#" className="text-black font-bold text-xl">User</a>
        <a href="#" className="text-black font-bold text-xl">Movie</a>
        <a href="#" className="text-black font-bold text-xl">Reviews</a>
        <a href="#" className="text-black font-bold text-xl">Subscriptions</a>
      </div>
    </div>
  );
};

const Navbar = ({ userName }) => {
    return (
      <div className="bg-yellow-500 h-16 flex justify-between items-center px-4">
        <h1 className="text-black text-xl font-bold">Admin Dashboard</h1>
        <p className="text-black">{userName}</p>
      </div>
    );
  };
  