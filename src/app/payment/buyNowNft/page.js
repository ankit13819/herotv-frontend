'use client'
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BuyNowNft from "../../../../componets/Payment/BuyNft";

const nftDetails =
{
  data: [
    {
      id: 1,
      title: "ankit",
      attributes: {
        description_asset_tier_mnemonics: "Ticket's",
        asset_tier_mnemonics: "Legendary",
        max_token_per_user: 5,
        nft_images: {
          data: [
            {
              id: 1,
              attributes: {
                url: '/images/nft/1.png'
              }
            },
            {
              id: 2,
              attributes: {
                url: '/images/nft/2.png'
              }
            },
            {
              id: 3,
              attributes: {
                url: '/images/nft/3.png'
              }
            }
          ]
        }
      },
    },
    {
      id: 2,
      title: "Silver",
      attributes: {
        description_asset_tier_mnemonics: "SILVER",
        nft_images: {
          data: [
            {
              id: 2,
              attributes: {
                url: '/images/nft/2.png'
              }
            }
          ]
        }
      },

    }
  ]
}


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#0c091b",
    color: "#ffffff",
    maxWidth: "100%",
    margin: "auto",
    fontFamily: "'Inter',sans-serif !important",
  },
}))

const styles = {
  faqContainer: {
    position: "fixed",
    right: "-30px",
    top: "50%",
    zIndex: "1",
    transform: "rotate(90deg)",

    "& button": {
      cursor: "pointer",
      color: "custom.faqBtn",
      padding: "8px 35px",
      borderRadius: "0px 0px 10px 10px",
      boxShadow: "0 0 6px 0 rgba(157, 96, 212, 0.5)",
      border: "solid 2px transparent",
      background: "linear-gradient(93.2deg, #E14184 0%, #3555FA 55.26%, #55B5BB 97.94%)",
      backgroundOrigin: "border-box",
      boxShadow: (theme) => ({ xs: theme.palette.boxShadow.faqButton }),
      fontSize: "14px",
      textTransform: "uppercase",
      "@media(max-width:767px)": {
        padding: "3px 10px",
        fontSize: "13px",
      },
    },
    "@media(max-width:767px)": {
      right: "-10px",
    },
  },
};


export default function ReserveBuyNowNft() {
  const classes = useStyles()

  return <>
    <Box className={classes.mainContainer}>
      <BuyNowNft nftDetails={nftDetails?.data?.[0]} />
    </Box>
  </>
}