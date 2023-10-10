import equilibrium from "../../assets/NFTcard/image-equilibrium.jpg"
import avatar from "../../assets/NFTcard/image-avatar.png"
import ethereum from "../../assets/NFTcard/icon-ethereum.svg"
import clock from "../../assets/NFTcard/icon-clock.svg"
import overlay from "../../assets/NFTcard/icon-view.svg"
import styles from "../../styles/NFTcard.module.css";

function NFTCardComponent() {

  return (
    <div className={styles.body}>
      <div className={styles.nftBox}>
        <div className={styles.imgWrapper}>
          <img className={styles.nftImage} src={equilibrium} alt="Equilibrium" />
          <div className={styles.overlay}></div>
          <img className={styles.nftOverlay} src={overlay} alt="view-icon" />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Equilibrium #3429</h3>
          <p className={styles.description}>Our Equilibrium collection promotes balance and calm.</p>
          <div className={styles.infoRow}>
            <div className={styles.priceDiv}>
              <img src={ethereum} alt="ETH" className={styles.icon} /><span className={styles.eth}>0.041 ETH</span>
            </div>
            <div className={styles.creationDiv}>
              <img src={clock} alt="clock" className={styles.icon} /><span>3 days left</span>
            </div>
          </div>
          <div className={styles.creationRow}>
            <img className={styles.userImage} src={avatar} alt="userImg" />
            <p className={styles.author}>Creation of <span className={styles.name}>Jules Wyvern</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCardComponent;
