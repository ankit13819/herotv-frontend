'use client'
import { useEffect, useState } from "react"
import { Box, Divider, ListItem, Typography } from "@mui/material"
import PaymentStyles from './styles'
import Link from "next/link"


export default function BuyNowNft({ nftDetails }) {

  const [nftTokenimage, setNftTokenimage] = useState(nftDetails?.attributes?.nft_images?.data?.[0]?.attributes?.url)
  const [selectedNft, setSelectedNft] = useState([nftDetails?.attributes?.nft_images?.data])
  console.log("selected", selectedNft)



  return (
    <>
      <Box sx={PaymentStyles.mainContainer}>
        <Typography sx={PaymentStyles.breadCrumb} component="p">
          <Link href="/" style={{ color: "#fff" }}>Home</Link> / Payment
        </Typography>

        <Box sx={PaymentStyles.mainsection}>
          <Box sx={PaymentStyles.leftPanel}>
            <Typography variant="h1" sx={PaymentStyles.heading}>
              {nftDetails?.attributes?.description_asset_tier_mnemonics}
            </Typography>

            <Box sx={PaymentStyles.imageSection}>
              <Box component="img" src={nftTokenimage}>
              </Box>

              <Box sx={PaymentStyles.thumbnailContainer} className="hidden-scroll-bar">
                {
                  selectedNft?.length > 0 &&
                  selectedNft?.map((item) => item.map((data) => {
                    return (
                      <ListItem
                        key={data?.id}
                        className={data?.attributes?.url == nftTokenimage && "active"}
                      >
                        <Box
                          style={{ cursor: "pointer" }}
                          className="active"
                          key={data.id}
                          component="img"
                          src={data?.attributes?.url}
                          onClick={() => {
                            setNftTokenimage(data?.attributes?.url);
                          }}
                        />
                      </ListItem>
                    );
                  }))
                }
              </Box>
            </Box>

            <Box sx={PaymentStyles.PriceSection}>
              {/* but apply condition IN and Other we do after sometime */}
              <Typography variant="h3">Price - $67</Typography>
            </Box>
          </Box>

          <Box sx={PaymentStyles.rightPanel}>
            <Divider sx={PaymentStyles.separatorLine1}>
              <Typography variant="span" sx={PaymentStyles.walletBalance}>
                <Box component="img" src="/images/payment/wallet.svg" width="24" height="24" />
                &nbsp;Wallet Balance &nbsp;
                <span style={{ fontWeight: '400' }}>$55</span>
                &nbsp; &nbsp; &nbsp;
                <Box
                  component="img"
                  src="/images/newHome/headercoin.svg"
                  width="24px"
                  height="24px"
                />
                &nbsp;
                coin
              </Typography>
            </Divider>
          </Box>

        </Box>
      </Box>
    </>
  )
}