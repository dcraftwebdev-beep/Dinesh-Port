import FinanceDashboard from './FinanceDashboard/FinanceDashboard.jsx';
import MusicPlayer from './MusicPlayer/MusicPlayer.jsx';
import ValuesBoard from './ValuesBoard/ValuesBoard.jsx';
import ApprovalWorkflow from './ApprovalWorkflow/ApprovalWorkflow.jsx';
import CardSettings from './CardSettings/CardSettings.jsx';
import AnalyticsOverview from './AnalyticsOverview/AnalyticsOverview.jsx';
import Wireframes from './Wireframes/Wireframes.jsx';
import LegacyDashboard from './LegacyDashboard/LegacyDashboard.jsx';
import CardShowcase from './CardShowcase/CardShowcase.jsx';
import AdPeekPanel from './AdPeekPanel/AdPeekPanel.jsx';
import AdPeekInsights from './AdPeekInsights/AdPeekInsights.jsx';
import AdPeekSwipe from './AdPeekSwipe/AdPeekSwipe.jsx';
import ChatfollowInbox from './ChatfollowInbox/ChatfollowInbox.jsx';
import ChatfollowBoard from './ChatfollowBoard/ChatfollowBoard.jsx';

// Registry — keys are referenced from data/projects.js and data/caseStudies/*
export const mockups = {
  finance: FinanceDashboard,
  music: MusicPlayer,
  values: ValuesBoard,
  approvals: ApprovalWorkflow,
  cardSettings: CardSettings,
  analytics: AnalyticsOverview,
  wireframes: Wireframes,
  legacy: LegacyDashboard,
  cardShowcase: CardShowcase,
  adpeek: AdPeekPanel,
  adpeekInsights: AdPeekInsights,
  adpeekSwipe: AdPeekSwipe,
  chatfollow: ChatfollowInbox,
  chatfollowBoard: ChatfollowBoard,
};
