import { IntegrationIcon } from "@/components/assets/svgs/integration";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { IntegrationData } from "@/data/Integration";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Integration = () => {
  const [activeTab, setActiveTab] = useState<String>("integration");
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
              <BreadcrumbPage>Integration</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-5">
          <h2 className="text-[42px] text-ternary flex items-center gap-2 font-light mb-3">
            Integration
          </h2>
          <Card>
            <CardHeader>
              <div className="relative">
                <Input placeholder="Search" className="pl-10" />
                <img
                  src="/assets/svgs/search.svg"
                  alt="search"
                  className="h-5 w-5 absolute top-2/4 -translate-y-2/4 left-4"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-3 w-2/3">
                  <div className="flex  space-x-2">
                    <Checkbox id="terms" checked />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Cloud key Management /BYOK (6)
                    </label>
                  </div>
                  <div className="flex  space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Tokenization (1)
                    </label>
                  </div>
                  <div className="flex  space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Storage Encryption (5)
                    </label>
                  </div>
                  <div className="flex  space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      VMware Encryption and Key Management (1)
                    </label>
                  </div>
                  <div className="flex  space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Transparent Data Encryption (1)
                    </label>
                  </div>
                  <div className="flex  space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Transparent Data Encryption Proxy (1)
                    </label>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center ">
                    <button
                      className={cn(
                        "flex items-center gap-3 p-2 border border-foreground/40 rounded-tl-sm rounded-bl-sm",
                        activeTab === "integration"
                          ? "bg-primary/60 text-primary"
                          : "bg-transparent text-foreground/60"
                      )}
                      onClick={() => setActiveTab("integration")}
                    >
                      <IntegrationIcon
                        className={cn(
                          "h-5 w-5 ",
                          activeTab === "integration"
                            ? " stroke-primary"
                            : " stroke-foreground/60"
                        )}
                      />
                      <span className={cn(" text-sm")}>
                        All Integrations (15)
                      </span>
                      <IntegrationIcon
                        className={cn(
                          "h-5 w-5 ",
                          activeTab === "integration"
                            ? " stroke-primary"
                            : " stroke-foreground/60"
                        )}
                      />
                    </button>
                    <button
                      className={cn(
                        "flex items-center gap-3 p-2 border border-foreground/40",
                        activeTab === "active"
                          ? "bg-primary/60 text-primary"
                          : "bg-transparent text-foreground/60"
                      )}
                      onClick={() => setActiveTab("active")}
                    >
                      <IntegrationIcon
                        className={cn(
                          "h-5 w-5 ",
                          activeTab === "active"
                            ? " stroke-primary"
                            : " stroke-foreground/60"
                        )}
                      />
                      <span className={cn(" text-sm")}>
                        Active Integrations
                      </span>
                      <IntegrationIcon
                        className={cn(
                          "h-5 w-5 ",
                          activeTab === "active"
                            ? " stroke-primary"
                            : " stroke-foreground/60"
                        )}
                      />
                    </button>
                    <button
                      className={cn(
                        "flex items-center gap-3 p-2 border  border-foreground/40 rounded-tr-sm rounded-br-sm",
                        activeTab === "other"
                          ? "bg-primary/60 text-primary"
                          : "bg-transparent text-foreground/60"
                      )}
                      onClick={() => setActiveTab("other")}
                    >
                      <IntegrationIcon
                        className={cn(
                          "h-5 w-5 ",
                          activeTab === "other"
                            ? " stroke-primary"
                            : " stroke-foreground/60"
                        )}
                      />
                      <span className={cn(" text-sm")}>Others (15)</span>
                      <IntegrationIcon
                        className={cn(
                          "h-5 w-5 ",
                          activeTab === "other"
                            ? " stroke-primary"
                            : " stroke-foreground/60"
                        )}
                      />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {IntegrationData?.map((data, index) => (
                      <div
                        className="bg-foreground/10 p-4 rounded-md h-[300px]"
                        key={data?.btn_text + index}
                      >
                        <div className="flex flex-col  h-full justify-between">
                          <div className="">
                            <img src={data?.image} alt="" className="mx-auto" />

                            <p className="mt-2 text-xs leading-normal text-foreground/60">
                              {data.text}
                            </p>
                          </div>
                          <div className="mt-4 text-center">
                            <Link
                              to={"#"}
                              className={cn(
                                "flex mb-4 justify-start  border-none hover:bg-transparent text-primary font-light text-xs uppercase bg-transparent"
                              )}
                            >
                              <img
                                src="/assets/svgs/download.svg"
                                alt="refresh"
                                className="mr-2 h-5 w-5"
                              />
                              Download csv
                            </Link>
                            <Button className="w-3/4 rounded-full uppercase mx-auto">
                              {data?.btn_text}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
