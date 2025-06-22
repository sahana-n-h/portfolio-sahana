import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface Education {
  degree: string
  institution: string
  year: string
  logo?: string
}

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <GraduationCap className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Education</h3>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
              <div className="bg-zinc-800/30 p-4 sm:p-5 rounded-lg border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Logo */}
                  {edu.logo && (
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.institution}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white leading-tight">{edu.degree}</h4>
                      <p className="text-sm text-cyan-400 font-medium">{edu.institution}</p>
                    </div>

                    <div className="text-xs text-zinc-400">
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Summary */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <div className="text-center">
              <div className="text-lg font-bold text-cyan-400">{education.length}</div>
              <div className="text-xs text-zinc-400">Degrees Earned</div>
            </div>
          </div>
        </AnimatedSection>
      </CardContent>
    </Card>
  )
}
