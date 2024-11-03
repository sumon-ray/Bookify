// File: '@/Components/DemoText.js'
import AnimatedShinyText from '@/Components/AnimatedShinyText';
import React from 'react';
import { ArrowRightIcon } from "@radix-ui/react-icons"; 
import { cn } from "../../src/utils"; 

const DemoText = () => {
    return (
        <div className="z-10 flex items-center justify-center min-h-64 p-4">
            <div
                className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
            >
                <AnimatedShinyText className={cn("inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400")}>
                    <span className="ml-2 text-2xl">✨ This is shiny text! ✨</span>
                    <ArrowRightIcon className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
            </div>
        </div>
    );
};

export default DemoText;
