import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../lib/seo';

export function NotFound() {
  useDocumentMeta({ title: 'Page not found', description: 'The page you are looking for may have moved or no longer exists.' });
  return (
    <section className="section">
      <div className="container center" style={{ padding: '6rem 0' }}>
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lead">The page you're looking for may have moved or no longer exists.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
