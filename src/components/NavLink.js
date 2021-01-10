/* function NavLink({ to, children }) {
    const { pathname } = useRouter()
  
    const [, group] = href.split("/")
    const isActive = pathname.includes(group)
  
    return (
      <NavLink to={to}>
        <Center
          flex="1"
          minH="40px"
          as="link"
          rounded="md"
          transition="0.2s all"
          fontWeight={isActive ? "semibold" : "medium"}
          bg={isActive ? "teal.400" : undefined}
          borderWidth={isActive ? undefined : "1px"}
          color={isActive ? "white" : undefined}
          _hover={{
            bg: isActive
              ? "teal.500"
              : useColorModeValue("gray.100", "whiteAlpha.100"),
          }}
        >
          {children}
        </Center>
      </NextLink>
    )
  }
   */
