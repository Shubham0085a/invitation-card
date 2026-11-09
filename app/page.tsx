import {
  HeroSection,
  InvitationSection,
  EventsSection,
  FamilySection,
  VenueSection,
  FooterSection,
} from "@/components/sections";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#fffbf5] text-[#2a1208] selection:bg-[#fbbf24]/30 selection:text-[#7f1d1d]">
      {/* Background Shehnai / Music toggle */}
      <AudioPlayer />

      {/* 1. Hero Section with Ganesh, Avatars, Countdown */}
      <HeroSection />

      {/* 2. Main Invitation Letter & Bride/Groom cards */}
      <InvitationSection />

      {/* 3. Wedding Schedule & Events Timeline */}
      <EventsSection />

      {/* 4. Family & Host Details */}
      <FamilySection />

      {/* 5. Venue & Navigation */}
      <VenueSection />

      {/* 6. Traditional Footer */}
      <FooterSection />
    </main>
  );
}
