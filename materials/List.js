import styles from "./styles.css";

export default List = () => {
  return (
    <ul class="header_navbar_list">
      <li className={styles.list}>Giới thiệu</li>
      <li className={styles.list}>Ban tổ chức</li>
      <li className={styles.list}>Cuộc thi</li>
      <li className={styles.list}>Liên hệ</li>
      <li className={styles.list}>Hỗ trợ</li>
    </ul>
  )
}
