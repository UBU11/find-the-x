"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

gsap.registerPlugin(useGSAP);

export function useHeroAnimation(container: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (!container.current) return;

      // 1. Initial Entry Animation
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
      .from(".hero-title-word", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
      }, "-=0.4")
      .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6")
      .from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
      }, "-=0.4")
      .from(".floating-group", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
      }, "-=0.8");

      // 2. Continuous Organic Floating
      gsap.to(".floating-asset", {
        y: "random(-15, 15)",
        rotation: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });

      // 3. Mouse Parallax Effect
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 50;
        const yPos = (clientY / window.innerHeight - 0.5) * 50;

        gsap.to(".floating-group.layer-1", {
          x: xPos * 0.5,
          y: yPos * 0.5,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(".floating-group.layer-2", {
          x: xPos * 1,
          y: yPos * 1,
          duration: 1,
          ease: "power2.out",
        });
        
        gsap.to(".floating-group.layer-3", {
          x: xPos * 1.5,
          y: yPos * 1.5,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    },
    { scope: container }
  );
}
