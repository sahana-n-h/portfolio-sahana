import portfolioData from "@/data/portfolio-data.json"

// Export the portfolio data
export const data = portfolioData

// Type definitions for the portfolio data
export type PortfolioData = typeof portfolioData

// Helper function to get navigation items
export function getNavItems() {
  return data.navigation
}

// Helper function to get personal information
export function getPersonalInfo() {
  return data.personal
}

// Helper function to get about information
export function getAboutInfo() {
  return data.about
}

// Helper function to get experience information
export function getExperienceInfo() {
  return data.experience
}

// Helper function to get education information
export function getEducation() {
  return data.education
}

// Helper function to get technical skills information
export function getTechnicalSkillsInfo() {
  return data.technicalSkills
}

// Helper function to get meta information
export function getMetaInfo() {
  return data.meta
}

// Helper function to get publications (now enhanced as research projects)
export function getPublications() {
  return data.publications
}

// Helper function to get research projects (alias for publications)
export function getResearchProjects() {
  return data.publications
}

// Helper function to get certifications
export function getCertifications() {
  return data.certifications
}
