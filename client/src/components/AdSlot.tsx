// AdSlot Component — Google AdSense Integration
// Replace data-ad-client and data-ad-slot with your actual AdSense values
// after your site is approved by Google AdSense.
// Publisher ID format: ca-pub-XXXXXXXXXXXXXXXXX
// Ad slot ID: found in your AdSense dashboard per ad unit

interface AdSlotProps {
  slot: "sidebar-top" | "sidebar-bottom" | "inline" | "footer";
  className?: string;
}

// Set to true once you have your AdSense Publisher ID and ad units approved
const ADSENSE_ENABLED = false;
const ADSENSE_PUBLISHER_ID = "ca-pub-XXXXXXXXXXXXXXXXX"; // Replace with your Publisher ID

export function AdSlot({ slot, className = "" }: AdSlotProps) {
  const slotConfig: Record<string, { adSlot: string; width: number; height: number; label: string }> = {
    "sidebar-top": { adSlot: "XXXXXXXXXX", width: 300, height: 250, label: "300×250 Sidebar" },
    "sidebar-bottom": { adSlot: "XXXXXXXXXX", width: 300, height: 250, label: "300×250 Sidebar" },
    "inline": { adSlot: "XXXXXXXXXX", width: 728, height: 90, label: "728×90 Leaderboard" },
    "footer": { adSlot: "XXXXXXXXXX", width: 728, height: 90, label: "728×90 Footer" },
  };

  const config = slotConfig[slot];

  if (ADSENSE_ENABLED) {
    return (
      <div className={`flex justify-center ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: config.width, height: config.height }}
          data-ad-client={ADSENSE_PUBLISHER_ID}
          data-ad-slot={config.adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Placeholder shown during development / before AdSense approval
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-white/10 rounded bg-white/2 text-white/20 text-xs font-mono ${className}`}
      style={{ minHeight: config.height, minWidth: Math.min(config.width, 300) }}
    >
      Ad · {config.label}
    </div>
  );
}
