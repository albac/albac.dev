export default function SlugPage({ params }) {
  const { slug } = params;
  return <div>Post {slug}</div>;
}
