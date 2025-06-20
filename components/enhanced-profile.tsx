"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SocialLinks } from "@/components/social-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, MapPin, Mail, Phone, Languages, Clock, Briefcase } from "lucide-react"
import { getPersonalInfo, getAboutInfo } from "@/lib/data"

export function EnhancedProfile() {
  const [activeTab, setActiveTab] = useState("about")

  const personalInfo = getPersonalInfo()
  const aboutInfo = getAboutInfo()

  return (
    <Card className="professional-card col-span-1 flex flex-col">
      <CardContent className="p-0">
        {/* Profile Header - Enhanced for job interviewers */}
        <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 p-4 sm:p-6 flex flex-col items-center border-b border-cyan-500/20">
          <div className="flex flex-col sm:flex-col items-center w-full">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 border-3 border-cyan-400/30 ring-4 ring-cyan-500/10 shadow-xl">
              <Image
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-1">{personalInfo.name}</h2>

              <div className="flex items-center justify-center text-xs text-slate-300 mb-3">
                <MapPin className="w-3 h-3 mr-1 text-cyan-400" />
                <span className="font-medium">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {personalInfo.badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-cyan-500/10 border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 font-medium"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <SocialLinks socialLinks={personalInfo.social} />
        </div>

        {/* Tabbed Content - Enhanced visibility */}
        <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b border-zinc-700/50">
            <TabsList className="w-full bg-transparent border-b border-zinc-700/50 rounded-none h-auto p-0">
              <TabsTrigger
                value="about"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-3 text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "about"
                    ? "border-cyan-400 text-cyan-400 bg-cyan-500/5"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                About
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-3 text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "contact"
                    ? "border-cyan-400 text-cyan-400 bg-cyan-500/5"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="p-4 sm:p-6 space-y-4 sm:space-y-6 focus:outline-none">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center">
                <User className="w-4 h-4 mr-2 text-cyan-400" />
                About Me
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{aboutInfo.bio}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                Professional Focus
              </h3>
              <div className="space-y-2">
                {aboutInfo.focus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2 font-bold">•</span>
                    <p className="text-sm text-slate-300 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center">
                <Languages className="w-4 h-4 mr-2 text-cyan-400" />
                Languages
              </h3>
              <div className="space-y-3">
                {aboutInfo.languages.map((language, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-200">{language.name}</span>
                      <span className="text-xs text-cyan-400 font-semibold">{language.proficiency}</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="p-4 sm:p-6 space-y-4 focus:outline-none">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-slate-300 hover:text-cyan-400 transition-colors break-all font-medium"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200">Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200">Location</h4>
                  <p className="text-sm text-slate-300 font-medium">{personalInfo.location}</p>
                </div>
              </div>

            </div>
          </TabsContent>
        </Tabs>

        {/* Profile Footer - Enhanced availability status */}
        <div className="p-3 sm:p-4 border-t border-zinc-700/50 flex items-center justify-center bg-gradient-to-r from-zinc-800/30 to-zinc-900/30">
          <div className="flex items-center">
            <span
              className={`w-3 h-3 ${personalInfo.availableForWork ? "bg-green-400" : "bg-red-400"} rounded-full mr-2 animate-pulse`}
            ></span>
            <span className="text-xs text-slate-300 font-semibold">
              {personalInfo.availableForWork ? "Available for new opportunities" : "Not available for new projects"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
