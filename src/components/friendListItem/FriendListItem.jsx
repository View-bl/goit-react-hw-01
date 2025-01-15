import clsx from 'clsx';
import styles from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`${name}avatar`}
        width="150"
      />
      <p className={styles.name}>{name}</p>
      <p
        className={clsx(styles.status, {
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;
