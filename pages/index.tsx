import { Box, Button, Stack } from "@chakra-ui/react";
import { IconDApps, IconNFTs, IconP2P_Transfer, IconWeb3 } from "@shm/Icons";
import SlidingStats from "components/common/SlidingStats";
import { Container, VStack, ListItem, OrderedList, SimpleGrid } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Hero from "components/sections/Hero";
import ReadWhitepaper from "components/sections/home/ReadWhitepaper";
import RoadmapFull from "components/sections/home/RoadMapFull";
import ShardeumInNews from "components/sections/home/ShardeumInNews";
import SHMTokenomics from "components/sections/home/SHMTokenomics";
import SectionHeading from "../components/common/SectionHeading";
import JoinCommunity from "components/sections/JoinCommunity";
import { CLAIM_100_SHM_LINK } from "constants/links";
import type { InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import UseCases from "../components//sections/UseCases";
import MoreAboutShardeum from "../components/sections/home/MoreAboutShardeum";
import Team from "../components/sections/Team";
import { getSHMNewsArticles } from "../utils/api";
import { IconCommunity, IconGlobe, IconTransaction } from "@shm/Icons";
import { Helmet } from "react-helmet";
const LandingPage = ({ news }: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode => {
  const { t: pageTranslation } = useTranslation("page-home");
  const { t: commonTranslation } = useTranslation("common");
  const stats = [
    { Icon: IconCommunity, title: "total-community-members" },
    { Icon: IconGlobe, title: "est-transaction-per-second" },
    { Icon: IconTransaction, title: "est-transaction-cost" },
    { Icon: IconGlobe, title: "min-validators" },
  ];
  return (
    <>
      {/* Hero section */}
      <Helmet>
        <title>{"Shardeum | EVM based Sharded Layer 1 Blockchain"}</title>
        <meta
          name="description"
          content="Shardeum is an EVM-based, linearly scalable network that provides low gas fees forever while maintaining true decentralization and solid security"
        />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />
        <meta property="og:title" content="EVM Based Sharded Layer 1 Blockchain" />
        <meta
          property="og:description"
          content="Shardeum is an EVM-based, linearly scalable smart contract platform that maintains low gas fees while providing true decentralization and solid security"
        />
        <meta property="og:url" content="https://shardeum.org/" />
        <meta
          property="og:image"
          content="https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png"
        />
        <meta name="twitter:title" content="EVM Based Sharded Layer 1 Blockchain" />
        <meta
          name="twitter:description"
          content="Shardeum is an EVM-based, linearly scalable network that provides low gas fees forever while maintaining true decentralization and solid security"
        />
        <meta
          name="twitter:image"
          content="https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/" />
      </Helmet>
      <Hero
        heading={commonTranslation("shm-slogan")}
        description={commonTranslation("shm-description")}
        cta={
          <>
            {/* <h1 className="chakra-text css-1ukwr3a">{commonTranslation("shm-slogan")}</h1>
            <div className="css-x04s0f">
              <p className="chakra-text css-zfsl17">{commonTranslation("shm-description")}</p>
            </div> */}
            <Stack
              spacing="4"
              direction={{ base: "column", sm: "row" }}
              width={{ base: "full", sm: "auto" }}
            >
              <Button
                as="a"
                variant="secondary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
                href="https://shardeum.org/betanet"
              >
                {commonTranslation("join-liberty-cta")}
              </Button>
              <Button
                as="a"
                variant="primary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
                href={CLAIM_100_SHM_LINK}
              >
                {commonTranslation("claim-100-shm-cta")}
              </Button>
            </Stack>
          </>
        }
        media={
          <Box position="relative">
            <Box
              h={{ base: "150px", md: "250px", xl: "auto" }}
              overflow="hidden"
              mb={{ base: "-24px" }}
              mx="auto"
              transform={{ md: "scale(1)" }}
            >
              <Image src="/hero-globe-image.png" width="660px" height="660px" />
            </Box>
          </Box>
        }
      />

      <SlidingStats stats={stats} />
      <ReadWhitepaper />
      <MoreAboutShardeum />
      {/* Shardium Alphanet */}
      <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "2", lg: "2" }}
        px={{ base: 6, xl: 0 }}
        style={{ paddingTop: "0px", background: "#000000" }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "2", lg: "2" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "0px", background: "#000000" }}
        >
          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10}>
                <SectionHeading color="brand.grey-90">
                  <h2 className="betaAlphanetTitle">Shardeum Liberty (Alphanet) Metrics</h2>
                </SectionHeading>
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <div className="gridAlignTwo">
              <div className="borderGrid">
                <h4 className="betanetHighlights">Top Alphanet Highlights</h4>

                <div className="chekMark">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">
                    First Web3 state sharded network with sharding abstraction
                  </p>
                </div>
                {/* <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">
                    First smart contract platform to implement EIP2930
                  </p>
                </div> */}
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">Automation of EIP2930 for a smoother DX</p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">50 validator nodes with shard size of 20 nodes</p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">Network capacity of 100 TPS</p>
                </div>
              </div>

              <div>
                <div className="borderGridTwo">
                  <h4 className="betanetHighlightsTwo">Network Growth Metrics</h4>

                  <div className="borderGridTwoAddSpace">
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffae93" />
                      <p className="checkMarkText">45,000+ smart contracts</p>
                    </div>
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffae93" />
                      <p className="checkMarkText">29 dApps</p>
                    </div>
                  </div>
                  <div className="borderGridTwoAddSpace">
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffae93" />
                      <p className="checkMarkText">
                        540,000+ accounts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                    </div>
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffae93" />
                      <p className="checkMarkText">1.5 million+ transactions</p>
                    </div>
                  </div>
                </div>

                <div className="borderGridThree">
                  <h4 className="betanetHighlightsThree">Community Growth Metrics</h4>

                  <div className="borderGridTwoAddSpace">
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffce88" />
                      <p className="checkMarkText">300,000+ community members</p>
                    </div>
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffce88" />
                      <p className="checkMarkText">
                        50+ Meetups/Workshops ~ Proof of Community Events
                      </p>
                    </div>
                  </div>
                  <div className="borderGridTwoAddSpace">
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffce88" />
                      <p className="checkMarkText">30,000+ newsletter subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </VStack>
        </Container>
      </Container>
      <SHMTokenomics />

      {/* Use cases section */}
      {/* <UseCases
        heading={pageTranslation("use-case-title")}
        descriptiveMedia={
          <Image
            objectFit="contain"
            src="/useCase.png"
            alt="Shardeum Use Case Illustrations"
            width="490px"
            height="328px"
          />
        }
        content={[
          {
            title: pageTranslation("use-case-1-title"),
            description: pageTranslation("use-case-1-desc"),
            Icon: IconP2P_Transfer,
          },
          {
            title: pageTranslation("use-case-2-title"),
            description: pageTranslation("use-case-2-desc"),
            Icon: IconNFTs,
          },

          {
            title: pageTranslation("use-case-3-title"),
            description: pageTranslation("use-case-3-desc"),
            Icon: IconDApps,
          },
          {
            title: pageTranslation("use-case-4-title"),
            description: pageTranslation("use-case-4-desc"),
            Icon: IconNFTs,
          },
          {
            title: pageTranslation("use-case-5-title"),
            description: pageTranslation("use-case-5-desc"),
            Icon: IconWeb3,
          },
        ]}
      /> */}

      <RoadmapFull heading={"h2"} />
      <Team />
      <ShardeumInNews news={news} />
      <JoinCommunity />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const news = await getSHMNewsArticles();
  return {
    props: {
      news,
      ...(await serverSideTranslations(locale, ["common", "page-home"])),
    },
  };
};
export default LandingPage;
