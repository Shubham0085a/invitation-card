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
    <main className="min-h-screen w-full bg-[#ffffff] text-[#161513] selection:bg-[#f0cc71]/30 selection:text-[#161513]">
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
