# Hitoreroot

## About:

The kalfi_geocode script

## Installation:
The script runs via nodeJS. [You can download and install it here](https://nodejs.org/en/download/)

clone the repository locally via git clone or download the whole repository.

when inside the directory, run this to install required packages:
> npm install

## Configuration:

You need to insert a file called .env to the directory, with the following values:

> PARALLEL_GEO_QUERIES=5
> GOOGLE_API_TOKEN=<your google api token!>

The script queries 5 addresses simultaneously. You can edit it via the PARALLEL_GEO_QUERIES variable above. Don't go overboard.

Insert you google API token via the GOOGLE_API_TOKEN variable.

## Usage:

Run the script by running:

> node kalfi_geocode.js

The source csv is called 'accessable_kalfi.csv'. An xlsx file is included for posterity.

After running the output is written

## GLHF!
