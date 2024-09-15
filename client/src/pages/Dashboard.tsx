import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 209 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export const Dashboard = () => {
  const [date, setDate] = useState<any>(new Date());
  return (
    <section className="p-5">
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
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center justify-between my-4">
          <div className="flex items-centr gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    " justify-start text-left border-none hover:bg-transparent text-ternary font-semibold text-sm"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Button
              variant={"outline"}
              className={cn(
                " justify-start text-left border-none hover:bg-transparent text-foreground/70 font-light text-xs"
              )}
            >
              <img
                src="/assets/svgs/refresh.svg"
                alt="refresh"
                className="mr-2 h-5 w-5"
              />
              Refresh
            </Button>
          </div>
          <Button
            variant={"outline"}
            className={cn(
              " justify-start text-left border-none hover:bg-transparent text-primary font-light text-xs uppercase"
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
        <div className="grid grid-cols-4 gap-2 ">
          <Card>
            <CardContent className="pt-3 h-full">
              <div className="flex gap-4 items-center mb-4">
                <img
                  src="/assets/svgs/active_app.svg"
                  alt="active app"
                  className="h-10 w-10"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl text-ternary font-semibold mb-0">0</p>
                  <p className="text-sm text-ternary font-light mb-0 flex items-center gap-1">
                    Total Active Apps{" "}
                    <img
                      src="/assets/svgs/info.svg"
                      alt="info"
                      className="h-5 w-5"
                    />
                  </p>
                </div>
              </div>
              <Progress value={0} />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <span className="p-1 aspect-square rounded-full bg-primary"></span>
                  <p className="text-[10px] text-foreground">
                    0 Cloud Connections
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="p-1 aspect-square rounded-full bg-primary"></span>
                  <p className="text-[10px] text-foreground">
                    0 DSM Generic Apps
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-[10px] text-foreground">Cloud Connections</p>
                <div className="flex items-center gap-3">
                  <p className="text-primary text-[10px]">0</p>
                  <p className="text-primary text-[10px]">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3">
              <div className="flex gap-4 items-center mb-4">
                <img
                  src="/assets/svgs/operation.svg"
                  alt="active app"
                  className="h-10 w-10"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-2xl text-ternary font-semibold mb-0">0</p>
                  <p className="text-sm text-ternary font-light mb-0 ">
                    Total Operations{" "}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="text-primary">0</h4>
                  <p>Encrypt</p>
                </div>
                <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="text-primary">0</h4>
                  <p>Decrypt</p>
                </div>
                <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="text-primary">0</h4>
                  <p>Secret Operations</p>
                </div>
                <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="text-primary">0</h4>
                  <p>Sign</p>
                </div>
                <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="text-primary">0</h4>
                  <p>Verify</p>
                </div>
                <div className="flex flex-col gap-3 text-[10px]">
                  <h4 className="text-primary">0</h4>
                  <p>Others</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-2">
            <Card>
              <CardContent className="pt-3">
                <div className="flex gap-4 items-center mb-1">
                  <img
                    src="/assets/svgs/token.svg"
                    alt="active app"
                    className="h-10 w-10"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl text-ternary font-semibold mb-0">
                      0
                    </p>
                    <p className="text-sm text-ternary font-light mb-0 ">
                      Tokenization Operations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <img
                    src="/assets/svgs/active_app.svg"
                    alt="active app"
                    className="h-10 w-10"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl text-ternary font-semibold mb-0">
                      0
                    </p>
                    <p className="text-sm text-ternary font-light mb-0 ">
                      Tokenization Apps
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-3">
                <div className="flex gap-4 items-center ">
                  <img
                    src="/assets/svgs/security_o.svg"
                    alt="active app"
                    className="h-10 w-10"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl text-ternary font-semibold mb-0">
                      0
                    </p>
                    <p className="text-sm text-ternary font-light mb-0 ">
                      Total Security Objects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-2 h-full">
            <Card className="flex-1">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-center ">
                  <img
                    src="/assets/svgs/total_plugin.svg"
                    alt="active app"
                    className="h-10 w-10"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl text-ternary font-semibold mb-0">
                      0
                    </p>
                    <p className="text-sm text-ternary font-light mb-0 ">
                      Total Plugins
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-center ">
                  <img
                    src="/assets/svgs/gateways.svg"
                    alt="active app"
                    className="h-10 w-10"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl text-ternary font-semibold mb-0">
                      0
                    </p>
                    <p className="text-sm text-ternary font-light mb-0 ">
                      HSM Gateways
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-normal text-2xl text-ternary mb-3">Usage</h3>
          <div className="grid grid-cols-3 gap-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-sm font-normal">
                  Total Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="desktop"
                      type="linear"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-sm font-normal">
                  Total Tokenization Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="desktop"
                      type="linear"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-sm font-normal">
                  Total Plugins Invocations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="desktop"
                      type="linear"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
