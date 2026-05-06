import { HeroSection } from '@/components/home/hero-section'
import { TechniquePreview } from '@/components/home/technique-preview'
import { HistoryPreview } from '@/components/home/history-preview'
import { DisciplinesSection } from '@/components/home/disciplines-section'
import { FactsSection } from '@/components/home/facts-section'
import { EquipmentSection } from '@/components/home/equipment-section'
import { RulesPreview } from '@/components/home/rules-preview'
import { BlogPreview } from '@/components/home/blog-preview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechniquePreview />
      <HistoryPreview />
      <DisciplinesSection />
      <FactsSection />
      <EquipmentSection />
      <RulesPreview />
      <BlogPreview />
    </>
  )
}
