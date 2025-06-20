import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

interface Certification {
  name: string
  issuer: string
  date: string
  logo?: string
  credentialId?: string
  skills?: string[]
  url?: string
}

interface CertificationsSectionProps {
  certifications: Certification[]
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Professional Certifications</h3>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
              <div className="bg-zinc-800/30 p-4 sm:p-5 rounded-lg border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Logo */}
                  {cert.logo && (
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
                      <Image
                        src={cert.logo || "/osu-logo.svg"}
                        alt={cert.issuer}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white leading-tight">{cert.name}</h4>
                        <p className="text-sm text-cyan-400 font-medium">{cert.issuer}</p>
                      </div>
                    </div>

                    {/* Date and Credential Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>Issued {cert.date}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="flex items-center">
                          <span>• ID: {cert.credentialId}</span>
                        </div>
                      )}
                    </div>

                    {/* Skills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="space-y-2">
                        <h5 className="text-xs font-medium text-zinc-400">Skills Demonstrated:</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="text-xs bg-zinc-800/50 border-zinc-600 hover:bg-zinc-700/50"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    {cert.url && cert.url !== "" && (
                      <div className="pt-2">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-xs bg-zinc-800/50 border-zinc-600 hover:bg-zinc-700/50 hover:border-cyan-500/50"
                        >
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1.5" />
                            View Credential
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Summary Stats */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-cyan-400">{certifications.length}</div>
                <div className="text-xs text-zinc-400">Total Certifications</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-400">
                  {certifications.reduce((acc, cert) => acc + (cert.skills?.length || 0), 0)}
                </div>
                <div className="text-xs text-zinc-400">Skills Covered</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </CardContent>
    </Card>
  )
}
