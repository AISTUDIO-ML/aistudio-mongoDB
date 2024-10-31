import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Authentication = () => {
  const [authenticationType, setAuthenticationType] =
    useState<string>("password");
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-normal">Authentication</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={authenticationType}
          className="flex-row flex gap-4"
          onValueChange={(value) => setAuthenticationType(value)}
        >
          <div
            className={cn(
              "flex items-center space-x-2 px-7 py-2 rounded-md text-ternary font-normal border",
              authenticationType === "password"
                ? "bg-primary/40 border-transparent"
                : "bg-transparent  border-foreground"
            )}
          >
            <RadioGroupItem value="password" id="r1" />
            <label htmlFor="r1">PASSWORD AUTHENTICATION</label>
          </div>
          <div
            className={cn(
              "flex items-center space-x-2 px-7 py-2 rounded-md text-ternary font-normal border",
              authenticationType === "single"
                ? "bg-primary/40 border-transparent"
                : "bg-transparent  border-foreground "
            )}
          >
            <RadioGroupItem value="single" id="r2" />
            <label htmlFor="r2">SINGLE SIGN-ON</label>
          </div>
        </RadioGroup>
        <p className="text-xs text-foreground/70 my-4">
          All team members log in to the account with e-mail address and
          password
        </p>
        <div className="flex space-x-2">
          <Checkbox id="terms" className="mt-2.5" />
          <label htmlFor="terms" className="text-2xl font-normal ">
            <span className="leading-none">
              Mandatory two-factor authentication for all team members
            </span>

            <span className="text-[10px] font-light block leading-5 text-foreground/70">
              When enabled all user’s in the account (including yourself) will
              be required to setup two-factor authentication before logging to
              the account
            </span>
          </label>
        </div>
        <div className="flex items-center space-x-3 mt-4">
          <Button variant={"destructive"} className="rounded-full">
            SAVE CHANGES
          </Button>
          <Button variant={"link"} className="text-base">
            CANCEL
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
