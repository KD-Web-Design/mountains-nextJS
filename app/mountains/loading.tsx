import { Skeleton } from "@/components/ui/skeleton";
import "../mountains/components/styles/parallax.css";
import { Spacing } from "./components/Spacing";

export default function Loading() {
  const array = new Array(6).fill(null);
  return (
    <>
      <Spacing size="md" />
      <div className="h-screen relative">
        {array.map((_, index) => {
          return (
            <div
              key={index}
              className="el w-full h-full absolute top-0 flex items-center justify-center"
            >
              <Skeleton className="imageContainer w-[25vw] h-[25vh] relative"></Skeleton>
            </div>
          );
        })}
      </div>
    </>
  );
}
