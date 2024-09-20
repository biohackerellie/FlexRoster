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
- **GO Cli and Automation**: Included CLI tool for easy setup and configuration, as well as automation scripts for syncing flexroster.

## TODO

- [ ] Create choco package for Windows
- [ ] ReWrite Server in Go
- [ ] Add Kubernetes Support
- [ ] Mobile App
- [ ] Support sqlite3
- [ ] Support for multiple cloud providers

## Getting Started

### Prerequisites

- OneRoster API credentials from Infinite Campus
- Azure AD application with SAML integration
- Cloud vps or on prem server with Docker

### Configuration

Install the CLI Tool **not required but recommended** by going to the [releases page](https://github.com/biohackerellie/FlexRoster/releases) and downloading the latest release for your platform. with curl or wget:

```bash
curl -OL https://github.com/biohackerellie/FlexRoster/releases/download/<latest-release>/flexroster_<latest-release>_<platform>.tar.gz
```

There are 2 binaries with this release, `flex` and `flexscript`. `flex` is the main CLI tool and `flexscript` is a script that can be used to automate the syncing of the OneRoster API.

On Windows, until the choco package is created, you will need to run both of these through powershell.

```powershell
# Run the CLI tool
.\flex.exe -h
# Run a script
.\flexscript.exe -h
```

On linux or macos, you can just extract the binaries to /usr/local/bin or /usr/bin and run them from the terminal.

```bash
# Extract the binaries
tar -xvf flexroster_<latest-release>_<platform>.tar.gz
# Move the binaries to the bin directory
sudo mv flex flexscript /usr/local/bin
# Run the CLI tool
flex -h
# Run a script
flexscript -h
```

#### Config File

The config file is mandatory for the cli, scriptrunner and main application. The `config.yaml` file's default location for windows and poisx systems is in the user's config directory at $HOME/.config/flexroster/config.yaml but both the cli and flexscript take a -config flag to specify a different location. To get a config file you can either copy the exampleConfig.yaml file from the repo and modify it, or just run flex init to generate a new one.

#### Env File

tbd

### Deployment

```

```
