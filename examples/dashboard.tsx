import React, { useState } from "react";
import { Grid, Block, BlockGroup, Divider } from "../src";
import type { BlockConfig, ResponsiveModes } from "../src";

/**
 * Dashboard example with charts, metrics, and widgets
 * Demonstrates responsive dashboard layout with customizable panels
 */

const dashboardLayout: BlockConfig[] = [
  // Root container
  {
    id: "root",
    type: "group",
    direction: "row",
    order: 0,
  },

  // Left sidebar with metrics
  {
    id: "metrics-sidebar",
    type: "block",
    defaultSize: 320,
    minSize: 280,
    maxSize: 400,
    sizeUnit: "px",
    dividerPosition: "end",
    collapsible: true,
    collapseAt: 300,
    collapseTo: 60,
    parentId: "root",
    order: 0,
  },

  // Main dashboard area
  {
    id: "dashboard-main",
    type: "group",
    direction: "column",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "root",
    order: 1,
  },

  // Top charts area
  {
    id: "charts-area",
    type: "group",
    direction: "row",
    defaultSize: 1,
    sizeUnit: "fr",
    dividerPosition: "end",
    parentId: "dashboard-main",
    order: 0,
  },

  // Main chart
  {
    id: "main-chart",
    type: "block",
    defaultSize: 2,
    sizeUnit: "fr",
    dividerPosition: "end",
    parentId: "charts-area",
    order: 0,
  },

  // Side chart
  {
    id: "side-chart",
    type: "block",
    defaultSize: 1,
    sizeUnit: "fr",
    parentId: "charts-area",
    order: 1,
  },

  // Bottom widgets area
  {
    id: "widgets-area",
    type: "block",
    defaultSize: 300,
    minSize: 200,
    maxSize: 500,
    sizeUnit: "px",
    collapsible: true,
    collapseAt: 250,
    collapseTo: 0,
    parentId: "dashboard-main",
    order: 1,
  },
];

const dashboardModes: ResponsiveModes = {
  mobile: {
    type: "stack",
    breakpoint: 0,
    maxWidth: 767,
  },
  tablet: {
    type: "accordion",
    breakpoint: 768,
    minWidth: 768,
    maxWidth: 1023,
  },
  desktop: {
    type: "grid",
    breakpoint: 1024,
    minWidth: 1024,
  },
};

