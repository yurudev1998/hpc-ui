import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const NAVIGATION_CONFIG = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "HPC Portal",
      logo: GalleryVerticalEnd,
    },
  ],
  navMain: [
    {
      title: "profile",
      url: "/profile",
      icon: SquareTerminal,
      isActive: true,
      items: [],
    },
    {
      title: "monitoring",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "resource_utilization",
          url: "/monitor/resource",
        },
        {
          title: "license_status",
          url: "monitor/license",
        }
      ],
    },
    {
      title: "usage",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "workstation",
          url: "/usage/workstation",
        },
        {
          title: "job",
          url: "/usage/job",
        },
      ],
    },
    {
      title: "utility",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "file_exchange",
          url: "/utility/exchange",
        },
        {
          title: "license_booking",
          url: "utility/booking",
        },
      ],
    },
  ],
  navAdmin: [
    {
      name: "cost_trend",
      url: "/admin/cost",
      icon: PieChart,
    },
    {
      name: "pricing_calculator",
      url: "/admin/price",
      icon: Frame,
    },
  ],
}