"use client";

import { useEffect, useState } from "react";
import { RiTimeLine } from "react-icons/ri";

interface WakaTimeStats {
  total_seconds: number;
  human_readable_total: string;
}

const WakaTimeStats = () => {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/wakatime");

        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching WakaTime stats:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-white/50 text-sm">
        <RiTimeLine className="text-lg animate-pulse" />
        <span>Carregando...</span>
      </div>
    );
  }

  if (error || !stats) {
    return null; // Não exibe nada em caso de erro
  }

  return (
    <div className="flex items-center gap-2 text-white/50 hover:text-primary transition-all text-sm">
      <RiTimeLine className="text-lg" />
      <span>
        <strong>{stats.human_readable_total}</strong> codificando
      </span>
    </div>
  );
};

export default WakaTimeStats;
