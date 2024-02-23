import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 w-96">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  );
}
