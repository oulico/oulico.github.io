import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import TagCloudPage from './pages/TagCloudPage'; // Import TagCloudPage
import TagDetailPage from './pages/TagDetailPage'; // Import TagDetailPage
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:slug" element={<PostDetailPage />} />
        <Route path="/tags" element={<TagCloudPage />} /> {/* New route for Tag Cloud */}
        <Route path="/tags/:tagValue" element={<TagDetailPage />} /> {/* New route for Tag Detail */}
      </Routes>
    </Layout>
  );
}

export default App;