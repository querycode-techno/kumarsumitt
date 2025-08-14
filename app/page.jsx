"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HomeSlider from "@/components/home-slider"
import ProfessionalWork from "@/components/professional-work"
import AwardsAchievements from "@/components/awards-achievements"
import EventsShows from "@/components/events-shows"
import TrainingSessions from "@/components/training-sessions"
import Portfolio from "@/components/portfolio"
import Poster from "@/components/poster"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HomeSlider />
      <ProfessionalWork />
      <Poster />
      <AwardsAchievements />
      <EventsShows />
      <TrainingSessions />
      <Portfolio />
      <Footer />
    </div>
  )
}
