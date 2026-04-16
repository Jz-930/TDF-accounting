"use client";

import { useEffect, useRef, useState } from "react";

// TDF Accounting office location: 15 Allstate Parkway, 6th Floor, Markham, ON
const OFFICE_LAT = 43.8563;
const OFFICE_LNG = -79.3371;
const DEFAULT_ZOOM = 15;

export function StyledMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    let map: L.Map | null = null;

    const initMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (!mapRef.current) return;

      // Initialize map
      map = L.map(mapRef.current, {
        center: [OFFICE_LAT, OFFICE_LNG],
        zoom: DEFAULT_ZOOM,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      // Add zoom control to bottom-right
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Attribution (required by tile providers)
      L.control
        .attribution({ position: "bottomleft", prefix: false })
        .addAttribution(
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>'
        )
        .addTo(map);

      // Use CartoDB Voyager No Labels for a clean, modern gray base
      // then overlay labels separately for better control
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          subdomains: "abcd",
        }
      ).addTo(map);

      // Add labels layer on top (lighter weight)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          subdomains: "abcd",
        }
      ).addTo(map);

      // Custom marker with brand colors
      const markerIcon = L.divIcon({
        className: "custom-map-marker",
        html: `
          <div class="marker-ping"></div>
          <div class="marker-dot"></div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      // Popup with office info
      const popup = L.popup({
        closeButton: true,
        className: "custom-map-popup",
        offset: [0, -8],
      }).setContent(`
        <div class="popup-content">
          <strong>TDF Accounting</strong>
          <p>6F, 15 Allstate Parkway<br/>Markham, ON L3R 5B4</p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=15+Allstate+Parkway+Markham+ON+L3R+5B4" target="_blank" rel="noopener noreferrer">
            Get Directions →
          </a>
        </div>
      `);

      L.marker([OFFICE_LAT, OFFICE_LNG], { icon: markerIcon })
        .addTo(map)
        .bindPopup(popup)
        .openPopup();

      setMapReady(true);
    };

    initMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className="styled-map-wrapper">
      {/* Loading skeleton */}
      {!mapReady && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            <span className="text-sm text-text-muted">Loading map...</span>
          </div>
        </div>
      )}
      <div ref={mapRef} className="map-container" />

      <style jsx global>{`
        .styled-map-wrapper {
          position: relative;
          width: 100%;
          height: 450px;
          overflow: hidden;
        }

        .map-container {
          width: 100%;
          height: 100%;
        }

        /* ── Gray + Blue filter overlay for tile styling ── */
        .map-container .leaflet-tile-pane {
          filter: saturate(0.15) brightness(1.05) contrast(0.95);
        }

        /* ── Custom Marker ── */
        .custom-map-marker {
          background: none !important;
          border: none !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marker-dot {
          position: absolute;
          width: 16px;
          height: 16px;
          background: #0073BC;
          border: 3px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 115, 188, 0.4);
          z-index: 2;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .marker-ping {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(0, 115, 188, 0.2);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: marker-pulse 2s ease-out infinite;
          z-index: 1;
        }

        @keyframes marker-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        /* ── Custom Popup ── */
        .custom-map-popup .leaflet-popup-content-wrapper {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 33, 54, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
          padding: 0;
          border: 1px solid rgba(0, 115, 188, 0.1);
        }

        .custom-map-popup .leaflet-popup-content {
          margin: 0;
          font-family: var(--font-display), sans-serif;
        }

        .custom-map-popup .leaflet-popup-tip {
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .custom-map-popup .leaflet-popup-close-btn {
          color: #6B7280;
          font-size: 18px;
          top: 8px;
          right: 10px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-map-popup .leaflet-popup-close-btn:hover {
          color: #0073BC;
        }

        .popup-content {
          padding: 16px 20px;
        }

        .popup-content strong {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: #002136;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .popup-content p {
          font-size: 13px;
          color: #6B7280;
          line-height: 1.5;
          margin: 0 0 10px 0;
        }

        .popup-content a {
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          font-weight: 600;
          color: #0073BC;
          text-decoration: none;
          transition: color 0.2s;
        }

        .popup-content a:hover {
          color: #5A9FC9;
        }

        /* ── Zoom Controls ── */
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1) !important;
          border-radius: 12px !important;
          overflow: hidden;
        }

        .leaflet-control-zoom a {
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
          font-size: 16px !important;
          color: #002136 !important;
          background: #ffffff !important;
          border: none !important;
          transition: background 0.2s, color 0.2s;
        }

        .leaflet-control-zoom a:hover {
          background: #f5f5f5 !important;
          color: #0073BC !important;
        }

        .leaflet-control-zoom-in {
          border-bottom: 1px solid #E5E7EB !important;
          border-radius: 12px 12px 0 0 !important;
        }

        .leaflet-control-zoom-out {
          border-radius: 0 0 12px 12px !important;
        }

        /* ── Attribution ── */
        .leaflet-control-attribution {
          background: rgba(255, 255, 255, 0.7) !important;
          backdrop-filter: blur(4px);
          font-size: 10px !important;
          color: #9CA3AF !important;
          padding: 2px 8px !important;
          border-radius: 6px !important;
          margin: 8px !important;
        }

        .leaflet-control-attribution a {
          color: #6B7280 !important;
        }
      `}</style>
    </div>
  );
}
