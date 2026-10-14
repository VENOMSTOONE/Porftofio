export interface ProjectItem {
  id: string;
  title: string;
  assetKey: string; // original asset identifier from client prompt (e.g., Intro Demo 1)
  category: string;
  projectType: 'Editing Demonstration' | 'Independent Spec Project';
  duration: string;
  description: string;
  videoUrl?: string; // Replaceable video path or YouTube/Vimeo embed URL
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
      'I transform scripts and narration into cinematic mystery and investigative documentaries through deliberate pacing, compelling visuals, documentary motion graphics, and immersive sound design.',
    primaryCta: 'Explore My Work',
    secondaryCta: 'Discuss a Project',
  },

  selectedWork: {
    heading: 'Selected Work',
    subheading: 'Visual experiments and documentary-style edits built around atmosphere, evidence, and storytelling.',
    note: 'All portfolio samples represent genuine demonstrations of documentary editing capability, visual reconstruction, and motion graphics craftsmanship.',
    projects: [
      {
        id: 'intro-demo-1',
        title: 'Intro Demo 1 — Cold Open & Narrative Hook',
        assetKey: 'Intro Demo 1',
        category: 'Cinematic Cold Open',
        projectType: 'Editing Demonstration',
        duration: '01:45',
        description:
          'Demonstrates high-tension hook pacing: establishing an unexplained disappearance using gradual visual escalation, atmospheric drone sound design, and understated typography.',
        videoUrl: '', // PLACEHOLDER: Insert path e.g. '/videos/intro-demo-1.mp4' or YouTube URL
        aspectRatio: '16:9',
        techniques: ['Atmospheric slow-burn pacing', 'Sub-bass narrative tension', 'Restrained title treatment'],
        audioNotes: 'Custom drone build layered with archival radio static and low-frequency heartbeat pulse.',
        visualTreatment: 'Desaturated 35mm tone, subtle vignette, and deliberate contrast curve for night exterior scene.',
      },
      {
        id: 'intro-demo-2',
        title: 'Intro Demo 2 — The Investigative Conflict Hook',
        assetKey: 'Intro Demo 2',
        category: 'Investigative Hook',
        projectType: 'Editing Demonstration',
        duration: '02:10',
        description:
          'Deconstructs conflicting official radar logs against eyewitness testimonies, using synchronized split-screens and optical audio pulses to highlight inconsistencies.',
        videoUrl: '', // PLACEHOLDER: Insert path e.g. '/videos/intro-demo-2.mp4'
        aspectRatio: '16:9',
        techniques: ['Synchronized dual-evidence cuts', 'Audio waveform visualization', 'Pacing cadence for voiceover'],
        audioNotes: 'Air traffic recording frequency isolation with tense analog synthesizer drone.',
        visualTreatment: 'CRT monitor scanlines, monochrome satellite maps with amber evidence callouts.',
      },
      {
        id: 'intro-demo-3',
        title: 'Intro Demo 3 — Historical Mystery & Archival Mood',
        assetKey: 'Intro Demo 3',
        category: 'Historical Atmosphere',
        projectType: 'Editing Demonstration',
        duration: '01:30',
        description:
          'Blends 1970s microfiche documents, archival photographs, and rhythmic acoustic percussion to bridge an investigative past with present-day findings.',
        videoUrl: '', // PLACEHOLDER: Insert path e.g. '/videos/intro-demo-3.mp4'
        aspectRatio: '16:9',
        techniques: ['Microfiche & newspaper reconstruction', 'Parallax photo restoration', 'Rhythmic pacing cuts'],
        audioNotes: 'Tactile reel-to-reel tape mechanical clicks paired with deep bowed cello chords.',
        visualTreatment: 'Kodak Tri-X grain simulation, warm archival sepia tint, and subtle gate-weave.',
      },
      {
        id: 'mg-demo-1',
        title: 'MG Demo 1 — Forensic Evidence & Declassified Logs',
        assetKey: 'MG Demo 1',
        category: 'Documentary Motion Graphics',
        projectType: 'Editing Demonstration',
        duration: '00:55',
        description:
          'Clean, understated document redaction reveals, tactile case file handling, and typewriter text animation designed to convey complex paper trails with clarity.',
        videoUrl: '', // PLACEHOLDER: Insert path e.g. '/videos/mg-demo-1.mp4'
        aspectRatio: '16:9',
        techniques: ['Tactile paper physics', 'Dynamic redaction reveals', 'Hierarchical information design'],
        audioNotes: 'Heavy typewriter mechanical strikes and paper rustle recorded on Sennheiser MKH416.',
        visualTreatment: 'High-resolution scan textures, selective DOF blurring, and amber highlighter treatment.',
      },
      {
        id: 'mg-demo-2',
        title: 'MG Demo 2 — Cartographic Route & Geospatial Tracking',
        assetKey: 'MG Demo 2',
        category: 'Maps & Geospatial Graphics',
        projectType: 'Editing Demonstration',
        duration: '01:15',
        description:
          'High-contrast 3D topographic tracking illustrating harsh mountain terrain, search party search sectors, and the exact coordinate of the last confirmed sighting.',
        videoUrl: '', // PLACEHOLDER: Insert path e.g. '/videos/mg-demo-2.mp4'
        aspectRatio: '16:9',
        techniques: ['Topographic heightmap camera moves', 'Vector coordinate plotting', 'Elevation graph overlays'],
        audioNotes: 'Wind telemetry gusts, faint satellite ping resonances, and sub-rumble terrain bass.',
        visualTreatment: 'Dark slate cartographic palette with glowing amber vector routes and GPS timestamps.',
      },
      {
        id: 'timeline-1',
        title: 'Timeline 1 — Multi-Perspective Chronology',
        assetKey: 'Timeline 1',
        category: 'Evidence & Chronology',
        projectType: 'Editing Demonstration',
        duration: '01:40',
        description:
          'Multi-track synchronized visual timeline correlating simultaneous witness accounts, emergency dispatch logs, and cell tower triangulation in a single coherent sequence.',
        videoUrl: '', // PLACEHOLDER: Insert path e.g. '/videos/timeline-1.mp4'
        aspectRatio: '16:9',
        techniques: ['Parallel event tracking', 'Timecode synchronization', 'Information hierarchy'],
        audioNotes: 'Subtle clock ticking motif morphed into harmonic synthesizer pulses as time expires.',
        visualTreatment: 'Minimalist dark grid, synchronized vertical cursor, and contrasting eyewitness cards.',
      },
    ],
  },

  problems: {
    heading: 'Problems I Solve',
    subheading: 'Investigative documentaries fail when edits are treated like standard video montages. Here is how I solve the four most critical storytelling breakdowns.',
    items: [
      {
        number: '01',
        title: 'Narration Without Visual Momentum',
        challenge: 'Long stretches of narration can feel visually repetitive when editors rely on generic stock footage or arbitrary cuts.',
        approach:
          'I build purposeful B-roll sequencing, deliberate visual rhythm, and layered soundscapes that sustain viewer curiosity while actively reinforcing the script.',
        keyTakeaway: 'Visuals that amplify words rather than just filling empty screen time.',
      },
      {
        number: '02',
        title: 'Complex Stories That Are Difficult to Follow',
        challenge:
          'Investigative subjects frequently involve multiple people, overlapping timelines, technical records, and shifting locations that easily confuse audiences.',
        approach:
          'I engineer custom maps, synchronized timelines, and clear evidence graphics that distill dense investigations into digestible, visually coherent narratives.',
        keyTakeaway: 'Complex facts transformed into intuitive, memorable visual sequences.',
      },
      {
        number: '03',
        title: 'Visuals That Lack Atmosphere',
        challenge:
          'A mystery documentary loses its emotional impact when footage looks too bright, sterile, disjointed, or mismatched in tone.',
        approach:
          'I apply intentional visual selection, restrained motion graphics, archival color treatments, and immersive sound design to ground the film in authentic atmosphere.',
        keyTakeaway: 'A cohesive, cinematic visual identity tuned to the mood of the mystery.',
      },
      {
        number: '04',
        title: 'Editing That Fails to Support the Story',
        challenge:
          'Flashy transitions, fast jump-cuts, and aggressive effects cannot compensate for weak pacing or unclear storytelling.',
        approach:
          'Every editorial cut is dictated by narrative structure, voiceover inflection points, information hierarchy, and emotional weight.',
        keyTakeaway: 'Restrained, story-first decision making where every cut has a purpose.',
      },
    ],
  },

  breakdown: {
    heading: 'Every Frame Has a Purpose.',
    subheading:
      'Strong documentary editing is about more than what appears on screen. It is about choosing the right visual, at the right moment, for the right reason.',
    featuredCase: {
      title: 'Scene Analysis — The Cold Open Transition',
      context: 'Demonstration Case: The High Pass Mystery (Intro Demo 1 Breakdown)',
      storytellingChallenge:
        'Bridging 45 seconds of dense voiceover regarding contradictory eyewitness statements without losing tension or overwhelming the viewer with text.',
      creativeDecision:
        'Instead of generic stock footage, the sequence is built around three synchronized visual layers: a desaturated 1982 topographic map, a slow optical punch-in on coordinate markers, and redacted field report clippings.',
      reasoning:
        'Documentary audiences watch mystery content to solve an enigma. Giving them tangible, forensic-grade assets creates immersion and trust, while acoustic micro-pauses in the soundscape let key voiceover revelations land with weight.',
      howVisualsSupportNarration:
        'Every visual cut aligns with voiceover inflection points rather than arbitrary rhythmic beats, ensuring viewer cognitive focus remains locked to the investigative thesis.',
      keyframes: [
        {
          timecode: '00:00 - 00:18',
          label: 'The Narrative Anchor',
          narrationPrompt: '"At 03:42 AM, the weather station logged its final anomalous reading..."',
          editorialChoice: 'Slow 1.5% push on monochrome topographic elevation map. Avoid cutting away prematurely to let the isolated geographical context settle.',
          soundCue: 'Low-frequency sub-rumble (42Hz) layered with vintage radio receiver squelch and biting wind audio.',
        },
        {
          timecode: '00:18 - 00:34',
          label: 'The Contradiction Reveal',
          narrationPrompt: '"The official report cited equipment failure. The handwritten log told a different story."',
          editorialChoice: 'Hard match-cut from satellite contour to macro scan of handwritten logbook. Highlight marker animates across the discrepancies.',
          soundCue: 'Paper friction swipe, mechanical typewriter return bell, and subtle riser drop.',
        },
        {
          timecode: '00:34 - 00:52',
          label: 'The Geographical Isolation',
          narrationPrompt: '"Between these two ridges lies a 14-mile dead zone where no emergency frequencies penetrate."',
          editorialChoice: 'Isometric 3D elevation map tracks the ridgeline, rendering radio blindspot in translucent amber vector shading.',
          soundCue: 'Abrupt drop of music bed into dead room silence, leaving only the narrator’s voice and a faint VHF static hum.',
        },
        {
          timecode: '00:52 - 01:10',
          label: 'The Cold Open Climax',
          narrationPrompt: '"What the search team discovered at dawn was not what they were prepared for."',
          editorialChoice: 'Fast rhythmic cut sequence: three flash frames of archival equipment followed by black frame pause before title reveal.',
          soundCue: 'Deep resonant boom impact with sustained sub-decay transitioning into main title thematic drone.',
        },
      ],
    },
  },

  services: {
    heading: 'Editing Built Around the Story.',
    subheading: 'Specialized post-production capabilities tailored exclusively for high-end documentary creators and investigative channels.',
    items: [
      {
        number: '01',
        title: 'Cinematic Documentary Editing',
        description: 'Narration-driven editing focused on pacing, structure, atmosphere, and visual storytelling.',
        deliverables: [
          'Story pacing tuned to script cadence',
          'Cinematic tension and narrative breath control',
          'Seamless integration of A-roll voiceover & narrative visuals',
        ],
      },
      {
        number: '02',
        title: 'Visual Storytelling & B-Roll',
        description: 'Purposeful visual selection and sequencing that supports narration and makes complex ideas easier to understand.',
        deliverables: [
          'High-intent B-roll curation & historical matching',
          'Visual metaphors that reinforce unseen narrative points',
          'Zero filler or repetitive stock montage',
        ],
      },
      {
        number: '03',
        title: 'Documentary Motion Graphics',
        description: 'Understated, story-driven motion graphics that communicate information without overwhelming the documentary.',
        deliverables: [
          'Declassified document reveals & redactions',
          'Subtle kinetic typography & quote treatments',
          'Period-accurate graphic styles and texture integration',
        ],
      },
      {
        number: '04',
        title: 'Maps, Timelines & Evidence Graphics',
        description: 'Clear visual explanations of locations, chronology, relationships, and relevant evidence.',
        deliverables: [
          '3D topographic maps & search route plots',
          'Interactive multi-perspective chronological timelines',
          'Evidence board connections & forensic diagrams',
        ],
      },
      {
        number: '05',
        title: 'Sound Design & Cinematic Finishing',
        description: 'Sound layering, atmosphere, transitions, and finishing touches that help create a coherent documentary experience.',
        deliverables: [
          'Atmospheric room tone, foley & bespoke risers',
          'Vocal cleanup, spectral de-noise & dialogue leveling',
          'Cinematic tone-mapping, color grading & film-grain finishing',
        ],
      },
    ],
  },

  workflow: {
    heading: 'A Clear Process. A Stronger Story.',
    subheading: 'A disciplined four-stage pipeline designed to protect the integrity of your narrative from rough cut to final master.',
    stages: [
      {
        step: '01',
        name: 'DISCOVER',
        tagline: 'Grounded in the script',
        description:
          'We begin by diving into your subject matter, voiceover narration, documentary research, audience expectations, and intended emotional tone.',
        deliverable: 'Creative alignment, visual mood direction, and asset audit.',
      },
      {
        step: '02',
        name: 'PLAN',
        tagline: 'Architecting the visual structure',
        description:
          'Before cutting, I map out visual pacing, identify key scenes requiring custom maps or motion graphics, and establish the evidence presentation strategy.',
        deliverable: 'Visual beat sheet, motion graphics brief, and archival footage map.',
      },
      {
        step: '03',
        name: 'EDIT',
        tagline: 'Building tension and clarity',
        description:
          'I assemble the documentary with rigorous attention to pacing, narrative momentum, custom motion graphics, evidence graphics, and layered atmospheric sound design.',
        deliverable: 'Full assembly cut with integrated sound design and preliminary graphics.',
      },
      {
        step: '04',
        name: 'REFINE',
        tagline: 'Polishing every frame',
        description:
          'We review the cut together, fine-tune narrative pacing based on agreed feedback, and complete color grading, audio master mix, and final delivery.',
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
      {
        title: 'Forensic Precision in Motion',
        body: 'When displaying maps, timelines, or documents, clarity is paramount. Audiences need to feel like they are examining authentic artifacts alongside the investigator.',
      },
      {
        title: 'Direct, Professional Collaboration',
        body: 'Clear milestones, transparent communication, and respect for creator vision. No bloated agency layers—just direct collaboration with an editor who cares deeply about the story.',
      },
    ],
    editorialPhilosophy: [
      'Pacing is an emotional tool, not a metric formula.',
      'Sound design does half the storytelling before a cut is even seen.',
      'Complexity requires visual clarity, not decorative distraction.',
      'Every documentary deserves a bespoke aesthetic, not a template.',
    ],
  },

  contact: {
    heading: 'Have a Story Worth Telling?',
    subheading: 'Tell me about your documentary, the story you’re building, and where you need editing support.',
    ctaButton: 'Discuss Your Project',
    directEmail: 'contact@vaibhavlabs.com',
    formInfo:
      'Fill out the project inquiry below or email directly. I respond to serious documentary inquiries within 24 to 48 hours.',
  },
};
