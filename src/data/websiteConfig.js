export const BUSINESS = {
  name: 'Home Love Waste Management',
  tagline: 'Cesspool Emptier & Liquid Waste Dislodging Services',
  country: 'Ghana',
  region: 'Greater Accra & Surrounding Areas',
  status: 'Open 24 Hours • Monday to Sunday',
  
  phones: [
    { number: '055 277 9904', network: 'MTN', tel: 'tel:0552779904', isPrimary: true },
    { number: '027 795 0202', network: 'Telecel / Tigo', tel: 'tel:0277950202' },
    { number: '024 464 7338', network: 'MTN (WhatsApp)', tel: 'tel:0244647338', isWhatsApp: true },
  ],
  primaryPhone: '055 277 9904',
  primaryTel: 'tel:0552779904',
  whatsappNumber: '233244647338',
  whatsappDisplay: '024 464 7338',
  whatsappUrl: `https://wa.me/233244647338?text=${encodeURIComponent('Hello Home Love Waste Management, I need septic tank dislodging / waste management service in Ghana.')}`,
  
  // Ghanaian service coverage areas
  serviceAreas: [
    'East Legon', 'Spintex', 'Tema', 'Madina', 'Adenta', 
    'Achimota', 'Dansoman', 'Kasoa', 'Lapaz', 'Weija', 
    'Cantonments', 'Airport Residential', 'Ashaiman', 'Greater Accra'
  ],

  // Core services tailored to Ghanaian homes and businesses
  services: [
    {
      id: 'septic-dislodging',
      title: 'Septic Tank Dislodging & Emptying',
      short: 'Standard & deep suction emptying for residential compounds, apartments, and private homes.',
      desc: 'Full evacuation of toilet pits and septic tanks using our high-powered suction vacuum tanker. Fast, clean, odor-controlled, leaving your compound completely clean.'
    },
    {
      id: 'commercial-waste',
      title: 'Commercial & Institutional Waste',
      short: 'Scheduled liquid waste extraction for hotels, schools, hospitals, factories, and offices.',
      desc: 'Large-capacity liquid waste management contracts with prompt scheduling and certified environmental disposal manifests for institutions across Accra.'
    },
    {
      id: 'soakaway-manhole',
      title: 'Soakaway & Manhole Unblocking',
      short: 'Clearing choked soakaways, sewer lines, and inspection chambers to eliminate bad smells.',
      desc: 'Heavy-duty suction and water flushing to unchoke overflowing soakaway pits, clogged toilet chambers, and sewage lines.'
    },
    {
      id: 'emergency-dislodging',
      title: '24/7 Emergency Overflow Response',
      short: 'Immediate dispatch when your septic tank overflows or toilets stop flushing.',
      desc: 'Available 24 hours a day, 7 days a week. We dispatch our nearest vacuum tanker truck right to your doorstep anywhere in Accra and nearby towns.'
    }
  ],

  // Real gallery items
  gallery: [
    {
      id: 1,
      title: 'Our Vacuum Tanker Truck on Duty',
      caption: 'Heavy-duty red & white suction tanker truck servicing a residential property in Accra.',
      src: '/truck.jpg',
      badge: 'Operational Fleet'
    },
    {
      id: 2,
      title: 'Residential Neighborhood Dispatch',
      caption: 'Prompt road dispatch to estates and compounds across Greater Accra.',
      src: '/truck-service.jpg',
      badge: 'On the Road'
    },
    {
      id: 3,
      title: 'Hose Connection & Tank Evacuation',
      caption: 'Sanitary sealed suction hoses connected to ground manhole with zero compound spills.',
      src: '/on-site-service.jpg',
      badge: 'Safe On-Site Work'
    }
  ]
};
