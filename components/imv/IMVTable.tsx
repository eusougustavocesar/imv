import { cn } from "@/lib/utils";

interface IMVTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  compact?: boolean;
  className?: string;
}

export function IMVTable({ headers, rows, compact, className }: IMVTableProps) {
  const cell = compact ? "px-3 py-1.5" : "px-3.5 py-2.5";
  const head = compact ? "px-3 py-1.5" : "px-3.5 py-2.5";

  return (
    <div className={cn("overflow-x-auto rounded-lg border border-[#DDD5C8] shadow-sm my-4", className)}>
      <table className="w-full border-collapse text-[12px]">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className={cn(
                  "bg-[#1C1C1A] text-white text-left text-[10px] font-semibold tracking-[0.04em] uppercase",
                  "first:rounded-tl-lg last:rounded-tr-lg",
                  head
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "transition-colors duration-150",
                i % 2 === 1 ? "bg-[#F8F4EE]" : "bg-white",
                "hover:bg-[#EDE6DC]",
                i === rows.length - 1 && "[&_td]:border-b-0"
              )}
            >
              {row.map((cel, j) => (
                <td
                  key={j}
                  className={cn("border-b border-[#DDD5C8] align-top text-[#2E2B28]", cell)}
                >
                  {cel}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
