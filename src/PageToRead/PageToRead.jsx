import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend,
  Cell
} from "recharts";

const COLORS = [
  "#007bff", "#20c997", "#ffc107", "#fd7e14", "#dc3545",
  "#6f42c1", "#17a2b8", "#e83e8c", "#6610f2"
];

const PageToRead = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((book, i) => ({
          name: book.bookName,
          pages: book.totalPages,
          fill: COLORS[i % COLORS.length]
        }));
        setChartData(formatted);
      });
  }, []);

  return (
    <div className="w-full h-[500px] bg-white p-6 rounded-2xl shadow-lg my-6">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
        Pages to Read
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 10, left: 20, bottom: 80 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            height={60}
            tick={({ x, y, payload }) => {
              const name = payload.value;
              return (
                <text
                  x={x}
                  y={y + 15}
                  textAnchor="end"
                  transform={`rotate(-20, ${x}, ${y})`}
                  className="hidden sm:block"
                  fontSize={12}
                  fill="#555"
                >
                  {name.length > 15 ? name.slice(0, 14) + "…" : name}
                </text>
              );
            }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pages" radius={[10, 10, 0, 0]} isAnimationActive>
            <LabelList
              dataKey="pages"
              position="top"
              fill="#000"
              fontSize={14}
              fontWeight="bold"
            />
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;
