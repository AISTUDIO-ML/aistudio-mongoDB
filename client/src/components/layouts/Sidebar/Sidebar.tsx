import { SidebarLinks } from "@/data/SidebarLinks";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: any;
  isOpen: Boolean;
}) => {
  return (
    <aside
      className={`fixed top-0 left-0 bottom-0  shadow-xl bg-primary-background  py-2 ${
        isOpen ? "w-[300px] px-6" : "w-[70px] px-3 "
      }`}
    >
      <div
        className={`flex items-center   relative ${
          isOpen ? "justify-between pb-5" : "justify-center pb-10"
        }`}
      >
        <Link to={"/"}>
          {isOpen ? (
            <img src="/assets/svgs/logo.svg" alt="logo" className="" />
          ) : (
            <img src="/assets/images/logo.png" alt="logo" className="" />
          )}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? "static" : "absolute top-12 z-50 -right-3 rotate-180 "
          }`}
        >
          <img src="/assets/svgs/back.svg" alt="back" className="w-6 h-6" />
        </button>
      </div>
      <ul className="py-2 flex flex-col gap-2">
        {SidebarLinks?.map((link, index) => (
          <li key={link?.title + index}>
            <NavLink
              to={link?.route}
              className={({ isActive }) =>
                `flex  p-2 text-foreground rounded-sm cursor-pointer ${
                  isActive ? "bg-primary/20 " : "bg-transparent"
                } ${isOpen ? "justify-start gap-2" : "justify-center gap-0"}`
              }
              caseSensitive
            >
              <img src={link?.icon} alt={link?.title} className="h-5 w-5" />
              {isOpen && (
                <p className="flex flex-col mb-0">
                  <span className="text-sm">{link?.title}</span>
                  {link?.sub_title && (
                    <span className="text-[9px]">{link?.sub_title}</span>
                  )}
                </p>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
