"use client";

import { CornerRightUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_07() {
    const [inputValue, setInputValue] = useState("");
    const [submitted, setSubmitted] = useState(true);
    const [isAnimating, setIsAnimating] = useState(true);
    const { textAreaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 56,
        maxHeight: 200,
    });

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const runAnimation = () => {
            if (!isAnimating) return;
            setSubmitted(true);
            timeoutId = setTimeout(() => {
                setSubmitted(false);
                timeoutId = setTimeout(runAnimation, 1000);
            }, 3000);
        };

        if (isAnimating) {
            runAnimation();
        }

        return () => clearTimeout(timeoutId);
    }, [isAnimating]);

    return (
        <div className="w-full py-4">
            <div className="relative max-w-xl w-full mx-auto flex items-start flex-col gap-2">
                <div className="relative max-w-xl w-full mx-auto">
                    <Textarea
                        id="ai-input-07"
                        placeholder="Ask me anything!"
                        className={cn(
                            "max-w-xl bg-black/5 dark:bg-white/5 w-full rounded-3xl pl-6 pr-10 py-4 placeholder:text-black/70 dark:placeholder:text-white/70 border-none ring-black/30 dark:ring-white/30 text-black dark:text-white resize-none text-wrap leading-[1.2]",
                            "min-h-[56px]"
                        )}
                        ref={textAreaRef}
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            adjustHeight();
                        }}
                        disabled={submitted}
                    />
                    <button
                        className={cn(
                            "absolute right-3 top-1/2 -translate-y-1/2 rounded-xl py-1 px-1",
                            submitted ? "bg-none" : "bg-black/5 dark:bg-white/5"
                        )}
                        type="button"
                    >
                        {submitted ? (
                            <div
                                className="w-4 h-4 bg-black dark:bg-white rounded-sm animate-spin transition duration-700"
                                style={{ animationDuration: "3s" }}
                            />
                        ) : (
                            <CornerRightUp
                                className={cn(
                                    "w-4 h-4 transition-opacity dark:text-white",
                                    inputValue ? "opacity-100" : "opacity-30"
                                )}
                            />
                        )}
                    </button>
                </div>
                <p className="pl-4 h-4 text-xs mx-auto text-black/70 dark:text-white/70">
                    {submitted ? "AI is thinking..." : "Ready to submit!"}
                </p>
            </div>
        </div>
    );
}
