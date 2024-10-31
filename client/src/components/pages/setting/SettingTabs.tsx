import { SettingTab } from "@/data/Setting";
import { cn } from "@/lib/utils";

export const SettingTabs = ({ activeTab, setActiveTab }: any) => {
  return (
    <div className="bg-card py-3">
      <ul className="flex flex-col gap-0 flex-wrap">
        {SettingTab?.map((tab, index) => (
          <li
            key={index + tab?.title}
            className={cn(
              "text-wrap text-start leading-normal text-foreground cursor-pointer py-3 px-4 font-light",
              activeTab === tab?.title
                ? "bg-primary/20 border-r-2 border-[#023AFF]"
                : "bg-transparent"
            )}
            onClick={() => setActiveTab(tab?.title)}
          >
            {tab?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
