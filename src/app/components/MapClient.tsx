'use client';

import React, { useEffect, useRef } from 'react';
import type { LeafletMouseEvent } from 'leaflet';
import type LType from 'leaflet';
let L: any;
if (typeof window !== 'undefined') {
  L = require('leaflet');
}

interface MapClientProps {
  pickup: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  onPickupChange: (lat: number, lng: number) => void;
  onDestinationChange: (lat: number, lng: number) => void;
  markerMode: 'pickup' | 'destination';
}

export default function MapClient({
  pickup,
  destination,
  onPickupChange,
  onDestinationChange,
  markerMode,
}: MapClientProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LType.Map | null>(null);
  const pickupMarkerRef = useRef<LType.Marker | null>(null);
  const destinationMarkerRef = useRef<LType.Marker | null>(null);
  const routeLineRef = useRef<LType.Polyline | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize Map object
    const mapInstance = L.map(mapContainerRef.current, {
      zoomControl: true,
      scrollWheelZoom: true,
    }).setView([pickup.lat, pickup.lng], 14);

    // Dark Theme CartoDB Tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CartoDB</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(mapInstance);

    mapRef.current = mapInstance;

    // Custom inline DivIcons
    const goldIcon = L.divIcon({
      className: 'custom-map-marker-pickup',
      html: '<div style="background-color: #d4af37; width: 14px; height: 14px; border: 2.5px solid #fff; border-radius: 50%; box-shadow: 0 0 10px #d4af37;"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    const redIcon = L.divIcon({
      className: 'custom-map-marker-dest',
      html: '<div style="background-color: #ff3b30; width: 14px; height: 14px; border: 2.5px solid #fff; border-radius: 50%; box-shadow: 0 0 10px #ff3b30;"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    // Create Markers
    const pMarker = L.marker([pickup.lat, pickup.lng], {
      icon: goldIcon,
      draggable: true,
    }).addTo(mapInstance);

    const dMarker = L.marker([destination.lat, destination.lng], {
      icon: redIcon,
      draggable: true,
    }).addTo(mapInstance);

    pickupMarkerRef.current = pMarker;
    destinationMarkerRef.current = dMarker;

    // Handle map click
    mapInstance.on('click', (e: LeafletMouseEvent) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      // In Leaflet click listener, we read the latest markerMode via a mutable state or reference.
      // But we can check it, or we will handle it in a separate effect.
    });

    // Handle marker dragend
    pMarker.on('dragend', () => {
      const pos = pMarker.getLatLng();
      onPickupChange(pos.lat, pos.lng);
    });

    dMarker.on('dragend', () => {
      const pos = dMarker.getLatLng();
      onDestinationChange(pos.lat, pos.lng);
    });

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // Run once on mount

  // Sync Marker Mode click handler
  useEffect(() => {
    const mapInstance = mapRef.current;
    if (!mapInstance) return;

    // Clear previous click listeners
    mapInstance.off('click');

    // Register new click listener with updated markerMode
    mapInstance.on('click', (e) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      if (markerMode === 'pickup') {
        if (pickupMarkerRef.current) {
          pickupMarkerRef.current.setLatLng([lat, lng]);
          onPickupChange(lat, lng);
        }
      } else {
        if (destinationMarkerRef.current) {
          destinationMarkerRef.current.setLatLng([lat, lng]);
          onDestinationChange(lat, lng);
        }
      }
    });
  }, [markerMode, onPickupChange, onDestinationChange]);

  // Sync Marker positions from props (e.g. quick select buttons)
  useEffect(() => {
    if (pickupMarkerRef.current) {
      const currentPos = pickupMarkerRef.current.getLatLng();
      if (currentPos.lat !== pickup.lat || currentPos.lng !== pickup.lng) {
        pickupMarkerRef.current.setLatLng([pickup.lat, pickup.lng]);
      }
    }
  }, [pickup.lat, pickup.lng]);

  useEffect(() => {
    if (destinationMarkerRef.current) {
      const currentPos = destinationMarkerRef.current.getLatLng();
      if (currentPos.lat !== destination.lat || currentPos.lng !== destination.lng) {
        destinationMarkerRef.current.setLatLng([destination.lat, destination.lng]);
      }
    }
  }, [destination.lat, destination.lng]);

  // Redraw path when positions change
  useEffect(() => {
    const mapInstance = mapRef.current;
    if (!mapInstance || !pickupMarkerRef.current || !destinationMarkerRef.current) return;

    const p1 = pickup;
    const p2 = destination;

    if (routeLineRef.current) {
      mapInstance.removeLayer(routeLineRef.current);
    }

    const routeLine = L.polyline([[p1.lat, p1.lng], [p2.lat, p2.lng]], {
      color: '#d4af37',
      weight: 4,
      opacity: 0.8,
      dashArray: '8, 8',
      lineCap: 'round',
    }).addTo(mapInstance);

    routeLineRef.current = routeLine;

    // Fit map bounds to show both markers
    mapInstance.fitBounds(routeLine.getBounds(), { padding: [40, 40] });
  }, [pickup.lat, pickup.lng, destination.lat, destination.lng]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100%', minHeight: '480px' }} />;
}
