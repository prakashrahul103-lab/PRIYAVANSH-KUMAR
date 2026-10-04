import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { ServicesSection } from './components/ServicesSection';
import { CompetitorIntelligence } from './components/CompetitorIntelligence';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PricingSection } from './components/PricingSection';
import { ClientDashboardPreview } from './components/ClientDashboardPreview';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { AuditFormModal } from './components/AuditFormModal';
import { AuditReportModal } from './components/AuditReportModal';
import { GrowthPlanModal } from './components/GrowthPlanModal';
import { BookAppointmentModal } from './components/BookAppointmentModal';
import { AdminLeadsModal } from './components/AdminLeadsModal';
import { LocationModal } from './components/LocationModal';
import { InsightsModal } from './components/InsightsModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';

import { AuditFormData, AuditReport } from './types';
import { generateAuditReport } from './services/auditService';

export default function App() {
  // Modal states
  const [isAuditFormOpen, setIsAuditFormOpen] = useState(false);
  const [isAuditReportOpen, setIsAuditReportOpen] = useState(false);
  const [currentReport, setCurrentReport] = useState<AuditReport | null>(null);

  const [isGrowthPlanOpen, setIsGrowthPlanOpen] = useState(false);
  const [isBookAppointmentOpen, setIsBookAppointmentOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedLocationSlug, setSelectedLocationSlug] = useState<string | null>(null);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Prefill data for growth plan
  const [prefillData, setPrefillData] = useState<{
    businessName: string;
    city: string;
    businessType: string;
  }>({
    businessName: '',
    city: '',
    businessType: ''
  });

  const handleOpenAudit = (initialCity?: string) => {
    setIsAuditFormOpen(true);
  };

  const handleAuditSubmit = (data: AuditFormData) => {
    const generated = generateAuditReport(data);
    setCurrentReport(generated);
    setPrefillData({
      businessName: data.businessName,
      city: data.city,
      businessType: data.businessCategory
    });
    setIsAuditFormOpen(false);
    setIsAuditReportOpen(true);
  };

  const handleOpenGrowthPlanFromReport = () => {
    setIsAuditReportOpen(false);
    setIsGrowthPlanOpen(true);
  };

  const handleScrollToHowItWorks = () => {
    const el = document.querySelector('#how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-teal-500 selection:text-white flex flex-col">
      {/* 1. Navbar */}
      <Navbar 
        onOpenAudit={() => handleOpenAudit()} 
        onOpenBookAppointment={() => setIsBookAppointmentOpen(true)}
        onOpenInsights={() => setIsInsightsOpen(true)}
        onOpenContact={() => setIsGrowthPlanOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)} 
      />

      <main className="flex-1">
        {/* 2. Hero with Interactive Growth Dashboard Visual */}
        <Hero 
          onOpenAudit={() => handleOpenAudit()} 
          onScrollToHowItWorks={handleScrollToHowItWorks} 
        />

        {/* 3. Problem Section */}
        <ProblemSection 
          onOpenAudit={() => handleOpenAudit()} 
        />

        {/* 4. How It Works (6 Steps Timeline) */}
        <HowItWorks 
          onOpenAudit={() => handleOpenAudit()} 
        />

        {/* 5. Services Capabilities */}
        <ServicesSection 
          onSelectService={(id) => setSelectedServiceId(id)}
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* 6. Competitor Intelligence */}
        <CompetitorIntelligence 
          onOpenAudit={() => handleOpenAudit()} 
        />

        {/* 7. Case Studies */}
        <CaseStudiesSection 
          onOpenAudit={() => handleOpenAudit()} 
        />

        {/* 8. Transparent Pricing & Engagement */}
        <PricingSection 
          onOpenAudit={() => handleOpenAudit()}
          onRequestGrowthPlan={() => setIsGrowthPlanOpen(true)}
        />

        {/* 9. Future-Ready Client Dashboard */}
        <ClientDashboardPreview />

        {/* 10. Honest FAQs */}
        <FAQSection />

        {/* 11. Final CTA */}
        <FinalCTA 
          onOpenAudit={() => handleOpenAudit()} 
        />
      </main>

      {/* 12. Footer */}
      <Footer 
        onOpenAudit={() => handleOpenAudit()}
        onSelectLocation={(slug) => setSelectedLocationSlug(slug)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenInsights={() => setIsInsightsOpen(true)}
      />

      {/* 13. Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <AuditFormModal 
        isOpen={isAuditFormOpen} 
        onClose={() => setIsAuditFormOpen(false)} 
        onSubmitAudit={handleAuditSubmit} 
      />

      <AuditReportModal 
        report={currentReport}
        isOpen={isAuditReportOpen}
        onClose={() => setIsAuditReportOpen(false)}
        onOpenGrowthPlan={handleOpenGrowthPlanFromReport}
      />

      <GrowthPlanModal 
        isOpen={isGrowthPlanOpen}
        onClose={() => setIsGrowthPlanOpen(false)}
        defaultBusinessName={prefillData.businessName}
        defaultCity={prefillData.city}
        defaultBusinessType={prefillData.businessType}
      />

      <BookAppointmentModal 
        isOpen={isBookAppointmentOpen}
        onClose={() => setIsBookAppointmentOpen(false)}
        defaultCategory={prefillData.businessType}
      />

      <AdminLeadsModal 
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      <LocationModal 
        locationSlug={selectedLocationSlug}
        onClose={() => setSelectedLocationSlug(null)}
        onOpenAudit={(city) => handleOpenAudit(city)}
      />

      <InsightsModal 
        isOpen={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
        onOpenAudit={() => handleOpenAudit()}
      />

      <ServiceDetailModal 
        serviceId={selectedServiceId}
        onClose={() => setSelectedServiceId(null)}
        onOpenAudit={() => handleOpenAudit()}
        onRequestGrowthPlan={() => setIsGrowthPlanOpen(true)}
      />
    </div>
  );
}
