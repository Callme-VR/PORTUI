import { CheckCircle2 } from "lucide-react";
export default function Alert01() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:zinc-800 shadow-[0_1px_6px_0rgba(0,0,0,0.2)] rounded-2xl p-2">
        <div className="flex gap-4">
          <div className="p-2 rounded-full">
            <div className="rounded-full bg-white dark:text-zinc-900">
              <div>
                <CheckCircle2 className="w-6 h-6 text-zinc-500 dark:text-zinc-500" />
              </div>
            </div>
            <div className="space-y-0.5">
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                PORTUI
              </h3>
              <p className="text-[13px] text-zinc-500 dark:text-zinc-500">
                Use CLI To Install This ~
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
