import { Helmet } from 'react-helmet-async';
type PageMetadataProps = {
  title: string;
  description: string;
};
export function PageMetadata({ title, description }: PageMetadataProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}