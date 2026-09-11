import { cn } from "@/lib/utils";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

export default function List06() {
    return (
        <div
            className={cn(
                "w-full max-w-xl mx-auto",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "rounded-2xl shadow-xs overflow-hidden"
            )}
        >
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                            alt="Author"
                            className="w-8 h-8 rounded-full ring-1 ring-zinc-100 dark:ring-zinc-800"
                        />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    Sarah Chen
                                </h3>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500">
                                    2h
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <MoreHorizontal className="w-4 h-4 text-zinc-400" />
                    </button>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-normal">
                    The new AI features in Figma are incredible! Just tried the
                    new variables system - a game changer for design
                    systems. 🎨
                </p>
            </div>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <div className="p-4">
                    <div className="flex gap-3">
                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
                            alt="Responder"
                            className="w-7 h-7 rounded-full ring-1 ring-zinc-100 dark:ring-zinc-800 flex-none"
                        />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    Alex Rivera
                                </span>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500">
                                    45m
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                Agreed! The auto-layout improvements are
                                fantastic too. Makes responsive design so much
                                easier.
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-rose-500 transition-colors"
                                >
                                    <Heart className="w-3.5 h-3.5" />
                                    <span>18</span>
                                </button>
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-blue-500 transition-colors"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>Reply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 pl-12">
                    <div className="flex gap-3">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                            alt="Responder"
                            className="w-7 h-7 rounded-full ring-1 ring-zinc-100 dark:ring-zinc-800 flex-none"
                        />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    Maya Patel
                                </span>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500">
                                    12m
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                Have you tried the new component variants?
                                 perfect for theming!
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-rose-500 transition-colors"
                                >
                                    <Heart className="w-3.5 h-3.5" />
                                    <span>8</span>
                                </button>
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-blue-500 transition-colors"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>Reply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
                            alt="Your avatar"
                            className="w-7 h-7 rounded-full ring-1 ring-zinc-100 dark:ring-zinc-800"
                        />
                        <input
                            type="text"
                            placeholder="Add to discussion..."
                            className="flex-1 text-sm bg-transparent text-zinc-900 dark:text-zinc-100 
                                placeholder:text-zinc-400 focus:outline-hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
