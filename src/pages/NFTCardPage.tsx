import NFTCardComponent from "../modules/nft/NFTCard";

function NFTCard() {
    const styles: React.CSSProperties = {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
    }
    return (
        <div style={styles}>
            <NFTCardComponent />
        </div>
    )
}

export default NFTCard;