const DashboardExample: React.FC = () => {
  const [timeRange, setTimeRange] = useState("24h");

  const metrics = [
    { label: "Revenue", value: "$127,543", change: "+12.5%", positive: true },
    { label: "Users", value: "8,429", change: "+5.2%", positive: true },
    { label: "Orders", value: "1,847", change: "-2.1%", positive: false },
    { label: "Conversion", value: "3.24%", change: "+0.8%", positive: true },
  ];

  const recentActivity = [
    {
      type: "order",
      message: "New order #1847",
      time: "2 min ago",
      status: "success",
    },
    {
      type: "user",
      message: "User registration",
      time: "5 min ago",
      status: "info",
    },
    {
      type: "payment",
      message: "Payment failed #1846",
      time: "8 min ago",
      status: "error",
    },
    {
      type: "order",
      message: "Order shipped #1845",
      time: "12 min ago",
      status: "success",
    },
  ];

  return (
    <div style={{ height: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <Grid
        defaultLayout={dashboardLayout}
        modes={dashboardModes}
        className="h-full bg-gray-100"
      >
        {/* Metrics Sidebar */}
        <Block
          id="metrics-sidebar"
          className="bg-white shadow-sm border-r border-gray-200 overflow-auto"
          desktop={{ collapsible: true }}
          mobile={{
            icon: ({ className }: { className?: string }) => (
              <svg
                className={className}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            ),
            label: "Metrics",
            dockOrder: 1,
          }}
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Key Metrics
            </h2>

            {/* Metrics Cards */}
            <div className="space-y-4 mb-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className="text-xl font-semibold text-gray-900">
                    {metric.value}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      metric.positive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Time Range Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Range
              </label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Recent Activity
              </h3>
              <div className="space-y-2">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === "success"
                          ? "bg-green-400"
                          : activity.status === "error"
                          ? "bg-red-400"
                          : "bg-blue-400"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="text-xs text-gray-900">
                        {activity.message}
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Block>

        <Divider targetId="metrics-sidebar" position="end" />

        {/* Main Dashboard Area */}
        <BlockGroup id="dashboard-main" className="relative">
          {/* Charts Area */}
          <BlockGroup id="charts-area" className="relative">
            {/* Main Chart */}
            <Block
              id="main-chart"
              className="bg-white shadow-sm m-2 rounded-lg p-6"
              mobile={{
                icon: ({ className }: { className?: string }) => (
                  <svg
                    className={className}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                label: "Charts",
                dockOrder: 2,
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Revenue Trend
                </h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md">
                    Daily
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                    Weekly
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                    Monthly
                  </button>
                </div>
              </div>

              {/* Mock Chart */}
              <div className="relative h-64 bg-gray-50 rounded-lg flex items-end justify-center p-4">
                <div className="flex items-end space-x-2 w-full max-w-md">
                  {[65, 45, 78, 52, 89, 34, 67, 91, 23, 78, 56, 89].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="bg-blue-500 rounded-t"
                        style={{
                          height: `${height}%`,
                          width: "100%",
                        }}
                      />
                    )
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">
                    Interactive Chart Component
                  </div>
                </div>
              </div>
            </Block>

            <Divider targetId="main-chart" position="end" />

            {/* Side Chart */}
            <Block
              id="side-chart"
              className="bg-white shadow-sm m-2 mr-2 rounded-lg p-4"
              mobile={{
                icon: ({ className }: { className?: string }) => (
                  <svg
                    className={className}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ),
                label: "Performance",
                dockOrder: 3,
              }}
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Performance
              </h3>

              {/* Donut Chart Mockup */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">94%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-medium">127ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Error Rate</span>
                  <span className="font-medium text-red-600">0.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Throughput</span>
                  <span className="font-medium">1.2k/s</span>
                </div>
              </div>
            </Block>
          </BlockGroup>

          <Divider targetId="widgets-area" position="start" />

          {/* Widgets Area */}
          <Block
            id="widgets-area"
            className="bg-white shadow-sm m-2 mt-0 rounded-lg p-4 overflow-auto"
            desktop={{ collapsible: true }}
            mobile={{
              icon: ({ className }: { className?: string }) => (
                <svg
                  className={className}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              ),
              label: "Widgets",
              dockOrder: 4,
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Quick Actions
              </h3>
              <button className="text-xs text-gray-500 hover:text-gray-700">
                Configure
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors">
                <div className="text-blue-600 text-lg mb-1">📊</div>
                <div className="text-xs text-blue-700 font-medium">Reports</div>
              </button>
              <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors">
                <div className="text-green-600 text-lg mb-1">💰</div>
                <div className="text-xs text-green-700 font-medium">
                  Billing
                </div>
              </button>
              <button className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors">
                <div className="text-purple-600 text-lg mb-1">👥</div>
                <div className="text-xs text-purple-700 font-medium">Users</div>
              </button>
              <button className="p-3 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors">
                <div className="text-orange-600 text-lg mb-1">⚙️</div>
                <div className="text-xs text-orange-700 font-medium">
                  Settings
                </div>
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-medium text-gray-900 mb-3">
                Recent Orders
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div className="text-xs">
                    <div className="font-medium">#1847</div>
                    <div className="text-gray-500">2 minutes ago</div>
                  </div>
                  <div className="text-xs font-medium text-green-600">
                    $89.99
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div className="text-xs">
                    <div className="font-medium">#1846</div>
                    <div className="text-gray-500">8 minutes ago</div>
                  </div>
                  <div className="text-xs font-medium text-green-600">
                    $156.50
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </BlockGroup>
      </Grid>
    </div>
  );
};

export default DashboardExample;
