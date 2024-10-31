import { Group } from "@/components/pages/groups/Group";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const Groups = () => {
  const [activeTab, setActiveTab] = useState<string>("integration");
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
              <BreadcrumbPage>Groups</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-4">
          <Tabs defaultValue="groups" className="w-full">
            <TabsList className="w-full flex items-center justify-start bg-transparent border-b border-foreground/70 rounded-none ">
              <TabsTrigger value="groups">Groups</TabsTrigger>
              <TabsTrigger value="external">External Roles</TabsTrigger>
              <TabsTrigger value="custom">Custom Group Roles</TabsTrigger>
            </TabsList>
            <TabsContent value="groups">
              <Group activeTab={activeTab} setActiveTab={setActiveTab} />
            </TabsContent>
            <TabsContent value="external">
              <Group activeTab={activeTab} setActiveTab={setActiveTab} />
            </TabsContent>
            <TabsContent value="custom">
              <Group activeTab={activeTab} setActiveTab={setActiveTab} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
