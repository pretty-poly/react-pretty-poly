import React, { useState } from "react";
import { Grid } from "@/components/grid/grid";
import { Block } from "@/components/grid/block";
import { BlockLayout } from "@/components/grid/block-layout";
import { BlockContent } from "@/components/grid/block-content";
import { BlockHeader } from "@/components/grid/block-header";
import type { BlockConfig } from "@/lib/grid-types";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  Bell,
  TrendingUp,
  Activity,
  TrendingDown,
} from "lucide-react";

const dashboardLayout: BlockConfig[] = [
  {
    id: "root",
    type: "group",
    direction: "row",
    order: 1,
  },
  {
    id: "sidebar",
    type: "block",
    defaultSize: 280,
    minSize: 200,
    maxSize: 400,
    sizeUnit: "px",
    parentId: "root",
    order: 0,
  },
  {
    id: "main",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 1,
  },
  {
    id: "activity",
    type: "block",
    defaultSize: 320,
    minSize: 280,
    maxSize: 400,
    sizeUnit: "px",
    parentId: "root",
    order: 2,
  },
];

type NavItem = "home" | "users" | "analytics" | "settings";

interface ContentData {
  title: string;
  kpis: Array<{
    label: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: typeof BarChart3;
    iconBg: string;
    iconColor: string;
  }>;
  tableTitle: string;
  tableData: Array<{
    col1: string;
    col2: string;
    col3: string;
  }>;
  tableHeaders: string[];
  activityItems: Array<{
    text: string;
    time: string;
    color: string;
  }>;
}

