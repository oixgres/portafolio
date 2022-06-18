## IMPORTANT
When running the project. Please make sure tha the node_modules/semantic-ui-css/semantic.min.css doesn't have any ';;' in any line.
If you have any ';;' in any line, please replace it with ';'.

## How to DEPLOY the project
When deploying the portfolio. Please follow the next steps:
1. Run `npm install --dev @semantic-ui-react/css-patch`
2. To package.json, add the following line:
    "scripts": {
        "postinstall": "semantic-ui-css-patch"
    }