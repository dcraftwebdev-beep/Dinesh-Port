import MagneticButton from './MagneticButton/MagneticButton.jsx';
import SpotlightCard from './SpotlightCard/SpotlightCard.jsx';
import TiltCard from './TiltCard/TiltCard.jsx';
import TextScramble from './TextScramble/TextScramble.jsx';
import LikeBurst from './LikeBurst/LikeBurst.jsx';
import Odometer from './Odometer/Odometer.jsx';
import SlidingTabs from './SlidingTabs/SlidingTabs.jsx';
import SwipeDeck from './SwipeDeck/SwipeDeck.jsx';
import SkillsMarquee from './SkillsMarquee/SkillsMarquee.jsx';

// Registry: keys are referenced by `demo` in data/experiments.js
export const labDemos = {
  magnetic: MagneticButton,
  spotlight: SpotlightCard,
  tilt: TiltCard,
  scramble: TextScramble,
  like: LikeBurst,
  odometer: Odometer,
  tabs: SlidingTabs,
  deck: SwipeDeck,
  marquee: SkillsMarquee,
};
