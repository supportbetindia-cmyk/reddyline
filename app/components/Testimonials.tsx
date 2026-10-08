"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  { text: "Best IPL betting experience I have had. The live odds update instantly and placing bets during matches feels seamless. Withdrawals hit my account same day.", name: "Rohit K.", location: "Mumbai, India", initials: "RK" },
  { text: "The casino games are top quality. I play Teen Patti and blackjack daily. The app is smooth and I have never faced any lag or loading issues.", name: "Priya S.", location: "Delhi, India", initials: "PS" },
  { text: "Reddy Line is hands down the most reliable platform I have used. Customer support resolved my issue in minutes. Deposits and withdrawals are lightning fast.", name: "Amit D.", location: "Bangalore, India", initials: "AD" },
  { text: "The cricket betting options are incredible. Ball-by-ball markets during IPL matches make it exciting. The odds are competitive and the interface is clean.", name: "Sneha M.", location: "Pune, India", initials: "SM" },
  { text: "I love the Aviator game here. The crash game is addictive and the payouts are fair. The whole platform feels premium compared to other sites I have tried.", name: "Vikram P.", location: "Hyderabad, India", initials: "VP" },
  { text: "Downloaded the app last month and haven't looked back. Everything from casino games to live sports betting works perfectly. Great user experience overall.", name: "Ananya R.", location: "Chennai, India", initials: "AR" },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const getVisibleCardsCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  // Scroll the container to a specific index
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cardWidth = container.children[0]?.getBoundingClientRect().width || 0;
    const gap = 20; // gap-5 is 20px
    const targetScroll = index * (cardWidth + gap);
    
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  const handleNext = () => {
    let nextIndex = activeIndex + 1;
    const visibleCards = getVisibleCardsCount();
    const maxIndex = reviews.length - visibleCards;
    
    if (nextIndex > maxIndex) {
      nextIndex = 0; // Wrap around
    }
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) {
      const visibleCards = getVisibleCardsCount();
      prevIndex = Math.max(0, reviews.length - visibleCards); // Wrap around to end
    }
    scrollToIndex(prevIndex);
  };

  // Autoplay timer controls
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      handleNext();
    }, 4500);
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // Restart the timer whenever the slide changes; startAutoplay/stopAutoplay
    // are recreated each render, so listing them here would re-run every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // Track the active index when scrolled manually
  const handleScroll = () => {
    if (!containerRef.current || isDragging) return;
    const container = containerRef.current;
    const cardWidth = container.children[0]?.getBoundingClientRect().width || 0;
    const gap = 20;
    if (cardWidth === 0) return;
    
    const index = Math.round(container.scrollLeft / (cardWidth + gap));
    const visibleCards = getVisibleCardsCount();
    const maxIndex = reviews.length - visibleCards;
    const boundedIndex = Math.min(Math.max(0, index), maxIndex);
    
    if (boundedIndex !== activeIndex) {
      setActiveIndex(boundedIndex);
    }
  };

  // Drag to scroll on Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftStart.current = containerRef.current.scrollLeft;
    stopAutoplay();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll multiplier
    containerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Snap to the closest card after drag ends
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.children[0]?.getBoundingClientRect().width || 0;
      const gap = 20;
      const index = Math.round(container.scrollLeft / (cardWidth + gap));
      const visibleCards = getVisibleCardsCount();
      const maxIndex = reviews.length - visibleCards;
      const boundedIndex = Math.min(Math.max(0, index), maxIndex);
      scrollToIndex(boundedIndex);
    }
    startAutoplay();
  };

  const visibleCards = getVisibleCardsCount();
  const totalDots = reviews.length - visibleCards + 1;

  return (
    <section className="py-[50px] px-[5%] bg-bg3 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto z-10 relative">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-[40px] gap-6 flex-wrap reveal">
          <div>
            <div className="section-tag">Player Reviews</div>
            <h2 className="section-title">Player Experiences</h2>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <p className="section-desc hidden md:block max-w-[320px]">
              Players across India choose Reddy Line for speed, security, and real winnings.
            </p>
            
            {/* Nav Arrows */}
            <div className="flex gap-2.5">
              <button 
                onClick={() => { handlePrev(); stopAutoplay(); }}
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors cursor-pointer"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft className="text-[14px]" />
              </button>
              <button 
                onClick={() => { handleNext(); stopAutoplay(); }}
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors cursor-pointer"
                aria-label="Next testimonials"
              >
                <FaChevronRight className="text-[14px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={stopAutoplay}
          onTouchEnd={startAutoplay}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4 cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {reviews.map((review) => (
            <div 
              key={review.name} 
              className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-start card-luxury p-7 group cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-[15px]">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-gold">⭐</span>
                ))}
              </div>
              {/* Text */}
              <p className="text-[14px] text-muted leading-[1.75] mb-5 italic">&ldquo;{review.text}&rdquo;</p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1E29] border-2 border-[#E5C158]/50 flex items-center justify-center font-bebas text-[16px] text-gold shrink-0 shadow-[0_0_10px_rgba(229,193,88,0.2)]">
                  {review.initials}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white group-hover:text-[#F5D77F] transition-colors">{review.name}</div>
                  <div className="text-[12px] text-muted">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {totalDots > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => { scrollToIndex(i); stopAutoplay(); }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? "w-6 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Hide Scrollbar styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
