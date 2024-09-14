import { GroupIcon } from "@/components/assets/svgs/group";
import { HSMIcon } from "@/components/assets/svgs/hsm";
import { IntegrationIcon } from "@/components/assets/svgs/integration";
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
import { cn } from "@/lib/utils";

export const Group = ({ activeTab, setActiveTab }: any) => {
  return (
    <div className="mt-5">
      <h2 className="text-[42px] text-ternary flex items-center gap-2 font-light mb-3">
        Groups <img src="/assets/svgs/add.svg" alt="" className="h-10 w-10" />
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
                <span className={cn(" text-sm")}>All Integration (15)</span>
              </button>
              <button
                className={cn(
                  "flex items-center gap-3 p-2 border border-foreground/40",
                  activeTab === "group"
                    ? "bg-primary/60 text-primary"
                    : "bg-transparent text-foreground/60"
                )}
                onClick={() => setActiveTab("group")}
              >
                <GroupIcon
                  className={cn(
                    "h-5 w-5 ",
                    activeTab === "group"
                      ? " stroke-primary"
                      : " stroke-foreground/60"
                  )}
                />
                <span className={cn(" text-sm")}>Regular Groups</span>
              </button>
              <button
                className={cn(
                  "flex items-center gap-3 p-2 border  border-foreground/40 rounded-tr-sm rounded-br-sm",
                  activeTab === "hsm"
                    ? "bg-primary/60 text-primary"
                    : "bg-transparent text-foreground/60"
                )}
                onClick={() => setActiveTab("hsm")}
              >
                <HSMIcon
                  className={cn(
                    "h-5 w-5 ",
                    activeTab === "hsm"
                      ? " stroke-primary"
                      : " stroke-foreground/60"
                  )}
                />
                <span className={cn(" text-sm")}>HSM / External EMS</span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2">
                <img
                  src="/assets/svgs/delete.svg"
                  alt="delete"
                  className="h-5 w-5"
                />
                <p className="text-foreground/70">DELETED SELECTED</p>
              </button>
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
                  <TableCell colSpan={8} className="py-20 text-center">
                    <img
                      src="/assets/svgs/no_item.svg"
                      alt=""
                      className="mx-auto"
                    />
                    <p className="text-foreground mt-3">No items</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
