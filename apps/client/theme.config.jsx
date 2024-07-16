import { HouseIcon } from "lucide-react"

export default {
  logo: <span><HouseIcon /></span>,
  project: {
  link: 'https://github.com/biohackerellie/FlexRoster',
  },
  docsRepositoryBase: 'https://github.com/biohackerellie/FlexRoster/tree/main/apps/client',
  color: {
  hue: 201,
  },
  footer: {
    content: (
    <span>
        MIT {new Date().getFullYear()} © <a href="https://epklabs.com" target="_blank"> Ellie Kerns </a>

      </span>
    )
  }
}
