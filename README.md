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
- **GO Cli**: Included CLI tool for easy setup and configuration.

## Getting Started

### Prerequisites

- OneRoster API credentials from Infinite Campus
- Azure AD application with SAML integration
- Docker - `https://docs.docker.com/get-docker/`
- Nodejs - `https://nodejs.org/en/`
- Pnpm - `https://pnpm.io/installation`
- Turborepo - `https://turbo.build/repo/docs`
- If you wish to compile the CLI from source, you will need Go installed - `https://golang.org/doc/install`

### Installation

1. Clone the repository
2. Copy `.env.example` and `.env.config.example` to `.env` and `.env.config` respectively, and fill in the required values. _`.env` is for the backend and `.env.config` is for the CLI._

3. Run the deploy.sh script to deploy the stack to docker. This will handle building the front end, back end, redis, postgres, and socketi services and deploying the containers to the server.

```bash
sudo ./deploy.sh
```


4. Download the Cli tar from github releases and extract it to your local machine. _Make sure to replace the version number with the latest release._

```bash
curl -OL https://github.com/biohackerellie/FlexRoster/releases/download/v1.4.0/FlexRoster_1.4.0_linux_amd64.tar.gz && sudo tar  -C /usr/local/bin -xzf FlexRoster_1.4.0_linux_amd64.tar.gz

```

5. You need to add 2 lines to your profile at `.bashrc/.zshrc` or globally at `/etc/profile` to allow the CLI to be run from anywhere.

```bash
export PATH=$PATH:/usr/local/bin # Likely already in your profile
export FLEXROOT=/path/to/your/flexroster/repo
```

6. Party! You're all set up! 🎉

## Usage

You can now run the cli tool to adjust any settings you need to. The env.config file contains all of the fields likely to change during production such as admin users, semester dates, and the school name. The CLI tool will allow you to adjust these settings as needed. just run `flex` to see the available commands.
