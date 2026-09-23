"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/bookType";
import { useContext } from "react";
import {
  Bar,
  BarChart,
  BarShapeProps,
  CartesianGrid,
  Label,
  LabelList,
  LabelProps,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FiBookOpen } from "react-icons/fi";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${
    x + (2 * width) / 3
  },${y + height} ${x + width},${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height),
      )}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlistBooks: IBook[];
  setWishlistBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

const PageToReadPage = () => {
  const { readBooks } = useContext(BooksContext) as BooksContextType;

  if (readBooks.length === 0) {
    return (
      <div className="container mx-auto px-5 mt-5">
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5">
            <FiBookOpen className="text-gray-400 text-4xl" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            No Read Books Found
          </h2>

          <p className="text-gray-500 mt-2 max-w-md">
            You haven&apos;t added any books to your read list yet.
          </p>
        </div>
      </div>
    );
  }

  const data = readBooks.map((book: IBook, index: number) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: index + 1,
    ant: index + 1,
  }));

  return (
    <div className="container mx-auto mt-5 px-4 sm:px-5">
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 sm:p-5 shadow-sm">
        <div className="w-full h-125 sm:h-137.5 lg:h-162.5">
          <BarChart
            style={{
              width: "100%",
              height: "100%",
            }}
            responsive
            data={data}
            margin={{
              top: 30,
              right: 15,
              left: 0,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip
              cursor={{
                fill: "rgba(0, 0, 0, 0.05)",
              }}
            />

            <XAxis
              dataKey="name"
              angle={-35}
              textAnchor="end"
              height={80}
              interval={0}
              tick={{
                fontSize: 12,
              }}
            />

            <YAxis
              width={45}
              tick={{
                fontSize: 12,
              }}
            />

            <Bar
              dataKey="uv"
              shape={TriangleBar}
              activeBar
            >
              <LabelList
                content={CustomColorLabel}
                position="top"
              />
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default PageToReadPage;