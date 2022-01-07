"use strict"

const { commonGlobals, commonRules } = require("./_commons")

module.exports = {
    globals: {
        ...commonGlobals,
        __dirname: "off",
        __filename: "off",
        exports: "off",
        module: "off",
        require: "off",
    },
    parserOptions: {
        ecmaFeatures: { globalReturn: false },
        ecmaVersion: 2019,
        sourceType: "module",
    },
    plugins: ["@ivorytech/node"],
    rules: {
        ...commonRules,
    },
}
