import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import Prose from '../blocks/Prose/Prose.jsx';
import StatCards from '../blocks/StatCards/StatCards.jsx';
import FeatureCards from '../blocks/FeatureCards/FeatureCards.jsx';
import MediaFrame from '../blocks/MediaFrame/MediaFrame.jsx';
import QuoteCard from '../blocks/QuoteCard/QuoteCard.jsx';
import InsightGrid from '../blocks/InsightGrid/InsightGrid.jsx';
import JourneyMap from '../blocks/JourneyMap/JourneyMap.jsx';
import AffinityMap from '../blocks/AffinityMap/AffinityMap.jsx';
import CompareSlider from '../blocks/CompareSlider/CompareSlider.jsx';

// `type` in data/caseStudies/* → component
const registry = {
  text: Prose,
  stats: StatCards,
  cards: FeatureCards,
  media: MediaFrame,
  quote: QuoteCard,
  insights: InsightGrid,
  journey: JourneyMap,
  affinity: AffinityMap,
  compare: CompareSlider,
};

export default function BlockRenderer({ block, first = false }) {
  const { type, ...props } = block;
  const Component = registry[type];
  // Only prose uses `first` (drops the extra gap above a sub-heading)
  if (type === 'text') props.first = first;

  if (!Component) {
    if (import.meta.env.DEV) console.warn(`Unknown case study block type: "${type}"`);
    return null;
  }

  return (
    <Reveal>
      <Component {...props} />
    </Reveal>
  );
}
