import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-12 lg:px-20">
      {/* Logo */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Titi</span>
          <span className="bg-white w-12 h-8 rounded flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div>2</div>
    </div>
  );
};

export default Navbar;
