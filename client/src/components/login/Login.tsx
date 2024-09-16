import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-background ">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 h-screen">
          <div className="flex items-start justify-center h-full w-full flex-col">
            <Link to={"/"}>
              <img src="/assets/svgs/logo.svg" alt="logo" />
            </Link>
            <h1 className="text-primary-foreground text-3xl mt-3">
              Welcome to AIStudio
            </h1>
            <p className="text-sm text-primary-foreground mt-1">
              Please sign-in to your account and start the adventure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
