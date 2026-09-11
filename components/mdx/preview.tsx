import { cn } from "@/lib/utils";
import PreviewContent from "./preview-content";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://portui.vercel.app";

export default function Preview({
  children,
  className = "",
  link,
  useIframe = false,
  compact = false,
  comment = [],
  isBlock = false,
}: PreviewProps) {
  console.log(prePath + link);
  return (
    <>
      <div className={cn("w-full overflow-hidden", className)}>
        <PreviewContent link={link} prePath={prePath} isBlock={isBlock} />

        {useIframe ? (
          <div className="w-full my-4 border rounded-2xl border-zinc-200 dark:border-[#2d3142] bg-white dark:bg-[#12141d]">
            <div className="relative w-full h-[100dvh] overflow-hidden">
              <iframe
                title={link}
                src={`${prePath}/preview/${link}`}
                className="w-full h-full overflow-y-auto list-none"
                style={{
                  border: "none",
                  transform: "scale(0.95)",
                }}
              />
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "p-2 md:p-8 flex justify-center items-center relative border rounded-2xl my-4 border-zinc-200 dark:border-[#2d3142] bg-zinc-50/50 dark:bg-[#12141d]/50 not-prose",
              compact ? "min-h-[100px]" : "min-h-[400px]",
              isBlock ? "md:p-0" : ""
            )}
          >
            {children}
          </div>
        )}
        {comment.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {comment.map((text, index) => (
              <div
                key={index}
                className="px-3.5 py-1.5 text-xs font-mono font-medium bg-emerald-500/10 dark:bg-[#00d992]/10 text-emerald-700 dark:text-[#00d992] border border-emerald-500/30 dark:border-[#00d992]/30 rounded-full shadow-xs transition-colors"
              >
                {text}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
