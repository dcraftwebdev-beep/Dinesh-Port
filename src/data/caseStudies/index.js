// Client work
import lunchRegister from './lunchRegister.js';
import svtConstructions from './svtConstructions.js';
import mediaBoostrsCms from './mediaBoostrsCms.js';
import mediaBoostrsWebsite from './mediaBoostrsWebsite.js';
import dentalCare from './dentalCare.js';
// Product ideas
import adpeek from './adpeek.js';
import chatfollow from './chatfollow.js';
// Concepts
import avieraFinancialData from './avieraFinancialData.js';
import lumixMusicDiscovery from './lumixMusicDiscovery.js';
import designingAPortfolio from './designingAPortfolio.js';
import avieraFinanceTeams from './avieraFinanceTeams.js';

// Keyed by project slug (see data/projects.js)
const caseStudies = {
  'lunch-register': lunchRegister,
  'svt-constructions': svtConstructions,
  'media-boostrs-cms': mediaBoostrsCms,
  'media-boostrs-website': mediaBoostrsWebsite,
  'dental-care': dentalCare,
  adpeek,
  chatfollow,
  'aviera-financial-data': avieraFinancialData,
  'lumix-music-discovery': lumixMusicDiscovery,
  'designing-a-portfolio': designingAPortfolio,
  'aviera-finance-teams': avieraFinanceTeams,
};

export const getCaseStudy = (slug) => caseStudies[slug];
