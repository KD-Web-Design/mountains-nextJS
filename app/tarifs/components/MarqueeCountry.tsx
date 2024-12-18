import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Alice",
    username: "@alice",
    body: "Une expérience exceptionnelle !",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Vraiment impressionnée par la qualité.",
    img: "https://avatar.vercel.sh/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "Satisfait à 100 % !",
    img: "https://avatar.vercel.sh/charlie",
  },
  {
    name: "Diana",
    username: "@diana",
    body: "Je recommande vivement !",
    img: "https://avatar.vercel.sh/diana",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "Super rapport qualité-prix.",
    img: "https://avatar.vercel.sh/eve",
  },
  {
    name: "Frank",
    username: "@frank",
    body: "C'est exactement ce que je voulais.",
    img: "https://avatar.vercel.sh/frank",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeCountry() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
