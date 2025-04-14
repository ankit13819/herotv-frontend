import { Box } from "@mui/material";
import BuyNowNft from "../../../../componets/Payment/BuyNft";

const nftDetails =
{
  data: [
    {
      id: 1,
      title: "ankit"
    },
    {
      id: 2,
      title: "Ankita"
    }
  ]
}


export default function ReserveBuyNowNft() {


  return <>
    <Box>
      <BuyNowNft nftDetails={nftDetails?.data?.[0]} />
    </Box>
  </>
}