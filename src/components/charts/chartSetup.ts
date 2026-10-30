import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend, Title);

export const INK = "#0a0a0a";
export const PRIMARY = "#0e4d25";
export const ACCENT = "#ffc72c";
export const ALERT = "#e03a1e";
export const SECONDARY = "#1b7f3b";

export const baseFont = { family: "var(--font-inter)", weight: 600 as const, size: 12 };
