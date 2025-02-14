import React, { useRef, useEffect, useCallback, useState } from "react";

interface ClickSparkProps {
    defaultSparkColor?: string;
    alternateSparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
    easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
    extraScale?: number;
    thresholdY?: number; // Y position to change color
}

interface Spark {
    x: number;
    y: number;
    angle: number;
    startTime: number;
    color: string;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
    defaultSparkColor = "#fff",
    alternateSparkColor = "yellow",
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
    easing = "ease-out",
    extraScale = 1.0,
    thresholdY = 450, // Change color after this Y position
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sparksRef = useRef<Spark[]>([]);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let animationId: number;
        const draw = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            sparksRef.current = sparksRef.current.filter((spark: Spark) => {
                const elapsed = timestamp - spark.startTime;
                if (elapsed >= duration) return false;

                const progress = elapsed / duration;
                const eased = easeFunc(progress);
                const distance = eased * sparkRadius * extraScale;
                const lineLength = sparkSize * (1 - eased);

                const x1 = spark.x + distance * Math.cos(spark.angle);
                const y1 = spark.y + distance * Math.sin(spark.angle);
                const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

                ctx.strokeStyle = spark.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();

                return true;
            });

            animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [defaultSparkColor, alternateSparkColor, sparkSize, sparkRadius, sparkCount, duration, extraScale]);

    const easeFunc = useCallback((t: number) => {
        switch (easing) {
            case "linear": return t;
            case "ease-in": return t * t;
            case "ease-in-out": return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            default: return t * (2 - t);
        }
    }, [easing]);

    const handleClick = (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        const now = performance.now();

        // Change spark color based on Y position
        const sparkColor = y > thresholdY ? alternateSparkColor : defaultSparkColor;

        const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
            x,
            y,
            angle: (2 * Math.PI * i) / sparkCount,
            startTime: now,
            color: sparkColor,
        }));

        sparksRef.current.push(...newSparks);
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [sparkCount, defaultSparkColor, alternateSparkColor, thresholdY]);

    return (
        <canvas 
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none", // Allow clicks to pass through
                zIndex: 9999, // Ensure it's on top
            }}
        />
    );
};

export default ClickSpark;
