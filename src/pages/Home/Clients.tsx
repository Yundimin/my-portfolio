import { ClientWrapper, ClientImg } from "../../styles/Clients.modules";
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

async function getImageUrl() {
  try {
    const storageRef = ref(storage, "assets/clients/Clients.png");

    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL", error);
    return null;
  }
}

function Clients() {
  const [clientImg, setClientImg] = useState("");

  useEffect(() => {
    async function fetchImageUrl() {
      const imageUrl = await getImageUrl();
      if (imageUrl) {
        setClientImg(imageUrl);
      }
    }

    fetchImageUrl();
  }, []);

  return (
    <ClientWrapper>
      <ClientImg src={clientImg} alt="clientImg" />
    </ClientWrapper>
  );
}

export default Clients;
