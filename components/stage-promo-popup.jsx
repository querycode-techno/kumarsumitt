"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  ArrowRight,
  Bell,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Drama,
  Globe,
  PenLine,
  User,
  X,
} from "lucide-react"
import {
  Dialog,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog"
import stageData from "@/data/stage.json"

const SHOW_DELAY_MS = 5_000
const ROTATION_INTERVAL_MS = 5_000

const FEATURED_NAMES = [
  "Mrichkatik",
  "Court Martial",
  "Caucasian chalk circle",
  "Dakghar",
  "Gabarghichor",
  "Beyond the Sound",
  "Kathak Lok",
  "Biniya",
  "Julius Caesar",
  "Kalyug ki Ramleela",
  "Hamlet",
  "Supna Ka Sapna",
]

function pickFeaturedShows(shows) {
  const featured = []
  const usedIds = new Set()

  for (const name of FEATURED_NAMES) {
    const match = shows.find(
      (show) =>
        !usedIds.has(show.id) &&
        show.name.toLowerCase() === name.toLowerCase()
    )
    if (match) {
      featured.push(match)
      usedIds.add(match.id)
    }
  }

  if (featured.length >= 6) return featured

  const recent = [...shows]
    .reverse()
    .filter((show) => !usedIds.has(show.id))
    .slice(0, 8 - featured.length)

  return [...featured, ...recent]
}

function getShowSummary(show) {
  if (show.character === "Direction") {
    return `Directed by ${show.direction} for ${show.organization}.`
  }

  return `Performed as ${show.character} in a ${show.language} production of ${show.playwright}.`
}

function getCreditLine(show) {
  if (show.character === "Direction") {
    return `Directed by ${show.direction} at ${show.organization}.`
  }

  return `Direction: ${show.direction} · ${show.organization}`
}

export default function StagePromoPopup() {
  const featuredShows = useMemo(() => pickFeaturedShows(stageData), [])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)

  const dismiss = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const goNext = useCallback(() => {
    const total = featuredShows.length
    if (!total) return
    setActiveIndex((current) => (current + 1) % total)
    setProgressKey((key) => key + 1)
  }, [featuredShows.length])

  const goPrev = useCallback(() => {
    const total = featuredShows.length
    if (!total) return
    setActiveIndex((current) => (current - 1 + total) % total)
    setProgressKey((key) => key + 1)
  }, [featuredShows.length])

  useEffect(() => {
    if (!isOpen || isPaused || featuredShows.length < 2) return undefined

    const timer = window.setInterval(goNext, ROTATION_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [featuredShows.length, goNext, isOpen, isPaused])

  useEffect(() => {
    if (!isOpen) return undefined

    const onVisibility = () => {
      setIsPaused(document.hidden)
    }

    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [isOpen])

  if (!featuredShows.length) return null

  const show = featuredShows[activeIndex]
  const summary = getShowSummary(show)
  const credit = getCreditLine(show)
  const remainingSeconds = Math.round(ROTATION_INTERVAL_MS / 1000)

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) dismiss()
      }}
    >
      <DialogPortal>
        <DialogOverlay className="bg-black/55 backdrop-blur-[3px]" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 flex max-h-[92vh] w-[min(920px,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-2xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-3 top-3 z-20 rounded-full bg-white/95 p-2 text-gray-500 shadow-md transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Close featured performance"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid min-h-0 flex-1 overflow-y-auto md:grid-cols-[minmax(260px,0.95fr)_1.2fr]">
            <div className="relative min-h-[220px] overflow-hidden md:min-h-full">
              <Image
                src="/assets/theatre-stage.jpg"
                alt={`${show.name} stage performance`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#8B1E3F] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                <Drama className="h-3.5 w-3.5" aria-hidden="true" />
                {show.language}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-pink-100">
                  On Stage
                </p>
                <p className="mt-1 font-serif text-2xl font-bold leading-tight drop-shadow-md md:text-3xl">
                  {show.name}
                </p>
              </div>
            </div>

            <div className="flex min-h-0 flex-col bg-gradient-to-br from-white via-white to-pink-50/40 p-5 sm:p-7">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <Drama className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-pink-600">
                    Stage Shows
                  </p>
                  <DialogTitle className="font-serif text-xl font-bold text-gray-900 sm:text-2xl">
                    Featured Performance
                  </DialogTitle>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
                <span className="text-pink-400" aria-hidden="true">
                  ◆
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
              </div>

              <DialogDescription className="sr-only">
                Featured stage performance details with auto-rotating shows.
              </DialogDescription>

              <div className="min-h-[7.5rem]" aria-live="polite">
                <h3 className="font-serif text-2xl font-bold leading-tight text-pink-600 sm:text-3xl">
                  {show.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {summary}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <MetaChip
                  icon={Calendar}
                  label="Year"
                  value={show.year}
                />
                <MetaChip
                  icon={Globe}
                  label="Language"
                  value={show.language}
                />
                <MetaChip
                  icon={show.character === "Direction" ? PenLine : User}
                  label={show.character === "Direction" ? "Role" : "Character"}
                  value={show.character === "Direction" ? "Director" : show.character}
                />
                <MetaChip
                  icon={Building2}
                  label="Organisation"
                  value={show.organization}
                />
              </div>

              <div className="mt-4 rounded-xl border border-pink-100 bg-pink-50/80 p-3.5">
                <div className="flex gap-2">
                  <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-pink-500" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">
                      Playwright / Story
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-gray-800">
                      {show.playwright}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                      {credit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>
                      {isPaused
                        ? "Paused · hover away to continue"
                        : `Showing more in ${remainingSeconds} sec`}
                    </span>
                    <span className="ml-auto font-medium text-gray-700">
                      {activeIndex + 1}/{featuredShows.length}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-pink-100">
                    <div
                      key={progressKey}
                      className="h-full animate-stage-progress rounded-full bg-gradient-to-r from-pink-500 to-[#8B1E3F]"
                      style={{
                        animationDuration: `${ROTATION_INTERVAL_MS}ms`,
                        animationPlayState: isPaused ? "paused" : "running",
                      }}
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="rounded-full border border-pink-200 bg-white p-1.5 text-pink-600 transition-colors hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      aria-label="Previous show"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="rounded-full border border-pink-200 bg-white p-1.5 text-pink-600 transition-colors hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      aria-label="Next show"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <Link
                  href="/events/stage"
                  onClick={dismiss}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-[#8B1E3F] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Explore All Shows
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-pink-100 bg-pink-50/90 px-5 py-3 text-xs text-pink-800 sm:text-sm">
            <Bell className="h-4 w-4 shrink-0 text-pink-600" aria-hidden="true" />
            <p>
              Don&apos;t miss upcoming shows and updates!{" "}
              <span className="hidden sm:inline">| Stay connected with our latest performances.</span>{" "}
              <Link
                href="/contact"
                onClick={dismiss}
                className="font-semibold text-pink-700 underline underline-offset-2 hover:text-pink-900"
              >
                Contact us
              </Link>
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}

function MetaChip({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-pink-100 bg-white/90 px-2.5 py-2 shadow-sm">
      <div className="flex items-center gap-1.5 text-pink-600">
        <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span className="truncate text-[10px] font-semibold uppercase tracking-wide">
          {label}
        </span>
      </div>
      <p className="mt-1 truncate text-xs font-semibold text-gray-800" title={value}>
        {value}
      </p>
    </div>
  )
}
