export const BRAND_INFO = {
  name: "CROSA",
  fullName: "CROSA Pain Management & Rehabilitation Center",
  tagline: "Move Better. Live Pain Free.",
  secondaryTagline: "Less Pain, More Movement, Better Life",
  motto: "Recover • Rehabilitate • Perform",
  supportingText:
    "Specialised care for your pain & movement. Expert pain relief, sports massage, rehabilitation, movement therapy, and clinical recovery in Colombo.",
  description:
    "CROSA is a specialised pain management and movement rehabilitation center in Colombo. We specialise in back pain, neck pain, shoulder pain, knee pain, sports injuries, and post-injury rehab — helping you recover, rehabilitate, and perform.",
  address: {
    street: "283 - 287 Thimbirigasyaya Rd",
    city: "Colombo",
    country: "Sri Lanka",
    postalCode: "00500",
    full: "283 - 287 Thimbirigasyaya Rd, Colombo, Sri Lanka, 00500",
  },
  phone: "074 161 4191",
  phoneDisplay: "074 161 4191",
  phoneInternational: "+94 74 161 4191",
  whatsappNumber: "94741614191",
  email: "crosafitness01@gmail.com",
  website: "crosaclinic.com",
  hours: {
    weekdays: "Open every day: 24 hours",
    weekends: "Monday - Sunday, 24/7",
  },
  googleMapsUrl: "https://maps.google.com/?q=283+Thimbirigasyaya+Rd,+Colombo+00500",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.985651478144!2d79.86616237599026!3d6.892318893106889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963b65287f3%3A0xe54ef02daef73144!2sThimbirigasyaya%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const CONDITIONS_TREATED = [
  {
    name: "Back Pain",
    category: "Spine Care",
    description: "Targeted lumbar decompression, spinal alignment, and relief from acute spasms or chronic aches.",
  },
  {
    name: "Neck Pain",
    category: "Cervical Care",
    description: "Suboccipital release, postural realignment, and easing of desk-strain tension headaches.",
  },
  {
    name: "Shoulder Pain",
    category: "Joint Care",
    description: "Rotator cuff restoration, impingement reduction, and scapular mobility activation.",
  },
  {
    name: "Knee Pain",
    category: "Joint Care",
    description: "Patellofemoral tracking, ligament support, and targeted joint stabilization therapy.",
  },
  {
    name: "Sports Injuries",
    category: "Athletic Rehab",
    description: "Rapid acute injury management, tissue repair, muscular flushing, and athletic reconditioning.",
  },
  {
    name: "Post Injury Rehab",
    category: "Functional Recovery",
    description: "Structured recovery protocols restoring strength, mobility, and confidence post-injury or surgery.",
  },
];

export const CORE_PILLARS = [
  {
    number: "01",
    title: "Recover",
    tagline: "Immediate Pain Relief",
    description: "Alleviate acute symptoms, reduce joint inflammation, and soothe muscular distress through targeted clinical therapy.",
  },
  {
    number: "02",
    title: "Rehabilitate",
    tagline: "Rebuild Function",
    description: "Restore structural integrity, joint stability, and soft-tissue mobility through evidence-led rehabilitation protocols.",
  },
  {
    number: "03",
    title: "Perform",
    tagline: "Movement Longevity",
    description: "Optimize biomechanics, enhance functional strength, and bulletproof your body for an active, pain-free life.",
  },
];

export const SERVICES = [
  {
    id: "pain-relief",
    title: "Pain Relief",
    badge: "Spine & Joint Care",
    shortDescription:
      "Specialised clinical care to alleviate acute and chronic back, neck, shoulder, and knee pain.",
    fullDescription:
      "Our targeted pain relief protocols address the root biomechanical and neuromuscular causes of discomfort. Whether you are experiencing debilitating lower back pain, persistent neck stiffness, shoulder impingement, or knee aches, our clinical therapists combine spinal decompression, manual trigger point therapy, and joint mobilization to deliver immediate relief and lasting comfort.",
    benefits: [
      "Targeted relief for back pain, neck pain, and sciatica",
      "Spine decompression & cervical tension release",
      "Shoulder impingement & rotator cuff therapeutic care",
      "Knee joint stabilization & inflammation management",
      "Non-invasive, evidence-based pain management protocols",
    ],
    image: "/images/physio/pain-relief.jpg",
    whatsappMessage: "Hello CROSA, I would like to consult regarding Pain Relief treatment.",
  },
  {
    id: "sports-massage",
    title: "Sports Massage",
    badge: "Muscular Recovery",
    shortDescription:
      "Deep tissue remedial therapy designed for athletes and active individuals to accelerate recovery and eliminate muscle tension.",
    fullDescription:
      "Engineered for athletes, runners, lifters, and active professionals, our Sports Massage treatments optimize muscular elasticity, flush accumulated metabolic waste, and deactivate dense trigger points. We restore range of motion and accelerate recovery windows so you can perform at your peak without stiffness.",
    benefits: [
      "Deep tissue tension & myofascial trigger point release",
      "Accelerated post-workout recovery & lymphatic clearing",
      "Increased muscular elasticity & joint range of motion",
      "Pre- and post-competition athletic priming",
      "Injury prevention for high-impact physical routines",
    ],
    image: "/images/physio/sports-massage.jpg",
    whatsappMessage: "Hello CROSA, I would like to book a Sports Massage session.",
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation",
    badge: "Post Injury Rehab",
    shortDescription:
      "Structured post-injury and post-surgical protocols to rebuild strength, joint stability, and full functional mobility.",
    fullDescription:
      "Recover safely from acute injuries, ligament sprains, muscle tears, or surgical procedures. Our clinical rehabilitation programs guide you step-by-step through tissue remodeling, joint stabilization, and progressive kinetic reloading to bring you back to full function without fear of re-injury.",
    benefits: [
      "Custom post-injury & post-surgical rehab protocols",
      "Joint stabilization & ligament recovery pathways",
      "Kinetic reloading & muscular re-education",
      "Scar tissue mobilization & swelling reduction",
      "Guided return-to-sport and daily functional movement",
    ],
    image: "/images/physio/rehabilitation.jpg",
    whatsappMessage: "Hello CROSA, I am inquiring about Post Injury Rehabilitation.",
  },
  {
    id: "movement-therapy",
    title: "Movement Therapy",
    badge: "Biomechanics & Mobility",
    shortDescription:
      "Corrective movement coaching and kinetic alignment to restore natural mobility, posture, and effortless function.",
    fullDescription:
      "True freedom of movement begins with proper biomechanics. Our Movement Therapy programs evaluate your kinetic chain to identify postural imbalances, joint restrictions, and movement compensations. Through tailored corrective drills and functional conditioning, we help you move better with zero restriction.",
    benefits: [
      "Comprehensive kinetic screening & gait analysis",
      "Postural correction for desk strain & sedentary patterns",
      "Functional mobility & core stabilization drills",
      "Corrective movement patterns to prevent re-injury",
      "Private 1-on-1 coaching in a calm studio bay",
    ],
    image: "/images/physio/movement-therapy.jpg",
    whatsappMessage: "Hello CROSA, I am interested in Movement Therapy coaching.",
  },
  {
    id: "cupping-therapy",
    title: "Cupping Therapy",
    badge: "Myofascial Release",
    shortDescription:
      "Suction-based cupping therapy to release deep muscle tension, improve circulation and ease stubborn pain.",
    fullDescription:
      "Cupping therapy is offered at CROSA as a separate, dedicated treatment. Suction cups lift and decompress the soft tissue, easing tight muscles and trigger points, boosting local blood flow and helping stiff areas recover. It suits back, neck and shoulder tension and can be combined with your physiotherapy plan.",
    benefits: [
      "Deep muscle tension & trigger point release",
      "Improved local circulation & tissue recovery",
      "Relief for back, neck & shoulder stiffness",
      "Reduced muscle soreness after training",
      "Can be combined with physiotherapy sessions",
    ],
    image: "/images/physio/cupping-therapy.jpg",
    whatsappMessage: "Hello CROSA, I would like to book a Cupping Therapy session.",
  },
  {
    id: "wellness-recovery",
    title: "Clinical Recovery & Mobility",
    badge: "Neuromuscular Recovery",
    shortDescription:
      "Structured clinical recovery and assisted mobility therapies to relieve deep muscular fatigue and sustain long-term movement health.",
    fullDescription:
      "Sustain your physical progress with structured clinical recovery protocols designed to reset neuromuscular tension, alleviate chronic movement fatigue, and promote tissue regeneration. Combining assisted stretching, targeted myofascial decompression, and joint mobility conditioning, our clinical recovery sessions help your body heal, adapt, and maintain lasting freedom of movement.",
    benefits: [
      "Targeted myofascial decompression & neuromuscular reset",
      "Assisted stretching & joint mobility restoration",
      "Post-rehabilitation circulatory clearing & tissue repair",
      "Relief from chronic postural fatigue & desk strain",
      "Long-term mobility maintenance for an active, pain-free life",
    ],
    image: "/images/physio/wellness-recovery.jpg",
    whatsappMessage: "Hello CROSA, I would like to book a Clinical Recovery & Mobility session.",
  },
];

export const WHY_US_FEATURES = [
  {
    title: "Specialised Clinical Care",
    description:
      "Our certified practitioners specialise in pain relief, injury rehabilitation, and biomechanics — treating the root cause of your pain rather than temporary symptoms.",
    icon: "ShieldCheck",
  },
  {
    title: "Complete Recovery Cycle",
    description:
      "We unite acute pain management, targeted sports massage, rehabilitation, and corrective movement therapy under one roof.",
    icon: "Sparkles",
  },
  {
    title: "Private Modern Facility",
    description:
      "Located centrally on Thimbirigasyaya Road in Colombo, our clinic offers completely private treatment suites, modern rehabilitation equipment, and immaculate clinical hygiene.",
    icon: "Building2",
  },
  {
    title: "Personalised Treatment",
    description:
      "Every treatment plan is bespoke — calibrated around your specific injury, pain level, posture, and physical aspirations.",
    icon: "HeartHandshake",
  },
];
