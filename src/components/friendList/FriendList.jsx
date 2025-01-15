import styles from './FriendList.module.css';
import FriendListItem from '../friendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.FriendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.FriendListItem} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
