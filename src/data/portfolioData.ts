import { getAssetPath } from '../utils/assetPath';

export interface ProjectItem {
  id: string;
  title: string;
  assetKey: string; // original asset identifier from client prompt (e.g., Intro Demo 1)
  category: string;
  projectType: 'Editing Demonstration' | 'Independent Spec Project';
  duration: string;
  description: string;
  videoUrl?: string; // Replaceable video path or YouTube/Vimeo embed URL
  posterUrl?: string; // High-resolution video poster keyframe
  thumbnailPlaceholderColor?: string;
  aspectRatio: string;
  techniques: string[];
  audioNotes: string;
  visualTreatment: string;
}

export interface ProblemSolution {
  number: string;
  title: string;
  challenge: string;
  approach: string;
  keyTakeaway: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface WorkflowStage {
  step: string;
  name: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface EditingKeyframe {
  timecode: string;
  label: string;
  narrationPrompt: string;
  editorialChoice: string;
  soundCue: string;
}

export interface PortfolioData {
  brand: {
    name: string;
    tagline: string;
    profession: string;
    specialization: string[];
    positioning: string;
    contactEmail: string;
    profileLinks: {
      platform: string;
      url: string;
      label: string;
    }[];
  };
  hero: {
    label: string;
    headline: string;
    supportingCopy: string;
    primaryCta: string;
    secondaryCta: string;
  };
  selectedWork: {
    heading: string;
    subheading: string;
    note: string;
    projects: ProjectItem[];
  };
  problems: {
    heading: string;
    subheading: string;
    items: ProblemSolution[];
  };
  breakdown: {
    heading: string;
    subheading: string;
    featuredCase: {
      title: string;
      context: string;
      storytellingChallenge: string;
      creativeDecision: string;
      reasoning: string;
      howVisualsSupportNarration: string;
      keyframes: EditingKeyframe[];
    };
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  workflow: {
    heading: string;
    subheading: string;
    stages: WorkflowStage[];
  };
  about: {
    heading: string;
    subheading: string;
    principles: {
      title: string;
      body: string;
    }[];
    editorialPhilosophy: string[];
  };
  contact: {
    heading: string;
    subheading: string;
    ctaButton: string;
    directEmail: string;
    formInfo: string;
  };
}

export const portfolioData: PortfolioData = {
  brand: {
    name: 'VAIBHAV LABS',
    tagline: 'Documentary Video Editing & Visual Storytelling',
    profession: 'Documentary Video Editor',
    specialization: [
      'YouTube Mystery Documentaries',
      'Investigative Documentaries',
      'Historical Documentaries',
      'Unexplained Events',
      'Narration-Driven Storytelling',
    ],
    positioning: 'Exclusively focused on high-craft mystery and investigative documentary editing.',
    contactEmail: 'contact@vaibhavlabs.com', // CONFIGURABLE: Update to your preferred inquiries address
    profileLinks: [
      { platform: 'Email', url: 'mailto:contact@vaibhavlabs.com', label: 'contact@vaibhavlabs.com' },
      { platform: 'YouTube', url: 'https://youtube.com', label: 'YouTube Channel' },
      { platform: 'X / Twitter', url: 'https://x.com', label: 'Twitter / X' },
    ],
  },

  hero: {
    label: 'DOCUMENTARY VIDEO EDITOR · MYSTERY & INVESTIGATIVE',
    headline: 'Some stories demand more than just an edit.',
    supportingCopy:
      'I transform scripts and narration into cinematic mystery and investigative documentaries through compelling visuals, purposeful motion graphics, and immersive sound design.',
    primaryCta: 'EXPLORE MY WORK',
    secondaryCta: 'DISCUSS A PROJECT',
  },

  selectedWork: {
    heading: 'Stories told through visuals.',
    subheading: 'A selection of documentary-style edits exploring atmosphere, evidence, pacing, and visual storytelling.',
    note: 'All portfolio samples represent genuine demonstrations of documentary editing capability, visual reconstruction, and motion graphics craftsmanship.',
    projects: [
      {
        id: 'intro-demo-2',
        title: 'The Hollow Creek Case — Archive Record 1987',
        assetKey: 'Intro Demo 2',
        category: 'Cinematic Cold Open & Evidence Hook',
        projectType: 'Editing Demonstration',
        duration: '00:35',
        description:
          'Demonstrates relentless narrative tension: an aged 1980 family portrait slowly pushes in before flash-cutting to a shadowy detective corkboard under an anglepoise lamp, revealing declassified 1987 subterranean coordinates that were never on the official case map.',
        videoUrl: getAssetPath('/videos/intro-demo-2.mp4'),
        posterUrl: getAssetPath('/posters/intro-demo-2.jpg'),
        aspectRatio: '16:9',
        techniques: [
          'Sub-second match cuts from portrait to crime scene',
          'Tactile corkboard evidence & red pin choreography',
          'Split-screen subterranean laser alignment reveal',
        ],
        audioNotes: 'Deep sub-bass drone (38Hz) fused with analog tape flutter, anglepoise lamp mechanical switches, and abrupt silence drops.',
        visualTreatment: 'Desaturated Kodachrome archive warmth, heavy optical vignette, anamorphic lens flare, and warm tungsten spotlighting.',
      },
      {
        id: 'timeline-1',
        title: 'The Burari Deaths — 11 Victims Forensic Timeline',
        assetKey: 'Timeline 1',
        category: 'Forensic Investigation & Chronology',
        projectType: 'Editing Demonstration',
        duration: '00:14',
        description:
          'A rapid, chilling multi-track visual timeline of the infamous Burari mass death investigation in Delhi (28.7041° N, 77.2017° E). Synthesizes satellite surveillance grids, 11 victim halftone portraits, crime scene iron rod evidence, and taut red string connections into a coherent investigative sequence.',
        videoUrl: getAssetPath('/videos/timeline-1.mp4'),
        posterUrl: getAssetPath('/posters/timeline-1.jpg'),
        aspectRatio: '16:9',
        techniques: [
          'GPS coordinate telemetry & satellite tracking',
          'Multi-subject halftone portrait array synchronization',
          'Taut evidence string 3D spatial mapping',
        ],
        audioNotes: 'Low-pass rhythmic clock pulses interwoven with high-frequency metallic evidence string tensions and sub-harmonic impacts.',
        visualTreatment: 'Monochrome halftone print textures, high-contrast satellite contour grids, and striking red vector evidence overlays.',
      },
      {
        id: 'mg-demo-2',
        title: 'October 2, 1940 Aviation Mystery — Blueprints & Forensic Lens',
        assetKey: 'MG Demo 2',
        category: '3D Documentary Motion Graphics',
        projectType: 'Editing Demonstration',
        duration: '00:11',
        description:
          'Tactile 3D investigative workspace reconstruction: an optical magnifying glass glides with realistic light refraction over declassified WWII aircraft schematics, period newspaper headlines ("HUNDREDS SEE TRAGIC SPECTACLE"), and authentic aircraft spotter cards to isolate structural crash factors.',
        videoUrl: getAssetPath('/videos/mg-demo-2.mp4'),
        posterUrl: getAssetPath('/posters/mg-demo-2.jpg'),
        aspectRatio: '16:9',
        techniques: [
          'Physically-based optical glass refraction & distortion',
          'Tactile archival blueprint & newsprint rendering',
          'Dynamic macro depth of field camera drift',
        ],
        audioNotes: 'Subtle glass-on-paper friction, mechanical camera aperture clicks, and a distant atmospheric 1940s engine drone.',
        visualTreatment: 'Aged cyanotype blueprint hues, textured newsprint paper grain, warm desk illumination, and shallow macro focus.',
      },
      {
        id: 'intro-demo-1',
        title: 'Signal 104.7 MHz — The 2:17 AM Mountain Transmission',
        assetKey: 'Intro Demo 1',
        category: 'Unexplained Mystery & Radar Analysis',
        projectType: 'Editing Demonstration',
        duration: '00:29',
        description:
          'Constructs eerie atmospheric dread surrounding an anomalous 2:17 AM transmission detected at 43°N, 20°E. Bridges CRT radar sweeps, audio frequency oscilloscopes ("NO VOICE — NO IDENTIFICATION"), and 3D terrain elevation maps to illustrate an isolated valley dead zone.',
        videoUrl: getAssetPath('/videos/intro-demo-1.mp4'),
        posterUrl: getAssetPath('/posters/intro-demo-1.jpg'),
        aspectRatio: '16:9',
        techniques: [
          'CRT phosphor radar sweep & scanline simulation',
          'Synchronized audio waveform flatline visualization',
          '3D topographic elevation wireframe camera flight',
        ],
        audioNotes: '104.7 MHz frequency whine, atmospheric VHF radio static, eerie sine tone fluctuations, and deep mountain wind gusts.',
        visualTreatment: 'Amber phosphor monochrome CRT monitors, vector elevation wireframes, and dark slate cartographic styling.',
      },
      {
        id: 'mg-demo-1',
        title: 'The $2M Cartel Wire — Global Asset Tracing',
        assetKey: 'MG Demo 1',
        category: 'Kinetic Cartography & Financial Tracking',
        projectType: 'Editing Demonstration',
        duration: '00:15',
        description:
          'A dynamic global forensic money trail deconstructing a $2,000,000 wire transfer. Animates interconnected flight paths and banking routes connecting cartel leadership to African safe houses, China-based agents, and $392,722 split mule accounts in real-time.',
        videoUrl: getAssetPath('/videos/mg-demo-1.mp4'),
        posterUrl: getAssetPath('/posters/mg-demo-1.jpg'),
        aspectRatio: '16:9',
        techniques: [
          'Kinetic vector arc routing across dark orthographic projection',
          'Real-time financial metric & mule account counters',
          'High-velocity hierarchical information typography',
        ],
        audioNotes: 'Fast electronic banking data bursts, encrypted digital chatter, and sharp tactile telemetry clicks.',
        visualTreatment: 'Deep obsidian global projection with electric amber financial trajectories and crisp white monetary callouts.',
      },
      {
        id: 'intro-demo-3',
        title: 'The Vanishing Record — Dr. Elias Morrow Investigation',
        assetKey: 'Intro Demo 3',
        category: 'Prestige Archival & Character Narrative',
        projectType: 'Editing Demonstration',
        duration: '00:33',
        description:
          'Prestige documentary pacing: seamlessly weaves an on-camera interview with historian Dr. Elias Morrow alongside haunting macro B-roll of an abandoned manor room—peeling floral wallpaper, floating dust motes, and forgotten archival records—establishing profound emotional gravity.',
        videoUrl: getAssetPath('/videos/intro-demo-3.mp4'),
        posterUrl: getAssetPath('/posters/intro-demo-3.jpg'),
        aspectRatio: '16:9',
        techniques: [
          'Interview cadence matched to contemplative B-roll cuts',
          'Atmospheric environmental decay & dust motes compositing',
          'Seamless transition from talking head to archival memory',
        ],
        audioNotes: 'Clean, intimate interview dialogue layered over a melancholic solo cello motif and atmospheric room tone.',
        visualTreatment: 'Rich cinematic 35mm grain, subdued natural window lighting, and painterly contrast in dilapidated architectural spaces.',
      },
    ],
  },

  problems: {
    heading: 'Every Story Has a Visual Language.',
    subheading: 'How a disciplined documentary editing approach resolves four fundamental storytelling challenges.',
    items: [
      {
        number: '01',
        title: 'Narration Without Visual Momentum',
        challenge: 'Long stretches of voiceover without visual purpose lose audience engagement when editors rely on generic footage.',
        approach:
          'Purposeful B-roll, pacing, and sound design help narration feel like a developing visual story.',
        keyTakeaway: 'Visuals that amplify words rather than just filling empty screen time.',
      },
      {
        number: '02',
        title: 'Complex Stories That Are Difficult to Follow',
        challenge:
          'Timelines, multiple characters, conflicting reports, and historical events easily overwhelm viewers.',
        approach:
          'Maps, timelines, evidence graphics, and careful sequencing help make complicated information easier to understand.',
        keyTakeaway: 'Complex facts transformed into intuitive, memorable visual sequences.',
      },
      {
        number: '03',
        title: 'Visuals Without Atmosphere',
        challenge:
          'Sterile stock footage and generic transitions break the immersion required for mystery content.',
        approach:
          'Intentional imagery, restrained motion graphics, and cinematic finishing help establish the appropriate mood.',
        keyTakeaway: 'A cohesive, cinematic visual identity tuned to the mood of the mystery.',
      },
      {
        number: '04',
        title: 'Effects Without Storytelling',
        challenge: 'Transitions and visual effects cannot replace clear storytelling.',
        approach:
          'Editing decisions should support the narration, reveal relevant information, and maintain a coherent narrative progression.',
        keyTakeaway: 'Technique in service of narrative progression rather than visual novelty.',
      },
    ],
  },

  breakdown: {
    heading: 'Every Frame Has a Purpose.',
    subheading:
      'Strong documentary editing is about more than what appears on screen. It is about choosing the right visual, at the right moment, for the right reason.',
    featuredCase: {
      title: 'Scene Analysis — The Hollow Creek Case Cold Open',
      context: 'Demonstration Case: The Hollow Creek Case (Intro Demo 2 Breakdown)',
      storytellingChallenge:
        'Establishing 23 years of cold-case history in under 35 seconds without relying on static exposition or losing audience suspense.',
      creativeDecision:
        'Anchor the narrative hook on a dual-phase contrast: starting with a tight, nostalgic macro push on a faded 1980 family polaroid, then jarring the viewer into the present via a sudden desk lamp switch revealing a dark forensic corkboard, subterranean coordinates, and red laser alignment vectors.',
      reasoning:
        'Documentary viewers decide within the first 15 seconds whether a mystery is worth their time. Juxtaposing personal family innocence with clinical crime scene evidence builds visceral curiosity, while acoustic silence drops amplify the narrator’s delivery.',
      howVisualsSupportNarration:
        'Every visual cut matches the emotional inflection points of the voiceover rather than arbitrary tempo marks, directing the viewer’s cognitive focus directly to the anomaly.',
      keyframes: [
        {
          timecode: '00:00 - 00:08',
          label: 'The Vintage Portrait Hook',
          narrationPrompt: '"For 23 years, the Hollow Creek case was considered closed..."',
          editorialChoice: 'Slow 1.5% macro push on a 1980 family portrait photograph, drawing focus toward the subject’s expression before introducing the case archive timestamp.',
          soundCue: 'Sub-bass rumble (38Hz) blended with subtle analog tape flutter and muted vinyl crackle.',
        },
        {
          timecode: '00:08 - 00:16',
          label: 'The Evidence Corkboard Reveal',
          narrationPrompt: '"...until an archive record dated 1987 resurfaced..."',
          editorialChoice: 'Hard cut under an anglepoise desk lamp to a sprawling detective corkboard covered with red pushpins, taut strings, and yellowed incident clippings.',
          soundCue: 'Crisp desk lamp switch foley, paper rustle, and a sudden drop into deep room tone.',
        },
        {
          timecode: '00:16 - 00:26',
          label: 'The Discrepancy Split-Screen',
          narrationPrompt: '"...containing coordinates that were never on the official case map."',
          editorialChoice: 'Split-screen dual comparison: vintage polaroids juxtaposed against an excavated subterranean quadrant with red laser alignment crosshairs.',
          soundCue: 'Optical focus snap, mechanical camera shutter click, and ascending harmonic tension drone.',
        },
        {
          timecode: '00:26 - 00:35',
          label: 'The Climax & Title Sting',
          narrationPrompt: '"What was buried beneath Hollow Creek was never meant to be documented."',
          editorialChoice: 'Rapid succession of flash cuts showing handwritten diary coordinates, abruptly plunging into complete black before the main title card resolves.',
          soundCue: 'Sub-harmonic boom impact with prolonged metallic acoustic decay leading into the title sting.',
        },
      ],
    },
  },

  services: {
    heading: 'Editing Built Around the Story.',
    subheading: 'Three focused post-production categories tailored for high-end mystery and investigative documentary creators.',
    items: [
      {
        number: '01',
        title: 'Documentary Editing',
        description: 'Complete pacing and narrative structure tuned to your script, creating tension curves and retention-focused storytelling that keep viewers engaged from cold open to conclusion.',
        deliverables: [
          'Complete pacing & narrative structure',
          'Tension curve optimization',
          'Retention-focused storytelling',
        ],
      },
      {
        number: '02',
        title: 'Motion Graphics & Evidence',
        description: 'Specialized documentary motion graphics that make complex investigations intuitive, credible, and visually arresting.',
        deliverables: [
          'Visual timeline reconstruction',
          'Map & satellite animation',
          'Document analysis & evidence boards',
        ],
      },
      {
        number: '03',
        title: 'Cinematic Finishing',
        description: 'Immersive sound design, calibrated color grading, and comprehensive delivery optimization engineered for YouTube documentary standards.',
        deliverables: [
          'Sound design & ambient tension',
          'Color grading & mood styling',
          'YouTube delivery optimization',
        ],
      },
    ],
  },

  workflow: {
    heading: 'From Script to Screen.',
    subheading: 'A disciplined three-stage process from initial brief to final video delivery.',
    stages: [
      {
        step: '01',
        name: 'BRIEF',
        tagline: 'Understand the direction',
        description:
          'Understand the script, narration, subject, and creative direction.',
        deliverable: 'Creative alignment, visual mood direction, and asset audit.',
      },
      {
        step: '02',
        name: 'EDIT',
        tagline: 'Build the documentary',
        description:
          'Build the documentary using purposeful visuals, editing, motion graphics, and sound design.',
        deliverable: 'Full assembly cut with integrated sound design and evidence graphics.',
      },
      {
        step: '03',
        name: 'DELIVERY',
        tagline: 'Review and finalize',
        description:
          'Review the edit, address agreed feedback, and prepare the final video.',
        deliverable: '4K/1080p master export, project archive, and clean assets.',
      },
    ],
  },

  about: {
    heading: 'Stories First. Visuals With Purpose.',
    subheading: 'VAIBHAV LABS is an independent editing studio dedicated exclusively to the craft of mystery, historical, and investigative documentary filmmaking.',
    principles: [
      {
        title: 'Narration-Driven Visual Storytelling',
        body: 'The voiceover is the spine of the documentary. Every visual choice is made to serve what is being said, ensuring that the imagery never fights the narration for attention.',
      },
      {
        title: 'Atmosphere Through Restraint',
        body: 'True mystery does not come from gratuitous glitch effects or loud transitions. It comes from shadow, pacing, silence, and deliberate visual weight that lets the viewer absorb the gravity of the event.',
      },
    ],
    editorialPhilosophy: [
      'Pacing is an emotional tool, not a metric formula.',
      'Sound design does half the storytelling before a cut is even seen.',
    ],
  },

  contact: {
    heading: 'Have a Story Worth Telling?',
    subheading: 'Tell me about your next documentary.',
    ctaButton: 'DISCUSS YOUR PROJECT',
    directEmail: 'contact@vaibhavlabs.com',
    formInfo:
      'Fill out the project inquiry below or email directly. I respond to serious documentary inquiries within 24 to 48 hours.',
  },
};
