  import { SvgIconComponent } from "@mui/icons-material";
  import TuneIcon from "@mui/icons-material/Tune";
  import ShowChartIcon from "@mui/icons-material/ShowChart";
  import BarChartIcon from "@mui/icons-material/BarChart";

  export interface BudgetItem {
    icon: SvgIconComponent; // Type for MUI icons
    title: string;
    desc: string;
  }

  export const budgetData: BudgetItem[] = [
    {
      icon: TuneIcon,
      title: "Set up annual budgets by account category",
      desc: "Allocate funds across income and expense lines with full visibility.",
    },
    {
      icon: ShowChartIcon,
      title: "Track actuals vs budget in real time",
      desc: "See how your community is performing against plan, month by month.",
    },
    {
      icon: BarChartIcon,
      title: "Adjust figures and forecast with ease",
      desc: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    },
  ];
