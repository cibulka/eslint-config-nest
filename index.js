module.exports = {
    // "parser": "babel-eslint",
    parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
			impliedStrict: true,
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			jsx: true
		}
	},
    extends: "airbnb",
    globals: {
        document: true,
        window: true
    },
    ignorePatterns: ["node_modules", "deprecated"],
    rules: {
        "import/prefer-default-export": "off",
        "import/no-unresolved": "off",
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": [ "invalidHref", "preferButton" ]
        }],
        "jsx-a11y/label-has-associated-control": [ 2, {
            "controlComponents": ["Field"],
        }],
        "jsx-a11y/label-has-for": "off",
        "max-len": "off",
        "no-warning-comments": [1, {
            "terms": ["TODO", "SPRINT", "FIXME", "SHAME", "NOTSURE"],
            "location": "start",
        }],
        "prefer-destructuring": ["error", {
            "object": true,
            "array": true
        }],
        "radix": "off",
        "react/destructuring-assignment": [0, "always"],
        "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/no-array-index-key": "off",
        "react/no-danger": "off",
        "sort-imports": ["error", {
            "ignoreDeclarationSort": true,
        }]
    }
};
