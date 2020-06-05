Queuing lib for dowpro ladder

# Purpose

Mainly some code factorization package for dowpro-replays-watcher-api & crevette-bot-ts.

# Environment

- Targeted for node.js.
- Typescript superset for coding.
- Rabbitmq for queuing purposes.

# Version history

*  0.0.1 : Library creation.
*  0.0.2 : Adding declaration types to package.json.
*  0.0.3 : Incorrect export for config logic..
*  0.0.4 : Fixing popFrom function: now accepting a callback function.
*  0.0.5 : Minor change in config interface.
*  0.0.6 : Connection should be closed after we're done doing whatever we are doing. |:
*  0.0.7 : Fixing package description & properly awaiting for consumption and connection close.
*  0.0.8 : properly awaiting for consumption and connection close.
*  0.0.9 : Not closing for popfrom.
*  0.1.0 : Letting caller specify if connection should be closed or not.