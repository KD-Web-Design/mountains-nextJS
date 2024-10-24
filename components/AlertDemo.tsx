import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertDemoProps {
  alertActive: boolean;
}

export function AlertDemo({ alertActive }: AlertDemoProps) {
  return (
    <Alert
      className={`w-64 fixed left-6 top-6 transition-all duration-500 ease-in-out z-20 
        ${
          alertActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
    >
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Did you know ?</AlertTitle>
      <AlertDescription>
        Mount Everest grows approximately 44 millimetres every year.
      </AlertDescription>
    </Alert>
  );
}
