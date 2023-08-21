// Chakra imports
import { Box, Flex } from "@chakra-ui/react";
import Footer from "components/footer/FooterAuth";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
// Custom components
// Assets

function AuthIllustration(props) {
  const { children, illustrationBackground } = props;
  // Chakra color mode
  return (
    <Flex h='max-content'>

      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w='100%'
        maxW={{ md: "66%", lg: "1313px" }}
        mx='auto'
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent='center'
        direction='column'>
        {children}
        <Box
          display={{ base: "none", md: "flex" }}
          h='100%'
          minH='100vh'
          w={{ lg: "50vw", "2xl": "44vw" }}
          borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}
          justifyContent='center'
          position='absolute'
          alignItems={'center'}
          // bg={'black'}
          overflow={'hidden'}
          right='0px'>
          <Flex
            bg={`url(${illustrationBackground})`}
            justify='center'
            align='center'
            w='50%'
            h='50%'
            // bgColor={'yellow'}
            bgSize='cover'
            bgPosition='50%'
          // position='absolute'
          />
        </Box>
        <Footer />
      </Flex>
      {/* CHANGE THEME COLOR BUTTON */}
      {/* <FixedPlugin /> */}
    </Flex>
  );
}
// PROPS

// AuthIllustration.propTypes = {
//   illustrationBackground: PropTypes.string,
//   image: PropTypes.any,
// };

export default AuthIllustration;