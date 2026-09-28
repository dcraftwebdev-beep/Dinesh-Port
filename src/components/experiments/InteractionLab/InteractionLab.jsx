import ExperimentCard from '../ExperimentCard/ExperimentCard.jsx';
import { labDemos } from '../lab/index.js';
import styles from './InteractionLab.module.css';

/** Grid of live, playable micro interaction demos. */
export default function InteractionLab({ items }) {
  return (
    <ul className={styles.grid}>
      {items.map((item, i) => {
        const Demo = labDemos[item.demo];
        return (
          <ExperimentCard key={item.demo} title={item.title} text={item.text} tags={item.tags} hint={item.hint} delay={(i % 3) * 70}>
            {Demo && <Demo />}
          </ExperimentCard>
        );
      })}
    </ul>
  );
}
