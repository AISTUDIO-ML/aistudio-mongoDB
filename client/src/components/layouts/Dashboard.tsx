import { ReactNode, useState } from "react";
import { DashboardHeader } from "./Header/DashboardHeader";
import { Sidebar } from "./Sidebar/Sidebar";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(true);

  return (
    <main className="relative">
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      <section className={`${isOpen ? "ml-[300px]" : "ml-[70px]"}`}>
        <DashboardHeader />

        {children}
      </section>
    </main>
  );
};
