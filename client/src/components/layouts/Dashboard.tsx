import { ReactNode } from "react";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <aside className="fixed top-0 left-0 bottom-0 w-[300px] shadow-xl bg-primary-background">
        sidebar
      </aside>
      <section className="ml-[300px]">
        <header className="sticky top-0 py-3 px-6 flex justify-between bg-primary-background">
          header
        </header>

        {children}
      </section>
    </main>
  );
};
