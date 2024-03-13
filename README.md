# FlexRoster

FlexRoster is a comprehensive full-stack application designed to manage flex schedules for high school students. Developed with a focus on flexibility and efficiency, this application allows students to request attendance in different classes during their designated flex period. Built as a monorepo, FlexRoster encompasses multiple apps and shared packages to cater to various roles including students, teachers, and administrators.

## Key Features

- **Role-Based Views**: Customized UIs for students, teachers, and other roles.
- **Modular Architecture**: Built as a monorepo with multiple apps and shared packages.
- **TypeScript Throughout**: Frontend and backend fully implemented in TypeScript for type safety and developer experience.
- **Next.js Client**: Utilizing the power and flexibility of Next.js for the frontend.
- **ElysiaJS and Bun.js**: A fast backend setup using ElysiaJS on the Bun.js runtime, optimized for Docker Swarm environments.
- **AuthJS with Azure SAML**: Streamlined authentication integrated with school's Active Directory.
- **Dockerized PostgreSQL and Redis**: Robust database management with Drizzle ORM and efficient caching/logging with Redis.
- **Eden and Socketi**: Facilitating real-time communication and data exchange across services.
- **OneRoster API Integration**: Ensures up-to-date class rosters and seamless data synchronization.
- **TBD**: May develop an expo version for students to use on their phones.

## Architecture

FlexRoster is designed as a monolithic repository containing:

- A Next.js-based client application for frontend interactions.
- A backend web server running on ElysiaJS and Bun.js for high performance and efficiency.
- Shared packages including AuthJS for authentication, Eden for client-server communication, and Socketi for real-time chat capabilities.
- Microservices architecture supporting Dockerized PostgreSQL, Redis clusters, and more for scalability and resilience.

## Setup and Configuration

Note: Currently, FlexRoster is in active development. Detailed setup and configuration instructions will be provided as the project approaches version 1.0.

## Contributing

As FlexRoster is still in active development, contributions are not requested at this time. However, feedback and suggestions are always welcome.

## Acknowledgements

Special thanks to the open source community and technologies that made FlexRoster possible. This project leverages several cutting-edge technologies and frameworks to provide a seamless and efficient experience for managing flex schedules in schools.

## License

This project is licensed under the GNU General Public License. Please see the LICENSE file for more details.

---

Thank you for your interest in FlexRoster. For updates and more information, stay tuned as the project evolves.
