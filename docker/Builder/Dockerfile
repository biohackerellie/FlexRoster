FROM ubuntu:latest
WORKDIR /app

RUN apt-get update && apt-get install -y 
RUN apt-get install -y curl wget git unzip
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
RUN curl -fsSL https://bun.sh/install | bash


RUN git clone "https://github.com/biohackerellie/flexroster.git"


CMD [ "/bin/bash" ]