const contentByNav: Record<NavItem, ContentData> = {
  home: {
    title: "Overview",
    kpis: [
      {
        label: "Total Revenue",
        value: "$45,231",
        change: "+20.1% from last month",
        isPositive: true,
        icon: BarChart3,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        label: "Active Users",
        value: "2,350",
        change: "+12.5% from last month",
        isPositive: true,
        icon: Users,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        label: "Conversions",
        value: "1,234",
        change: "+8.2% from last month",
        isPositive: true,
        icon: Activity,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    tableTitle: "Recent Activity",
    tableHeaders: ["User", "Action", "Time"],
    tableData: [
      { col1: "John Doe", col2: "Created new project", col3: "2 min ago" },
      { col1: "Jane Smith", col2: "Updated settings", col3: "15 min ago" },
      { col1: "Bob Johnson", col2: "Completed task", col3: "1 hour ago" },
    ],
    activityItems: [
      {
        text: "New user registered",
        time: "2 minutes ago",
        color: "bg-green-500",
      },
      { text: "Payment received", time: "5 minutes ago", color: "bg-blue-500" },
      {
        text: "Server warning",
        time: "10 minutes ago",
        color: "bg-yellow-500",
      },
      {
        text: "Order completed",
        time: "15 minutes ago",
        color: "bg-green-500",
      },
    ],
  },
  users: {
    title: "Users Management",
    kpis: [
      {
        label: "Total Users",
        value: "8,492",
        change: "+18.2% from last month",
        isPositive: true,
        icon: Users,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        label: "Active Today",
        value: "2,350",
        change: "+5.1% from yesterday",
        isPositive: true,
        icon: Activity,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        label: "New This Week",
        value: "423",
        change: "-3.2% from last week",
        isPositive: false,
        icon: TrendingUp,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    tableTitle: "Recent Users",
    tableHeaders: ["Name", "Email", "Joined"],
    tableData: [
      { col1: "Sarah Williams", col2: "sarah.w@email.com", col3: "Today" },
      { col1: "Mike Chen", col2: "mike.chen@email.com", col3: "Yesterday" },
      { col1: "Emma Davis", col2: "emma.d@email.com", col3: "2 days ago" },
    ],
    activityItems: [
      {
        text: "Sarah Williams signed up",
        time: "1 minute ago",
        color: "bg-green-500",
      },
      {
        text: "Mike Chen updated profile",
        time: "12 minutes ago",
        color: "bg-blue-500",
      },
      {
        text: "Emma Davis verified email",
        time: "45 minutes ago",
        color: "bg-green-500",
      },
      {
        text: "John Smith logged in",
        time: "1 hour ago",
        color: "bg-blue-500",
      },
    ],
  },
  analytics: {
    title: "Analytics Dashboard",
    kpis: [
      {
        label: "Page Views",
        value: "124,503",
        change: "+32.4% from last month",
        isPositive: true,
        icon: BarChart3,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        label: "Bounce Rate",
        value: "42.3%",
        change: "-5.1% from last month",
        isPositive: true,
        icon: TrendingDown,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        label: "Avg. Session",
        value: "3m 24s",
        change: "+12.8% from last month",
        isPositive: true,
        icon: Activity,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    tableTitle: "Top Pages",
    tableHeaders: ["Page", "Views", "Unique"],
    tableData: [
      { col1: "/dashboard", col2: "45,231", col3: "32,412" },
      { col1: "/products", col2: "38,492", col3: "28,103" },
      { col1: "/about", col2: "12,450", col3: "9,834" },
    ],
    activityItems: [
      {
        text: "Traffic spike detected",
        time: "5 minutes ago",
        color: "bg-green-500",
      },
      {
        text: "New referral source",
        time: "20 minutes ago",
        color: "bg-blue-500",
      },
      {
        text: "Goal completed: 50 signups",
        time: "1 hour ago",
        color: "bg-green-500",
      },
      { text: "Report generated", time: "2 hours ago", color: "bg-blue-500" },
    ],
  },
  settings: {
    title: "Settings",
    kpis: [
      {
        label: "API Requests",
        value: "12,450",
        change: "+8.3% from last month",
        isPositive: true,
        icon: Activity,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        label: "Storage Used",
        value: "68.2 GB",
        change: "+2.1 GB from last month",
        isPositive: true,
        icon: BarChart3,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        label: "Active Integrations",
        value: "14",
        change: "+2 from last month",
        isPositive: true,
        icon: Settings,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
      },
    ],
    tableTitle: "Recent Changes",
    tableHeaders: ["Setting", "Changed By", "Time"],
    tableData: [
      { col1: "Email notifications", col2: "Admin", col3: "1 hour ago" },
      { col1: "API rate limit", col2: "DevOps", col3: "3 hours ago" },
      { col1: "Backup schedule", col2: "Admin", col3: "1 day ago" },
    ],
    activityItems: [
      {
        text: "Settings backup created",
        time: "30 minutes ago",
        color: "bg-green-500",
      },
      { text: "API key rotated", time: "2 hours ago", color: "bg-blue-500" },
      {
        text: "Security scan completed",
        time: "4 hours ago",
        color: "bg-green-500",
      },
      { text: "Config updated", time: "6 hours ago", color: "bg-yellow-500" },
    ],
  },
};

const BasicDashboard: React.FC = () => {
  const [activeNav, setActiveNav] = useState<NavItem>("home");
  const currentContent = contentByNav[activeNav];
  return (
    <Grid defaultLayout={dashboardLayout} dividers="auto" className="h-dvh">
      {/* Sidebar */}
      <Block id="sidebar" className="bg-slate-900 text-white">
        <BlockLayout>
          <BlockHeader className="p-6 border-b border-slate-800">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </BlockHeader>

          <BlockContent className="p-4">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveNav("home")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-colors ${
                activeNav === "home"
                  ? "bg-slate-800 text-white"
                  : "hover:bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => setActiveNav("users")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-colors ${
                activeNav === "users"
                  ? "bg-slate-800 text-white"
                  : "hover:bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Users</span>
            </button>
            <button
              onClick={() => setActiveNav("analytics")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-colors ${
                activeNav === "analytics"
                  ? "bg-slate-800 text-white"
                  : "hover:bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Analytics</span>
            </button>
            <button
              onClick={() => setActiveNav("settings")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-colors ${
                activeNav === "settings"
                  ? "bg-slate-800 text-white"
                  : "hover:bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </nav>
        </BlockContent>
        </BlockLayout>
      </Block>

      {/* Main Content */}
      <Block id="main" className="bg-slate-50">
        <BlockLayout>
          <BlockHeader className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{currentContent.title}</h2>
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        </BlockHeader>

        <BlockContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {currentContent.kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              const TrendIcon = kpi.isPositive ? TrendingUp : TrendingDown;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-600">
                      {kpi.label}
                    </span>
                    <div className={`p-2 ${kpi.iconBg} rounded-lg`}>
                      <Icon className={`w-5 h-5 ${kpi.iconColor}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {kpi.value}
                  </div>
                  <div
                    className={`flex items-center text-sm ${
                      kpi.isPositive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <TrendIcon className="w-4 h-4 mr-1" />
                    <span>{kpi.change}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold">
                {currentContent.tableTitle}
              </h3>
            </div>
            <div className="overflow-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    {currentContent.tableHeaders.map((header, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currentContent.tableData.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-slate-900">
                        {row.col1}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {row.col2}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {row.col3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </BlockContent>
        </BlockLayout>
      </Block>

      {/* Activity Panel */}
      <Block id="activity" className="bg-white border-l border-slate-200">
        <BlockLayout>
          <BlockHeader className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold">Live Activity</h3>
        </BlockHeader>

        <BlockContent className="p-6">
          <div className="space-y-4">
            {currentContent.activityItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${item.color} mt-2`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    {item.text}
                  </p>
                  <p className="text-xs text-slate-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </BlockContent>
        </BlockLayout>
      </Block>
    </Grid>
  );
};

export default BasicDashboard;
