module.exports = {
    "env": {
      "es6": true,
      "node": true
    },
    "globals": {
        "document": false,
        "navigator": false,
        "window": false
    },
    "rules": {
        "indent": [2, 4],
        "semi": [2, "never"],
        "quotes": [2, "single", {
            "avoidEscape": true, "allowTemplateLiterals": true
        }],
        "no-unused-vars": [2, {"args": "none"}],
        "no-unreachable": [2],
        "arrow-parens": [2, "as-needed"],
        "max-len": [2, {
            "code": 80,
            "ignoreStrings": true
        }],
        "no-undef": [2]
    }
}

