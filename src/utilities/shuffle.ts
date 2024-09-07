import { Card } from '../components/Card';

export default function shuffle(): Card[] {
  const assets = [
    { image: '/assets/css.png' },
    { image: '/assets/html5.png' },
    { image: '/assets/jquery.png' },
    { image: '/assets/js.png' },
    { image: '/assets/next.png' },
    { image: '/assets/node.png' },
    { image: '/assets/ts.png' },
    { image: '/assets/ts.png' },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({image: card.image, id: crypto.randomUUID(), flipped: false }));
}

