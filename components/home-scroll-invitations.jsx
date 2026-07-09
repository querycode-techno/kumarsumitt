"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Globe, GraduationCap, Building2 } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

const WHATSAPP_ADMISSIONS = "https://wa.me/919507000655"
const WHATSAPP_INSTITUTION =
  "https://wa.me/919507000655?text=Hello%2C%20I%20would%20like%20to%20invite%20Kumar%20Sumitt%20to%20my%20institution%20for%20workshops%2Fmaster%20classes."

const invitations = [
  {
    id: "admissions",
    title: "Admissions Open!",
    icon: GraduationCap,
    accent: "green",
    bullets: [
      "Exclusive Residential Full-Time Acting Program",
      "Train with Kumar Sumitt at the Kumar Sumitt School of Acting Foundation, Patna.",
      "Applicants from all over India & abroad are welcome.",
      "Acting Training: FREE — Only nominal food & accommodation charges apply.",
      "Limited Residential Seats.",
      "Start Your Acting Journey Today.",
    ],
    cta: {
      label: "Apply Now",
      href: WHATSAPP_ADMISSIONS,
      external: true,
    },
  },
  {
    id: "institution",
    title: "Invite Kumar Sumitt to Your Institution",
    subtitle: "Acting • Theatre • Performance Arts",
    icon: Building2,
    accent: "pink",
    description:
      "Bring the Kumar Sumitt School of Acting Foundation to your School, College, University, Theatre Group, NGO, Corporate, or Cultural Organization for professional workshops, master classes, faculty training, and certification programs.",
    highlights: [
      "Available Across India & Internationally",
      "Certificates Issued by the Foundation",
      "Customized Programs for All Age Groups & Skill Levels",
    ],
    cta: {
      label: "Invite Now",
      href: WHATSAPP_INSTITUTION,
      external: true,
    },
  },
]

function ScrollInvitationCard({ card, index, status, onDismiss, onComplete }) {
  const isVisible = status === "visible"
  const Icon = card.icon
  const isGreen = card.accent === "green"

  return (
    <div className="relative min-h-[280px] md:min-h-[320px]">
      <AnimatePresence mode="wait">
        {isVisible ? (
          <motion.div
            key="visible"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className={`group relative bg-white rounded-lg border p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
              isGreen ? "border-green-200 hover:border-green-300" : "border-pink-200 hover:border-pink-300"
            }`}
          >
            <div
              className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${
                isGreen ? "from-green-500 to-pink-500" : "from-pink-500 to-green-500"
              }`}
            />

            <button
              type="button"
              onClick={onDismiss}
              className="absolute top-3 right-3 z-20 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3 mb-4 pr-8 relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isGreen ? "bg-gradient-to-br from-green-100 to-pink-100" : "bg-gradient-to-br from-pink-100 to-green-100"
                }`}
              >
                <Icon className={`h-5 w-5 ${isGreen ? "text-green-600" : "text-pink-600"}`} />
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-bold leading-snug ${
                    isGreen ? "text-green-600" : "text-pink-500"
                  }`}
                >
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-sm text-gray-600 font-medium mt-1">{card.subtitle}</p>
                )}
              </div>
            </div>

            {card.description && (
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-justify mb-4 relative z-10">
                {card.description}
              </p>
            )}

            <ul className="space-y-2.5 relative z-10 mb-5">
              {(card.bullets || card.highlights)?.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start text-xs md:text-sm text-gray-700 leading-relaxed">
                  {card.highlights ? (
                    <Globe className={`h-3.5 w-3.5 mr-2.5 mt-0.5 flex-shrink-0 ${isGreen ? "text-green-500" : "text-pink-500"}`} />
                  ) : (
                    <span className={`mr-2.5 mt-0.5 flex-shrink-0 font-bold ${isGreen ? "text-green-500" : "text-pink-500"}`}>
                      ▸
                    </span>
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={card.cta.href}
              target={card.cta.external ? "_blank" : undefined}
              rel={card.cta.external ? "noopener noreferrer" : undefined}
              onClick={onComplete}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm text-white transition-colors relative z-10 ${
                isGreen ? "bg-green-500 hover:bg-green-600" : "bg-pink-500 hover:bg-pink-600"
              }`}
            >
              <FaWhatsapp className="h-4 w-4" />
              {card.cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="invisible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            className="invisible rounded-lg border border-transparent min-h-[280px] md:min-h-[320px] pointer-events-none"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HomeScrollInvitations() {
  const [cardStatus, setCardStatus] = useState({
    admissions: "visible",
    institution: "visible",
  })

  const dismissCard = (id) => {
    setCardStatus((prev) => ({ ...prev, [id]: "dismissed" }))
  }

  const completeCard = (id) => {
    setCardStatus((prev) => ({ ...prev, [id]: "completed" }))
  }

  const allDismissed = Object.values(cardStatus).every((status) => status !== "visible")

  if (allDismissed) {
    return (
      <section className="px-4 pb-4 md:pb-6 bg-gradient-to-b from-white via-gray-50/30 to-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {invitations.map((card) => (
              <div
                key={card.id}
                className="invisible min-h-[1px] md:min-h-[1px] pointer-events-none"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 pb-8 md:pb-12 bg-gradient-to-b from-white via-gray-50/30 to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-green-400" />
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Opportunities</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-pink-400" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {invitations.map((card, index) => (
            <ScrollInvitationCard
              key={card.id}
              card={card}
              index={index}
              status={cardStatus[card.id]}
              onDismiss={() => dismissCard(card.id)}
              onComplete={() => completeCard(card.id)}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-gray-400 mt-4"
        >
          Or{" "}
          <Link href="/contact" className="text-green-600 hover:text-green-700 underline underline-offset-2">
            contact us
          </Link>{" "}
          for more details
        </motion.p>
      </div>
    </section>
  )
}
