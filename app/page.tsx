import type React from "react"
import { GlobeIcon, CodeIcon, BriefcaseIcon, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExperienceCard } from "@/components/experience-card"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { getExperienceInfo, getTechnicalSkillsInfo, getCertifications, getPublications, getEducation } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

const SkillTagComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-2 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-400">{children}</div>
}

export default function Home() {
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()
  const certifications = getCertifications()
  const publications = getPublications()
  const education = getEducation()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Enhanced Profile Section */}
          <div className="md:sticky md:top-24 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Experience Section */}
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-cyan-400" />
                    <h3 className="text-lg font-medium">Experience</h3>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {experienceInfo.map((experience, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          description={experience.description}
                          achievements={experience.achievements}
                          technologies={experience.technologies}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection animation="fade-up" id="education">
              <EducationSection education={education} />
            </AnimatedSection>

            {/* Certifications Section */}
            <AnimatedSection animation="fade-up" id="certifications">
              <CertificationsSection certifications={certifications} />
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection animation="fade-up" id="skills">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <CodeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                    <h3 className="text-lg font-medium">Technical Skills</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <AnimatedSection animation="slide-right" delay={100}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.languages.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={200}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Tooling</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.tooling.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={300}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Databases</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.databases.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={400}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-400">Relevant Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.relevantSkills.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Research Section */}
            <AnimatedSection animation="fade-up" id="research">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <GlobeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                      <h3 className="text-lg font-medium">Research & Projects</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {publications.map((publication, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <div className="bg-zinc-800/30 p-4 sm:p-5 rounded-lg border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                          <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                              <div className="flex-1">
                                <div className="text-xs text-cyan-400 mb-2">{publication.category}</div>
                                <h4 className="text-base sm:text-lg font-semibold text-white leading-tight mb-2">
                                  {publication.title}
                                </h4>
                                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                                  {publication.shortDescription}
                                </p>
                              </div>
                            </div>

                            {publication.features && (
                              <div className="space-y-2">
                                <h5 className="text-xs font-medium text-zinc-400">Key Features:</h5>
                                <ul className="text-sm text-zinc-300 space-y-1">
                                  {publication.features.slice(0, 3).map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                      <span className="text-cyan-400 mr-2">•</span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                              <div className="flex items-center">
                                <span>{publication.timeline}</span>
                              </div>
                              <div className="flex items-center">
                                <span>• {publication.role}</span>
                              </div>
                            </div>

                            {publication.technologies && publication.technologies.length > 0 && (
                              <div className="space-y-2">
                                <h5 className="text-xs font-medium text-zinc-400">Technologies Used:</h5>
                                <div className="flex flex-wrap gap-1.5">
                                  {publication.technologies.map((tech, techIndex) => (
                                    <Badge
                                      key={techIndex}
                                      variant="outline"
                                      className="text-xs bg-zinc-800/50 border-zinc-600 hover:bg-zinc-700/50"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {publication.impact && (
                              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                                <div className="text-xs font-medium text-cyan-400 mb-1">Impact</div>
                                <div className="text-sm text-zinc-300">{publication.impact}</div>
                              </div>
                            )}

                            {publication.url && publication.url !== "#" && (
                              <div className="pt-2">
                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="text-xs bg-zinc-800/50 border-zinc-600 hover:bg-zinc-700/50 hover:border-cyan-500/50"
                                >
                                  <a href={publication.url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-3 h-3 mr-1.5" />
                                    View Research
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
        >
          <p>© {new Date().getFullYear()} Sahana Nagendra Hosamani. All rights reserved.</p>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
  )
}
