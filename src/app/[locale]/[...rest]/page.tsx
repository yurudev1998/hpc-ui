import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound(); // This manually triggers [locale]/not-found.tsx
}