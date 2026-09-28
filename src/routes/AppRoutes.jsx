import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout/Layout.jsx';
import Home from '@/pages/Home/Home.jsx';
import Experiments from '@/pages/Experiments/Experiments.jsx';
import About from '@/pages/About/About.jsx';
import Resume from '@/pages/Resume/Resume.jsx';
import ProjectDetail from '@/pages/ProjectDetail/ProjectDetail.jsx';
import NotFound from '@/pages/NotFound/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="experiments" element={<Experiments />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
