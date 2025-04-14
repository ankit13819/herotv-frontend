"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import PaymentStyles from "./styles";
import Link from "next/link";

export default function BuyNowNft({ nftDetails }) {
  const [nftTokenimage, setNftTokenimage] = useState(
    nftDetails?.attributes?.nft_images?.data?.[0]?.attributes?.url
  );
  const [selectedNft, setSelectedNft] = useState([
    nftDetails?.attributes?.nft_images?.data,
  ]);
  const [count, setCount] = useState(1);

  //decrease counter
  const decrease = () => {
    setCount((count) => count - 1);
  };

  //increase counter
  const increase = () => {
    if (count < nftDetails?.attributes?.max_token_per_user) {
      setCount((count) => count + 1);
    } else {
      alert(
        `You can't take more than ${nftDetails?.attributes?.max_token_per_user} Nft's`
      );
    }
  };

  return (
    <>
      <Box sx={PaymentStyles.mainContainer}>
        <Typography sx={PaymentStyles.breadCrumb} component="p">
          <Link href="/" style={{ color: "#fff" }}>
            Home
          </Link>{" "}
          / Payment
        </Typography>

        <Box sx={PaymentStyles.mainsection}>
          <Box sx={PaymentStyles.leftPanel}>
            <Typography variant="h1" sx={PaymentStyles.heading}>
              {nftDetails?.attributes?.description_asset_tier_mnemonics}
            </Typography>

            <Box sx={PaymentStyles.imageSection}>
              <Box component="img" src={nftTokenimage}></Box>

              <Box
                sx={PaymentStyles.thumbnailContainer}
                className="hidden-scroll-bar">
                {selectedNft?.length > 0 &&
                  selectedNft?.map((item) =>
                    item.map((data) => {
                      return (
                        <ListItem
                          key={data?.id}
                          className={
                            data?.attributes?.url == nftTokenimage && "active"
                          }>
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
                    })
                  )}
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
                <Box
                  component="img"
                  src="/images/payment/wallet.svg"
                  width="24"
                  height="24"
                />
                &nbsp;Wallet Balance &nbsp;
                <span style={{ fontWeight: "400" }}>$55</span>
                &nbsp; &nbsp; &nbsp;
                <Box
                  component="img"
                  src="/images/newHome/headercoin.svg"
                  width="24px"
                  height="24px"
                />
                &nbsp; coin
              </Typography>

              <Divider sx={PaymentStyles.separatorLine2} />
              <Table sx={PaymentStyles.tableData}>
                <TableBody>
                  <TableRow>
                    <TableCell sx={PaymentStyles.Inter16Normal} align="left">
                      {nftDetails.attributes.asset_tier_mnemonics} Ticket Price
                    </TableCell>
                    <TableCell align="right">
                      <Box sx={PaymentStyles.tokenBtnPrice}>
                        <span>$55</span>
                      </Box>
                      <Box sx={PaymentStyles.tokenBtn}>
                        {count <= 1 ? (
                          <Button
                            sx={PaymentStyles.minusbtokenbtn}
                            onClick={() => {
                              decrease();
                            }}
                            disabled={true}>
                            -
                          </Button>
                        ) : (
                          <Button
                            sx={PaymentStyles.minusbtokenbtn}
                            onClick={() => {
                              decrease();
                            }}>
                            -
                          </Button>
                        )}

                        <Typography variant="p" style={{ color: "#000" }}>
                          {count}
                        </Typography>
                        <Button
                          sx={PaymentStyles.addbtokenbtn}
                          onClick={() => {
                            increase();
                          }}>
                          {" "}
                          +
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Box display="flex">
                <Box sx={PaymentStyles.formGroup}>
                  <Typography component="p" sx={PaymentStyles.promoCodeStyle}>
                    Promo code / Coupen
                  </Typography>
                </Box>
              </Box>
            </Divider>
          </Box>
        </Box>
      </Box>
    </>
  );
}
