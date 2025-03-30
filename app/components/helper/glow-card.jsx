"use client";

import { useRef, useEffect } from "react";

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const CONFIG = {
    proximity: 40,
    spread: 80,
    blur: 12,
    gap: 32,
    vertical: false,
    opacity: 0,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardRefs.current;
    if (!cards.length) return;

    const handlePointerMove = (event) => {
      cards.forEach((card) => {
        if (!card) return;

        const cardBounds = card.getBoundingClientRect();
        const cardCenter = [
          cardBounds.left + cardBounds.width * 0.5,
          cardBounds.top + cardBounds.height * 0.5,
        ];

        let angle =
          (Math.atan2(event.clientY - cardCenter[1], event.clientX - cardCenter[0]) * 180) /
          Math.PI;

        angle = angle < 0 ? angle + 360 : angle;

        card.style.setProperty("--start", angle + 90);

        if (
          event.clientX > cardBounds.left - CONFIG.proximity &&
          event.clientX < cardBounds.right + CONFIG.proximity &&
          event.clientY > cardBounds.top - CONFIG.proximity &&
          event.clientY < cardBounds.bottom + CONFIG.proximity
        ) {
          card.style.setProperty("--active", "1");
        } else {
          card.style.setProperty("--active", CONFIG.opacity.toString());
        }
      });
    };

    containerRef.current.addEventListener("pointermove", handlePointerMove);

    return () => {
      containerRef.current?.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={`glow-container glow-container-${identifier}`}>
      <article
        ref={(el) => cardRefs.current.push(el)}
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
