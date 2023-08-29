#!/bin/bash

# Recreate config file
rm -rf ./app-config.js
touch ./app-config.js

# Add assignment 
echo "window.env = {" >> ./app-config.js

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do

  # If the line is a new line, then ignore it
  if [[ -z "$line" ]]; then 
    continue
  fi

  # If the line is a comment, then ignore it
  if [[ $line == "#"* ]]; then 
    continue
  fi

  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}
  
  # Append configuration property to JS file
  echo "  $varname: '$value'," >> ./app-config.js
done < $1

echo "};" >> ./app-config.js

mv ./app-config.js $2