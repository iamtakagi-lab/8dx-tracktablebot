# 🗺 8dx-tracktablebot: Send the item table image for each course on discord.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/iamtakagi/8dx-tracktablebot)](https://github.com/iamtakagi/8dx-tracktablebot/releases)
[![Check-PR](https://github.com/iamtakagi/8dx-tracktablebot/actions/workflows/check-pr.yml/badge.svg)](https://github.com/iamtakagi/8dx-tracktablebot/actions/workflows/check-pr.yml)
[![Deploy](https://github.com/iamtakagi/8dx-tracktablebot/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamtakagi/8dx-tracktablebot/actions/workflows/deploy.yml)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/iamtakagi/8dx-tracktablebot)](https://hub.docker.com/r/iamtakagi/8dx-tracktablebot)
[![Docker Pulls](https://img.shields.io/docker/pulls/iamtakagi/8dx-tracktablebot)](https://hub.docker.com/r/iamtakagi/8dx-tracktablebot)
[![license](https://img.shields.io/github/license/iamtakagi/8dx-tracktablebot)](https://github.com/iamtakagi/8dx-tracktablebot/blob/master/LICENSE)
[![issues](https://img.shields.io/github/issues/iamtakagi/8dx-tracktablebot)](https://github.com/iamtakagi/8dx-tracktablebot/issues)
[![pull requests](https://img.shields.io/github/issues-pr/iamtakagi/8dx-tracktablebot)](https://github.com/iamtakagi/8dx-tracktablebot/pulls)

## Commands
- _tl Track List
- _tt [trackName]: View Track

## Install
`docker-compose.yml`
```yml
version: '3.8'
services:
  tracktablebot:
    container_name: 8dx-tracktablebot
    image: iamtakagi/8dx-tracktablebot:latest
    BOT_TOKEN: xxx
```