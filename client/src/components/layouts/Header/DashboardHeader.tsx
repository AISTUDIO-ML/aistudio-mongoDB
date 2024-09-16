import { ModeToggle } from "@/components/ui/ModeToggle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 py-3 z-10 px-6 flex justify-between bg-primary-background">
      <div className="flex items-center rounded-md pl-10 relative bg-background h-auto">
        <div className="px-2 shadow-md rounded-md h-full absolute left-0 bg-white top-0 flex items-center">
          <img
            src="/assets/svgs/account.svg"
            alt="account"
            className="w-6 h-6"
          />
        </div>
        <Select>
          <SelectTrigger className=" rounded-none  h-auto text-primary-foreground uppercase bg-transparent border-none gap-4">
            <p className="text-start tracking-normal leading-4">
              Tech Savy <br />
              <span className="text-[9px] text-primary-foreground/70">
                Account Administrator
              </span>
            </p>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Tech Savy">Tech Savy</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />

        <button>
          <img src="/assets/svgs/bell.svg" alt="bell" className="w-6 h-6" />
        </button>
        <button>
          <img src="/assets/svgs/document.svg" alt="bell" className="w-6 h-6" />
        </button>
        <button>
          <img
            src="/assets/svgs/user_account.svg"
            alt="bell"
            className="w-6 h-6"
          />
        </button>
        <Select>
          <SelectTrigger className=" bg-transparent border-none w-auto text-secondary dark:text-foreground text-sm">
            <SelectValue placeholder="Vladimir Lialine" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Vladimir Lialine">Vladimir Lialine</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};
