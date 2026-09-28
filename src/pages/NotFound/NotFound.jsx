import { Link } from 'react-router-dom';
import TextBlock from '@/components/sections/TextBlock/TextBlock.jsx';

export default function NotFound() {
  return (
    <TextBlock label="Page not found">
      <p>
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. <Link to="/">Back to projects →</Link>
      </p>
    </TextBlock>
  );
}
