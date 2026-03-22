import { WorksGallery } from "@/components/works-gallery"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PrivateProjectsPopup } from "@/components/private-projects-popup"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24 md:pt-32 pb-8 md:pb-16">
        <WorksGallery />
      </main>

      <ContactSection />
      <Footer />
      
      <PrivateProjectsPopup />
    </div>
  )
}
