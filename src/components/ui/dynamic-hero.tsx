import React, { useEffect, useRef, useCallback, useState } from 'react';

// Helper to parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' string to {r, g, b}
const parseRgbColor = (colorString: string) => {
    if (!colorString) return null;
    const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (match) {
        return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10),
        };
    }
    return null;
};

// A simple SVG Play Icon
const PlayIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5V19L19 12L8 5Z" />
    </svg>
);

interface NavItem {
    id: string;
    label: string;
    onClick?: () => void;
    href?: string;
    target?: string;
}

interface HeroSectionProps {
    heading?: string;
    tagline?: string;
    buttonText?: string;
    imageUrl?: string;
    videoUrl?: string;
    navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
    { id: 'home', label: 'Home', onClick: () => console.info('Default Home clicked') },
    { id: 'about', label: 'About', href: '#about-section' },
    { id: 'pricing', label: 'Pricing', onClick: () => console.info('Default Pricing clicked') },
    { id: 'get-started-nav', label: 'Get Started', onClick: () => console.info('Default Nav Get Started clicked') },
];

const HeroSection: React.FC<HeroSectionProps> = ({
    heading = "Something you really want",
    tagline = "You can't live without this product. I'm sure of it.",
    buttonText = "Get Started",
    imageUrl,
    videoUrl,
    navItems = defaultNavItems,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetRef = useRef<HTMLButtonElement>(null);
    const mousePosRef = useRef({ x: null as number | null, y: null as number | null });
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(false);

    const resolvedCanvasColorsRef = useRef({
        strokeStyle: { r: 202, g: 232, b: 189 }, // Default to eco-green
    });

    useEffect(() => {
        const tempElement = document.createElement('div');
        tempElement.style.display = 'none';
        document.body.appendChild(tempElement);

        const updateResolvedColors = () => {
            tempElement.style.color = 'rgb(202, 232, 189)'; // eco-green color
            const computedFgColor = getComputedStyle(tempElement).color;
            const parsedFgColor = parseRgbColor(computedFgColor);
            if (parsedFgColor) {
                resolvedCanvasColorsRef.current.strokeStyle = parsedFgColor;
            } else {
                resolvedCanvasColorsRef.current.strokeStyle = { r: 202, g: 232, b: 189 }; // eco-green fallback
            }
        };
        updateResolvedColors();
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target === document.documentElement) {
                    updateResolvedColors();
                    break;
                }
            }
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => {
            observer.disconnect();
            if (tempElement.parentNode) {
                tempElement.parentNode.removeChild(tempElement);
            }
        };
    }, []);

    const drawArrow = useCallback(() => {
        if (!canvasRef.current || !targetRef.current || !ctxRef.current) return;

        const targetEl = targetRef.current;
        const ctx = ctxRef.current;
        const mouse = mousePosRef.current;

        const x0 = mouse.x;
        const y0 = mouse.y;

        if (x0 === null || y0 === null) return;

        const rect = targetEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const a = Math.atan2(cy - y0, cx - x0);
        const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
        const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

        const midX = (x0 + x1) / 2;
        const midY = (y0 + y1) / 2;
        const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
        const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
        const controlX = midX;
        const controlY = midY + offset * t;
        
        const r = Math.sqrt((x1 - x0)**2 + (y1 - y0)**2);
        const opacity = Math.min(1.0, (r - Math.max(rect.width, rect.height) / 2) / 500); 

        const arrowColor = resolvedCanvasColorsRef.current.strokeStyle;
        ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
        ctx.lineWidth = 2;

        // Draw curve
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(controlX, controlY, x1, y1);
        ctx.setLineDash([10, 5]);
        ctx.stroke();
        ctx.restore();

        // Draw arrowhead
        const angle = Math.atan2(y1 - controlY, x1 - controlX);
        const headLength = 10 * (ctx.lineWidth / 1.5); 
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(
            x1 - headLength * Math.cos(angle - Math.PI / 6),
            y1 - headLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.moveTo(x1, y1);
        ctx.lineTo(
            x1 - headLength * Math.cos(angle + Math.PI / 6),
            y1 - headLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.stroke();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !targetRef.current) return;

        ctxRef.current = canvas.getContext("2d");
        const ctx = ctxRef.current;

        const updateCanvasSize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePosRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", updateCanvasSize);
        window.addEventListener("mousemove", handleMouseMove);
        updateCanvasSize();

        const animateLoop = () => {
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawArrow();
            }
            animationFrameIdRef.current = requestAnimationFrame(animateLoop);
        };
        
        animateLoop();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [drawArrow]);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement && videoUrl) {
            const handleVideoEnd = () => {
                setShowVideo(false);
                videoElement.currentTime = 0;
            };

            if (showVideo) {
                videoElement.play().catch(error => {
                    console.error("HeroSection: Error playing video:", error);
                    setShowVideo(false);
                });
                videoElement.addEventListener('ended', handleVideoEnd);
            } else {
                videoElement.pause();
            }

            return () => {
                videoElement.removeEventListener('ended', handleVideoEnd);
            };
        }
    }, [showVideo, videoUrl]);

    const handlePlayButtonClick = () => {
        if (videoUrl) {
            setShowVideo(true);
        }
    };

    return (
        <div className="bg-dark text-foreground min-h-screen flex flex-col">
            <nav className="w-full max-w-screen-md mx-auto flex flex-wrap justify-center sm:justify-between items-center px-4 sm:px-8 py-4 text-sm">
                {navItems.map((item) => {
                    const commonProps = {
                        key: item.id,
                        className: "py-2 px-3 sm:px-4 rounded-md text-muted-foreground hover:text-eco-green hover:bg-eco-green/10 focus:outline-none focus:ring-2 focus:ring-eco-green transition-colors duration-150 ease-in-out whitespace-nowrap",
                        onClick: item.onClick,
                    };
                    if (item.href) {
                        return (
                            <a href={item.href} target={item.target} rel={item.target === '_blank' ? 'noopener noreferrer' : undefined} {...commonProps}>
                                {item.label}
                            </a>
                        );
                    }
                    return (
                        <button type="button" {...commonProps}>
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <main className="flex-grow flex flex-col items-center justify-center">
                <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center px-4 text-white">
                        {heading}
                    </h1>
                    <p className="mt-3 block text-gray-300 text-center text-base sm:text-lg px-4 max-w-xl">
                        {tagline}
                    </p>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        ref={targetRef}
                        className="py-3 px-6 rounded-xl bg-gradient-to-r from-eco-medium to-eco-green text-dark font-semibold hover:from-eco-green hover:to-eco-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-eco-green/30 focus:outline-none focus:ring-2 focus:ring-eco-green"
                    >
                        {buttonText}
                    </button>
                </div>

                <div className="mt-12 lg:mt-16 w-full max-w-screen-sm mx-auto overflow-hidden px-4 sm:px-2">
                    <div className="bg-gradient-to-r from-eco-green/20 to-eco-dark/20 rounded-[2rem] p-[0.25rem]">
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-[1.75rem] bg-gray-900 flex items-center justify-center overflow-hidden border border-eco-green/30">
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt="Preview"
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                                        showVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                    }`}
                                />
                            )}
                            {videoUrl && (
                                <video
                                    ref={videoRef}
                                    src={videoUrl}
                                    muted
                                    playsInline
                                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                                        showVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                                />
                            )}
                            {!showVideo && videoUrl && imageUrl && (
                                <button
                                    onClick={handlePlayButtonClick}
                                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 p-2 sm:p-3 bg-eco-green/30 hover:bg-eco-green/50 text-dark backdrop-blur-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-eco-green"
                                    aria-label="Play video"
                                >
                                    <PlayIcon className="w-4 h-4 sm:w-5 sm:h-6" />
                                </button>
                            )}
                            {!imageUrl && !videoUrl && (
                                <div className="text-eco-green italic">Card Content Area</div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <div className="h-12 sm:h-16 md:h-24"></div>
            <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10"></canvas>
        </div>
    );
};

export { HeroSection };
