import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-1/2 flex justify-around">
        <div className="relative flex items-center justify-around h-20 ">
          <div className="flex-1 flex items-center justify-around sm:items-stretch sm:justify-start ">
            <div className="flex-shrink-0 flex items-center lg:px-12">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="block  h-10 w-auto"
                  viewBox="0 0 20 20"
                  fill="orange"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6 ">
              <div className="flex ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-300 lg:px-12 lg:text-3xl px-3 py-2 text-sm font-bold"
                      : "text-gray-300 lg:px-12 lg:text-3xl hover:text-white px-3 py-2 text-sm font-medium"
                  }
                >
                  Registration
                </NavLink>
                <NavLink
                  to="dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-300 lg:px-12 lg:text-3xl px-3 py-2 text-sm font-bold"
                      : "text-gray-300 lg:px-12 lg:text-3xl hover:text-white px-3 py-2 text-sm font-medium"
                  }
                >
                  Dashboard
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden">
        <div className="px-16 py-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                : " text-white block px-3 py-2 rounded-md text-base font-medium"
            }
          >
            Registration
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                : " text-white block px-3 py-2 rounded-md text-base font-medium"
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
