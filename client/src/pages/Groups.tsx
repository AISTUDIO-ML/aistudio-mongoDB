import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const Groups = () => {
  return (
    <section className="p-4">
      <div className="container">
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
              <div className="mt-5">
                <h2 className="text-[42px] text-ternary flex items-center gap-2 font-light mb-3">
                  Groups{" "}
                  <img
                    src="/assets/svgs/add.svg"
                    alt=""
                    className="h-10 w-10"
                  />
                </h2>
                <Card>
                  <CardContent className="pt-3">
                    <div className="relative">
                      <Input placeholder="Search" className="pl-10" />
                      <img
                        src="/assets/svgs/search.svg"
                        alt="search"
                        className="h-5 w-5 absolute top-2/4 -translate-y-2/4 left-4"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card className="mt-4">
                  <CardContent className="pt-3">
                    <div className="">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="/assets/svgs/delete.svg"
                            alt="delete"
                            className="h-5 w-5"
                          />
                          <p className="text-foreground/70">DELETED SELECTED</p>
                        </div>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " justify-start text-left border-none hover:bg-transparent text-primary font-light text-xs uppercase bg-transparent"
                          )}
                        >
                          <img
                            src="/assets/svgs/download.svg"
                            alt="refresh"
                            className="mr-2 h-5 w-5"
                          />
                          Download csv
                        </Button>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">
                              <Checkbox />
                            </TableHead>
                            <TableHead>
                              <span>Name</span>{" "}
                              <img
                                src="/assets/svgs/up_arrow.svg"
                                alt=""
                                className="inline"
                              />
                            </TableHead>
                            <TableHead>
                              Users{" "}
                              <img
                                src="/assets/svgs/up_arrow.svg"
                                alt=""
                                className="inline"
                              />
                            </TableHead>
                            <TableHead>
                              Plugins{" "}
                              <img
                                src="/assets/svgs/up_arrow.svg"
                                alt=""
                                className="inline"
                              />
                            </TableHead>
                            <TableHead>
                              Apps{" "}
                              <img
                                src="/assets/svgs/up_arrow.svg"
                                alt=""
                                className="inline"
                              />
                            </TableHead>
                            <TableHead>
                              SECURITY OBJECT CREATED{" "}
                              <img
                                src="/assets/svgs/up_arrow.svg"
                                alt=""
                                className="inline"
                              />
                            </TableHead>
                            <TableHead>
                              DESCRIPTION{" "}
                              <img
                                src="/assets/svgs/up_arrow.svg"
                                alt=""
                                className="inline"
                              />
                            </TableHead>
                            <TableHead>
                              <img
                                src="/assets/svgs/setting_table.svg"
                                alt=""
                                className="inline"
                              />{" "}
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell
                              colSpan={8}
                              className="py-20 text-center"
                            >
                              <img
                                src="/assets/images/no_items.png"
                                alt=""
                                className="mx-auto"
                              />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="external"></TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
