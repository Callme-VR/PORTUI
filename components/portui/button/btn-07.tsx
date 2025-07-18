"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Download, Check, X } from "lucide-react";

interface Btn07Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onProcess?: () => Promise<boolean>;
    processDuration?: number;
}

export default function Btn07({
    className,
    onProcess = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return Math.random() > 0.5;
    },
    processDuration = 2000,
    ...props
}: Btn07Props) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [isScaling, setIsScaling] = useState(false);

    useEffect(() => {
        if (isProcessing) {
            const startTime = Date.now();
            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                if ((elapsed / processDuration) * 100 >= 100) {
                    clearInterval(interval);
                }
            }, 10);

            return () => clearInterval(interval);
        }
    }, [isProcessing, processDuration]);

    async function handleClick() {
        if (isProcessing) return;

        setIsProcessing(true);
        setIsSuccess(null);

        await new Promise((resolve) => setTimeout(resolve, processDuration));
        const success = onProcess ? await onProcess() : true;

        setIsSuccess(success);
        setIsProcessing(false);
        setIsScaling(true);

        setTimeout(() => {
            setIsSuccess(null);
            setIsScaling(false);
        }, 2000);
    }

    return (
        <Button
            className={cn(
                "min-w-40 relative group",
                "bg-blue-50 dark:bg-blue-950",
                "hover:bg-blue-100 dark:hover:bg-blue-900",
                "text-blue-600 dark:text-blue-300",
                "border border-blue-200 dark:border-blue-800",
                "transition-all duration-300",
                isProcessing && "cursor-wait",
                className
            )}
            aria-label={
                isSuccess === null
                    ? isProcessing
                        ? "Processing download"
                        : "Download"
                    : isSuccess
                    ? "Download complete"
                    : "Download failed"
            }
            onClick={handleClick}
            disabled={isProcessing}
            {...props}
        >
            <div
                className={cn(
                    "w-full flex items-center justify-center gap-2",
                    isScaling && "animate-[scale_300ms_ease-in-out]"
                )}
            >
                {isSuccess === null ? (
                    <>
                        <Download
                            className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                "group-hover:scale-110",
                                isProcessing && "animate-bounce"
                            )}
                            aria-hidden="true"
                        />
                        <span aria-live="polite">
                            {isProcessing ? "Processing..." : "Download"}
                        </span>
                    </>
                ) : isSuccess ? (
                    <>
                        <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                        <span className="text-green-500" aria-live="polite">Complete!</span>
                    </>
                ) : (
                    <>
                        <X className="w-4 h-4 text-red-500" aria-hidden="true" />
                        <span className="text-red-500" aria-live="polite">Failed</span>
                    </>
                )}
            </div>
        </Button>
    );
}
