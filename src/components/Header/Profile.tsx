import { Flex, Box, Text, Avatar } from '@chakra-ui/react'


interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luis Felipe</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            felipe-mara2003@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        src="https://avatars.githubusercontent.com/u/78617974?v=4"
        name="Luis Felipe"
      />

    </Flex>
  )
}