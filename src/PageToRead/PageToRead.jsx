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
  Cell,
  Customized
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
          fill: COLORS[i % COLORS.length],
          index: i
        }));
        setChartData(formatted);
      });
  }, []);

  return (
    <div className="w-full h-[500px] bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Pages to Read</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 10, left: 20, bottom: 60 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" tick={false} height={50} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pages"
            radius={[10, 10, 0, 0]}
            isAnimationActive
          >
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
          <Customized component={({ height, width }) => (
            <>
              {chartData.map((entry, index) => {
                const barWidth = width / chartData.length;
                const x = index * barWidth;
                const textX = x + barWidth / 2;
                return (
                  <text
                    key={`custom-label-${index}`}
                    x={textX}
                    y={height -110} // Adjusted to bring it closer to the bar
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                    fontSize={12}
                    fill="#333"

                    
                  >
                    {entry.name.length > 15 ? entry.name.slice(0, 14) + '…' : entry.name}
                  </text>
                );
              })}
            </>
          )} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;
