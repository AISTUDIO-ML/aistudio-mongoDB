import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-5">
        {" "}
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={"/assets/svgs/logo.svg"} alt="logo" />
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="sm:inline hidden">Not registered?</span>{" "}
            <Link
              to="/signup"
              className="border border-btn_primary bg-transparent px-5 py-3 rounded-full text-btn_primary text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
