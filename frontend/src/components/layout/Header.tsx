import { navLinks } from "@/lib/constants";
import useTheme from "@/lib/hooks/useTheme";
import { BsFillMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="cursor-pointer rounded-md bg-slate-200 px-2.5 py-2.5 text-lg text-slate-800 shadow-sm outline-none dark:bg-slate-700 dark:text-slate-200"
      onClick={toggleTheme}
    >
      <div className="text-xl">
        <span className="block dark:hidden">
          <FiSun />
        </span>
        <span className="hidden dark:block">
          <BsFillMoonFill />
        </span>
      </div>
    </button>
  );
};

const Header = () => {
  return (
    <header>
      <div className="flex-between p-6">
        <ul className="flex-between ml-0 space-x-5">
          {navLinks.map((link, idx) => (
            <li className="list-none text-lg font-medium text-slate-800 dark:text-slate-200" key={idx}>
              <Link to={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
