"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export type RefreshIntervalProps = {
  interval: number;
};

export function RefreshInterval({ interval }: RefreshIntervalProps) {
  const router = useRouter();
  useEffect(() => {
    const fn = () => void router.refresh();
    const id = setInterval(fn, interval);
    return () => void clearInterval(id);
  });
  return null;
}
