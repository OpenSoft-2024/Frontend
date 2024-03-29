

import styles from './css/sucess.module.css';
import { useParams } from 'react-router-dom';

function Success() {
    const {amt}=useParams()
  return (
    <div className={styles.App}>
      <div className={styles.full}>
        <div className={styles.payment_heading}>
          Payment Successful
        </div>
        <div className={styles.tick}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<circle cx="24" cy="24" r="20" fill="#4dd0e1"></circle><path fill="#fff" d="M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659l-6.083-6.084c-0.879-0.878-0.879-2.303,0-3.182 c0.878-0.879,2.304-0.879,3.182,0l6.083,6.084c0.879,0.878,0.879,2.303,0,3.182C23.643,30.47,23.067,30.69,22.491,30.69z"></path><path fill="#fff" d="M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659c-0.879-0.878-0.879-2.303,0-3.182l9.539-9.539 c0.878-0.879,2.304-0.879,3.182,0c0.879,0.878,0.879,2.303,0,3.182l-9.539,9.539C23.643,30.47,23.067,30.69,22.491,30.69z"></path>
</svg>
        </div>
        <div className={styles.amount_full}>
          <div className={styles.amount_paid}>
            Amount paid
          </div>
          <div className={styles.amount}>
            {amt}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;