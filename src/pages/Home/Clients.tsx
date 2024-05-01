import { ClientWrapper, ClientImg } from "../../styles/Clients.modules";
import clientImg from "../../assets/Clients.png";

function Clients() {
  return (
    <ClientWrapper>
      <ClientImg src={clientImg} alt="clientImg" />
    </ClientWrapper>
  );
}

export default Clients;
