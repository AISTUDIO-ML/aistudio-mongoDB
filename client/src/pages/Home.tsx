import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Home = () => {
  return (
    <section className="p-5">
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
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-3 gap-4 mt-3">
          <div className="flex flex-col gap-4">
            <Card className="w-full ">
              <CardHeader>
                <CardTitle>Work space</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-2 rounded-md bg-primary/20 w-[140px] aspect-square flex flex-col gap-2 items-center justify-center">
                  <img
                    src="/assets/svgs/confidential.svg"
                    alt="confidential"
                    className=""
                  />
                  <p className="text-base font-light">Confidiential AI</p>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full ">
              <CardHeader>
                <CardTitle className="flex items-center gap-5">
                  <img src="/assets/svgs/lucide_home.svg" alt="welcome" />{" "}
                  <span className="font-normal text-sm text-dark">
                    Welcome, Vladimir Lialine!
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-xs p-3">
                  Get familiar with the dashboard, here are some ways to get
                  started.
                </p>
                <ul className="flex flex-col gap-3">
                  <li
                    className={`p-3 flex items-center justify-between  hover:bg-primary/50 group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1 bg-primary/20  aspect-square rounded-full group-hover:bg-primary"></span>
                      <p className="text-xs text-dark">
                        Getting started with DSM
                        <br />
                        <span className="text-[10px] text-foreground/80">
                          Learn the fundamentals of AI Studio
                        </span>
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100">
                      <img
                        src="/assets/svgs/arrow.svg"
                        alt="arrow"
                        className="w-5 h-5"
                      />
                    </button>
                  </li>
                  <li
                    className={`p-3 flex items-center justify-between hover:bg-primary/50 group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1 bg-primary/20  aspect-square rounded-full group-hover:bg-primary"></span>
                      <p className="text-xs text-dark">
                        What’s New with DSM
                        <br />
                        <span className="text-[10px] text-foreground/80">
                          Discover New DSM features and release
                        </span>
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100">
                      <img
                        src="/assets/svgs/arrow.svg"
                        alt="arrow"
                        className="w-5 h-5"
                      />
                    </button>
                  </li>
                  <li
                    className={`p-3 flex items-center justify-between hover:bg-primary/50 group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1 bg-primary/20  aspect-square rounded-full group-hover:bg-primary"></span>
                      <p className="text-xs text-dark">
                        Training and Certification
                        <br />
                        <span className="text-[10px] text-foreground/80">
                          Learn from the expert and get certified
                        </span>
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100">
                      <img
                        src="/assets/svgs/arrow.svg"
                        alt="arrow"
                        className="w-5 h-5"
                      />
                    </button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4 col-span-2">
            <Card className="w-full ">
              <CardHeader>
                <CardTitle>My Shortcuts</CardTitle>
              </CardHeader>
              <CardContent className="pb-28">
                <div className=" flex  gap-2 items-center flex-wrap">
                  <button className="border border-dashed border-primary  p-2 flex gap-2 items-center w-32 h-24">
                    <img
                      src="/assets/svgs/add.svg"
                      alt="add"
                      className="w-6 h-6"
                    />
                    <span className="text-primary font-light">Groups</span>
                  </button>
                  <button className="border border-dashed border-primary  p-2 flex gap-2 items-center w-32 h-24">
                    <img
                      src="/assets/svgs/add.svg"
                      alt="add"
                      className="w-6 h-6"
                    />
                    <span className="text-primary font-light">Apps</span>
                  </button>
                  <button className="border border-dashed border-primary p-2 flex gap-2 items-center w-32 h-24">
                    <img
                      src="/assets/svgs/add.svg"
                      alt="add"
                      className="w-6 h-6"
                    />
                    <span className="text-primary font-light text-start">
                      Security Objectives
                    </span>
                  </button>
                  <button className="border border-dashed border-primary p-2 flex gap-2 items-center w-32 h-24">
                    <img
                      src="/assets/svgs/add.svg"
                      alt="add"
                      className="w-6 h-6"
                    />
                    <span className="text-primary font-light">Users</span>
                  </button>
                  <button className="border border-dashed border-primary p-2 flex gap-2 items-center w-32 h-24">
                    <img
                      src="/assets/svgs/add.svg"
                      alt="add"
                      className="w-6 h-6"
                    />
                    <span className="text-primary font-light">Plugins</span>
                  </button>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-5 items-center gap-4 w-full">
              <Card className="w-full col-span-3">
                <CardHeader>
                  <CardTitle>My Subsription</CardTitle>
                </CardHeader>
                <CardContent className="mt-4 mb-20">
                  <div className="flex justify-between items-center text-xs mb-3">
                    <p className="text-foreground/60 ">Subscription Type</p>
                    <p className="text-green ">
                      Trial{" "}
                      <span className="text-[#FFBA69]">(29 days left)</span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-xs mb-3">
                    <p className="text-foreground/60 ">
                      Total Transaction Allowed
                    </p>
                    <p className="text-green ">000000</p>
                  </div>
                  <div className="flex justify-between items-center text-xs mb-3">
                    <p className="text-foreground/60 ">Total Apps allowed</p>
                    <p className="text-green ">Unlimited</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full col-span-2 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-5">
                    <img
                      src="/assets/svgs/connect.svg"
                      alt="welcome"
                      className="h-3 w-3"
                    />{" "}
                    <span className="font-normal text-sm text-dark">
                      Connect with our help center
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className=" mb-20">
                  <p className="text-foreground/50 text-xs">
                    Our support team is ready to help.
                  </p>
                </CardContent>
                <CardFooter className="">
                  <Button className="w-full rounded-full">Help Center</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl text-ternary font-light">
                Pending Approval Requests{" "}
              </AccordionTrigger>
              <AccordionContent className="bg-white">
                <div className="flex items-center justify-center py-16">
                  <img
                    src="/assets/images/no_request.png"
                    alt="no request"
                    className="aspect-video h-24"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
