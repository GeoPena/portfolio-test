export default function myImageLoader({ src, width, quality }) {
  return `/portfolio-test${src}?w=${width}&q=${quality || 75}`;
}