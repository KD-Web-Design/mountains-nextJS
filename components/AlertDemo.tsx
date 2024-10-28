import { MountainSnow } from "lucide-react";

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
      <MountainSnow className="h-4 w-4" />
      <AlertTitle>Le saviez-vous ?</AlertTitle>
      <AlertDescription>
        Le mont Everest prend environ 44 millimètres chaque année.
      </AlertDescription>
    </Alert>
  );
}
