import "../../styles/NFTcard.css";
import equilibrium from "../../assets/NFTcard/image-equilibrium.jpg"
import avatar from "../../assets/NFTcard/image-avatar.png"
import ethereum from "../../assets/NFTcard/icon-ethereum.svg"
import clock from "../../assets/NFTcard/icon-clock.svg"
import overlay from "../../assets/NFTcard/icon-view.svg"

function NFTcard() {
    return (
    <div className="body">
        <div className="nftBox"> {/*main-card*/}
            <div className="img-wrapper"> {/*image-container*/}
                <img className="nft-image" src={equilibrium} alt="Equilibrium"/>
                <div className="overlay"></div>
                <img className="nft-overlay" src={overlay} alt="view-icon" />
            </div>
            <div className="text-container">
                <h3 className="title">Equilibrium #3429</h3>
                <p className="description">Our Equilibrium collection promotes balance and calm.</p>
                <div className="info-row">
                    <div className="price-div">
                        <img src = {ethereum} alt="ETH" className="icon"/><span className="eth">0.041 ETH</span>
                    </div>
                    <div className="creation-div">
                        <img src = {clock} alt="clock" className="icon" /><span>3 days left</span>
                    </div>
                </div>

                <div className="creation-row">
                    <img className="user-image" src={avatar} alt="userImg"/>
                    <p className="author">Creation of <span className="name">Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFTcard;