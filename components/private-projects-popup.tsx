"use client"

import { useState, useEffect } from "react"
import { X, Mail, MessageCircle, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

export function PrivateProjectsPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem("popup-dismissed")
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    const handleScroll = () => {
      // Show popup after scrolling 400px
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    // Add a small delay before listening to scroll
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }, 1000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    sessionStorage.setItem("popup-dismissed", "true")
  }

  if (!isVisible || isDismissed) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50",
        "animate-in slide-in-from-bottom-4 fade-in duration-500"
      )}
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-5 shadow-2xl max-w-xs md:max-w-sm">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
            <Lock className="w-5 h-5 text-zinc-400" />
          </div>
          <div className="pr-4">
            <h3 className="text-white font-medium text-sm md:text-base">
              Some Projects Are Private
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-relaxed">
              A few projects are under NDA or have restricted access. Contact me for demos or more details.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 mt-4">
          <a
            href="mailto:mohithundlani123@gmail.com?subject=Project%20Inquiry&body=Hi%20Mohit,%0A%0AI'd%20like%20to%20learn%20more%20about%20your%20private%20projects."
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black text-xs md:text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-zinc-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>
          <a
            href="https://wa.me/919978043013?text=Hi%20Mohit,%20I'd%20like%20to%20know%20more%20about%20your%20projects."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs md:text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Subtle dismiss text */}
        <p className="text-zinc-600 text-[10px] md:text-xs text-center mt-3">
          Click X or outside to dismiss
        </p>
      </div>
    </div>
  )
}
