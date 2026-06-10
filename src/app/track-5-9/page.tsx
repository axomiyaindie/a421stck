"use client";

import { useLocale } from "@/hooks/useLocale";
import TrackDetailView from "@/components/ui/TrackDetailView";

export default function ExplorersTrackPage() {
  const { t } = useLocale();
  return <TrackDetailView cohort={t.tracks.explorers} />;
}
