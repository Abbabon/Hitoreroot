# Hitoreroot

## About:

The kalfi_geocode script queries [Google Geo API](https://developers.google.com/maps/documentation/geocoding/intro) to enrich kalfi addresses.

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

The source csv is called 'accessable_kalfi.csv'. An xlsx file is included for posterity.

After running, the output is written to accessable_kalfi_output.csv

Run the script via:

> node kalfi_geocode.js

The geocode follows the original information, along a status, which is OK for returned queries, and ZERO_RESULTS for results that, well, had no results from the API.

## Notes:

Do not change the structure of the csv. Contact the script creator to add more columns.

## Meta:

Feel free to post pull-requests. They will be reviewed by @Abbabon

## GLHF!
