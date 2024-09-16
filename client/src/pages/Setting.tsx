import { Copy } from "@/components/assets/svgs/copy";
import { SettingIcon } from "@/components/assets/svgs/setting";
import { Authentication } from "@/components/pages/setting/Authentication";
import { SettingTabs } from "@/components/pages/setting/SettingTabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export const Setting = () => {
  const [activeTab, setActiveTab] = useState<string>("AUTHENTICATION");

  const CurrentTab = useMemo(() => {
    switch (activeTab) {
      case "AUTHENTICATION":
        return <Authentication />;
      default:
        return <>Not found</>;
    }
  }, [activeTab]);
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="flex items-center gap-2 bg-[#8676ff2e] p-1 rounded-sm">
                <img src="/assets/svgs/glob.svg" alt="" className="h-5 w-5" />{" "}
                North America
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tech Savy</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[42px] flex items-center gap-2 font-light mb-3">
              Account settings
            </h2>
            <div className="flex items-center gap-5">
              <p className="text-xs">
                Account ID:9B18DVV4-4HE7F-76J4-FK8KD39FBJ40
              </p>
              <div className="flex items-center gap-2">
                <Button variant={"link"} className="p-0">
                  <Copy className="h-5 w-5" />
                </Button>
                <Button variant={"link"} className="p-0">
                  <SettingIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <SettingTabs setActiveTab={setActiveTab} activeTab={activeTab} />
            <div className="col-span-3">{CurrentTab}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
