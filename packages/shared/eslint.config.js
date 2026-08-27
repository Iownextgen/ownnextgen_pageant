import nodeConfig from "@nextgenpageant/eslint-config/node.js";

export default [...nodeConfig, { ignores: ["dist/"] }];
