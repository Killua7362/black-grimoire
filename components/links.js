import { Flex, Box, Container } from "@chakra-ui/react";

import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { SiMyanimelist, SiGmail } from 'react-icons/si'
const Links = () => {
	return (
		<Flex gap={2} pt={2} justifyContent={{ base: "center", md: "left" }}>
			<a href="https://github.com/Killua7362" target="_blank" rel="noopener noreferrer">
				<FaGithub size={23} />
			</a>
			<a href="https://twitter.com/Killua7362" target="_blank" rel="noopener noreferrer">
				<FaTwitter size={23} />
			</a>
			<a href="https://www.linkedin.com/in/killua7362/" target="_blank" rel="noopener noreferrer">
				<FaLinkedin size={23} />
			</a>
			<a href="mailto:bhat7362@gmail.com">
				<SiGmail size={23} />
			</a>
			<a href="https://www.instagram.com/___killuaa/" target="_blank" rel="noopener noreferrer">
				<FaInstagram size={23} />
			</a>
			<a href="https://myanimelist.net/profile/Killua7362" target="_blank" rel="noopener noreferrer">
				<SiMyanimelist size={25} />
			</a>
		</Flex>
	)

};
export default Links;
