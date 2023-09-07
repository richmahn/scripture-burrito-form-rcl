export default {
    schema: {
        $schema: "http://json-schema.org/draft-07/schema",
        $id: "https://burrito.bible/schema/metadata.schema.json",
        $$target: "metadata.schema.json",
        title: "Metadata",
        type: "object",
        description: "Scripture Burrito root metadata object.",
        properties: {
            meta: {
                type: "object",
                properties: {
                    category: {
                        enum: [
                            "source",
                            "derived",
                            "template"
                        ]
                    }
                }
            }
        },
        if: {
            properties: {
                meta: {
                    type: "object",
                    properties: {
                        category: {
                            const: "source"
                        }
                    }
                }
            }
        },
        then: {
            $schema: "http://json-schema.org/draft-07/schema",
            $id: "https://burrito.bible/schema/source_metadata.schema.json",
            $$target: "source_metadata.schema.json",
            title: "Metadata (Default)",
            type: "object",
            description: "Scripture Burrito source kinda-variant root.",
            properties: {
                format: {
                    type: "string",
                    enum: [
                        "scripture burrito"
                    ]
                },
                meta: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/source_meta.schema.json",
                    $$target: "source_meta.schema.json",
                    title: "Meta (Source)",
                    type: "object",
                    description: "Information about the Scripture Burrito metadata file (source).",
                    properties: {
                        category: {
                            const: "source"
                        },
                        dateCreated: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/meta_date_created.schema.json",
                            $$target: "meta_date_created.schema.json",
                            title: "Meta Date created",
                            type: "string",
                            format: "date-time"
                        },
                        version: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/meta_version.schema.json",
                            $$target: "meta_version.schema.json",
                            title: "Meta Version",
                            type: "string",
                            enum: [
                                "1.0.0"
                            ],
                            description: "Version of the Scripture Burrito specification this file follows."
                        },
                        generator: {
                            description: "Information about the program and user who generated this burrito.",
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/software_and_user_info.schema.json",
                            $$target: "software_and_user_info.schema.json",
                            title: "Software and User Info",
                            type: "object",
                            properties: {
                                softwareName: {
                                    type: "string",
                                    description: "The name of the program used."
                                },
                                softwareVersion: {
                                    type: "string",
                                    description: "The version of the program used."
                                },
                                userId: {
                                    description: "A system-specific user identifier.",
                                    type: "string",
                                    pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$"
                                },
                                userName: {
                                    type: "string",
                                    description: "The user's full name, if known."
                                }
                            },
                            required: [
                                "softwareName",
                                "softwareVersion"
                            ],
                            additionalProperties: false
                        },
                        defaultLocale: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/meta_default_language.schema.json",
                            $$target: "meta_default_language.schema.json",
                            title: "Meta Default Language",
                            description: "The BCP47 code of the language that should be displayed, if a default is required, and for which localization is required in all name fields specified for 'catalog' validation.",
                            type: "string",
                            pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                            minLength: 2
                        },
                        normalization: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/normalization.schema.json",
                            $$target: "normalization.schema.json",
                            title: "Normalization",
                            type: "string",
                            description: "Unicode normalization options. This applies to both ingredients and metadata.",
                            enum: [
                                "NFC",
                                "NFD",
                                "NFKC",
                                "NFKD"
                            ]
                        },
                        comments: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/meta_comments.schema.json",
                            $$target: "meta_comments.schema.json",
                            title: "Meta Comments",
                            type: "array",
                            items: {
                                type: "string"
                            },
                            description: "Arbitrary text strings attached by users with no effect on the interpretation of the Scripture Burrito."
                        }
                    },
                    required: [
                        "version",
                        "category",
                        "dateCreated",
                        "defaultLocale"
                    ],
                    additionalProperties: false
                },
                idAuthorities: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/id_authorities.schema.json",
                    $$target: "id_authorities.schema.json",
                    title: "idAuthorities",
                    type: "object",
                    description: "Declares one or more identity authorities which may later be referred to using identifier prefixes.",
                    additionalProperties: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                minLength: 1,
                                description: "A valid **Uniform Resource Locator**.",
                                examples: [
                                    "https://example.com"
                                ]
                            },
                            name: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            }
                        },
                        propertyNames: {
                            type: "string",
                            pattern: "^[a-z][a-z0-9\\-]*[a-z0-9]$",
                            description: "A Label for an ID authority (internal to the document)"
                        },
                        minProperties: 1
                    },
                    minProperties: 1
                },
                identification: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/identification.schema.json",
                    $$target: "identification.schema.json",
                    title: "Identification",
                    type: "object",
                    description: "Identification section.",
                    definitions: {
                        revisionString: {
                            type: "string",
                            pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$"
                        }
                    },
                    properties: {
                        name: {
                            type: "object",
                            additionalProperties: {
                                type: "string",
                                pattern: "^\\S(.*\\S)?$",
                                description: "A string without surrounding whitespace characters."
                            },
                            propertyNames: {
                                type: "string",
                                pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                minLength: 2,
                                description: "A valid IETF language tag as specified by BCP 47."
                            },
                            minProperties: 1,
                            description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                        },
                        description: {
                            type: "object",
                            additionalProperties: {
                                type: "string",
                                pattern: "^\\S(.*\\S)?$",
                                description: "A string without surrounding whitespace characters."
                            },
                            propertyNames: {
                                type: "string",
                                pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                minLength: 2,
                                description: "A valid IETF language tag as specified by BCP 47."
                            },
                            minProperties: 1,
                            description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                        },
                        abbreviation: {
                            type: "object",
                            additionalProperties: {
                                type: "string",
                                pattern: "^\\S(.*\\S)?$",
                                description: "A string without surrounding whitespace characters."
                            },
                            propertyNames: {
                                type: "string",
                                pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                minLength: 2,
                                description: "A valid IETF language tag as specified by BCP 47."
                            },
                            minProperties: 1,
                            description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                        },
                        primary: {
                            type: "object",
                            additionalProperties: {
                                type: "object",
                                additionalProperties: {
                                    type: "object",
                                    revision: {
                                        type: "string",
                                        pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                        description: "Opaque system-specific revision identifier."
                                    },
                                    timestamp: {
                                        type: "string",
                                        pattern: "^[12][0-9]{3}(-[01][0-9](-[0123][0-9])?)?$"
                                    },
                                    required: [
                                        "revision",
                                        "timestamp"
                                    ]
                                }
                            },
                            minProperties: 1,
                            maxProperties: 1,
                            description: "Contains the primary authority and identification information."
                        },
                        upstream: {
                            type: "object",
                            additionalProperties: {
                                type: "array",
                                items: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "object",
                                        revision: {
                                            type: "string",
                                            pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                            description: "Opaque system-specific revision identifier."
                                        },
                                        timestamp: {
                                            type: "string",
                                            pattern: "^[12][0-9]{3}(-[01][0-9](-[0123][0-9])?)?$"
                                        },
                                        required: [
                                            "revision",
                                            "timestamp"
                                        ]
                                    }
                                }
                            },
                            description: "Contains the upstream authority and identification information."
                        }
                    },
                    required: [
                        "name",
                        "primary"
                    ],
                    additionalProperties: false
                },
                confidential: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/confidential.schema.json",
                    $$target: "confidential.schema.json",
                    title: "Confidential",
                    type: "boolean",
                    description: "a true value indicates that the project should not be publicly known and that the identity of project members needs to be kept confidential."
                },
                type: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/type.schema.json",
                    $$target: "type.schema.json",
                    title: "Type",
                    description: "Contains properties describing the burrito flavor type.",
                    type: "object",
                    properties: {
                        flavorType: {
                            type: "object",
                            properties: {
                                name: {
                                    enum: [
                                        "scripture",
                                        "gloss",
                                        "parascriptural",
                                        "peripheral"
                                    ]
                                }
                            }
                        }
                    },
                    if: {
                        properties: {
                            flavorType: {
                                type: "object",
                                properties: {
                                    name: {
                                        const: "scripture"
                                    }
                                }
                            }
                        }
                    },
                    then: {
                        properties: {
                            flavorType: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        const: "scripture"
                                    },
                                    flavor: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string",
                                                oneOf: [
                                                    {
                                                        enum: [
                                                            "textTranslation",
                                                            "audioTranslation",
                                                            "typesetScripture",
                                                            "embossedBrailleScripture",
                                                            "signLanguageVideoTranslation"
                                                        ]
                                                    },
                                                    {
                                                        pattern: "^x-"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    currentScope: {
                                        $schema: "http://json-schema.org/draft-07/schema",
                                        $id: "https://burrito.bible/schema/scope.schema.json",
                                        $$target: "scope.schema.json",
                                        title: "Scope",
                                        type: "object",
                                        description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                        additionalProperties: {
                                            oneOf: [
                                                {
                                                    type: "array",
                                                    items: {
                                                        type: "string",
                                                        pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                    },
                                                    minItems: 1,
                                                    uniqueItems: true
                                                },
                                                {
                                                    type: "array",
                                                    maxItems: 0
                                                }
                                            ]
                                        },
                                        propertyNames: {
                                            type: "string",
                                            pattern: "^[A-Z0-9]{3}$",
                                            minLength: 3,
                                            maxLength: 3,
                                            enum: [
                                                "GEN",
                                                "EXO",
                                                "LEV",
                                                "NUM",
                                                "DEU",
                                                "JOS",
                                                "JDG",
                                                "RUT",
                                                "1SA",
                                                "2SA",
                                                "1KI",
                                                "2KI",
                                                "1CH",
                                                "2CH",
                                                "EZR",
                                                "NEH",
                                                "EST",
                                                "JOB",
                                                "PSA",
                                                "PRO",
                                                "ECC",
                                                "SNG",
                                                "ISA",
                                                "JER",
                                                "LAM",
                                                "EZK",
                                                "DAN",
                                                "HOS",
                                                "JOL",
                                                "AMO",
                                                "OBA",
                                                "JON",
                                                "MIC",
                                                "NAM",
                                                "HAB",
                                                "ZEP",
                                                "HAG",
                                                "ZEC",
                                                "MAL",
                                                "MAT",
                                                "MRK",
                                                "LUK",
                                                "JHN",
                                                "ACT",
                                                "ROM",
                                                "1CO",
                                                "2CO",
                                                "GAL",
                                                "EPH",
                                                "PHP",
                                                "COL",
                                                "1TH",
                                                "2TH",
                                                "1TI",
                                                "2TI",
                                                "TIT",
                                                "PHM",
                                                "HEB",
                                                "JAS",
                                                "1PE",
                                                "2PE",
                                                "1JN",
                                                "2JN",
                                                "3JN",
                                                "JUD",
                                                "REV",
                                                "TOB",
                                                "JDT",
                                                "ESG",
                                                "WIS",
                                                "SIR",
                                                "BAR",
                                                "LJE",
                                                "S3Y",
                                                "SUS",
                                                "BEL",
                                                "1MA",
                                                "2MA",
                                                "3MA",
                                                "4MA",
                                                "1ES",
                                                "2ES",
                                                "MAN",
                                                "PS2",
                                                "ODA",
                                                "PSS",
                                                "JSA",
                                                "JDB",
                                                "TBS",
                                                "SST",
                                                "DNT",
                                                "BLT",
                                                "EZA",
                                                "5EZ",
                                                "6EZ",
                                                "DAG",
                                                "PS3",
                                                "2BA",
                                                "LBA",
                                                "JUB",
                                                "ENO",
                                                "1MQ",
                                                "2MQ",
                                                "3MQ",
                                                "REP",
                                                "4BA",
                                                "LAO"
                                            ],
                                            description: "A USFM book code consisting of three uppercase alphanumerics."
                                        },
                                        minProperties: 1
                                    }
                                },
                                required: [
                                    "name",
                                    "flavor",
                                    "currentScope"
                                ],
                                additionalProperties: false
                            }
                        },
                        required: [
                            "flavorType"
                        ],
                        if: {
                            properties: {
                                flavorType: {
                                    type: "object",
                                    properties: {
                                        flavor: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    const: "textTranslation"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        then: {
                            properties: {
                                flavorType: {
                                    type: "object",
                                    properties: {
                                        flavor: {
                                            $schema: "http://json-schema.org/draft-07/schema",
                                            $id: "https://burrito.bible/schema/scripture/text_translation.schema.json",
                                            title: "Flavor Details: scripture/textTranslation",
                                            type: "object",
                                            description: "Schema of flavor field for textTranslation flavor",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    const: "textTranslation"
                                                },
                                                projectType: {
                                                    type: "string",
                                                    enum: [
                                                        "standard",
                                                        "daughter",
                                                        "studyBible",
                                                        "studyBibleAdditions",
                                                        "backTranslation",
                                                        "auxiliary",
                                                        "transliterationManual",
                                                        "transliterationWithEncoder"
                                                    ]
                                                },
                                                translationType: {
                                                    type: "string",
                                                    enum: [
                                                        "firstTranslation",
                                                        "newTranslation",
                                                        "revision",
                                                        "studyOrHelpMaterial"
                                                    ]
                                                },
                                                audience: {
                                                    type: "string",
                                                    enum: [
                                                        "basic",
                                                        "common",
                                                        "common-literary",
                                                        "literary",
                                                        "liturgical",
                                                        "children"
                                                    ]
                                                },
                                                usfmVersion: {
                                                    type: "string",
                                                    pattern: "^\\d+\\.\\d+(\\..+)?$"
                                                },
                                                conventions: {
                                                    type: "object",
                                                    additionalProperties: {
                                                        type: "string",
                                                        pattern: "^\\d+[.]\\d+([.].+)?$"
                                                    },
                                                    propertyNames: {
                                                        type: "string",
                                                        pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                        oneOf: [
                                                            {
                                                                type: "string",
                                                                pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                description: "User-defined token, prefixed with x-"
                                                            },
                                                            {
                                                                enum: [
                                                                    "usxRefs",
                                                                    "usxDirs",
                                                                    "typesetAsVersedParagraphs"
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            required: [
                                                "name",
                                                "projectType",
                                                "translationType",
                                                "audience",
                                                "usfmVersion"
                                            ],
                                            additionalProperties: false
                                        }
                                    }
                                }
                            }
                        },
                        else: {
                            if: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            flavor: {
                                                type: "object",
                                                properties: {
                                                    name: {
                                                        const: "audioTranslation"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            then: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            flavor: {
                                                $schema: "http://json-schema.org/draft-07/schema",
                                                $id: "https://burrito.bible/schema/scripture/audio_translation.schema.json",
                                                title: "Flavor Details: Audio Translation",
                                                type: "object",
                                                description: "Schema of flavor field of scripture/audioTranslation flavor",
                                                definitions: {
                                                    format: {
                                                        type: "object",
                                                        properties: {
                                                            compression: {
                                                                type: "string",
                                                                enum: [
                                                                    "mp3",
                                                                    "wav"
                                                                ]
                                                            },
                                                            trackConfiguration: {
                                                                type: "string",
                                                                enum: [
                                                                    "1/0 (Mono)",
                                                                    "Dual mono",
                                                                    "2/0 (Stereo)",
                                                                    "5.1 Surround"
                                                                ]
                                                            },
                                                            bitRate: {
                                                                type: "integer"
                                                            },
                                                            bitDepth: {
                                                                type: "integer"
                                                            },
                                                            samplingRate: {
                                                                type: "integer"
                                                            },
                                                            timingDir: {
                                                                type: "string",
                                                                pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                                                description: "A file path, delimited by forward slashes."
                                                            }
                                                        },
                                                        required: [
                                                            "compression"
                                                        ],
                                                        additionalProperties: false
                                                    }
                                                },
                                                properties: {
                                                    name: {
                                                        const: "audioTranslation"
                                                    },
                                                    performance: {
                                                        type: "array",
                                                        items: {
                                                            type: "string",
                                                            enum: [
                                                                "singleVoice",
                                                                "multipleVoice",
                                                                "reading",
                                                                "drama",
                                                                "withMusic",
                                                                "withEffects",
                                                                "withHeadings"
                                                            ]
                                                        },
                                                        uniqueItems: true,
                                                        allOf: [
                                                            {
                                                                if: {
                                                                    contains: {
                                                                        const: "singleVoice"
                                                                    }
                                                                },
                                                                then: {
                                                                    not: {
                                                                        contains: {
                                                                            const: "multipleVoice"
                                                                        }
                                                                    }
                                                                },
                                                                else: {
                                                                    contains: {
                                                                        const: "multipleVoice"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                if: {
                                                                    contains: {
                                                                        const: "reading"
                                                                    }
                                                                },
                                                                then: {
                                                                    not: {
                                                                        contains: {
                                                                            const: "drama"
                                                                        }
                                                                    }
                                                                },
                                                                else: {
                                                                    contains: {
                                                                        const: "drama"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    formats: {
                                                        type: "object",
                                                        additionalProperties: {
                                                            type: "object",
                                                            properties: {
                                                                compression: {
                                                                    type: "string",
                                                                    enum: [
                                                                        "mp3",
                                                                        "wav"
                                                                    ]
                                                                },
                                                                trackConfiguration: {
                                                                    type: "string",
                                                                    enum: [
                                                                        "1/0 (Mono)",
                                                                        "Dual mono",
                                                                        "2/0 (Stereo)",
                                                                        "5.1 Surround"
                                                                    ]
                                                                },
                                                                bitRate: {
                                                                    type: "integer"
                                                                },
                                                                bitDepth: {
                                                                    type: "integer"
                                                                },
                                                                samplingRate: {
                                                                    type: "integer"
                                                                },
                                                                timingDir: {
                                                                    type: "string",
                                                                    pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                                                    description: "A file path, delimited by forward slashes."
                                                                }
                                                            },
                                                            required: [
                                                                "compression"
                                                            ],
                                                            additionalProperties: false
                                                        },
                                                        propertyNames: {
                                                            type: "string"
                                                        }
                                                    },
                                                    conventions: {
                                                        type: "object",
                                                        additionalProperties: {
                                                            type: "string",
                                                            pattern: "^\\d+[.]\\d+([.].+)?$"
                                                        },
                                                        propertyNames: {
                                                            type: "string",
                                                            pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                            oneOf: [
                                                                {
                                                                    type: "string",
                                                                    pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                    description: "User-defined token, prefixed with x-"
                                                                },
                                                                {
                                                                    enum: [
                                                                        "contentResourcesByChapter",
                                                                        "bookDirs"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                required: [
                                                    "performance",
                                                    "formats"
                                                ],
                                                additionalProperties: false
                                            }
                                        }
                                    }
                                }
                            },
                            else: {
                                if: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                flavor: {
                                                    type: "object",
                                                    properties: {
                                                        name: {
                                                            const: "typesetScripture"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                then: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                flavor: {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/scripture/typeset_scripture.schema.json",
                                                    title: "Flavor Details: Scripture: Print Publication",
                                                    type: "object",
                                                    description: "Schema of flavor field for scripture/printPublication flavor",
                                                    definitions: {
                                                        measurementString: {
                                                            type: "string",
                                                            pattern: "^[1-9][0-9]{0,4}mm$"
                                                        },
                                                        percentageString: {
                                                            type: "string",
                                                            pattern: "[1-9][0-9]{1,3}%"
                                                        },
                                                        orientation: {
                                                            type: "string",
                                                            enum: [
                                                                "portrait",
                                                                "landscape"
                                                            ]
                                                        },
                                                        colorSpace: {
                                                            type: "string",
                                                            enum: [
                                                                "cmyk",
                                                                "rgb"
                                                            ]
                                                        }
                                                    },
                                                    properties: {
                                                        name: {
                                                            type: "string",
                                                            const: "typesetScripture"
                                                        },
                                                        contentType: {
                                                            type: "string",
                                                            const: "pdf"
                                                        },
                                                        pod: {
                                                            type: "boolean"
                                                        },
                                                        pageCount: {
                                                            type: "integer",
                                                            minimum: 0
                                                        },
                                                        width: {
                                                            type: "string",
                                                            pattern: "^[1-9][0-9]{0,4}mm$"
                                                        },
                                                        height: {
                                                            type: "string",
                                                            pattern: "^[1-9][0-9]{0,4}mm$"
                                                        },
                                                        scale: {
                                                            type: "string",
                                                            pattern: "[1-9][0-9]{1,3}%"
                                                        },
                                                        orientation: {
                                                            type: "string",
                                                            enum: [
                                                                "portrait",
                                                                "landscape"
                                                            ]
                                                        },
                                                        colorSpace: {
                                                            type: "string",
                                                            enum: [
                                                                "cmyk",
                                                                "rgb"
                                                            ]
                                                        },
                                                        edgeSpace: {
                                                            type: "object",
                                                            properties: {
                                                                top: {
                                                                    type: "string",
                                                                    pattern: "^[1-9][0-9]{0,4}mm$"
                                                                },
                                                                bottom: {
                                                                    type: "string",
                                                                    pattern: "^[1-9][0-9]{0,4}mm$"
                                                                },
                                                                inside: {
                                                                    type: "string",
                                                                    pattern: "^[1-9][0-9]{0,4}mm$"
                                                                },
                                                                outside: {
                                                                    type: "string",
                                                                    pattern: "^[1-9][0-9]{0,4}mm$"
                                                                }
                                                            },
                                                            additionalProperties: false
                                                        },
                                                        fonts: {
                                                            type: "array",
                                                            items: {
                                                                type: "string"
                                                            }
                                                        },
                                                        conventions: {
                                                            type: "object",
                                                            additionalProperties: {
                                                                type: "string",
                                                                pattern: "^\\d+[.]\\d+([.].+)?$"
                                                            },
                                                            propertyNames: {
                                                                type: "string",
                                                                pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                oneOf: [
                                                                    {
                                                                        type: "string",
                                                                        pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                        description: "User-defined token, prefixed with x-"
                                                                    },
                                                                    {
                                                                        enum: [
                                                                            "contentResourcesByChapter"
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    required: [
                                                        "name",
                                                        "contentType",
                                                        "pod",
                                                        "pageCount",
                                                        "height",
                                                        "width",
                                                        "scale",
                                                        "colorSpace"
                                                    ],
                                                    additionalProperties: false
                                                }
                                            }
                                        }
                                    }
                                },
                                else: {
                                    if: {
                                        properties: {
                                            flavorType: {
                                                type: "object",
                                                properties: {
                                                    flavor: {
                                                        type: "object",
                                                        properties: {
                                                            name: {
                                                                const: "embossedBrailleScripture"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    then: {
                                        properties: {
                                            flavorType: {
                                                type: "object",
                                                properties: {
                                                    flavor: {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/scripture/embossed_braille_scripture.schema.json",
                                                        title: "Flavor Details: Scripture: Braille Publication",
                                                        type: "object",
                                                        description: "Schema of flavor field for scripture/brailleScripturePublication flavor",
                                                        properties: {
                                                            name: {
                                                                type: "string",
                                                                const: "embossedBrailleScripture"
                                                            },
                                                            isContracted: {
                                                                type: "boolean"
                                                            },
                                                            processor: {
                                                                type: "object",
                                                                properties: {
                                                                    name: {
                                                                        type: "string",
                                                                        const: "libLouis"
                                                                    },
                                                                    version: {
                                                                        type: "string"
                                                                    },
                                                                    table: {
                                                                        type: "object",
                                                                        properties: {
                                                                            src: {
                                                                                type: "string"
                                                                            },
                                                                            name: {
                                                                                type: "string"
                                                                            }
                                                                        },
                                                                        additionalProperties: false,
                                                                        required: [
                                                                            "src",
                                                                            "name"
                                                                        ]
                                                                    }
                                                                },
                                                                required: [
                                                                    "name",
                                                                    "version",
                                                                    "table"
                                                                ],
                                                                additionalProperties: false
                                                            },
                                                            hyphenationDictionary: {
                                                                type: "object",
                                                                properties: {
                                                                    src: {
                                                                        type: "string"
                                                                    },
                                                                    name: {
                                                                        type: "string"
                                                                    }
                                                                },
                                                                additionalProperties: false,
                                                                required: [
                                                                    "src",
                                                                    "name"
                                                                ]
                                                            },
                                                            numberSign: {
                                                                type: "object",
                                                                properties: {
                                                                    character: {
                                                                        type: "string",
                                                                        pattern: "([⠀-⣿])*"
                                                                    },
                                                                    useInMargin: {
                                                                        type: "boolean"
                                                                    }
                                                                },
                                                                required: [
                                                                    "character",
                                                                    "useInMargin"
                                                                ],
                                                                additionalProperties: false
                                                            },
                                                            continuousPoetry: {
                                                                type: "object",
                                                                properties: {
                                                                    lineIndicatorSpaced: {
                                                                        type: "string",
                                                                        enum: [
                                                                            "never",
                                                                            "always",
                                                                            "sometimes"
                                                                        ]
                                                                    },
                                                                    startIndicator: {
                                                                        type: "string",
                                                                        pattern: "([⠀-⣿])*"
                                                                    },
                                                                    lineIndicator: {
                                                                        type: "string",
                                                                        pattern: "([⠀-⣿])*"
                                                                    },
                                                                    endIndicator: {
                                                                        type: "string",
                                                                        pattern: "([⠀-⣿])*"
                                                                    }
                                                                },
                                                                additionalProperties: false,
                                                                required: [
                                                                    "lineIndicatorSpaced"
                                                                ]
                                                            },
                                                            content: {
                                                                type: "object",
                                                                properties: {
                                                                    chapterNumberStyle: {
                                                                        type: "string",
                                                                        enum: [
                                                                            "upper",
                                                                            "lower"
                                                                        ]
                                                                    },
                                                                    chapterHeadingsNumberFirst: {
                                                                        type: "boolean"
                                                                    },
                                                                    versedParagraphs: {
                                                                        type: "boolean"
                                                                    },
                                                                    verseSeparator: {
                                                                        type: "string",
                                                                        pattern: "([⠀-⣿])*"
                                                                    },
                                                                    includeIntros: {
                                                                        type: "boolean"
                                                                    },
                                                                    footnotes: {
                                                                        type: "object",
                                                                        properties: {
                                                                            callerSymbol: {
                                                                                type: "string",
                                                                                pattern: "([⠀-⣿])*"
                                                                            }
                                                                        },
                                                                        additionalProperties: false,
                                                                        required: [
                                                                            "callerSymbol"
                                                                        ]
                                                                    },
                                                                    characterStyles: {
                                                                        type: "object",
                                                                        properties: {
                                                                            callerSymbol: {
                                                                                type: "string",
                                                                                pattern: "([⠀-⣿])*"
                                                                            }
                                                                        },
                                                                        additionalProperties: false,
                                                                        required: [
                                                                            "callerSymbol"
                                                                        ]
                                                                    },
                                                                    crossReferences: {
                                                                        type: "object",
                                                                        properties: {
                                                                            emphasizedWord: {
                                                                                type: "string",
                                                                                pattern: "([⠀-⣿])*"
                                                                            },
                                                                            emphasizedPassageStart: {
                                                                                type: "string",
                                                                                pattern: "([⠀-⣿])*"
                                                                            },
                                                                            emphasizedPassageEnd: {
                                                                                type: "string",
                                                                                pattern: "([⠀-⣿])*"
                                                                            }
                                                                        },
                                                                        additionalProperties: false,
                                                                        minProperties: 1
                                                                    }
                                                                },
                                                                required: [
                                                                    "chapterNumberStyle",
                                                                    "chapterHeadingsNumberFirst",
                                                                    "versedParagraphs",
                                                                    "verseSeparator",
                                                                    "includeIntros"
                                                                ],
                                                                additionalProperties: false
                                                            },
                                                            page: {
                                                                type: "object",
                                                                properties: {
                                                                    charsPerLine: {
                                                                        type: "number",
                                                                        multipleOf: 1,
                                                                        minimum: 1
                                                                    },
                                                                    linesPerPage: {
                                                                        type: "number",
                                                                        multipleOf: 1,
                                                                        minimum: 1
                                                                    },
                                                                    defaultMarginWidth: {
                                                                        type: "number",
                                                                        multipleOf: 1,
                                                                        minimum: 1
                                                                    },
                                                                    versoLastLineBlank: {
                                                                        type: "boolean"
                                                                    },
                                                                    carryLines: {
                                                                        type: "number",
                                                                        multipleOf: 1,
                                                                        minimum: 1
                                                                    }
                                                                },
                                                                required: [
                                                                    "charsPerLine",
                                                                    "linesPerPage",
                                                                    "defaultMarginWidth",
                                                                    "versoLastLineBlank",
                                                                    "carryLines"
                                                                ],
                                                                additionalProperties: false
                                                            },
                                                            conventions: {
                                                                type: "object",
                                                                additionalProperties: {
                                                                    type: "string",
                                                                    pattern: "^\\d+[.]\\d+([.].+)?$"
                                                                },
                                                                propertyNames: {
                                                                    type: "string",
                                                                    pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                    oneOf: [
                                                                        {
                                                                            type: "string",
                                                                            pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                            description: "User-defined token, prefixed with x-"
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        required: [
                                                            "isContracted",
                                                            "processor",
                                                            "numberSign",
                                                            "content",
                                                            "page"
                                                        ],
                                                        additionalProperties: false
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    else: {
                                        if: {
                                            properties: {
                                                flavorType: {
                                                    type: "object",
                                                    properties: {
                                                        flavor: {
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    const: "signLanguageVideoTranslation"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        then: {
                                            properties: {
                                                flavorType: {
                                                    type: "object",
                                                    properties: {
                                                        flavor: {
                                                            $schema: "http://json-schema.org/draft-07/schema",
                                                            $id: "https://burrito.bible/schema/scripture/sign_language_video_translation.schema.json",
                                                            title: "Flavor Details: Scripture: Sign Language Video Translation",
                                                            type: "object",
                                                            description: "Schema of flavor field for signLanguageVideoTranslation flavor",
                                                            definitions: {
                                                                format: {
                                                                    type: "object",
                                                                    properties: {
                                                                        container: {
                                                                            type: "string",
                                                                            enum: [
                                                                                "mp4",
                                                                                "mpg"
                                                                            ]
                                                                        },
                                                                        videoStream: {
                                                                            type: "object",
                                                                            properties: {
                                                                                bitRate: {
                                                                                    type: "integer"
                                                                                },
                                                                                frameRate: {
                                                                                    type: "integer"
                                                                                },
                                                                                screenResolution: {
                                                                                    type: "string",
                                                                                    pattern: "^\\d+x\\d+$"
                                                                                }
                                                                            },
                                                                            required: [
                                                                                "bitRate",
                                                                                "frameRate",
                                                                                "screenResolution"
                                                                            ],
                                                                            additionalProperties: false
                                                                        },
                                                                        audioStream: {
                                                                            type: "object",
                                                                            properties: {
                                                                                compression: {
                                                                                    type: "string",
                                                                                    enum: [
                                                                                        "mp3",
                                                                                        "wav"
                                                                                    ]
                                                                                },
                                                                                trackConfiguration: {
                                                                                    type: "string",
                                                                                    enum: [
                                                                                        "1/0 (Mono)",
                                                                                        "Dual mono",
                                                                                        "2/0 (Stereo)",
                                                                                        "5.1 Surround"
                                                                                    ]
                                                                                },
                                                                                bitRate: {
                                                                                    type: "integer"
                                                                                },
                                                                                bitDepth: {
                                                                                    type: "integer"
                                                                                },
                                                                                samplingRate: {
                                                                                    type: "integer"
                                                                                }
                                                                            },
                                                                            required: [
                                                                                "compression"
                                                                            ],
                                                                            additionalProperties: false
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "container",
                                                                        "videoStream"
                                                                    ],
                                                                    additionalProperties: false
                                                                }
                                                            },
                                                            properties: {
                                                                name: {
                                                                    type: "string",
                                                                    const: "signLanguageVideoTranslation"
                                                                },
                                                                contentByChapter: {
                                                                    type: "boolean"
                                                                },
                                                                formats: {
                                                                    type: "object",
                                                                    additionalProperties: {
                                                                        type: "object",
                                                                        properties: {
                                                                            container: {
                                                                                type: "string",
                                                                                enum: [
                                                                                    "mp4",
                                                                                    "mpg"
                                                                                ]
                                                                            },
                                                                            videoStream: {
                                                                                type: "object",
                                                                                properties: {
                                                                                    bitRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    frameRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    screenResolution: {
                                                                                        type: "string",
                                                                                        pattern: "^\\d+x\\d+$"
                                                                                    }
                                                                                },
                                                                                required: [
                                                                                    "bitRate",
                                                                                    "frameRate",
                                                                                    "screenResolution"
                                                                                ],
                                                                                additionalProperties: false
                                                                            },
                                                                            audioStream: {
                                                                                type: "object",
                                                                                properties: {
                                                                                    compression: {
                                                                                        type: "string",
                                                                                        enum: [
                                                                                            "mp3",
                                                                                            "wav"
                                                                                        ]
                                                                                    },
                                                                                    trackConfiguration: {
                                                                                        type: "string",
                                                                                        enum: [
                                                                                            "1/0 (Mono)",
                                                                                            "Dual mono",
                                                                                            "2/0 (Stereo)",
                                                                                            "5.1 Surround"
                                                                                        ]
                                                                                    },
                                                                                    bitRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    bitDepth: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    samplingRate: {
                                                                                        type: "integer"
                                                                                    }
                                                                                },
                                                                                required: [
                                                                                    "compression"
                                                                                ],
                                                                                additionalProperties: false
                                                                            }
                                                                        },
                                                                        required: [
                                                                            "container",
                                                                            "videoStream"
                                                                        ],
                                                                        additionalProperties: false
                                                                    },
                                                                    propertyNames: {
                                                                        type: "string"
                                                                    },
                                                                    minProperties: 1
                                                                },
                                                                conventions: {
                                                                    type: "object",
                                                                    additionalProperties: {
                                                                        type: "string",
                                                                        pattern: "^\\d+[.]\\d+([.].+)?$"
                                                                    },
                                                                    propertyNames: {
                                                                        type: "string",
                                                                        pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                        oneOf: [
                                                                            {
                                                                                type: "string",
                                                                                pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                                description: "User-defined token, prefixed with x-"
                                                                            },
                                                                            {
                                                                                enum: [
                                                                                    "bookDirs",
                                                                                    "rolesInUris"
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            required: [
                                                                "name",
                                                                "contentByChapter",
                                                                "formats"
                                                            ],
                                                            additionalProperties: false
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        else: {
                                            properties: {
                                                flavorType: {
                                                    type: "object",
                                                    properties: {
                                                        flavor: {
                                                            $schema: "http://json-schema.org/draft-07/schema",
                                                            $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                            $$target: "x_flavor.schema.json",
                                                            title: "Flavor Details: X-Flavor",
                                                            description: "Schema of flavor field for xFlavor",
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    type: "string",
                                                                    pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                                }
                                                            },
                                                            required: [
                                                                "name"
                                                            ],
                                                            additionalProperties: true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    else: {
                        if: {
                            properties: {
                                flavorType: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            const: "gloss"
                                        }
                                    }
                                }
                            }
                        },
                        then: {
                            properties: {
                                flavorType: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string",
                                            const: "gloss"
                                        },
                                        flavor: {
                                            type: "object",
                                            oneOf: [
                                                {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/gloss/text_stories.schema.json",
                                                    $$target: "text_stories.schema.json",
                                                    title: "Flavor Details: Glossed Text Stories",
                                                    type: "object",
                                                    description: "Schema of flavor field for textStories flavor",
                                                    properties: {
                                                        name: {
                                                            const: "textStories"
                                                        }
                                                    },
                                                    additionalProperties: false
                                                },
                                                {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                    $$target: "x_flavor.schema.json",
                                                    title: "Flavor Details: X-Flavor",
                                                    description: "Schema of flavor field for xFlavor",
                                                    type: "object",
                                                    properties: {
                                                        name: {
                                                            type: "string",
                                                            pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                        }
                                                    },
                                                    required: [
                                                        "name"
                                                    ],
                                                    additionalProperties: true
                                                }
                                            ]
                                        },
                                        currentScope: {
                                            $schema: "http://json-schema.org/draft-07/schema",
                                            $id: "https://burrito.bible/schema/scope.schema.json",
                                            $$target: "scope.schema.json",
                                            title: "Scope",
                                            type: "object",
                                            description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                            additionalProperties: {
                                                oneOf: [
                                                    {
                                                        type: "array",
                                                        items: {
                                                            type: "string",
                                                            pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                        },
                                                        minItems: 1,
                                                        uniqueItems: true
                                                    },
                                                    {
                                                        type: "array",
                                                        maxItems: 0
                                                    }
                                                ]
                                            },
                                            propertyNames: {
                                                type: "string",
                                                pattern: "^[A-Z0-9]{3}$",
                                                minLength: 3,
                                                maxLength: 3,
                                                enum: [
                                                    "GEN",
                                                    "EXO",
                                                    "LEV",
                                                    "NUM",
                                                    "DEU",
                                                    "JOS",
                                                    "JDG",
                                                    "RUT",
                                                    "1SA",
                                                    "2SA",
                                                    "1KI",
                                                    "2KI",
                                                    "1CH",
                                                    "2CH",
                                                    "EZR",
                                                    "NEH",
                                                    "EST",
                                                    "JOB",
                                                    "PSA",
                                                    "PRO",
                                                    "ECC",
                                                    "SNG",
                                                    "ISA",
                                                    "JER",
                                                    "LAM",
                                                    "EZK",
                                                    "DAN",
                                                    "HOS",
                                                    "JOL",
                                                    "AMO",
                                                    "OBA",
                                                    "JON",
                                                    "MIC",
                                                    "NAM",
                                                    "HAB",
                                                    "ZEP",
                                                    "HAG",
                                                    "ZEC",
                                                    "MAL",
                                                    "MAT",
                                                    "MRK",
                                                    "LUK",
                                                    "JHN",
                                                    "ACT",
                                                    "ROM",
                                                    "1CO",
                                                    "2CO",
                                                    "GAL",
                                                    "EPH",
                                                    "PHP",
                                                    "COL",
                                                    "1TH",
                                                    "2TH",
                                                    "1TI",
                                                    "2TI",
                                                    "TIT",
                                                    "PHM",
                                                    "HEB",
                                                    "JAS",
                                                    "1PE",
                                                    "2PE",
                                                    "1JN",
                                                    "2JN",
                                                    "3JN",
                                                    "JUD",
                                                    "REV",
                                                    "TOB",
                                                    "JDT",
                                                    "ESG",
                                                    "WIS",
                                                    "SIR",
                                                    "BAR",
                                                    "LJE",
                                                    "S3Y",
                                                    "SUS",
                                                    "BEL",
                                                    "1MA",
                                                    "2MA",
                                                    "3MA",
                                                    "4MA",
                                                    "1ES",
                                                    "2ES",
                                                    "MAN",
                                                    "PS2",
                                                    "ODA",
                                                    "PSS",
                                                    "JSA",
                                                    "JDB",
                                                    "TBS",
                                                    "SST",
                                                    "DNT",
                                                    "BLT",
                                                    "EZA",
                                                    "5EZ",
                                                    "6EZ",
                                                    "DAG",
                                                    "PS3",
                                                    "2BA",
                                                    "LBA",
                                                    "JUB",
                                                    "ENO",
                                                    "1MQ",
                                                    "2MQ",
                                                    "3MQ",
                                                    "REP",
                                                    "4BA",
                                                    "LAO"
                                                ],
                                                description: "A USFM book code consisting of three uppercase alphanumerics."
                                            },
                                            minProperties: 1
                                        }
                                    },
                                    required: [
                                        "name",
                                        "flavor",
                                        "currentScope"
                                    ],
                                    additionalProperties: false
                                }
                            }
                        },
                        else: {
                            if: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                const: "parascriptural"
                                            }
                                        }
                                    }
                                }
                            },
                            then: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string",
                                                const: "parascriptural"
                                            },
                                            flavor: {
                                                type: "object",
                                                oneOf: [
                                                    {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                        $$target: "x_flavor.schema.json",
                                                        title: "Flavor Details: X-Flavor",
                                                        description: "Schema of flavor field for xFlavor",
                                                        type: "object",
                                                        properties: {
                                                            name: {
                                                                type: "string",
                                                                pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                            }
                                                        },
                                                        required: [
                                                            "name"
                                                        ],
                                                        additionalProperties: true
                                                    }
                                                ]
                                            },
                                            currentScope: {
                                                $schema: "http://json-schema.org/draft-07/schema",
                                                $id: "https://burrito.bible/schema/scope.schema.json",
                                                $$target: "scope.schema.json",
                                                title: "Scope",
                                                type: "object",
                                                description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                                additionalProperties: {
                                                    oneOf: [
                                                        {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                            },
                                                            minItems: 1,
                                                            uniqueItems: true
                                                        },
                                                        {
                                                            type: "array",
                                                            maxItems: 0
                                                        }
                                                    ]
                                                },
                                                propertyNames: {
                                                    type: "string",
                                                    pattern: "^[A-Z0-9]{3}$",
                                                    minLength: 3,
                                                    maxLength: 3,
                                                    enum: [
                                                        "GEN",
                                                        "EXO",
                                                        "LEV",
                                                        "NUM",
                                                        "DEU",
                                                        "JOS",
                                                        "JDG",
                                                        "RUT",
                                                        "1SA",
                                                        "2SA",
                                                        "1KI",
                                                        "2KI",
                                                        "1CH",
                                                        "2CH",
                                                        "EZR",
                                                        "NEH",
                                                        "EST",
                                                        "JOB",
                                                        "PSA",
                                                        "PRO",
                                                        "ECC",
                                                        "SNG",
                                                        "ISA",
                                                        "JER",
                                                        "LAM",
                                                        "EZK",
                                                        "DAN",
                                                        "HOS",
                                                        "JOL",
                                                        "AMO",
                                                        "OBA",
                                                        "JON",
                                                        "MIC",
                                                        "NAM",
                                                        "HAB",
                                                        "ZEP",
                                                        "HAG",
                                                        "ZEC",
                                                        "MAL",
                                                        "MAT",
                                                        "MRK",
                                                        "LUK",
                                                        "JHN",
                                                        "ACT",
                                                        "ROM",
                                                        "1CO",
                                                        "2CO",
                                                        "GAL",
                                                        "EPH",
                                                        "PHP",
                                                        "COL",
                                                        "1TH",
                                                        "2TH",
                                                        "1TI",
                                                        "2TI",
                                                        "TIT",
                                                        "PHM",
                                                        "HEB",
                                                        "JAS",
                                                        "1PE",
                                                        "2PE",
                                                        "1JN",
                                                        "2JN",
                                                        "3JN",
                                                        "JUD",
                                                        "REV",
                                                        "TOB",
                                                        "JDT",
                                                        "ESG",
                                                        "WIS",
                                                        "SIR",
                                                        "BAR",
                                                        "LJE",
                                                        "S3Y",
                                                        "SUS",
                                                        "BEL",
                                                        "1MA",
                                                        "2MA",
                                                        "3MA",
                                                        "4MA",
                                                        "1ES",
                                                        "2ES",
                                                        "MAN",
                                                        "PS2",
                                                        "ODA",
                                                        "PSS",
                                                        "JSA",
                                                        "JDB",
                                                        "TBS",
                                                        "SST",
                                                        "DNT",
                                                        "BLT",
                                                        "EZA",
                                                        "5EZ",
                                                        "6EZ",
                                                        "DAG",
                                                        "PS3",
                                                        "2BA",
                                                        "LBA",
                                                        "JUB",
                                                        "ENO",
                                                        "1MQ",
                                                        "2MQ",
                                                        "3MQ",
                                                        "REP",
                                                        "4BA",
                                                        "LAO"
                                                    ],
                                                    description: "A USFM book code consisting of three uppercase alphanumerics."
                                                },
                                                minProperties: 1
                                            }
                                        },
                                        required: [
                                            "name",
                                            "flavor"
                                        ],
                                        additionalProperties: false
                                    }
                                }
                            },
                            else: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string",
                                                const: "peripheral"
                                            },
                                            flavor: {
                                                type: "object",
                                                oneOf: [
                                                    {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                        $$target: "x_flavor.schema.json",
                                                        title: "Flavor Details: X-Flavor",
                                                        description: "Schema of flavor field for xFlavor",
                                                        type: "object",
                                                        properties: {
                                                            name: {
                                                                type: "string",
                                                                pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                            }
                                                        },
                                                        required: [
                                                            "name"
                                                        ],
                                                        additionalProperties: true
                                                    }
                                                ]
                                            },
                                            currentScope: {
                                                $schema: "http://json-schema.org/draft-07/schema",
                                                $id: "https://burrito.bible/schema/scope.schema.json",
                                                $$target: "scope.schema.json",
                                                title: "Scope",
                                                type: "object",
                                                description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                                additionalProperties: {
                                                    oneOf: [
                                                        {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                            },
                                                            minItems: 1,
                                                            uniqueItems: true
                                                        },
                                                        {
                                                            type: "array",
                                                            maxItems: 0
                                                        }
                                                    ]
                                                },
                                                propertyNames: {
                                                    type: "string",
                                                    pattern: "^[A-Z0-9]{3}$",
                                                    minLength: 3,
                                                    maxLength: 3,
                                                    enum: [
                                                        "GEN",
                                                        "EXO",
                                                        "LEV",
                                                        "NUM",
                                                        "DEU",
                                                        "JOS",
                                                        "JDG",
                                                        "RUT",
                                                        "1SA",
                                                        "2SA",
                                                        "1KI",
                                                        "2KI",
                                                        "1CH",
                                                        "2CH",
                                                        "EZR",
                                                        "NEH",
                                                        "EST",
                                                        "JOB",
                                                        "PSA",
                                                        "PRO",
                                                        "ECC",
                                                        "SNG",
                                                        "ISA",
                                                        "JER",
                                                        "LAM",
                                                        "EZK",
                                                        "DAN",
                                                        "HOS",
                                                        "JOL",
                                                        "AMO",
                                                        "OBA",
                                                        "JON",
                                                        "MIC",
                                                        "NAM",
                                                        "HAB",
                                                        "ZEP",
                                                        "HAG",
                                                        "ZEC",
                                                        "MAL",
                                                        "MAT",
                                                        "MRK",
                                                        "LUK",
                                                        "JHN",
                                                        "ACT",
                                                        "ROM",
                                                        "1CO",
                                                        "2CO",
                                                        "GAL",
                                                        "EPH",
                                                        "PHP",
                                                        "COL",
                                                        "1TH",
                                                        "2TH",
                                                        "1TI",
                                                        "2TI",
                                                        "TIT",
                                                        "PHM",
                                                        "HEB",
                                                        "JAS",
                                                        "1PE",
                                                        "2PE",
                                                        "1JN",
                                                        "2JN",
                                                        "3JN",
                                                        "JUD",
                                                        "REV",
                                                        "TOB",
                                                        "JDT",
                                                        "ESG",
                                                        "WIS",
                                                        "SIR",
                                                        "BAR",
                                                        "LJE",
                                                        "S3Y",
                                                        "SUS",
                                                        "BEL",
                                                        "1MA",
                                                        "2MA",
                                                        "3MA",
                                                        "4MA",
                                                        "1ES",
                                                        "2ES",
                                                        "MAN",
                                                        "PS2",
                                                        "ODA",
                                                        "PSS",
                                                        "JSA",
                                                        "JDB",
                                                        "TBS",
                                                        "SST",
                                                        "DNT",
                                                        "BLT",
                                                        "EZA",
                                                        "5EZ",
                                                        "6EZ",
                                                        "DAG",
                                                        "PS3",
                                                        "2BA",
                                                        "LBA",
                                                        "JUB",
                                                        "ENO",
                                                        "1MQ",
                                                        "2MQ",
                                                        "3MQ",
                                                        "REP",
                                                        "4BA",
                                                        "LAO"
                                                    ],
                                                    description: "A USFM book code consisting of three uppercase alphanumerics."
                                                },
                                                minProperties: 1
                                            }
                                        },
                                        required: [
                                            "name",
                                            "flavor"
                                        ],
                                        additionalProperties: false
                                    }
                                }
                            }
                        }
                    }
                },
                relationships: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/relationships.schema.json",
                    $$target: "relationships.schema.json",
                    title: "Relationships",
                    type: "array",
                    items: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/relationship.schema.json",
                        $$target: "relationship.schema.json",
                        title: "Relationship",
                        type: "object",
                        description: "Describes a relationship to a different burrito that can be obtained from an indicated server.",
                        properties: {
                            relationType: {
                                type: "string",
                                enum: [
                                    "source",
                                    "target",
                                    "expression",
                                    "parascriptural",
                                    "peripheral"
                                ],
                                minLength: 1
                            },
                            flavor: {
                                type: "string",
                                oneOf: [
                                    {
                                        enum: [
                                            "textTranslation",
                                            "audioTranslation",
                                            "typesetScripture",
                                            "signLanguageVideoTranslation",
                                            "embossedBrailleScripture",
                                            "glossedTextStory"
                                        ]
                                    },
                                    {
                                        pattern: "^x-[a-z][A-za-z0-9]*$"
                                    }
                                ],
                                minLength: 1
                            },
                            id: {
                                type: "string",
                                pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$",
                                description: "Opaque system-specific identifier, prefixed with the name of the system as declared in idAuthorities."
                            },
                            revision: {
                                type: "string",
                                pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                description: "Opaque system-specific revision identifier."
                            },
                            variant: {
                                type: "string",
                                pattern: "^[A-Za-z][A-Za-z0-9_\\-]{0,31}$"
                            }
                        },
                        required: [
                            "relationType",
                            "flavor",
                            "id"
                        ],
                        additionalProperties: false,
                        oneOf: [
                            {
                                properties: {
                                    flavor: {
                                        type: "string",
                                        pattern: "^x-[a-z][A-za-z0-9]*$"
                                    }
                                },
                                $comment: "Custom flavors can be used with any relationType."
                            },
                            {
                                properties: {
                                    relationType: {
                                        const: "source"
                                    },
                                    flavor: {
                                        enum: [
                                            "textTranslation",
                                            "audioTranslation"
                                        ]
                                    }
                                }
                            },
                            {
                                properties: {
                                    relationType: {
                                        const: "target"
                                    },
                                    flavor: {}
                                }
                            },
                            {
                                properties: {
                                    relationType: {
                                        const: "expression"
                                    },
                                    flavor: {
                                        not: {
                                            const: "scriptureText"
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    minItems: 1,
                    description: "Describes a relationship to another burrito that may be obtained from an indicated server."
                },
                languages: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/languages.schema.json",
                    $$target: "languages.schema.json",
                    title: "Languages",
                    type: "array",
                    items: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/language.schema.json",
                        $$target: "language.schema.json",
                        title: "Language",
                        type: "object",
                        description: "Language section.",
                        properties: {
                            tag: {
                                examples: [
                                    "hi",
                                    "es-419"
                                ],
                                type: "string",
                                pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                minLength: 2,
                                description: "A valid IETF language tag as specified by BCP 47."
                            },
                            name: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            numberingSystem: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/numbering_system.schema.json",
                                $$target: "numbering_system.schema.json",
                                title: "Numbering System",
                                type: "string",
                                description: "Numbering System",
                                enum: [
                                    "adlm",
                                    "ahom",
                                    "arab",
                                    "arabext",
                                    "armn",
                                    "armnlow",
                                    "bali",
                                    "beng",
                                    "bhks",
                                    "brah",
                                    "cakm",
                                    "cham",
                                    "cyrl",
                                    "deva",
                                    "ethi",
                                    "finance",
                                    "fullwide",
                                    "geor",
                                    "gong",
                                    "gonm",
                                    "grek",
                                    "greklow",
                                    "gujr",
                                    "guru",
                                    "hanidays",
                                    "hanidec",
                                    "hans",
                                    "hansfin",
                                    "hant",
                                    "hantfin",
                                    "hebr",
                                    "hmng",
                                    "hmnp",
                                    "java",
                                    "jpan",
                                    "jpanfin",
                                    "jpanyear",
                                    "kali",
                                    "khmr",
                                    "knda",
                                    "lana",
                                    "lanatham",
                                    "laoo",
                                    "latn",
                                    "lepc",
                                    "limb",
                                    "mathbold",
                                    "mathdbl",
                                    "mathmono",
                                    "mathsanb",
                                    "mathsans",
                                    "mlym",
                                    "modi",
                                    "mong",
                                    "mroo",
                                    "mtei",
                                    "mymr",
                                    "mymrshan",
                                    "mymrtlng",
                                    "native",
                                    "newa",
                                    "nkoo",
                                    "olck",
                                    "orya",
                                    "osma",
                                    "rohg",
                                    "roman",
                                    "romanlow",
                                    "saur",
                                    "shrd",
                                    "sind",
                                    "sinh",
                                    "sora",
                                    "sund",
                                    "takr",
                                    "talu",
                                    "taml",
                                    "tamldec",
                                    "telu",
                                    "thai",
                                    "tirh",
                                    "tibt",
                                    "traditio",
                                    "vaii",
                                    "wara",
                                    "wcho"
                                ]
                            },
                            rod: {
                                type: "string",
                                pattern: "^[0-9]{5}$",
                                minLength: 5,
                                maxLength: 5,
                                description: "A five-digit code from the Registry of Dialects."
                            },
                            scriptDirection: {
                                type: "string",
                                enum: [
                                    "ltr",
                                    "rtl"
                                ]
                            }
                        },
                        required: [
                            "tag",
                            "name"
                        ],
                        additionalProperties: false
                    },
                    minItems: 1,
                    description: "A list of all the languages of the contents of this burrito."
                },
                targetAreas: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/target_areas.schema.json",
                    $$target: "target_areas.schema.json",
                    title: "Target Areas",
                    type: "array",
                    items: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/target_area.schema.json",
                        $$target: "target_area.schema.json",
                        title: "Target Area",
                        type: "object",
                        description: "An area that is a primary target audience of this burrito.",
                        properties: {
                            code: {
                                oneOf: [
                                    {
                                        type: "string",
                                        pattern: "^[A-Z][A-Z]$",
                                        minLength: 2,
                                        maxLength: 2,
                                        description: "The upper-case ISO 3166-2 code for the country."
                                    },
                                    {
                                        $schema: "http://json-schema.org/draft-07/schema",
                                        $id: "https://burrito.bible/schema/unm49.schema.json",
                                        $$target: "unm49.schema.json",
                                        title: "UNM49 enum",
                                        type: "string",
                                        description: "UNM49 region code enum",
                                        enum: [
                                            "001",
                                            "002",
                                            "003",
                                            "005",
                                            "009",
                                            "011",
                                            "013",
                                            "014",
                                            "015",
                                            "017",
                                            "018",
                                            "019",
                                            "021",
                                            "024",
                                            "029",
                                            "030",
                                            "034",
                                            "035",
                                            "039",
                                            "053",
                                            "054",
                                            "057",
                                            "061",
                                            "142",
                                            "143",
                                            "145",
                                            "150",
                                            "151",
                                            "154",
                                            "155",
                                            "202",
                                            "419",
                                            "496",
                                            "554",
                                            "591",
                                            "756",
                                            "830"
                                        ]
                                    }
                                ]
                            },
                            name: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            }
                        },
                        required: [
                            "code",
                            "name"
                        ],
                        additionalProperties: false
                    },
                    minItems: 1,
                    description: "A list of areas of the primary target audience of this burrito."
                },
                agencies: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/agencies.schema.json",
                    $$target: "agencies.schema.json",
                    title: "Agencies",
                    type: "array",
                    items: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/agency.schema.json",
                        $$target: "agency.schema.json",
                        title: "Agency",
                        type: "object",
                        description: "Describes a particular agency that is involved with or related to the contents of the burrito.",
                        properties: {
                            id: {
                                type: "string",
                                pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$",
                                description: "Opaque system-specific identifier, prefixed with the name of the system as declared in idAuthorities."
                            },
                            name: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            abbr: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            url: {
                                type: "string",
                                pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                minLength: 1,
                                description: "A valid **Uniform Resource Locator**.",
                                examples: [
                                    "https://example.com"
                                ]
                            },
                            roles: {
                                type: "array",
                                items: {
                                    type: "string",
                                    enum: [
                                        "rightsAdmin",
                                        "rightsHolder",
                                        "content",
                                        "publication",
                                        "management",
                                        "finance",
                                        "qa"
                                    ]
                                },
                                description: "A list of roles indicating in which respects this agency was involved with the production of this burrito.",
                                minItems: 1
                            }
                        },
                        required: [
                            "id",
                            "name",
                            "roles"
                        ],
                        additionalProperties: false
                    },
                    minItems: 1,
                    description: "A list of agencies involved with the contents of the burrito or the work it is derived from."
                },
                copyright: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/copyright.schema.json",
                    $$target: "copyright.schema.json",
                    title: "Copyright and License Information",
                    type: "object",
                    description: "Describes the copyright holders and license terms of the burrito.",
                    properties: {
                        licenses: {
                            type: "array",
                            minItems: 1,
                            items: {
                                type: "object",
                                properties: {
                                    url: {
                                        type: "string",
                                        pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                        minLength: 1,
                                        description: "A valid **Uniform Resource Locator**.",
                                        examples: [
                                            "https://example.com"
                                        ]
                                    },
                                    ingredient: {
                                        type: "string",
                                        pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                        description: "A file path, delimited by forward slashes."
                                    }
                                },
                                oneOf: [
                                    {
                                        required: [
                                            "url"
                                        ]
                                    },
                                    {
                                        required: [
                                            "ingredient"
                                        ]
                                    }
                                ],
                                additionalProperties: false
                            },
                            description: "The licenses, which state under which terms the burrito may be used, can be specified either as URL or as path to an ingredient."
                        },
                        publicDomain: {
                            type: "boolean",
                            description: "If set to true, the contents of this burrito are in the public domain."
                        },
                        shortStatements: {
                            type: "array",
                            minItems: 1,
                            items: {
                                type: "object",
                                properties: {
                                    statement: {
                                        type: "string",
                                        maxLength: 500
                                    },
                                    lang: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    mimetype: {
                                        type: "string",
                                        pattern: "^[\\-a-z0-9]+/[\\-a-z0-9+]+$",
                                        description: "An IANA media type (also known as MIME type)"
                                    }
                                },
                                required: [
                                    "statement"
                                ],
                                additionalProperties: false
                            },
                            description: "A short statement to explain the copyright / license information to readers"
                        }
                    },
                    additionalProperties: false,
                    oneOf: [
                        {
                            type: "object",
                            properties: {
                                publicDomain: {
                                    const: true
                                }
                            },
                            required: [
                                "publicDomain"
                            ]
                        },
                        {
                            type: "object",
                            required: [
                                "shortStatements"
                            ]
                        },
                        {
                            type: "object",
                            required: [
                                "licenses"
                            ]
                        }
                    ]
                },
                ingredients: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/ingredients.schema.json",
                    $$target: "ingredients.schema.json",
                    title: "Ingredients",
                    type: "object",
                    additionalProperties: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/ingredient.schema.json",
                        $$target: "ingredient.schema.json",
                        title: "Ingredient",
                        type: "object",
                        description: "Describes an individual ingredient, which is a file contained within the burrito.",
                        properties: {
                            size: {
                                type: "integer",
                                minimum: 0,
                                description: "The number of bytes that this ingredient takes up on disk."
                            },
                            lang: {
                                type: "string",
                                pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                minLength: 2,
                                description: "A valid IETF language tag as specified by BCP 47."
                            },
                            mimeType: {
                                type: "string",
                                pattern: "^[\\-a-z0-9]+/[\\-a-z0-9+]+$",
                                description: "An IANA media type (also known as MIME type)"
                            },
                            checksum: {
                                type: "object",
                                properties: {
                                    md5: {
                                        type: "string",
                                        pattern: "^[a-f0-9]{32}$"
                                    },
                                    "sha3-256": {
                                        type: "string",
                                        pattern: "^[a-f0-9]{64}$"
                                    },
                                    "sha3-512": {
                                        type: "string",
                                        pattern: "^[a-f0-9]{128}$"
                                    }
                                },
                                required: [
                                    "md5"
                                ],
                                maxProperties: 2,
                                additionalProperties: false
                            },
                            scope: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/scope.schema.json",
                                $$target: "scope.schema.json",
                                title: "Scope",
                                type: "object",
                                description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                additionalProperties: {
                                    oneOf: [
                                        {
                                            type: "array",
                                            items: {
                                                type: "string",
                                                pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                            },
                                            minItems: 1,
                                            uniqueItems: true
                                        },
                                        {
                                            type: "array",
                                            maxItems: 0
                                        }
                                    ]
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^[A-Z0-9]{3}$",
                                    minLength: 3,
                                    maxLength: 3,
                                    enum: [
                                        "GEN",
                                        "EXO",
                                        "LEV",
                                        "NUM",
                                        "DEU",
                                        "JOS",
                                        "JDG",
                                        "RUT",
                                        "1SA",
                                        "2SA",
                                        "1KI",
                                        "2KI",
                                        "1CH",
                                        "2CH",
                                        "EZR",
                                        "NEH",
                                        "EST",
                                        "JOB",
                                        "PSA",
                                        "PRO",
                                        "ECC",
                                        "SNG",
                                        "ISA",
                                        "JER",
                                        "LAM",
                                        "EZK",
                                        "DAN",
                                        "HOS",
                                        "JOL",
                                        "AMO",
                                        "OBA",
                                        "JON",
                                        "MIC",
                                        "NAM",
                                        "HAB",
                                        "ZEP",
                                        "HAG",
                                        "ZEC",
                                        "MAL",
                                        "MAT",
                                        "MRK",
                                        "LUK",
                                        "JHN",
                                        "ACT",
                                        "ROM",
                                        "1CO",
                                        "2CO",
                                        "GAL",
                                        "EPH",
                                        "PHP",
                                        "COL",
                                        "1TH",
                                        "2TH",
                                        "1TI",
                                        "2TI",
                                        "TIT",
                                        "PHM",
                                        "HEB",
                                        "JAS",
                                        "1PE",
                                        "2PE",
                                        "1JN",
                                        "2JN",
                                        "3JN",
                                        "JUD",
                                        "REV",
                                        "TOB",
                                        "JDT",
                                        "ESG",
                                        "WIS",
                                        "SIR",
                                        "BAR",
                                        "LJE",
                                        "S3Y",
                                        "SUS",
                                        "BEL",
                                        "1MA",
                                        "2MA",
                                        "3MA",
                                        "4MA",
                                        "1ES",
                                        "2ES",
                                        "MAN",
                                        "PS2",
                                        "ODA",
                                        "PSS",
                                        "JSA",
                                        "JDB",
                                        "TBS",
                                        "SST",
                                        "DNT",
                                        "BLT",
                                        "EZA",
                                        "5EZ",
                                        "6EZ",
                                        "DAG",
                                        "PS3",
                                        "2BA",
                                        "LBA",
                                        "JUB",
                                        "ENO",
                                        "1MQ",
                                        "2MQ",
                                        "3MQ",
                                        "REP",
                                        "4BA",
                                        "LAO"
                                    ],
                                    description: "A USFM book code consisting of three uppercase alphanumerics."
                                },
                                minProperties: 1
                            },
                            role: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/role.schema.json",
                                $$target: "role.schema.json",
                                title: "Role",
                                type: "string",
                                description: "Roles which may be optionally attached to an ingredient.",
                                oneOf: [
                                    {
                                        description: "A USX peripheral label,eg \"maps\"",
                                        enum: [
                                            "abbreviations",
                                            "alphacontents",
                                            "chron",
                                            "cnc",
                                            "contents",
                                            "cover",
                                            "foreword",
                                            "glo",
                                            "halftitle",
                                            "imprimatur",
                                            "lxxquotes",
                                            "maps",
                                            "measures",
                                            "ndx",
                                            "preface",
                                            "promo",
                                            "pubdata",
                                            "spine",
                                            "tdx",
                                            "title"
                                        ]
                                    },
                                    {
                                        description: "A role for story-based or video works, eg \"teaching\"",
                                        enum: [
                                            "background",
                                            "bridge",
                                            "credits",
                                            "diagram",
                                            "gloss",
                                            "illustration",
                                            "introduction",
                                            "scripture",
                                            "teaching",
                                            "timing"
                                        ]
                                    },
                                    {
                                        description: "A role for PoD-type content, eg \"printCover\"",
                                        enum: [
                                            "body",
                                            "thumbnail"
                                        ]
                                    },
                                    {
                                        description: "a versification file indicating the delta from the org versification",
                                        enum: [
                                            "versification"
                                        ]
                                    },
                                    {
                                        description: "A role for textTranslation flavored burritos",
                                        enum: [
                                            "localedata"
                                        ]
                                    },
                                    {
                                        description: "A label for story-type units",
                                        pattern: "^unit\\s.*\\S$"
                                    },
                                    {
                                        description: "A label for dictionary-type resources",
                                        pattern: "^(name|sign|word|concept|place)(\\s.*\\S)?$"
                                    },
                                    {
                                        description: "A role for a full copyright statement",
                                        enum: [
                                            "copyrightStatement"
                                        ]
                                    },
                                    {
                                        description: "An x-role",
                                        pattern: "^x-\\S.*\\S$"
                                    }
                                ]
                            }
                        },
                        required: [
                            "size",
                            "mimeType"
                        ],
                        additionalProperties: false
                    },
                    propertyNames: {
                        type: "string",
                        pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                        description: "A file path, delimited by forward slashes."
                    },
                    minProperties: 1,
                    description: "Describes the various files contained by the burrito, keyed by the canonical forward-slashed pathname of the file."
                },
                localizedNames: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/localized_names.schema.json",
                    $$target: "localized_names.schema.json",
                    title: "Localized Names",
                    type: "object",
                    additionalProperties: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/localized_name.schema.json",
                        $$target: "localized_name.schema.json",
                        title: "Localized Name",
                        type: "object",
                        description: "Contains localized names for books, etc.",
                        properties: {
                            short: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            long: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            abbr: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            }
                        },
                        required: [
                            "short"
                        ],
                        additionalProperties: false
                    },
                    description: "Contains localized names for books, etc."
                },
                progress: {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/progress.schema.json",
                    $$target: "progress.schema.json",
                    title: "Progress",
                    type: "object",
                    properties: {
                        dateStarted: {
                            type: "string",
                            pattern: "^[12][0-9]{3}(-[01][0-9](-[0123][0-9])?)?$"
                        },
                        dateCompleted: {
                            type: "string",
                            pattern: "^[12][0-9]{3}(-[01][0-9](-[0123][0-9])?)?$"
                        }
                    },
                    minProperties: 1,
                    additionalProperties: false
                }
            },
            required: [
                "format",
                "meta",
                "idAuthorities",
                "identification",
                "confidential",
                "type",
                "copyright",
                "ingredients"
            ],
            additionalProperties: false,
            allOf: [
                {
                    if: {
                        properties: {
                            type: {
                                type: "object",
                                properties: {
                                    flavorType: {
                                        enum: [
                                            "scripture",
                                            "gloss"
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    then: {
                        required: [
                            "languages"
                        ]
                    }
                },
                {
                    $schema: "http://json-schema.org/draft-07/schema",
                    $id: "https://burrito.bible/schema/copyright_constraints.schema.json",
                    $$target: "copyright_constraints.schema.json",
                    title: "Copyright Constraints",
                    description: "Constraints on properties relating to copyright.",
                    if: {
                        type: "object",
                        properties: {
                            copyright: {
                                type: "object",
                                properties: {
                                    publicDomain: false
                                }
                            }
                        }
                    },
                    then: {
                        type: "object",
                        properties: {
                            agencies: {
                                type: "array",
                                contains: {
                                    type: "object",
                                    properties: {
                                        roles: {
                                            type: "array",
                                            contains: {
                                                type: "string",
                                                pattern: "rightsHolder"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        },
        else: {
            if: {
                properties: {
                    meta: {
                        type: "object",
                        properties: {
                            category: {
                                const: "derived"
                            }
                        }
                    }
                }
            },
            then: {
                $schema: "http://json-schema.org/draft-07/schema",
                $id: "https://burrito.bible/schema/derived_metadata.schema.json",
                $$target: "derived_metadata.schema.json",
                title: "Metadata (Derived)",
                type: "object",
                description: "Scripture Burrito derived variant root.",
                properties: {
                    format: {
                        type: "string",
                        enum: [
                            "scripture burrito"
                        ]
                    },
                    meta: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/derived_meta.schema.json",
                        $$target: "derived_meta.schema.json",
                        title: "Meta (Derived)",
                        type: "object",
                        description: "Information about the Scripture Burrito metadata file.",
                        properties: {
                            category: {
                                const: "derived"
                            },
                            dateCreated: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/meta_date_created.schema.json",
                                $$target: "meta_date_created.schema.json",
                                title: "Meta Date created",
                                type: "string",
                                format: "date-time"
                            },
                            version: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/meta_version.schema.json",
                                $$target: "meta_version.schema.json",
                                title: "Meta Version",
                                type: "string",
                                enum: [
                                    "1.0.0"
                                ],
                                description: "Version of the Scripture Burrito specification this file follows."
                            },
                            generator: {
                                description: "Information about the program and user who generated this burrito.",
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/software_and_user_info.schema.json",
                                $$target: "software_and_user_info.schema.json",
                                title: "Software and User Info",
                                type: "object",
                                properties: {
                                    softwareName: {
                                        type: "string",
                                        description: "The name of the program used."
                                    },
                                    softwareVersion: {
                                        type: "string",
                                        description: "The version of the program used."
                                    },
                                    userId: {
                                        description: "A system-specific user identifier.",
                                        type: "string",
                                        pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$"
                                    },
                                    userName: {
                                        type: "string",
                                        description: "The user's full name, if known."
                                    }
                                },
                                required: [
                                    "softwareName",
                                    "softwareVersion"
                                ],
                                additionalProperties: false
                            },
                            defaultLocale: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/meta_default_language.schema.json",
                                $$target: "meta_default_language.schema.json",
                                title: "Meta Default Language",
                                description: "The BCP47 code of the language that should be displayed, if a default is required, and for which localization is required in all name fields specified for 'catalog' validation.",
                                type: "string",
                                pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                minLength: 2
                            },
                            normalization: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/normalization.schema.json",
                                $$target: "normalization.schema.json",
                                title: "Normalization",
                                type: "string",
                                description: "Unicode normalization options. This applies to both ingredients and metadata.",
                                enum: [
                                    "NFC",
                                    "NFD",
                                    "NFKC",
                                    "NFKD"
                                ]
                            },
                            comments: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/meta_comments.schema.json",
                                $$target: "meta_comments.schema.json",
                                title: "Meta Comments",
                                type: "array",
                                items: {
                                    type: "string"
                                },
                                description: "Arbitrary text strings attached by users with no effect on the interpretation of the Scripture Burrito."
                            }
                        },
                        required: [
                            "version",
                            "category",
                            "dateCreated",
                            "defaultLocale"
                        ],
                        additionalProperties: false
                    },
                    idAuthorities: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/id_authorities.schema.json",
                        $$target: "id_authorities.schema.json",
                        title: "idAuthorities",
                        type: "object",
                        description: "Declares one or more identity authorities which may later be referred to using identifier prefixes.",
                        additionalProperties: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "string",
                                    pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                    minLength: 1,
                                    description: "A valid **Uniform Resource Locator**.",
                                    examples: [
                                        "https://example.com"
                                    ]
                                },
                                name: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                }
                            },
                            propertyNames: {
                                type: "string",
                                pattern: "^[a-z][a-z0-9\\-]*[a-z0-9]$",
                                description: "A Label for an ID authority (internal to the document)"
                            },
                            minProperties: 1
                        },
                        minProperties: 1
                    },
                    identification: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/identification.schema.json",
                        $$target: "identification.schema.json",
                        title: "Identification",
                        type: "object",
                        description: "Identification section.",
                        definitions: {
                            revisionString: {
                                type: "string",
                                pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$"
                            }
                        },
                        properties: {
                            name: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            description: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            abbreviation: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            primary: {
                                type: "object",
                                additionalProperties: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "object",
                                        revision: {
                                            type: "string",
                                            pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                            description: "Opaque system-specific revision identifier."
                                        },
                                        timestamp: {
                                            type: "string",
                                            pattern: "^[12][0-9]{3}(-[01][0-9](-[0123][0-9])?)?$"
                                        },
                                        required: [
                                            "revision",
                                            "timestamp"
                                        ]
                                    }
                                },
                                minProperties: 1,
                                maxProperties: 1,
                                description: "Contains the primary authority and identification information."
                            },
                            upstream: {
                                type: "object",
                                additionalProperties: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        additionalProperties: {
                                            type: "object",
                                            revision: {
                                                type: "string",
                                                pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                                description: "Opaque system-specific revision identifier."
                                            },
                                            timestamp: {
                                                type: "string",
                                                pattern: "^[12][0-9]{3}(-[01][0-9](-[0123][0-9])?)?$"
                                            },
                                            required: [
                                                "revision",
                                                "timestamp"
                                            ]
                                        }
                                    }
                                },
                                description: "Contains the upstream authority and identification information."
                            }
                        },
                        required: [
                            "name",
                            "primary"
                        ],
                        additionalProperties: false
                    },
                    confidential: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/confidential.schema.json",
                        $$target: "confidential.schema.json",
                        title: "Confidential",
                        type: "boolean",
                        description: "a true value indicates that the project should not be publicly known and that the identity of project members needs to be kept confidential."
                    },
                    type: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/type.schema.json",
                        $$target: "type.schema.json",
                        title: "Type",
                        description: "Contains properties describing the burrito flavor type.",
                        type: "object",
                        properties: {
                            flavorType: {
                                type: "object",
                                properties: {
                                    name: {
                                        enum: [
                                            "scripture",
                                            "gloss",
                                            "parascriptural",
                                            "peripheral"
                                        ]
                                    }
                                }
                            }
                        },
                        if: {
                            properties: {
                                flavorType: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            const: "scripture"
                                        }
                                    }
                                }
                            }
                        },
                        then: {
                            properties: {
                                flavorType: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string",
                                            const: "scripture"
                                        },
                                        flavor: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    oneOf: [
                                                        {
                                                            enum: [
                                                                "textTranslation",
                                                                "audioTranslation",
                                                                "typesetScripture",
                                                                "embossedBrailleScripture",
                                                                "signLanguageVideoTranslation"
                                                            ]
                                                        },
                                                        {
                                                            pattern: "^x-"
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        currentScope: {
                                            $schema: "http://json-schema.org/draft-07/schema",
                                            $id: "https://burrito.bible/schema/scope.schema.json",
                                            $$target: "scope.schema.json",
                                            title: "Scope",
                                            type: "object",
                                            description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                            additionalProperties: {
                                                oneOf: [
                                                    {
                                                        type: "array",
                                                        items: {
                                                            type: "string",
                                                            pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                        },
                                                        minItems: 1,
                                                        uniqueItems: true
                                                    },
                                                    {
                                                        type: "array",
                                                        maxItems: 0
                                                    }
                                                ]
                                            },
                                            propertyNames: {
                                                type: "string",
                                                pattern: "^[A-Z0-9]{3}$",
                                                minLength: 3,
                                                maxLength: 3,
                                                enum: [
                                                    "GEN",
                                                    "EXO",
                                                    "LEV",
                                                    "NUM",
                                                    "DEU",
                                                    "JOS",
                                                    "JDG",
                                                    "RUT",
                                                    "1SA",
                                                    "2SA",
                                                    "1KI",
                                                    "2KI",
                                                    "1CH",
                                                    "2CH",
                                                    "EZR",
                                                    "NEH",
                                                    "EST",
                                                    "JOB",
                                                    "PSA",
                                                    "PRO",
                                                    "ECC",
                                                    "SNG",
                                                    "ISA",
                                                    "JER",
                                                    "LAM",
                                                    "EZK",
                                                    "DAN",
                                                    "HOS",
                                                    "JOL",
                                                    "AMO",
                                                    "OBA",
                                                    "JON",
                                                    "MIC",
                                                    "NAM",
                                                    "HAB",
                                                    "ZEP",
                                                    "HAG",
                                                    "ZEC",
                                                    "MAL",
                                                    "MAT",
                                                    "MRK",
                                                    "LUK",
                                                    "JHN",
                                                    "ACT",
                                                    "ROM",
                                                    "1CO",
                                                    "2CO",
                                                    "GAL",
                                                    "EPH",
                                                    "PHP",
                                                    "COL",
                                                    "1TH",
                                                    "2TH",
                                                    "1TI",
                                                    "2TI",
                                                    "TIT",
                                                    "PHM",
                                                    "HEB",
                                                    "JAS",
                                                    "1PE",
                                                    "2PE",
                                                    "1JN",
                                                    "2JN",
                                                    "3JN",
                                                    "JUD",
                                                    "REV",
                                                    "TOB",
                                                    "JDT",
                                                    "ESG",
                                                    "WIS",
                                                    "SIR",
                                                    "BAR",
                                                    "LJE",
                                                    "S3Y",
                                                    "SUS",
                                                    "BEL",
                                                    "1MA",
                                                    "2MA",
                                                    "3MA",
                                                    "4MA",
                                                    "1ES",
                                                    "2ES",
                                                    "MAN",
                                                    "PS2",
                                                    "ODA",
                                                    "PSS",
                                                    "JSA",
                                                    "JDB",
                                                    "TBS",
                                                    "SST",
                                                    "DNT",
                                                    "BLT",
                                                    "EZA",
                                                    "5EZ",
                                                    "6EZ",
                                                    "DAG",
                                                    "PS3",
                                                    "2BA",
                                                    "LBA",
                                                    "JUB",
                                                    "ENO",
                                                    "1MQ",
                                                    "2MQ",
                                                    "3MQ",
                                                    "REP",
                                                    "4BA",
                                                    "LAO"
                                                ],
                                                description: "A USFM book code consisting of three uppercase alphanumerics."
                                            },
                                            minProperties: 1
                                        }
                                    },
                                    required: [
                                        "name",
                                        "flavor",
                                        "currentScope"
                                    ],
                                    additionalProperties: false
                                }
                            },
                            required: [
                                "flavorType"
                            ],
                            if: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            flavor: {
                                                type: "object",
                                                properties: {
                                                    name: {
                                                        const: "textTranslation"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            then: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            flavor: {
                                                $schema: "http://json-schema.org/draft-07/schema",
                                                $id: "https://burrito.bible/schema/scripture/text_translation.schema.json",
                                                title: "Flavor Details: scripture/textTranslation",
                                                type: "object",
                                                description: "Schema of flavor field for textTranslation flavor",
                                                properties: {
                                                    name: {
                                                        type: "string",
                                                        const: "textTranslation"
                                                    },
                                                    projectType: {
                                                        type: "string",
                                                        enum: [
                                                            "standard",
                                                            "daughter",
                                                            "studyBible",
                                                            "studyBibleAdditions",
                                                            "backTranslation",
                                                            "auxiliary",
                                                            "transliterationManual",
                                                            "transliterationWithEncoder"
                                                        ]
                                                    },
                                                    translationType: {
                                                        type: "string",
                                                        enum: [
                                                            "firstTranslation",
                                                            "newTranslation",
                                                            "revision",
                                                            "studyOrHelpMaterial"
                                                        ]
                                                    },
                                                    audience: {
                                                        type: "string",
                                                        enum: [
                                                            "basic",
                                                            "common",
                                                            "common-literary",
                                                            "literary",
                                                            "liturgical",
                                                            "children"
                                                        ]
                                                    },
                                                    usfmVersion: {
                                                        type: "string",
                                                        pattern: "^\\d+\\.\\d+(\\..+)?$"
                                                    },
                                                    conventions: {
                                                        type: "object",
                                                        additionalProperties: {
                                                            type: "string",
                                                            pattern: "^\\d+[.]\\d+([.].+)?$"
                                                        },
                                                        propertyNames: {
                                                            type: "string",
                                                            pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                            oneOf: [
                                                                {
                                                                    type: "string",
                                                                    pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                    description: "User-defined token, prefixed with x-"
                                                                },
                                                                {
                                                                    enum: [
                                                                        "usxRefs",
                                                                        "usxDirs",
                                                                        "typesetAsVersedParagraphs"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                required: [
                                                    "name",
                                                    "projectType",
                                                    "translationType",
                                                    "audience",
                                                    "usfmVersion"
                                                ],
                                                additionalProperties: false
                                            }
                                        }
                                    }
                                }
                            },
                            else: {
                                if: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                flavor: {
                                                    type: "object",
                                                    properties: {
                                                        name: {
                                                            const: "audioTranslation"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                then: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                flavor: {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/scripture/audio_translation.schema.json",
                                                    title: "Flavor Details: Audio Translation",
                                                    type: "object",
                                                    description: "Schema of flavor field of scripture/audioTranslation flavor",
                                                    definitions: {
                                                        format: {
                                                            type: "object",
                                                            properties: {
                                                                compression: {
                                                                    type: "string",
                                                                    enum: [
                                                                        "mp3",
                                                                        "wav"
                                                                    ]
                                                                },
                                                                trackConfiguration: {
                                                                    type: "string",
                                                                    enum: [
                                                                        "1/0 (Mono)",
                                                                        "Dual mono",
                                                                        "2/0 (Stereo)",
                                                                        "5.1 Surround"
                                                                    ]
                                                                },
                                                                bitRate: {
                                                                    type: "integer"
                                                                },
                                                                bitDepth: {
                                                                    type: "integer"
                                                                },
                                                                samplingRate: {
                                                                    type: "integer"
                                                                },
                                                                timingDir: {
                                                                    type: "string",
                                                                    pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                                                    description: "A file path, delimited by forward slashes."
                                                                }
                                                            },
                                                            required: [
                                                                "compression"
                                                            ],
                                                            additionalProperties: false
                                                        }
                                                    },
                                                    properties: {
                                                        name: {
                                                            const: "audioTranslation"
                                                        },
                                                        performance: {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                                enum: [
                                                                    "singleVoice",
                                                                    "multipleVoice",
                                                                    "reading",
                                                                    "drama",
                                                                    "withMusic",
                                                                    "withEffects",
                                                                    "withHeadings"
                                                                ]
                                                            },
                                                            uniqueItems: true,
                                                            allOf: [
                                                                {
                                                                    if: {
                                                                        contains: {
                                                                            const: "singleVoice"
                                                                        }
                                                                    },
                                                                    then: {
                                                                        not: {
                                                                            contains: {
                                                                                const: "multipleVoice"
                                                                            }
                                                                        }
                                                                    },
                                                                    else: {
                                                                        contains: {
                                                                            const: "multipleVoice"
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    if: {
                                                                        contains: {
                                                                            const: "reading"
                                                                        }
                                                                    },
                                                                    then: {
                                                                        not: {
                                                                            contains: {
                                                                                const: "drama"
                                                                            }
                                                                        }
                                                                    },
                                                                    else: {
                                                                        contains: {
                                                                            const: "drama"
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        formats: {
                                                            type: "object",
                                                            additionalProperties: {
                                                                type: "object",
                                                                properties: {
                                                                    compression: {
                                                                        type: "string",
                                                                        enum: [
                                                                            "mp3",
                                                                            "wav"
                                                                        ]
                                                                    },
                                                                    trackConfiguration: {
                                                                        type: "string",
                                                                        enum: [
                                                                            "1/0 (Mono)",
                                                                            "Dual mono",
                                                                            "2/0 (Stereo)",
                                                                            "5.1 Surround"
                                                                        ]
                                                                    },
                                                                    bitRate: {
                                                                        type: "integer"
                                                                    },
                                                                    bitDepth: {
                                                                        type: "integer"
                                                                    },
                                                                    samplingRate: {
                                                                        type: "integer"
                                                                    },
                                                                    timingDir: {
                                                                        type: "string",
                                                                        pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                                                        description: "A file path, delimited by forward slashes."
                                                                    }
                                                                },
                                                                required: [
                                                                    "compression"
                                                                ],
                                                                additionalProperties: false
                                                            },
                                                            propertyNames: {
                                                                type: "string"
                                                            }
                                                        },
                                                        conventions: {
                                                            type: "object",
                                                            additionalProperties: {
                                                                type: "string",
                                                                pattern: "^\\d+[.]\\d+([.].+)?$"
                                                            },
                                                            propertyNames: {
                                                                type: "string",
                                                                pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                oneOf: [
                                                                    {
                                                                        type: "string",
                                                                        pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                        description: "User-defined token, prefixed with x-"
                                                                    },
                                                                    {
                                                                        enum: [
                                                                            "contentResourcesByChapter",
                                                                            "bookDirs"
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    required: [
                                                        "performance",
                                                        "formats"
                                                    ],
                                                    additionalProperties: false
                                                }
                                            }
                                        }
                                    }
                                },
                                else: {
                                    if: {
                                        properties: {
                                            flavorType: {
                                                type: "object",
                                                properties: {
                                                    flavor: {
                                                        type: "object",
                                                        properties: {
                                                            name: {
                                                                const: "typesetScripture"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    then: {
                                        properties: {
                                            flavorType: {
                                                type: "object",
                                                properties: {
                                                    flavor: {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/scripture/typeset_scripture.schema.json",
                                                        title: "Flavor Details: Scripture: Print Publication",
                                                        type: "object",
                                                        description: "Schema of flavor field for scripture/printPublication flavor",
                                                        definitions: {
                                                            measurementString: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]{0,4}mm$"
                                                            },
                                                            percentageString: {
                                                                type: "string",
                                                                pattern: "[1-9][0-9]{1,3}%"
                                                            },
                                                            orientation: {
                                                                type: "string",
                                                                enum: [
                                                                    "portrait",
                                                                    "landscape"
                                                                ]
                                                            },
                                                            colorSpace: {
                                                                type: "string",
                                                                enum: [
                                                                    "cmyk",
                                                                    "rgb"
                                                                ]
                                                            }
                                                        },
                                                        properties: {
                                                            name: {
                                                                type: "string",
                                                                const: "typesetScripture"
                                                            },
                                                            contentType: {
                                                                type: "string",
                                                                const: "pdf"
                                                            },
                                                            pod: {
                                                                type: "boolean"
                                                            },
                                                            pageCount: {
                                                                type: "integer",
                                                                minimum: 0
                                                            },
                                                            width: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]{0,4}mm$"
                                                            },
                                                            height: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]{0,4}mm$"
                                                            },
                                                            scale: {
                                                                type: "string",
                                                                pattern: "[1-9][0-9]{1,3}%"
                                                            },
                                                            orientation: {
                                                                type: "string",
                                                                enum: [
                                                                    "portrait",
                                                                    "landscape"
                                                                ]
                                                            },
                                                            colorSpace: {
                                                                type: "string",
                                                                enum: [
                                                                    "cmyk",
                                                                    "rgb"
                                                                ]
                                                            },
                                                            edgeSpace: {
                                                                type: "object",
                                                                properties: {
                                                                    top: {
                                                                        type: "string",
                                                                        pattern: "^[1-9][0-9]{0,4}mm$"
                                                                    },
                                                                    bottom: {
                                                                        type: "string",
                                                                        pattern: "^[1-9][0-9]{0,4}mm$"
                                                                    },
                                                                    inside: {
                                                                        type: "string",
                                                                        pattern: "^[1-9][0-9]{0,4}mm$"
                                                                    },
                                                                    outside: {
                                                                        type: "string",
                                                                        pattern: "^[1-9][0-9]{0,4}mm$"
                                                                    }
                                                                },
                                                                additionalProperties: false
                                                            },
                                                            fonts: {
                                                                type: "array",
                                                                items: {
                                                                    type: "string"
                                                                }
                                                            },
                                                            conventions: {
                                                                type: "object",
                                                                additionalProperties: {
                                                                    type: "string",
                                                                    pattern: "^\\d+[.]\\d+([.].+)?$"
                                                                },
                                                                propertyNames: {
                                                                    type: "string",
                                                                    pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                    oneOf: [
                                                                        {
                                                                            type: "string",
                                                                            pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                            description: "User-defined token, prefixed with x-"
                                                                        },
                                                                        {
                                                                            enum: [
                                                                                "contentResourcesByChapter"
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        required: [
                                                            "name",
                                                            "contentType",
                                                            "pod",
                                                            "pageCount",
                                                            "height",
                                                            "width",
                                                            "scale",
                                                            "colorSpace"
                                                        ],
                                                        additionalProperties: false
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    else: {
                                        if: {
                                            properties: {
                                                flavorType: {
                                                    type: "object",
                                                    properties: {
                                                        flavor: {
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    const: "embossedBrailleScripture"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        then: {
                                            properties: {
                                                flavorType: {
                                                    type: "object",
                                                    properties: {
                                                        flavor: {
                                                            $schema: "http://json-schema.org/draft-07/schema",
                                                            $id: "https://burrito.bible/schema/scripture/embossed_braille_scripture.schema.json",
                                                            title: "Flavor Details: Scripture: Braille Publication",
                                                            type: "object",
                                                            description: "Schema of flavor field for scripture/brailleScripturePublication flavor",
                                                            properties: {
                                                                name: {
                                                                    type: "string",
                                                                    const: "embossedBrailleScripture"
                                                                },
                                                                isContracted: {
                                                                    type: "boolean"
                                                                },
                                                                processor: {
                                                                    type: "object",
                                                                    properties: {
                                                                        name: {
                                                                            type: "string",
                                                                            const: "libLouis"
                                                                        },
                                                                        version: {
                                                                            type: "string"
                                                                        },
                                                                        table: {
                                                                            type: "object",
                                                                            properties: {
                                                                                src: {
                                                                                    type: "string"
                                                                                },
                                                                                name: {
                                                                                    type: "string"
                                                                                }
                                                                            },
                                                                            additionalProperties: false,
                                                                            required: [
                                                                                "src",
                                                                                "name"
                                                                            ]
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "name",
                                                                        "version",
                                                                        "table"
                                                                    ],
                                                                    additionalProperties: false
                                                                },
                                                                hyphenationDictionary: {
                                                                    type: "object",
                                                                    properties: {
                                                                        src: {
                                                                            type: "string"
                                                                        },
                                                                        name: {
                                                                            type: "string"
                                                                        }
                                                                    },
                                                                    additionalProperties: false,
                                                                    required: [
                                                                        "src",
                                                                        "name"
                                                                    ]
                                                                },
                                                                numberSign: {
                                                                    type: "object",
                                                                    properties: {
                                                                        character: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        },
                                                                        useInMargin: {
                                                                            type: "boolean"
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "character",
                                                                        "useInMargin"
                                                                    ],
                                                                    additionalProperties: false
                                                                },
                                                                continuousPoetry: {
                                                                    type: "object",
                                                                    properties: {
                                                                        lineIndicatorSpaced: {
                                                                            type: "string",
                                                                            enum: [
                                                                                "never",
                                                                                "always",
                                                                                "sometimes"
                                                                            ]
                                                                        },
                                                                        startIndicator: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        },
                                                                        lineIndicator: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        },
                                                                        endIndicator: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        }
                                                                    },
                                                                    additionalProperties: false,
                                                                    required: [
                                                                        "lineIndicatorSpaced"
                                                                    ]
                                                                },
                                                                content: {
                                                                    type: "object",
                                                                    properties: {
                                                                        chapterNumberStyle: {
                                                                            type: "string",
                                                                            enum: [
                                                                                "upper",
                                                                                "lower"
                                                                            ]
                                                                        },
                                                                        chapterHeadingsNumberFirst: {
                                                                            type: "boolean"
                                                                        },
                                                                        versedParagraphs: {
                                                                            type: "boolean"
                                                                        },
                                                                        verseSeparator: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        },
                                                                        includeIntros: {
                                                                            type: "boolean"
                                                                        },
                                                                        footnotes: {
                                                                            type: "object",
                                                                            properties: {
                                                                                callerSymbol: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                }
                                                                            },
                                                                            additionalProperties: false,
                                                                            required: [
                                                                                "callerSymbol"
                                                                            ]
                                                                        },
                                                                        characterStyles: {
                                                                            type: "object",
                                                                            properties: {
                                                                                callerSymbol: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                }
                                                                            },
                                                                            additionalProperties: false,
                                                                            required: [
                                                                                "callerSymbol"
                                                                            ]
                                                                        },
                                                                        crossReferences: {
                                                                            type: "object",
                                                                            properties: {
                                                                                emphasizedWord: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                },
                                                                                emphasizedPassageStart: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                },
                                                                                emphasizedPassageEnd: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                }
                                                                            },
                                                                            additionalProperties: false,
                                                                            minProperties: 1
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "chapterNumberStyle",
                                                                        "chapterHeadingsNumberFirst",
                                                                        "versedParagraphs",
                                                                        "verseSeparator",
                                                                        "includeIntros"
                                                                    ],
                                                                    additionalProperties: false
                                                                },
                                                                page: {
                                                                    type: "object",
                                                                    properties: {
                                                                        charsPerLine: {
                                                                            type: "number",
                                                                            multipleOf: 1,
                                                                            minimum: 1
                                                                        },
                                                                        linesPerPage: {
                                                                            type: "number",
                                                                            multipleOf: 1,
                                                                            minimum: 1
                                                                        },
                                                                        defaultMarginWidth: {
                                                                            type: "number",
                                                                            multipleOf: 1,
                                                                            minimum: 1
                                                                        },
                                                                        versoLastLineBlank: {
                                                                            type: "boolean"
                                                                        },
                                                                        carryLines: {
                                                                            type: "number",
                                                                            multipleOf: 1,
                                                                            minimum: 1
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "charsPerLine",
                                                                        "linesPerPage",
                                                                        "defaultMarginWidth",
                                                                        "versoLastLineBlank",
                                                                        "carryLines"
                                                                    ],
                                                                    additionalProperties: false
                                                                },
                                                                conventions: {
                                                                    type: "object",
                                                                    additionalProperties: {
                                                                        type: "string",
                                                                        pattern: "^\\d+[.]\\d+([.].+)?$"
                                                                    },
                                                                    propertyNames: {
                                                                        type: "string",
                                                                        pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                        oneOf: [
                                                                            {
                                                                                type: "string",
                                                                                pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                                description: "User-defined token, prefixed with x-"
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            required: [
                                                                "isContracted",
                                                                "processor",
                                                                "numberSign",
                                                                "content",
                                                                "page"
                                                            ],
                                                            additionalProperties: false
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        else: {
                                            if: {
                                                properties: {
                                                    flavorType: {
                                                        type: "object",
                                                        properties: {
                                                            flavor: {
                                                                type: "object",
                                                                properties: {
                                                                    name: {
                                                                        const: "signLanguageVideoTranslation"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            then: {
                                                properties: {
                                                    flavorType: {
                                                        type: "object",
                                                        properties: {
                                                            flavor: {
                                                                $schema: "http://json-schema.org/draft-07/schema",
                                                                $id: "https://burrito.bible/schema/scripture/sign_language_video_translation.schema.json",
                                                                title: "Flavor Details: Scripture: Sign Language Video Translation",
                                                                type: "object",
                                                                description: "Schema of flavor field for signLanguageVideoTranslation flavor",
                                                                definitions: {
                                                                    format: {
                                                                        type: "object",
                                                                        properties: {
                                                                            container: {
                                                                                type: "string",
                                                                                enum: [
                                                                                    "mp4",
                                                                                    "mpg"
                                                                                ]
                                                                            },
                                                                            videoStream: {
                                                                                type: "object",
                                                                                properties: {
                                                                                    bitRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    frameRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    screenResolution: {
                                                                                        type: "string",
                                                                                        pattern: "^\\d+x\\d+$"
                                                                                    }
                                                                                },
                                                                                required: [
                                                                                    "bitRate",
                                                                                    "frameRate",
                                                                                    "screenResolution"
                                                                                ],
                                                                                additionalProperties: false
                                                                            },
                                                                            audioStream: {
                                                                                type: "object",
                                                                                properties: {
                                                                                    compression: {
                                                                                        type: "string",
                                                                                        enum: [
                                                                                            "mp3",
                                                                                            "wav"
                                                                                        ]
                                                                                    },
                                                                                    trackConfiguration: {
                                                                                        type: "string",
                                                                                        enum: [
                                                                                            "1/0 (Mono)",
                                                                                            "Dual mono",
                                                                                            "2/0 (Stereo)",
                                                                                            "5.1 Surround"
                                                                                        ]
                                                                                    },
                                                                                    bitRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    bitDepth: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    samplingRate: {
                                                                                        type: "integer"
                                                                                    }
                                                                                },
                                                                                required: [
                                                                                    "compression"
                                                                                ],
                                                                                additionalProperties: false
                                                                            }
                                                                        },
                                                                        required: [
                                                                            "container",
                                                                            "videoStream"
                                                                        ],
                                                                        additionalProperties: false
                                                                    }
                                                                },
                                                                properties: {
                                                                    name: {
                                                                        type: "string",
                                                                        const: "signLanguageVideoTranslation"
                                                                    },
                                                                    contentByChapter: {
                                                                        type: "boolean"
                                                                    },
                                                                    formats: {
                                                                        type: "object",
                                                                        additionalProperties: {
                                                                            type: "object",
                                                                            properties: {
                                                                                container: {
                                                                                    type: "string",
                                                                                    enum: [
                                                                                        "mp4",
                                                                                        "mpg"
                                                                                    ]
                                                                                },
                                                                                videoStream: {
                                                                                    type: "object",
                                                                                    properties: {
                                                                                        bitRate: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        frameRate: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        screenResolution: {
                                                                                            type: "string",
                                                                                            pattern: "^\\d+x\\d+$"
                                                                                        }
                                                                                    },
                                                                                    required: [
                                                                                        "bitRate",
                                                                                        "frameRate",
                                                                                        "screenResolution"
                                                                                    ],
                                                                                    additionalProperties: false
                                                                                },
                                                                                audioStream: {
                                                                                    type: "object",
                                                                                    properties: {
                                                                                        compression: {
                                                                                            type: "string",
                                                                                            enum: [
                                                                                                "mp3",
                                                                                                "wav"
                                                                                            ]
                                                                                        },
                                                                                        trackConfiguration: {
                                                                                            type: "string",
                                                                                            enum: [
                                                                                                "1/0 (Mono)",
                                                                                                "Dual mono",
                                                                                                "2/0 (Stereo)",
                                                                                                "5.1 Surround"
                                                                                            ]
                                                                                        },
                                                                                        bitRate: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        bitDepth: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        samplingRate: {
                                                                                            type: "integer"
                                                                                        }
                                                                                    },
                                                                                    required: [
                                                                                        "compression"
                                                                                    ],
                                                                                    additionalProperties: false
                                                                                }
                                                                            },
                                                                            required: [
                                                                                "container",
                                                                                "videoStream"
                                                                            ],
                                                                            additionalProperties: false
                                                                        },
                                                                        propertyNames: {
                                                                            type: "string"
                                                                        },
                                                                        minProperties: 1
                                                                    },
                                                                    conventions: {
                                                                        type: "object",
                                                                        additionalProperties: {
                                                                            type: "string",
                                                                            pattern: "^\\d+[.]\\d+([.].+)?$"
                                                                        },
                                                                        propertyNames: {
                                                                            type: "string",
                                                                            pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                            oneOf: [
                                                                                {
                                                                                    type: "string",
                                                                                    pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                                    description: "User-defined token, prefixed with x-"
                                                                                },
                                                                                {
                                                                                    enum: [
                                                                                        "bookDirs",
                                                                                        "rolesInUris"
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                },
                                                                required: [
                                                                    "name",
                                                                    "contentByChapter",
                                                                    "formats"
                                                                ],
                                                                additionalProperties: false
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            else: {
                                                properties: {
                                                    flavorType: {
                                                        type: "object",
                                                        properties: {
                                                            flavor: {
                                                                $schema: "http://json-schema.org/draft-07/schema",
                                                                $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                                $$target: "x_flavor.schema.json",
                                                                title: "Flavor Details: X-Flavor",
                                                                description: "Schema of flavor field for xFlavor",
                                                                type: "object",
                                                                properties: {
                                                                    name: {
                                                                        type: "string",
                                                                        pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                                    }
                                                                },
                                                                required: [
                                                                    "name"
                                                                ],
                                                                additionalProperties: true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        else: {
                            if: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                const: "gloss"
                                            }
                                        }
                                    }
                                }
                            },
                            then: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string",
                                                const: "gloss"
                                            },
                                            flavor: {
                                                type: "object",
                                                oneOf: [
                                                    {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/gloss/text_stories.schema.json",
                                                        $$target: "text_stories.schema.json",
                                                        title: "Flavor Details: Glossed Text Stories",
                                                        type: "object",
                                                        description: "Schema of flavor field for textStories flavor",
                                                        properties: {
                                                            name: {
                                                                const: "textStories"
                                                            }
                                                        },
                                                        additionalProperties: false
                                                    },
                                                    {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                        $$target: "x_flavor.schema.json",
                                                        title: "Flavor Details: X-Flavor",
                                                        description: "Schema of flavor field for xFlavor",
                                                        type: "object",
                                                        properties: {
                                                            name: {
                                                                type: "string",
                                                                pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                            }
                                                        },
                                                        required: [
                                                            "name"
                                                        ],
                                                        additionalProperties: true
                                                    }
                                                ]
                                            },
                                            currentScope: {
                                                $schema: "http://json-schema.org/draft-07/schema",
                                                $id: "https://burrito.bible/schema/scope.schema.json",
                                                $$target: "scope.schema.json",
                                                title: "Scope",
                                                type: "object",
                                                description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                                additionalProperties: {
                                                    oneOf: [
                                                        {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                            },
                                                            minItems: 1,
                                                            uniqueItems: true
                                                        },
                                                        {
                                                            type: "array",
                                                            maxItems: 0
                                                        }
                                                    ]
                                                },
                                                propertyNames: {
                                                    type: "string",
                                                    pattern: "^[A-Z0-9]{3}$",
                                                    minLength: 3,
                                                    maxLength: 3,
                                                    enum: [
                                                        "GEN",
                                                        "EXO",
                                                        "LEV",
                                                        "NUM",
                                                        "DEU",
                                                        "JOS",
                                                        "JDG",
                                                        "RUT",
                                                        "1SA",
                                                        "2SA",
                                                        "1KI",
                                                        "2KI",
                                                        "1CH",
                                                        "2CH",
                                                        "EZR",
                                                        "NEH",
                                                        "EST",
                                                        "JOB",
                                                        "PSA",
                                                        "PRO",
                                                        "ECC",
                                                        "SNG",
                                                        "ISA",
                                                        "JER",
                                                        "LAM",
                                                        "EZK",
                                                        "DAN",
                                                        "HOS",
                                                        "JOL",
                                                        "AMO",
                                                        "OBA",
                                                        "JON",
                                                        "MIC",
                                                        "NAM",
                                                        "HAB",
                                                        "ZEP",
                                                        "HAG",
                                                        "ZEC",
                                                        "MAL",
                                                        "MAT",
                                                        "MRK",
                                                        "LUK",
                                                        "JHN",
                                                        "ACT",
                                                        "ROM",
                                                        "1CO",
                                                        "2CO",
                                                        "GAL",
                                                        "EPH",
                                                        "PHP",
                                                        "COL",
                                                        "1TH",
                                                        "2TH",
                                                        "1TI",
                                                        "2TI",
                                                        "TIT",
                                                        "PHM",
                                                        "HEB",
                                                        "JAS",
                                                        "1PE",
                                                        "2PE",
                                                        "1JN",
                                                        "2JN",
                                                        "3JN",
                                                        "JUD",
                                                        "REV",
                                                        "TOB",
                                                        "JDT",
                                                        "ESG",
                                                        "WIS",
                                                        "SIR",
                                                        "BAR",
                                                        "LJE",
                                                        "S3Y",
                                                        "SUS",
                                                        "BEL",
                                                        "1MA",
                                                        "2MA",
                                                        "3MA",
                                                        "4MA",
                                                        "1ES",
                                                        "2ES",
                                                        "MAN",
                                                        "PS2",
                                                        "ODA",
                                                        "PSS",
                                                        "JSA",
                                                        "JDB",
                                                        "TBS",
                                                        "SST",
                                                        "DNT",
                                                        "BLT",
                                                        "EZA",
                                                        "5EZ",
                                                        "6EZ",
                                                        "DAG",
                                                        "PS3",
                                                        "2BA",
                                                        "LBA",
                                                        "JUB",
                                                        "ENO",
                                                        "1MQ",
                                                        "2MQ",
                                                        "3MQ",
                                                        "REP",
                                                        "4BA",
                                                        "LAO"
                                                    ],
                                                    description: "A USFM book code consisting of three uppercase alphanumerics."
                                                },
                                                minProperties: 1
                                            }
                                        },
                                        required: [
                                            "name",
                                            "flavor",
                                            "currentScope"
                                        ],
                                        additionalProperties: false
                                    }
                                }
                            },
                            else: {
                                if: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    const: "parascriptural"
                                                }
                                            }
                                        }
                                    }
                                },
                                then: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    const: "parascriptural"
                                                },
                                                flavor: {
                                                    type: "object",
                                                    oneOf: [
                                                        {
                                                            $schema: "http://json-schema.org/draft-07/schema",
                                                            $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                            $$target: "x_flavor.schema.json",
                                                            title: "Flavor Details: X-Flavor",
                                                            description: "Schema of flavor field for xFlavor",
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    type: "string",
                                                                    pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                                }
                                                            },
                                                            required: [
                                                                "name"
                                                            ],
                                                            additionalProperties: true
                                                        }
                                                    ]
                                                },
                                                currentScope: {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/scope.schema.json",
                                                    $$target: "scope.schema.json",
                                                    title: "Scope",
                                                    type: "object",
                                                    description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                                    additionalProperties: {
                                                        oneOf: [
                                                            {
                                                                type: "array",
                                                                items: {
                                                                    type: "string",
                                                                    pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                                },
                                                                minItems: 1,
                                                                uniqueItems: true
                                                            },
                                                            {
                                                                type: "array",
                                                                maxItems: 0
                                                            }
                                                        ]
                                                    },
                                                    propertyNames: {
                                                        type: "string",
                                                        pattern: "^[A-Z0-9]{3}$",
                                                        minLength: 3,
                                                        maxLength: 3,
                                                        enum: [
                                                            "GEN",
                                                            "EXO",
                                                            "LEV",
                                                            "NUM",
                                                            "DEU",
                                                            "JOS",
                                                            "JDG",
                                                            "RUT",
                                                            "1SA",
                                                            "2SA",
                                                            "1KI",
                                                            "2KI",
                                                            "1CH",
                                                            "2CH",
                                                            "EZR",
                                                            "NEH",
                                                            "EST",
                                                            "JOB",
                                                            "PSA",
                                                            "PRO",
                                                            "ECC",
                                                            "SNG",
                                                            "ISA",
                                                            "JER",
                                                            "LAM",
                                                            "EZK",
                                                            "DAN",
                                                            "HOS",
                                                            "JOL",
                                                            "AMO",
                                                            "OBA",
                                                            "JON",
                                                            "MIC",
                                                            "NAM",
                                                            "HAB",
                                                            "ZEP",
                                                            "HAG",
                                                            "ZEC",
                                                            "MAL",
                                                            "MAT",
                                                            "MRK",
                                                            "LUK",
                                                            "JHN",
                                                            "ACT",
                                                            "ROM",
                                                            "1CO",
                                                            "2CO",
                                                            "GAL",
                                                            "EPH",
                                                            "PHP",
                                                            "COL",
                                                            "1TH",
                                                            "2TH",
                                                            "1TI",
                                                            "2TI",
                                                            "TIT",
                                                            "PHM",
                                                            "HEB",
                                                            "JAS",
                                                            "1PE",
                                                            "2PE",
                                                            "1JN",
                                                            "2JN",
                                                            "3JN",
                                                            "JUD",
                                                            "REV",
                                                            "TOB",
                                                            "JDT",
                                                            "ESG",
                                                            "WIS",
                                                            "SIR",
                                                            "BAR",
                                                            "LJE",
                                                            "S3Y",
                                                            "SUS",
                                                            "BEL",
                                                            "1MA",
                                                            "2MA",
                                                            "3MA",
                                                            "4MA",
                                                            "1ES",
                                                            "2ES",
                                                            "MAN",
                                                            "PS2",
                                                            "ODA",
                                                            "PSS",
                                                            "JSA",
                                                            "JDB",
                                                            "TBS",
                                                            "SST",
                                                            "DNT",
                                                            "BLT",
                                                            "EZA",
                                                            "5EZ",
                                                            "6EZ",
                                                            "DAG",
                                                            "PS3",
                                                            "2BA",
                                                            "LBA",
                                                            "JUB",
                                                            "ENO",
                                                            "1MQ",
                                                            "2MQ",
                                                            "3MQ",
                                                            "REP",
                                                            "4BA",
                                                            "LAO"
                                                        ],
                                                        description: "A USFM book code consisting of three uppercase alphanumerics."
                                                    },
                                                    minProperties: 1
                                                }
                                            },
                                            required: [
                                                "name",
                                                "flavor"
                                            ],
                                            additionalProperties: false
                                        }
                                    }
                                },
                                else: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    const: "peripheral"
                                                },
                                                flavor: {
                                                    type: "object",
                                                    oneOf: [
                                                        {
                                                            $schema: "http://json-schema.org/draft-07/schema",
                                                            $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                            $$target: "x_flavor.schema.json",
                                                            title: "Flavor Details: X-Flavor",
                                                            description: "Schema of flavor field for xFlavor",
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    type: "string",
                                                                    pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                                }
                                                            },
                                                            required: [
                                                                "name"
                                                            ],
                                                            additionalProperties: true
                                                        }
                                                    ]
                                                },
                                                currentScope: {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/scope.schema.json",
                                                    $$target: "scope.schema.json",
                                                    title: "Scope",
                                                    type: "object",
                                                    description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                                    additionalProperties: {
                                                        oneOf: [
                                                            {
                                                                type: "array",
                                                                items: {
                                                                    type: "string",
                                                                    pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                                },
                                                                minItems: 1,
                                                                uniqueItems: true
                                                            },
                                                            {
                                                                type: "array",
                                                                maxItems: 0
                                                            }
                                                        ]
                                                    },
                                                    propertyNames: {
                                                        type: "string",
                                                        pattern: "^[A-Z0-9]{3}$",
                                                        minLength: 3,
                                                        maxLength: 3,
                                                        enum: [
                                                            "GEN",
                                                            "EXO",
                                                            "LEV",
                                                            "NUM",
                                                            "DEU",
                                                            "JOS",
                                                            "JDG",
                                                            "RUT",
                                                            "1SA",
                                                            "2SA",
                                                            "1KI",
                                                            "2KI",
                                                            "1CH",
                                                            "2CH",
                                                            "EZR",
                                                            "NEH",
                                                            "EST",
                                                            "JOB",
                                                            "PSA",
                                                            "PRO",
                                                            "ECC",
                                                            "SNG",
                                                            "ISA",
                                                            "JER",
                                                            "LAM",
                                                            "EZK",
                                                            "DAN",
                                                            "HOS",
                                                            "JOL",
                                                            "AMO",
                                                            "OBA",
                                                            "JON",
                                                            "MIC",
                                                            "NAM",
                                                            "HAB",
                                                            "ZEP",
                                                            "HAG",
                                                            "ZEC",
                                                            "MAL",
                                                            "MAT",
                                                            "MRK",
                                                            "LUK",
                                                            "JHN",
                                                            "ACT",
                                                            "ROM",
                                                            "1CO",
                                                            "2CO",
                                                            "GAL",
                                                            "EPH",
                                                            "PHP",
                                                            "COL",
                                                            "1TH",
                                                            "2TH",
                                                            "1TI",
                                                            "2TI",
                                                            "TIT",
                                                            "PHM",
                                                            "HEB",
                                                            "JAS",
                                                            "1PE",
                                                            "2PE",
                                                            "1JN",
                                                            "2JN",
                                                            "3JN",
                                                            "JUD",
                                                            "REV",
                                                            "TOB",
                                                            "JDT",
                                                            "ESG",
                                                            "WIS",
                                                            "SIR",
                                                            "BAR",
                                                            "LJE",
                                                            "S3Y",
                                                            "SUS",
                                                            "BEL",
                                                            "1MA",
                                                            "2MA",
                                                            "3MA",
                                                            "4MA",
                                                            "1ES",
                                                            "2ES",
                                                            "MAN",
                                                            "PS2",
                                                            "ODA",
                                                            "PSS",
                                                            "JSA",
                                                            "JDB",
                                                            "TBS",
                                                            "SST",
                                                            "DNT",
                                                            "BLT",
                                                            "EZA",
                                                            "5EZ",
                                                            "6EZ",
                                                            "DAG",
                                                            "PS3",
                                                            "2BA",
                                                            "LBA",
                                                            "JUB",
                                                            "ENO",
                                                            "1MQ",
                                                            "2MQ",
                                                            "3MQ",
                                                            "REP",
                                                            "4BA",
                                                            "LAO"
                                                        ],
                                                        description: "A USFM book code consisting of three uppercase alphanumerics."
                                                    },
                                                    minProperties: 1
                                                }
                                            },
                                            required: [
                                                "name",
                                                "flavor"
                                            ],
                                            additionalProperties: false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    relationships: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/relationships.schema.json",
                        $$target: "relationships.schema.json",
                        title: "Relationships",
                        type: "array",
                        items: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/relationship.schema.json",
                            $$target: "relationship.schema.json",
                            title: "Relationship",
                            type: "object",
                            description: "Describes a relationship to a different burrito that can be obtained from an indicated server.",
                            properties: {
                                relationType: {
                                    type: "string",
                                    enum: [
                                        "source",
                                        "target",
                                        "expression",
                                        "parascriptural",
                                        "peripheral"
                                    ],
                                    minLength: 1
                                },
                                flavor: {
                                    type: "string",
                                    oneOf: [
                                        {
                                            enum: [
                                                "textTranslation",
                                                "audioTranslation",
                                                "typesetScripture",
                                                "signLanguageVideoTranslation",
                                                "embossedBrailleScripture",
                                                "glossedTextStory"
                                            ]
                                        },
                                        {
                                            pattern: "^x-[a-z][A-za-z0-9]*$"
                                        }
                                    ],
                                    minLength: 1
                                },
                                id: {
                                    type: "string",
                                    pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$",
                                    description: "Opaque system-specific identifier, prefixed with the name of the system as declared in idAuthorities."
                                },
                                revision: {
                                    type: "string",
                                    pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                    description: "Opaque system-specific revision identifier."
                                },
                                variant: {
                                    type: "string",
                                    pattern: "^[A-Za-z][A-Za-z0-9_\\-]{0,31}$"
                                }
                            },
                            required: [
                                "relationType",
                                "flavor",
                                "id"
                            ],
                            additionalProperties: false,
                            oneOf: [
                                {
                                    properties: {
                                        flavor: {
                                            type: "string",
                                            pattern: "^x-[a-z][A-za-z0-9]*$"
                                        }
                                    },
                                    $comment: "Custom flavors can be used with any relationType."
                                },
                                {
                                    properties: {
                                        relationType: {
                                            const: "source"
                                        },
                                        flavor: {
                                            enum: [
                                                "textTranslation",
                                                "audioTranslation"
                                            ]
                                        }
                                    }
                                },
                                {
                                    properties: {
                                        relationType: {
                                            const: "target"
                                        },
                                        flavor: {}
                                    }
                                },
                                {
                                    properties: {
                                        relationType: {
                                            const: "expression"
                                        },
                                        flavor: {
                                            not: {
                                                const: "scriptureText"
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        minItems: 1,
                        description: "Describes a relationship to another burrito that may be obtained from an indicated server."
                    },
                    languages: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/languages.schema.json",
                        $$target: "languages.schema.json",
                        title: "Languages",
                        type: "array",
                        items: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/language.schema.json",
                            $$target: "language.schema.json",
                            title: "Language",
                            type: "object",
                            description: "Language section.",
                            properties: {
                                tag: {
                                    examples: [
                                        "hi",
                                        "es-419"
                                    ],
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                name: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                numberingSystem: {
                                    $schema: "http://json-schema.org/draft-07/schema",
                                    $id: "https://burrito.bible/schema/numbering_system.schema.json",
                                    $$target: "numbering_system.schema.json",
                                    title: "Numbering System",
                                    type: "string",
                                    description: "Numbering System",
                                    enum: [
                                        "adlm",
                                        "ahom",
                                        "arab",
                                        "arabext",
                                        "armn",
                                        "armnlow",
                                        "bali",
                                        "beng",
                                        "bhks",
                                        "brah",
                                        "cakm",
                                        "cham",
                                        "cyrl",
                                        "deva",
                                        "ethi",
                                        "finance",
                                        "fullwide",
                                        "geor",
                                        "gong",
                                        "gonm",
                                        "grek",
                                        "greklow",
                                        "gujr",
                                        "guru",
                                        "hanidays",
                                        "hanidec",
                                        "hans",
                                        "hansfin",
                                        "hant",
                                        "hantfin",
                                        "hebr",
                                        "hmng",
                                        "hmnp",
                                        "java",
                                        "jpan",
                                        "jpanfin",
                                        "jpanyear",
                                        "kali",
                                        "khmr",
                                        "knda",
                                        "lana",
                                        "lanatham",
                                        "laoo",
                                        "latn",
                                        "lepc",
                                        "limb",
                                        "mathbold",
                                        "mathdbl",
                                        "mathmono",
                                        "mathsanb",
                                        "mathsans",
                                        "mlym",
                                        "modi",
                                        "mong",
                                        "mroo",
                                        "mtei",
                                        "mymr",
                                        "mymrshan",
                                        "mymrtlng",
                                        "native",
                                        "newa",
                                        "nkoo",
                                        "olck",
                                        "orya",
                                        "osma",
                                        "rohg",
                                        "roman",
                                        "romanlow",
                                        "saur",
                                        "shrd",
                                        "sind",
                                        "sinh",
                                        "sora",
                                        "sund",
                                        "takr",
                                        "talu",
                                        "taml",
                                        "tamldec",
                                        "telu",
                                        "thai",
                                        "tirh",
                                        "tibt",
                                        "traditio",
                                        "vaii",
                                        "wara",
                                        "wcho"
                                    ]
                                },
                                rod: {
                                    type: "string",
                                    pattern: "^[0-9]{5}$",
                                    minLength: 5,
                                    maxLength: 5,
                                    description: "A five-digit code from the Registry of Dialects."
                                },
                                scriptDirection: {
                                    type: "string",
                                    enum: [
                                        "ltr",
                                        "rtl"
                                    ]
                                }
                            },
                            required: [
                                "tag",
                                "name"
                            ],
                            additionalProperties: false
                        },
                        minItems: 1,
                        description: "A list of all the languages of the contents of this burrito."
                    },
                    targetAreas: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/target_areas.schema.json",
                        $$target: "target_areas.schema.json",
                        title: "Target Areas",
                        type: "array",
                        items: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/target_area.schema.json",
                            $$target: "target_area.schema.json",
                            title: "Target Area",
                            type: "object",
                            description: "An area that is a primary target audience of this burrito.",
                            properties: {
                                code: {
                                    oneOf: [
                                        {
                                            type: "string",
                                            pattern: "^[A-Z][A-Z]$",
                                            minLength: 2,
                                            maxLength: 2,
                                            description: "The upper-case ISO 3166-2 code for the country."
                                        },
                                        {
                                            $schema: "http://json-schema.org/draft-07/schema",
                                            $id: "https://burrito.bible/schema/unm49.schema.json",
                                            $$target: "unm49.schema.json",
                                            title: "UNM49 enum",
                                            type: "string",
                                            description: "UNM49 region code enum",
                                            enum: [
                                                "001",
                                                "002",
                                                "003",
                                                "005",
                                                "009",
                                                "011",
                                                "013",
                                                "014",
                                                "015",
                                                "017",
                                                "018",
                                                "019",
                                                "021",
                                                "024",
                                                "029",
                                                "030",
                                                "034",
                                                "035",
                                                "039",
                                                "053",
                                                "054",
                                                "057",
                                                "061",
                                                "142",
                                                "143",
                                                "145",
                                                "150",
                                                "151",
                                                "154",
                                                "155",
                                                "202",
                                                "419",
                                                "496",
                                                "554",
                                                "591",
                                                "756",
                                                "830"
                                            ]
                                        }
                                    ]
                                },
                                name: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                }
                            },
                            required: [
                                "code",
                                "name"
                            ],
                            additionalProperties: false
                        },
                        minItems: 1,
                        description: "A list of areas of the primary target audience of this burrito."
                    },
                    agencies: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/agencies.schema.json",
                        $$target: "agencies.schema.json",
                        title: "Agencies",
                        type: "array",
                        items: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/agency.schema.json",
                            $$target: "agency.schema.json",
                            title: "Agency",
                            type: "object",
                            description: "Describes a particular agency that is involved with or related to the contents of the burrito.",
                            properties: {
                                id: {
                                    type: "string",
                                    pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$",
                                    description: "Opaque system-specific identifier, prefixed with the name of the system as declared in idAuthorities."
                                },
                                name: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                abbr: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                url: {
                                    type: "string",
                                    pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                    minLength: 1,
                                    description: "A valid **Uniform Resource Locator**.",
                                    examples: [
                                        "https://example.com"
                                    ]
                                },
                                roles: {
                                    type: "array",
                                    items: {
                                        type: "string",
                                        enum: [
                                            "rightsAdmin",
                                            "rightsHolder",
                                            "content",
                                            "publication",
                                            "management",
                                            "finance",
                                            "qa"
                                        ]
                                    },
                                    description: "A list of roles indicating in which respects this agency was involved with the production of this burrito.",
                                    minItems: 1
                                }
                            },
                            required: [
                                "id",
                                "name",
                                "roles"
                            ],
                            additionalProperties: false
                        },
                        minItems: 1,
                        description: "A list of agencies involved with the contents of the burrito or the work it is derived from."
                    },
                    copyright: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/copyright.schema.json",
                        $$target: "copyright.schema.json",
                        title: "Copyright and License Information",
                        type: "object",
                        description: "Describes the copyright holders and license terms of the burrito.",
                        properties: {
                            licenses: {
                                type: "array",
                                minItems: 1,
                                items: {
                                    type: "object",
                                    properties: {
                                        url: {
                                            type: "string",
                                            pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                            minLength: 1,
                                            description: "A valid **Uniform Resource Locator**.",
                                            examples: [
                                                "https://example.com"
                                            ]
                                        },
                                        ingredient: {
                                            type: "string",
                                            pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                            description: "A file path, delimited by forward slashes."
                                        }
                                    },
                                    oneOf: [
                                        {
                                            required: [
                                                "url"
                                            ]
                                        },
                                        {
                                            required: [
                                                "ingredient"
                                            ]
                                        }
                                    ],
                                    additionalProperties: false
                                },
                                description: "The licenses, which state under which terms the burrito may be used, can be specified either as URL or as path to an ingredient."
                            },
                            publicDomain: {
                                type: "boolean",
                                description: "If set to true, the contents of this burrito are in the public domain."
                            },
                            shortStatements: {
                                type: "array",
                                minItems: 1,
                                items: {
                                    type: "object",
                                    properties: {
                                        statement: {
                                            type: "string",
                                            maxLength: 500
                                        },
                                        lang: {
                                            type: "string",
                                            pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                            minLength: 2,
                                            description: "A valid IETF language tag as specified by BCP 47."
                                        },
                                        mimetype: {
                                            type: "string",
                                            pattern: "^[\\-a-z0-9]+/[\\-a-z0-9+]+$",
                                            description: "An IANA media type (also known as MIME type)"
                                        }
                                    },
                                    required: [
                                        "statement"
                                    ],
                                    additionalProperties: false
                                },
                                description: "A short statement to explain the copyright / license information to readers"
                            }
                        },
                        additionalProperties: false,
                        oneOf: [
                            {
                                type: "object",
                                properties: {
                                    publicDomain: {
                                        const: true
                                    }
                                },
                                required: [
                                    "publicDomain"
                                ]
                            },
                            {
                                type: "object",
                                required: [
                                    "shortStatements"
                                ]
                            },
                            {
                                type: "object",
                                required: [
                                    "licenses"
                                ]
                            }
                        ]
                    },
                    promotion: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/promotion.schema.json",
                        $$target: "promotion.schema.json",
                        title: "Promotional Statements",
                        type: "object",
                        description: "Contains promotional statements for the burrito.",
                        properties: {
                            statementPlain: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            statementRich: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    contentMediaType: "text/xml",
                                    minLength: 4,
                                    allOf: [
                                        {
                                            $comment: "Check top-level block elements. This is imperfect and is liable to skip over tags if a <li> or nested <blockquote> is present, but fully validating XML using RegEx is impossible, and this suffices for the common case of simple formatted text.",
                                            pattern: "^((<(p|h1|h2|h3)\\s*/>|<p\\s*>([^<]|<[^p])*</p\\s*>|<h1\\s*>([^<]|<[^h])*</h1\\s*>|<h2\\s*>([^<]|<[^h])*</h2\\s*>|<h3\\s*>([^<]|<[^h])*</h3\\s*>|<ol\\s*>\\s*((<li\\s*/>|<li\\s*>.*</li\\s*>)\\s*)+</ol\\s*>|<ul\\s*>\\s*((<li\\s*/>|<li\\s*>.*</li\\s*>)\\s*)+</ul\\s*>|<blockquote\\s*>(<(p|h1|h2|h3)\\s*/>|<(p|h[123])\\s*>([^<]|<[^ph])*</(p|h[123])\\s*>|<ol\\s*>(<li\\s*/>|<li\\s*>.*</li\\s*>)+</ol\\s*>|<ul\\s*>(<li\\s*/>|<li\\s*>.*</li\\s*>)+</ul\\s*>|<blockquote\\s*>.+</blockquote\\s*>)+</blockquote\\s*>)\\s*)+$"
                                        },
                                        {
                                            $comment: "Ensure that no invalid tags are present, check inline markup in <p> and <h#> (noting that <li> may contain pretty much anything), and prevent improper nesting of <li> tags.",
                                            pattern: "^([^<]|<(p|h[123]|a|br|strong|b|em|i)\\s*/>|</?(a|br|strong|b|em|i|blockquote)\\s*>|<(p|h[123])\\s*>([^<]|<img(\\s+(alt|src)=(\"[^<\"]*\"|'[^<']*'))+\\s*(/>|>\\s*</img\\s*>)|<a\\s+href=(\"[^<\"]+\"|'[^<']+')\\s*/?>|</?(a|br|strong|b|em|i)\\s*/?>)*</(p|h[123])\\s*>|<[ou]l\\s*>(\\s|<li\\s*/>)*<li\\s*/?>|</li\\s*>(\\s|<li\\s*/>)*(<li\\s*>|</[ou]l\\s*>))+$"
                                        }
                                    ],
                                    description: "A rich text string specified in a limited subset of XHTML."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A simplified XHTML string specified in one or multiple languages, indexed by IETF language tag."
                            }
                        },
                        required: [],
                        additionalProperties: false
                    },
                    ingredients: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/ingredients.schema.json",
                        $$target: "ingredients.schema.json",
                        title: "Ingredients",
                        type: "object",
                        additionalProperties: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/ingredient.schema.json",
                            $$target: "ingredient.schema.json",
                            title: "Ingredient",
                            type: "object",
                            description: "Describes an individual ingredient, which is a file contained within the burrito.",
                            properties: {
                                size: {
                                    type: "integer",
                                    minimum: 0,
                                    description: "The number of bytes that this ingredient takes up on disk."
                                },
                                lang: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                mimeType: {
                                    type: "string",
                                    pattern: "^[\\-a-z0-9]+/[\\-a-z0-9+]+$",
                                    description: "An IANA media type (also known as MIME type)"
                                },
                                checksum: {
                                    type: "object",
                                    properties: {
                                        md5: {
                                            type: "string",
                                            pattern: "^[a-f0-9]{32}$"
                                        },
                                        "sha3-256": {
                                            type: "string",
                                            pattern: "^[a-f0-9]{64}$"
                                        },
                                        "sha3-512": {
                                            type: "string",
                                            pattern: "^[a-f0-9]{128}$"
                                        }
                                    },
                                    required: [
                                        "md5"
                                    ],
                                    maxProperties: 2,
                                    additionalProperties: false
                                },
                                scope: {
                                    $schema: "http://json-schema.org/draft-07/schema",
                                    $id: "https://burrito.bible/schema/scope.schema.json",
                                    $$target: "scope.schema.json",
                                    title: "Scope",
                                    type: "object",
                                    description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                    additionalProperties: {
                                        oneOf: [
                                            {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                    pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                },
                                                minItems: 1,
                                                uniqueItems: true
                                            },
                                            {
                                                type: "array",
                                                maxItems: 0
                                            }
                                        ]
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^[A-Z0-9]{3}$",
                                        minLength: 3,
                                        maxLength: 3,
                                        enum: [
                                            "GEN",
                                            "EXO",
                                            "LEV",
                                            "NUM",
                                            "DEU",
                                            "JOS",
                                            "JDG",
                                            "RUT",
                                            "1SA",
                                            "2SA",
                                            "1KI",
                                            "2KI",
                                            "1CH",
                                            "2CH",
                                            "EZR",
                                            "NEH",
                                            "EST",
                                            "JOB",
                                            "PSA",
                                            "PRO",
                                            "ECC",
                                            "SNG",
                                            "ISA",
                                            "JER",
                                            "LAM",
                                            "EZK",
                                            "DAN",
                                            "HOS",
                                            "JOL",
                                            "AMO",
                                            "OBA",
                                            "JON",
                                            "MIC",
                                            "NAM",
                                            "HAB",
                                            "ZEP",
                                            "HAG",
                                            "ZEC",
                                            "MAL",
                                            "MAT",
                                            "MRK",
                                            "LUK",
                                            "JHN",
                                            "ACT",
                                            "ROM",
                                            "1CO",
                                            "2CO",
                                            "GAL",
                                            "EPH",
                                            "PHP",
                                            "COL",
                                            "1TH",
                                            "2TH",
                                            "1TI",
                                            "2TI",
                                            "TIT",
                                            "PHM",
                                            "HEB",
                                            "JAS",
                                            "1PE",
                                            "2PE",
                                            "1JN",
                                            "2JN",
                                            "3JN",
                                            "JUD",
                                            "REV",
                                            "TOB",
                                            "JDT",
                                            "ESG",
                                            "WIS",
                                            "SIR",
                                            "BAR",
                                            "LJE",
                                            "S3Y",
                                            "SUS",
                                            "BEL",
                                            "1MA",
                                            "2MA",
                                            "3MA",
                                            "4MA",
                                            "1ES",
                                            "2ES",
                                            "MAN",
                                            "PS2",
                                            "ODA",
                                            "PSS",
                                            "JSA",
                                            "JDB",
                                            "TBS",
                                            "SST",
                                            "DNT",
                                            "BLT",
                                            "EZA",
                                            "5EZ",
                                            "6EZ",
                                            "DAG",
                                            "PS3",
                                            "2BA",
                                            "LBA",
                                            "JUB",
                                            "ENO",
                                            "1MQ",
                                            "2MQ",
                                            "3MQ",
                                            "REP",
                                            "4BA",
                                            "LAO"
                                        ],
                                        description: "A USFM book code consisting of three uppercase alphanumerics."
                                    },
                                    minProperties: 1
                                },
                                role: {
                                    $schema: "http://json-schema.org/draft-07/schema",
                                    $id: "https://burrito.bible/schema/role.schema.json",
                                    $$target: "role.schema.json",
                                    title: "Role",
                                    type: "string",
                                    description: "Roles which may be optionally attached to an ingredient.",
                                    oneOf: [
                                        {
                                            description: "A USX peripheral label,eg \"maps\"",
                                            enum: [
                                                "abbreviations",
                                                "alphacontents",
                                                "chron",
                                                "cnc",
                                                "contents",
                                                "cover",
                                                "foreword",
                                                "glo",
                                                "halftitle",
                                                "imprimatur",
                                                "lxxquotes",
                                                "maps",
                                                "measures",
                                                "ndx",
                                                "preface",
                                                "promo",
                                                "pubdata",
                                                "spine",
                                                "tdx",
                                                "title"
                                            ]
                                        },
                                        {
                                            description: "A role for story-based or video works, eg \"teaching\"",
                                            enum: [
                                                "background",
                                                "bridge",
                                                "credits",
                                                "diagram",
                                                "gloss",
                                                "illustration",
                                                "introduction",
                                                "scripture",
                                                "teaching",
                                                "timing"
                                            ]
                                        },
                                        {
                                            description: "A role for PoD-type content, eg \"printCover\"",
                                            enum: [
                                                "body",
                                                "thumbnail"
                                            ]
                                        },
                                        {
                                            description: "a versification file indicating the delta from the org versification",
                                            enum: [
                                                "versification"
                                            ]
                                        },
                                        {
                                            description: "A role for textTranslation flavored burritos",
                                            enum: [
                                                "localedata"
                                            ]
                                        },
                                        {
                                            description: "A label for story-type units",
                                            pattern: "^unit\\s.*\\S$"
                                        },
                                        {
                                            description: "A label for dictionary-type resources",
                                            pattern: "^(name|sign|word|concept|place)(\\s.*\\S)?$"
                                        },
                                        {
                                            description: "A role for a full copyright statement",
                                            enum: [
                                                "copyrightStatement"
                                            ]
                                        },
                                        {
                                            description: "An x-role",
                                            pattern: "^x-\\S.*\\S$"
                                        }
                                    ]
                                }
                            },
                            required: [
                                "size",
                                "mimeType"
                            ],
                            additionalProperties: false
                        },
                        propertyNames: {
                            type: "string",
                            pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                            description: "A file path, delimited by forward slashes."
                        },
                        minProperties: 1,
                        description: "Describes the various files contained by the burrito, keyed by the canonical forward-slashed pathname of the file."
                    },
                    localizedNames: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/localized_names.schema.json",
                        $$target: "localized_names.schema.json",
                        title: "Localized Names",
                        type: "object",
                        additionalProperties: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/localized_name.schema.json",
                            $$target: "localized_name.schema.json",
                            title: "Localized Name",
                            type: "object",
                            description: "Contains localized names for books, etc.",
                            properties: {
                                short: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                long: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                abbr: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                }
                            },
                            required: [
                                "short"
                            ],
                            additionalProperties: false
                        },
                        description: "Contains localized names for books, etc."
                    },
                    recipe: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/recipe.schema.json",
                        $$target: "recipe.schema.json",
                        title: "Recipes",
                        type: "array",
                        description: "Scripture Burrito recipes.",
                        items: {
                            type: "object",
                            properties: {
                                idAuthority: {
                                    type: "string"
                                },
                                operation: {
                                    type: "string"
                                },
                                data: {
                                    type: "object"
                                }
                            },
                            required: [
                                "idAuthority",
                                "operation",
                                "data"
                            ],
                            additionalProperties: false
                        },
                        minItems: 1
                    }
                },
                required: [
                    "format",
                    "meta",
                    "idAuthorities",
                    "identification",
                    "confidential",
                    "copyright",
                    "type",
                    "recipe"
                ],
                additionalProperties: false,
                if: {
                    properties: {
                        type: {
                            type: "object",
                            properties: {
                                flavorType: {
                                    enum: [
                                        "scripture",
                                        "gloss"
                                    ]
                                }
                            }
                        }
                    }
                },
                then: {
                    required: [
                        "languages"
                    ]
                }
            },
            else: {
                $schema: "http://json-schema.org/draft-07/schema",
                $id: "https://burrito.bible/schema/template_metadata.schema.json",
                $$target: "template_metadata.schema.json",
                title: "Metadata (Template)",
                type: "object",
                description: "Scripture Burrito Template root.",
                properties: {
                    format: {
                        type: "string",
                        enum: [
                            "scripture burrito"
                        ]
                    },
                    meta: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/template_meta.schema.json",
                        $$target: "template_meta.schema.json",
                        title: "Meta (Template)",
                        type: "object",
                        description: "Information about the Scripture Burrito metadata file.",
                        properties: {
                            category: {
                                const: "template"
                            },
                            templateName: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            dateCreated: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/meta_date_created.schema.json",
                                $$target: "meta_date_created.schema.json",
                                title: "Meta Date created",
                                type: "string",
                                format: "date-time"
                            },
                            version: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/meta_version.schema.json",
                                $$target: "meta_version.schema.json",
                                title: "Meta Version",
                                type: "string",
                                enum: [
                                    "1.0.0"
                                ],
                                description: "Version of the Scripture Burrito specification this file follows."
                            },
                            generator: {
                                description: "Information about the program and user who generated this burrito.",
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/software_and_user_info.schema.json",
                                $$target: "software_and_user_info.schema.json",
                                title: "Software and User Info",
                                type: "object",
                                properties: {
                                    softwareName: {
                                        type: "string",
                                        description: "The name of the program used."
                                    },
                                    softwareVersion: {
                                        type: "string",
                                        description: "The version of the program used."
                                    },
                                    userId: {
                                        description: "A system-specific user identifier.",
                                        type: "string",
                                        pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$"
                                    },
                                    userName: {
                                        type: "string",
                                        description: "The user's full name, if known."
                                    }
                                },
                                required: [
                                    "softwareName",
                                    "softwareVersion"
                                ],
                                additionalProperties: false
                            },
                            defaultLocale: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/meta_default_language.schema.json",
                                $$target: "meta_default_language.schema.json",
                                title: "Meta Default Language",
                                description: "The BCP47 code of the language that should be displayed, if a default is required, and for which localization is required in all name fields specified for 'catalog' validation.",
                                type: "string",
                                pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                minLength: 2
                            },
                            normalization: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/normalization.schema.json",
                                $$target: "normalization.schema.json",
                                title: "Normalization",
                                type: "string",
                                description: "Unicode normalization options. This applies to both ingredients and metadata.",
                                enum: [
                                    "NFC",
                                    "NFD",
                                    "NFKC",
                                    "NFKD"
                                ]
                            },
                            comments: {
                                $schema: "http://json-schema.org/draft-07/schema",
                                $id: "https://burrito.bible/schema/meta_comments.schema.json",
                                $$target: "meta_comments.schema.json",
                                title: "Meta Comments",
                                type: "array",
                                items: {
                                    type: "string"
                                },
                                description: "Arbitrary text strings attached by users with no effect on the interpretation of the Scripture Burrito."
                            }
                        },
                        required: [
                            "version",
                            "category",
                            "defaultLocale",
                            "dateCreated",
                            "templateName"
                        ],
                        additionalProperties: false
                    },
                    idAuthorities: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/id_authorities.schema.json",
                        $$target: "id_authorities.schema.json",
                        title: "idAuthorities",
                        type: "object",
                        description: "Declares one or more identity authorities which may later be referred to using identifier prefixes.",
                        additionalProperties: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "string",
                                    pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                    minLength: 1,
                                    description: "A valid **Uniform Resource Locator**.",
                                    examples: [
                                        "https://example.com"
                                    ]
                                },
                                name: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                }
                            },
                            propertyNames: {
                                type: "string",
                                pattern: "^[a-z][a-z0-9\\-]*[a-z0-9]$",
                                description: "A Label for an ID authority (internal to the document)"
                            },
                            minProperties: 1
                        },
                        minProperties: 1
                    },
                    identification: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/identification.schema.json",
                        $$target: "identification.schema.json",
                        title: "Identification",
                        type: "object",
                        description: "Identification section.",
                        definitions: {
                            revisionString: {
                                type: "string",
                                pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$"
                            }
                        },
                        properties: {
                            name: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            description: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            abbreviation: {
                                type: "object",
                                additionalProperties: {
                                    type: "string",
                                    pattern: "^\\S(.*\\S)?$",
                                    description: "A string without surrounding whitespace characters."
                                },
                                propertyNames: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                minProperties: 1,
                                description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                            },
                            primary: {
                                type: "object",
                                additionalProperties: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "object",
                                        revision: {
                                            type: "string",
                                            pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                            description: "Opaque system-specific revision identifier."
                                        },
                                        timestamp: {
                                            type: "string",
                                            pattern: "^[12][0-9]{3}(-[01][0-9](-[0123][0-9])?)?$"
                                        },
                                        required: [
                                            "revision",
                                            "timestamp"
                                        ]
                                    }
                                },
                                minProperties: 1,
                                maxProperties: 1,
                                description: "Contains the primary authority and identification information."
                            },
                            upstream: {
                                type: "object",
                                additionalProperties: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        additionalProperties: {
                                            type: "object",
                                            revision: {
                                                type: "string",
                                                pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                                description: "Opaque system-specific revision identifier."
                                            },
                                            timestamp: {
                                                type: "string",
                                                pattern: "^[12][0-9]{3}(-[01][0-9](-[0123][0-9])?)?$"
                                            },
                                            required: [
                                                "revision",
                                                "timestamp"
                                            ]
                                        }
                                    }
                                },
                                description: "Contains the upstream authority and identification information."
                            }
                        },
                        required: [
                            "name",
                            "primary"
                        ],
                        additionalProperties: false
                    },
                    confidential: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/confidential.schema.json",
                        $$target: "confidential.schema.json",
                        title: "Confidential",
                        type: "boolean",
                        description: "a true value indicates that the project should not be publicly known and that the identity of project members needs to be kept confidential."
                    },
                    type: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/type.schema.json",
                        $$target: "type.schema.json",
                        title: "Type",
                        description: "Contains properties describing the burrito flavor type.",
                        type: "object",
                        properties: {
                            flavorType: {
                                type: "object",
                                properties: {
                                    name: {
                                        enum: [
                                            "scripture",
                                            "gloss",
                                            "parascriptural",
                                            "peripheral"
                                        ]
                                    }
                                }
                            }
                        },
                        if: {
                            properties: {
                                flavorType: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            const: "scripture"
                                        }
                                    }
                                }
                            }
                        },
                        then: {
                            properties: {
                                flavorType: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string",
                                            const: "scripture"
                                        },
                                        flavor: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    oneOf: [
                                                        {
                                                            enum: [
                                                                "textTranslation",
                                                                "audioTranslation",
                                                                "typesetScripture",
                                                                "embossedBrailleScripture",
                                                                "signLanguageVideoTranslation"
                                                            ]
                                                        },
                                                        {
                                                            pattern: "^x-"
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        currentScope: {
                                            $schema: "http://json-schema.org/draft-07/schema",
                                            $id: "https://burrito.bible/schema/scope.schema.json",
                                            $$target: "scope.schema.json",
                                            title: "Scope",
                                            type: "object",
                                            description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                            additionalProperties: {
                                                oneOf: [
                                                    {
                                                        type: "array",
                                                        items: {
                                                            type: "string",
                                                            pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                        },
                                                        minItems: 1,
                                                        uniqueItems: true
                                                    },
                                                    {
                                                        type: "array",
                                                        maxItems: 0
                                                    }
                                                ]
                                            },
                                            propertyNames: {
                                                type: "string",
                                                pattern: "^[A-Z0-9]{3}$",
                                                minLength: 3,
                                                maxLength: 3,
                                                enum: [
                                                    "GEN",
                                                    "EXO",
                                                    "LEV",
                                                    "NUM",
                                                    "DEU",
                                                    "JOS",
                                                    "JDG",
                                                    "RUT",
                                                    "1SA",
                                                    "2SA",
                                                    "1KI",
                                                    "2KI",
                                                    "1CH",
                                                    "2CH",
                                                    "EZR",
                                                    "NEH",
                                                    "EST",
                                                    "JOB",
                                                    "PSA",
                                                    "PRO",
                                                    "ECC",
                                                    "SNG",
                                                    "ISA",
                                                    "JER",
                                                    "LAM",
                                                    "EZK",
                                                    "DAN",
                                                    "HOS",
                                                    "JOL",
                                                    "AMO",
                                                    "OBA",
                                                    "JON",
                                                    "MIC",
                                                    "NAM",
                                                    "HAB",
                                                    "ZEP",
                                                    "HAG",
                                                    "ZEC",
                                                    "MAL",
                                                    "MAT",
                                                    "MRK",
                                                    "LUK",
                                                    "JHN",
                                                    "ACT",
                                                    "ROM",
                                                    "1CO",
                                                    "2CO",
                                                    "GAL",
                                                    "EPH",
                                                    "PHP",
                                                    "COL",
                                                    "1TH",
                                                    "2TH",
                                                    "1TI",
                                                    "2TI",
                                                    "TIT",
                                                    "PHM",
                                                    "HEB",
                                                    "JAS",
                                                    "1PE",
                                                    "2PE",
                                                    "1JN",
                                                    "2JN",
                                                    "3JN",
                                                    "JUD",
                                                    "REV",
                                                    "TOB",
                                                    "JDT",
                                                    "ESG",
                                                    "WIS",
                                                    "SIR",
                                                    "BAR",
                                                    "LJE",
                                                    "S3Y",
                                                    "SUS",
                                                    "BEL",
                                                    "1MA",
                                                    "2MA",
                                                    "3MA",
                                                    "4MA",
                                                    "1ES",
                                                    "2ES",
                                                    "MAN",
                                                    "PS2",
                                                    "ODA",
                                                    "PSS",
                                                    "JSA",
                                                    "JDB",
                                                    "TBS",
                                                    "SST",
                                                    "DNT",
                                                    "BLT",
                                                    "EZA",
                                                    "5EZ",
                                                    "6EZ",
                                                    "DAG",
                                                    "PS3",
                                                    "2BA",
                                                    "LBA",
                                                    "JUB",
                                                    "ENO",
                                                    "1MQ",
                                                    "2MQ",
                                                    "3MQ",
                                                    "REP",
                                                    "4BA",
                                                    "LAO"
                                                ],
                                                description: "A USFM book code consisting of three uppercase alphanumerics."
                                            },
                                            minProperties: 1
                                        }
                                    },
                                    required: [
                                        "name",
                                        "flavor",
                                        "currentScope"
                                    ],
                                    additionalProperties: false
                                }
                            },
                            required: [
                                "flavorType"
                            ],
                            if: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            flavor: {
                                                type: "object",
                                                properties: {
                                                    name: {
                                                        const: "textTranslation"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            then: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            flavor: {
                                                $schema: "http://json-schema.org/draft-07/schema",
                                                $id: "https://burrito.bible/schema/scripture/text_translation.schema.json",
                                                title: "Flavor Details: scripture/textTranslation",
                                                type: "object",
                                                description: "Schema of flavor field for textTranslation flavor",
                                                properties: {
                                                    name: {
                                                        type: "string",
                                                        const: "textTranslation"
                                                    },
                                                    projectType: {
                                                        type: "string",
                                                        enum: [
                                                            "standard",
                                                            "daughter",
                                                            "studyBible",
                                                            "studyBibleAdditions",
                                                            "backTranslation",
                                                            "auxiliary",
                                                            "transliterationManual",
                                                            "transliterationWithEncoder"
                                                        ]
                                                    },
                                                    translationType: {
                                                        type: "string",
                                                        enum: [
                                                            "firstTranslation",
                                                            "newTranslation",
                                                            "revision",
                                                            "studyOrHelpMaterial"
                                                        ]
                                                    },
                                                    audience: {
                                                        type: "string",
                                                        enum: [
                                                            "basic",
                                                            "common",
                                                            "common-literary",
                                                            "literary",
                                                            "liturgical",
                                                            "children"
                                                        ]
                                                    },
                                                    usfmVersion: {
                                                        type: "string",
                                                        pattern: "^\\d+\\.\\d+(\\..+)?$"
                                                    },
                                                    conventions: {
                                                        type: "object",
                                                        additionalProperties: {
                                                            type: "string",
                                                            pattern: "^\\d+[.]\\d+([.].+)?$"
                                                        },
                                                        propertyNames: {
                                                            type: "string",
                                                            pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                            oneOf: [
                                                                {
                                                                    type: "string",
                                                                    pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                    description: "User-defined token, prefixed with x-"
                                                                },
                                                                {
                                                                    enum: [
                                                                        "usxRefs",
                                                                        "usxDirs",
                                                                        "typesetAsVersedParagraphs"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                required: [
                                                    "name",
                                                    "projectType",
                                                    "translationType",
                                                    "audience",
                                                    "usfmVersion"
                                                ],
                                                additionalProperties: false
                                            }
                                        }
                                    }
                                }
                            },
                            else: {
                                if: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                flavor: {
                                                    type: "object",
                                                    properties: {
                                                        name: {
                                                            const: "audioTranslation"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                then: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                flavor: {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/scripture/audio_translation.schema.json",
                                                    title: "Flavor Details: Audio Translation",
                                                    type: "object",
                                                    description: "Schema of flavor field of scripture/audioTranslation flavor",
                                                    definitions: {
                                                        format: {
                                                            type: "object",
                                                            properties: {
                                                                compression: {
                                                                    type: "string",
                                                                    enum: [
                                                                        "mp3",
                                                                        "wav"
                                                                    ]
                                                                },
                                                                trackConfiguration: {
                                                                    type: "string",
                                                                    enum: [
                                                                        "1/0 (Mono)",
                                                                        "Dual mono",
                                                                        "2/0 (Stereo)",
                                                                        "5.1 Surround"
                                                                    ]
                                                                },
                                                                bitRate: {
                                                                    type: "integer"
                                                                },
                                                                bitDepth: {
                                                                    type: "integer"
                                                                },
                                                                samplingRate: {
                                                                    type: "integer"
                                                                },
                                                                timingDir: {
                                                                    type: "string",
                                                                    pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                                                    description: "A file path, delimited by forward slashes."
                                                                }
                                                            },
                                                            required: [
                                                                "compression"
                                                            ],
                                                            additionalProperties: false
                                                        }
                                                    },
                                                    properties: {
                                                        name: {
                                                            const: "audioTranslation"
                                                        },
                                                        performance: {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                                enum: [
                                                                    "singleVoice",
                                                                    "multipleVoice",
                                                                    "reading",
                                                                    "drama",
                                                                    "withMusic",
                                                                    "withEffects",
                                                                    "withHeadings"
                                                                ]
                                                            },
                                                            uniqueItems: true,
                                                            allOf: [
                                                                {
                                                                    if: {
                                                                        contains: {
                                                                            const: "singleVoice"
                                                                        }
                                                                    },
                                                                    then: {
                                                                        not: {
                                                                            contains: {
                                                                                const: "multipleVoice"
                                                                            }
                                                                        }
                                                                    },
                                                                    else: {
                                                                        contains: {
                                                                            const: "multipleVoice"
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    if: {
                                                                        contains: {
                                                                            const: "reading"
                                                                        }
                                                                    },
                                                                    then: {
                                                                        not: {
                                                                            contains: {
                                                                                const: "drama"
                                                                            }
                                                                        }
                                                                    },
                                                                    else: {
                                                                        contains: {
                                                                            const: "drama"
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        formats: {
                                                            type: "object",
                                                            additionalProperties: {
                                                                type: "object",
                                                                properties: {
                                                                    compression: {
                                                                        type: "string",
                                                                        enum: [
                                                                            "mp3",
                                                                            "wav"
                                                                        ]
                                                                    },
                                                                    trackConfiguration: {
                                                                        type: "string",
                                                                        enum: [
                                                                            "1/0 (Mono)",
                                                                            "Dual mono",
                                                                            "2/0 (Stereo)",
                                                                            "5.1 Surround"
                                                                        ]
                                                                    },
                                                                    bitRate: {
                                                                        type: "integer"
                                                                    },
                                                                    bitDepth: {
                                                                        type: "integer"
                                                                    },
                                                                    samplingRate: {
                                                                        type: "integer"
                                                                    },
                                                                    timingDir: {
                                                                        type: "string",
                                                                        pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                                                        description: "A file path, delimited by forward slashes."
                                                                    }
                                                                },
                                                                required: [
                                                                    "compression"
                                                                ],
                                                                additionalProperties: false
                                                            },
                                                            propertyNames: {
                                                                type: "string"
                                                            }
                                                        },
                                                        conventions: {
                                                            type: "object",
                                                            additionalProperties: {
                                                                type: "string",
                                                                pattern: "^\\d+[.]\\d+([.].+)?$"
                                                            },
                                                            propertyNames: {
                                                                type: "string",
                                                                pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                oneOf: [
                                                                    {
                                                                        type: "string",
                                                                        pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                        description: "User-defined token, prefixed with x-"
                                                                    },
                                                                    {
                                                                        enum: [
                                                                            "contentResourcesByChapter",
                                                                            "bookDirs"
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    required: [
                                                        "performance",
                                                        "formats"
                                                    ],
                                                    additionalProperties: false
                                                }
                                            }
                                        }
                                    }
                                },
                                else: {
                                    if: {
                                        properties: {
                                            flavorType: {
                                                type: "object",
                                                properties: {
                                                    flavor: {
                                                        type: "object",
                                                        properties: {
                                                            name: {
                                                                const: "typesetScripture"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    then: {
                                        properties: {
                                            flavorType: {
                                                type: "object",
                                                properties: {
                                                    flavor: {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/scripture/typeset_scripture.schema.json",
                                                        title: "Flavor Details: Scripture: Print Publication",
                                                        type: "object",
                                                        description: "Schema of flavor field for scripture/printPublication flavor",
                                                        definitions: {
                                                            measurementString: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]{0,4}mm$"
                                                            },
                                                            percentageString: {
                                                                type: "string",
                                                                pattern: "[1-9][0-9]{1,3}%"
                                                            },
                                                            orientation: {
                                                                type: "string",
                                                                enum: [
                                                                    "portrait",
                                                                    "landscape"
                                                                ]
                                                            },
                                                            colorSpace: {
                                                                type: "string",
                                                                enum: [
                                                                    "cmyk",
                                                                    "rgb"
                                                                ]
                                                            }
                                                        },
                                                        properties: {
                                                            name: {
                                                                type: "string",
                                                                const: "typesetScripture"
                                                            },
                                                            contentType: {
                                                                type: "string",
                                                                const: "pdf"
                                                            },
                                                            pod: {
                                                                type: "boolean"
                                                            },
                                                            pageCount: {
                                                                type: "integer",
                                                                minimum: 0
                                                            },
                                                            width: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]{0,4}mm$"
                                                            },
                                                            height: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]{0,4}mm$"
                                                            },
                                                            scale: {
                                                                type: "string",
                                                                pattern: "[1-9][0-9]{1,3}%"
                                                            },
                                                            orientation: {
                                                                type: "string",
                                                                enum: [
                                                                    "portrait",
                                                                    "landscape"
                                                                ]
                                                            },
                                                            colorSpace: {
                                                                type: "string",
                                                                enum: [
                                                                    "cmyk",
                                                                    "rgb"
                                                                ]
                                                            },
                                                            edgeSpace: {
                                                                type: "object",
                                                                properties: {
                                                                    top: {
                                                                        type: "string",
                                                                        pattern: "^[1-9][0-9]{0,4}mm$"
                                                                    },
                                                                    bottom: {
                                                                        type: "string",
                                                                        pattern: "^[1-9][0-9]{0,4}mm$"
                                                                    },
                                                                    inside: {
                                                                        type: "string",
                                                                        pattern: "^[1-9][0-9]{0,4}mm$"
                                                                    },
                                                                    outside: {
                                                                        type: "string",
                                                                        pattern: "^[1-9][0-9]{0,4}mm$"
                                                                    }
                                                                },
                                                                additionalProperties: false
                                                            },
                                                            fonts: {
                                                                type: "array",
                                                                items: {
                                                                    type: "string"
                                                                }
                                                            },
                                                            conventions: {
                                                                type: "object",
                                                                additionalProperties: {
                                                                    type: "string",
                                                                    pattern: "^\\d+[.]\\d+([.].+)?$"
                                                                },
                                                                propertyNames: {
                                                                    type: "string",
                                                                    pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                    oneOf: [
                                                                        {
                                                                            type: "string",
                                                                            pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                            description: "User-defined token, prefixed with x-"
                                                                        },
                                                                        {
                                                                            enum: [
                                                                                "contentResourcesByChapter"
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        required: [
                                                            "name",
                                                            "contentType",
                                                            "pod",
                                                            "pageCount",
                                                            "height",
                                                            "width",
                                                            "scale",
                                                            "colorSpace"
                                                        ],
                                                        additionalProperties: false
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    else: {
                                        if: {
                                            properties: {
                                                flavorType: {
                                                    type: "object",
                                                    properties: {
                                                        flavor: {
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    const: "embossedBrailleScripture"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        then: {
                                            properties: {
                                                flavorType: {
                                                    type: "object",
                                                    properties: {
                                                        flavor: {
                                                            $schema: "http://json-schema.org/draft-07/schema",
                                                            $id: "https://burrito.bible/schema/scripture/embossed_braille_scripture.schema.json",
                                                            title: "Flavor Details: Scripture: Braille Publication",
                                                            type: "object",
                                                            description: "Schema of flavor field for scripture/brailleScripturePublication flavor",
                                                            properties: {
                                                                name: {
                                                                    type: "string",
                                                                    const: "embossedBrailleScripture"
                                                                },
                                                                isContracted: {
                                                                    type: "boolean"
                                                                },
                                                                processor: {
                                                                    type: "object",
                                                                    properties: {
                                                                        name: {
                                                                            type: "string",
                                                                            const: "libLouis"
                                                                        },
                                                                        version: {
                                                                            type: "string"
                                                                        },
                                                                        table: {
                                                                            type: "object",
                                                                            properties: {
                                                                                src: {
                                                                                    type: "string"
                                                                                },
                                                                                name: {
                                                                                    type: "string"
                                                                                }
                                                                            },
                                                                            additionalProperties: false,
                                                                            required: [
                                                                                "src",
                                                                                "name"
                                                                            ]
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "name",
                                                                        "version",
                                                                        "table"
                                                                    ],
                                                                    additionalProperties: false
                                                                },
                                                                hyphenationDictionary: {
                                                                    type: "object",
                                                                    properties: {
                                                                        src: {
                                                                            type: "string"
                                                                        },
                                                                        name: {
                                                                            type: "string"
                                                                        }
                                                                    },
                                                                    additionalProperties: false,
                                                                    required: [
                                                                        "src",
                                                                        "name"
                                                                    ]
                                                                },
                                                                numberSign: {
                                                                    type: "object",
                                                                    properties: {
                                                                        character: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        },
                                                                        useInMargin: {
                                                                            type: "boolean"
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "character",
                                                                        "useInMargin"
                                                                    ],
                                                                    additionalProperties: false
                                                                },
                                                                continuousPoetry: {
                                                                    type: "object",
                                                                    properties: {
                                                                        lineIndicatorSpaced: {
                                                                            type: "string",
                                                                            enum: [
                                                                                "never",
                                                                                "always",
                                                                                "sometimes"
                                                                            ]
                                                                        },
                                                                        startIndicator: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        },
                                                                        lineIndicator: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        },
                                                                        endIndicator: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        }
                                                                    },
                                                                    additionalProperties: false,
                                                                    required: [
                                                                        "lineIndicatorSpaced"
                                                                    ]
                                                                },
                                                                content: {
                                                                    type: "object",
                                                                    properties: {
                                                                        chapterNumberStyle: {
                                                                            type: "string",
                                                                            enum: [
                                                                                "upper",
                                                                                "lower"
                                                                            ]
                                                                        },
                                                                        chapterHeadingsNumberFirst: {
                                                                            type: "boolean"
                                                                        },
                                                                        versedParagraphs: {
                                                                            type: "boolean"
                                                                        },
                                                                        verseSeparator: {
                                                                            type: "string",
                                                                            pattern: "([⠀-⣿])*"
                                                                        },
                                                                        includeIntros: {
                                                                            type: "boolean"
                                                                        },
                                                                        footnotes: {
                                                                            type: "object",
                                                                            properties: {
                                                                                callerSymbol: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                }
                                                                            },
                                                                            additionalProperties: false,
                                                                            required: [
                                                                                "callerSymbol"
                                                                            ]
                                                                        },
                                                                        characterStyles: {
                                                                            type: "object",
                                                                            properties: {
                                                                                callerSymbol: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                }
                                                                            },
                                                                            additionalProperties: false,
                                                                            required: [
                                                                                "callerSymbol"
                                                                            ]
                                                                        },
                                                                        crossReferences: {
                                                                            type: "object",
                                                                            properties: {
                                                                                emphasizedWord: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                },
                                                                                emphasizedPassageStart: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                },
                                                                                emphasizedPassageEnd: {
                                                                                    type: "string",
                                                                                    pattern: "([⠀-⣿])*"
                                                                                }
                                                                            },
                                                                            additionalProperties: false,
                                                                            minProperties: 1
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "chapterNumberStyle",
                                                                        "chapterHeadingsNumberFirst",
                                                                        "versedParagraphs",
                                                                        "verseSeparator",
                                                                        "includeIntros"
                                                                    ],
                                                                    additionalProperties: false
                                                                },
                                                                page: {
                                                                    type: "object",
                                                                    properties: {
                                                                        charsPerLine: {
                                                                            type: "number",
                                                                            multipleOf: 1,
                                                                            minimum: 1
                                                                        },
                                                                        linesPerPage: {
                                                                            type: "number",
                                                                            multipleOf: 1,
                                                                            minimum: 1
                                                                        },
                                                                        defaultMarginWidth: {
                                                                            type: "number",
                                                                            multipleOf: 1,
                                                                            minimum: 1
                                                                        },
                                                                        versoLastLineBlank: {
                                                                            type: "boolean"
                                                                        },
                                                                        carryLines: {
                                                                            type: "number",
                                                                            multipleOf: 1,
                                                                            minimum: 1
                                                                        }
                                                                    },
                                                                    required: [
                                                                        "charsPerLine",
                                                                        "linesPerPage",
                                                                        "defaultMarginWidth",
                                                                        "versoLastLineBlank",
                                                                        "carryLines"
                                                                    ],
                                                                    additionalProperties: false
                                                                },
                                                                conventions: {
                                                                    type: "object",
                                                                    additionalProperties: {
                                                                        type: "string",
                                                                        pattern: "^\\d+[.]\\d+([.].+)?$"
                                                                    },
                                                                    propertyNames: {
                                                                        type: "string",
                                                                        pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                        oneOf: [
                                                                            {
                                                                                type: "string",
                                                                                pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                                description: "User-defined token, prefixed with x-"
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            required: [
                                                                "isContracted",
                                                                "processor",
                                                                "numberSign",
                                                                "content",
                                                                "page"
                                                            ],
                                                            additionalProperties: false
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        else: {
                                            if: {
                                                properties: {
                                                    flavorType: {
                                                        type: "object",
                                                        properties: {
                                                            flavor: {
                                                                type: "object",
                                                                properties: {
                                                                    name: {
                                                                        const: "signLanguageVideoTranslation"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            then: {
                                                properties: {
                                                    flavorType: {
                                                        type: "object",
                                                        properties: {
                                                            flavor: {
                                                                $schema: "http://json-schema.org/draft-07/schema",
                                                                $id: "https://burrito.bible/schema/scripture/sign_language_video_translation.schema.json",
                                                                title: "Flavor Details: Scripture: Sign Language Video Translation",
                                                                type: "object",
                                                                description: "Schema of flavor field for signLanguageVideoTranslation flavor",
                                                                definitions: {
                                                                    format: {
                                                                        type: "object",
                                                                        properties: {
                                                                            container: {
                                                                                type: "string",
                                                                                enum: [
                                                                                    "mp4",
                                                                                    "mpg"
                                                                                ]
                                                                            },
                                                                            videoStream: {
                                                                                type: "object",
                                                                                properties: {
                                                                                    bitRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    frameRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    screenResolution: {
                                                                                        type: "string",
                                                                                        pattern: "^\\d+x\\d+$"
                                                                                    }
                                                                                },
                                                                                required: [
                                                                                    "bitRate",
                                                                                    "frameRate",
                                                                                    "screenResolution"
                                                                                ],
                                                                                additionalProperties: false
                                                                            },
                                                                            audioStream: {
                                                                                type: "object",
                                                                                properties: {
                                                                                    compression: {
                                                                                        type: "string",
                                                                                        enum: [
                                                                                            "mp3",
                                                                                            "wav"
                                                                                        ]
                                                                                    },
                                                                                    trackConfiguration: {
                                                                                        type: "string",
                                                                                        enum: [
                                                                                            "1/0 (Mono)",
                                                                                            "Dual mono",
                                                                                            "2/0 (Stereo)",
                                                                                            "5.1 Surround"
                                                                                        ]
                                                                                    },
                                                                                    bitRate: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    bitDepth: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    samplingRate: {
                                                                                        type: "integer"
                                                                                    }
                                                                                },
                                                                                required: [
                                                                                    "compression"
                                                                                ],
                                                                                additionalProperties: false
                                                                            }
                                                                        },
                                                                        required: [
                                                                            "container",
                                                                            "videoStream"
                                                                        ],
                                                                        additionalProperties: false
                                                                    }
                                                                },
                                                                properties: {
                                                                    name: {
                                                                        type: "string",
                                                                        const: "signLanguageVideoTranslation"
                                                                    },
                                                                    contentByChapter: {
                                                                        type: "boolean"
                                                                    },
                                                                    formats: {
                                                                        type: "object",
                                                                        additionalProperties: {
                                                                            type: "object",
                                                                            properties: {
                                                                                container: {
                                                                                    type: "string",
                                                                                    enum: [
                                                                                        "mp4",
                                                                                        "mpg"
                                                                                    ]
                                                                                },
                                                                                videoStream: {
                                                                                    type: "object",
                                                                                    properties: {
                                                                                        bitRate: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        frameRate: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        screenResolution: {
                                                                                            type: "string",
                                                                                            pattern: "^\\d+x\\d+$"
                                                                                        }
                                                                                    },
                                                                                    required: [
                                                                                        "bitRate",
                                                                                        "frameRate",
                                                                                        "screenResolution"
                                                                                    ],
                                                                                    additionalProperties: false
                                                                                },
                                                                                audioStream: {
                                                                                    type: "object",
                                                                                    properties: {
                                                                                        compression: {
                                                                                            type: "string",
                                                                                            enum: [
                                                                                                "mp3",
                                                                                                "wav"
                                                                                            ]
                                                                                        },
                                                                                        trackConfiguration: {
                                                                                            type: "string",
                                                                                            enum: [
                                                                                                "1/0 (Mono)",
                                                                                                "Dual mono",
                                                                                                "2/0 (Stereo)",
                                                                                                "5.1 Surround"
                                                                                            ]
                                                                                        },
                                                                                        bitRate: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        bitDepth: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        samplingRate: {
                                                                                            type: "integer"
                                                                                        }
                                                                                    },
                                                                                    required: [
                                                                                        "compression"
                                                                                    ],
                                                                                    additionalProperties: false
                                                                                }
                                                                            },
                                                                            required: [
                                                                                "container",
                                                                                "videoStream"
                                                                            ],
                                                                            additionalProperties: false
                                                                        },
                                                                        propertyNames: {
                                                                            type: "string"
                                                                        },
                                                                        minProperties: 1
                                                                    },
                                                                    conventions: {
                                                                        type: "object",
                                                                        additionalProperties: {
                                                                            type: "string",
                                                                            pattern: "^\\d+[.]\\d+([.].+)?$"
                                                                        },
                                                                        propertyNames: {
                                                                            type: "string",
                                                                            pattern: "^(x-)?[a-z][A-za-z0-9]*$",
                                                                            oneOf: [
                                                                                {
                                                                                    type: "string",
                                                                                    pattern: "^x-[a-z][A-za-z0-9]*$",
                                                                                    description: "User-defined token, prefixed with x-"
                                                                                },
                                                                                {
                                                                                    enum: [
                                                                                        "bookDirs",
                                                                                        "rolesInUris"
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                },
                                                                required: [
                                                                    "name",
                                                                    "contentByChapter",
                                                                    "formats"
                                                                ],
                                                                additionalProperties: false
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            else: {
                                                properties: {
                                                    flavorType: {
                                                        type: "object",
                                                        properties: {
                                                            flavor: {
                                                                $schema: "http://json-schema.org/draft-07/schema",
                                                                $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                                $$target: "x_flavor.schema.json",
                                                                title: "Flavor Details: X-Flavor",
                                                                description: "Schema of flavor field for xFlavor",
                                                                type: "object",
                                                                properties: {
                                                                    name: {
                                                                        type: "string",
                                                                        pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                                    }
                                                                },
                                                                required: [
                                                                    "name"
                                                                ],
                                                                additionalProperties: true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        else: {
                            if: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                const: "gloss"
                                            }
                                        }
                                    }
                                }
                            },
                            then: {
                                properties: {
                                    flavorType: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string",
                                                const: "gloss"
                                            },
                                            flavor: {
                                                type: "object",
                                                oneOf: [
                                                    {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/gloss/text_stories.schema.json",
                                                        $$target: "text_stories.schema.json",
                                                        title: "Flavor Details: Glossed Text Stories",
                                                        type: "object",
                                                        description: "Schema of flavor field for textStories flavor",
                                                        properties: {
                                                            name: {
                                                                const: "textStories"
                                                            }
                                                        },
                                                        additionalProperties: false
                                                    },
                                                    {
                                                        $schema: "http://json-schema.org/draft-07/schema",
                                                        $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                        $$target: "x_flavor.schema.json",
                                                        title: "Flavor Details: X-Flavor",
                                                        description: "Schema of flavor field for xFlavor",
                                                        type: "object",
                                                        properties: {
                                                            name: {
                                                                type: "string",
                                                                pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                            }
                                                        },
                                                        required: [
                                                            "name"
                                                        ],
                                                        additionalProperties: true
                                                    }
                                                ]
                                            },
                                            currentScope: {
                                                $schema: "http://json-schema.org/draft-07/schema",
                                                $id: "https://burrito.bible/schema/scope.schema.json",
                                                $$target: "scope.schema.json",
                                                title: "Scope",
                                                type: "object",
                                                description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                                additionalProperties: {
                                                    oneOf: [
                                                        {
                                                            type: "array",
                                                            items: {
                                                                type: "string",
                                                                pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                            },
                                                            minItems: 1,
                                                            uniqueItems: true
                                                        },
                                                        {
                                                            type: "array",
                                                            maxItems: 0
                                                        }
                                                    ]
                                                },
                                                propertyNames: {
                                                    type: "string",
                                                    pattern: "^[A-Z0-9]{3}$",
                                                    minLength: 3,
                                                    maxLength: 3,
                                                    enum: [
                                                        "GEN",
                                                        "EXO",
                                                        "LEV",
                                                        "NUM",
                                                        "DEU",
                                                        "JOS",
                                                        "JDG",
                                                        "RUT",
                                                        "1SA",
                                                        "2SA",
                                                        "1KI",
                                                        "2KI",
                                                        "1CH",
                                                        "2CH",
                                                        "EZR",
                                                        "NEH",
                                                        "EST",
                                                        "JOB",
                                                        "PSA",
                                                        "PRO",
                                                        "ECC",
                                                        "SNG",
                                                        "ISA",
                                                        "JER",
                                                        "LAM",
                                                        "EZK",
                                                        "DAN",
                                                        "HOS",
                                                        "JOL",
                                                        "AMO",
                                                        "OBA",
                                                        "JON",
                                                        "MIC",
                                                        "NAM",
                                                        "HAB",
                                                        "ZEP",
                                                        "HAG",
                                                        "ZEC",
                                                        "MAL",
                                                        "MAT",
                                                        "MRK",
                                                        "LUK",
                                                        "JHN",
                                                        "ACT",
                                                        "ROM",
                                                        "1CO",
                                                        "2CO",
                                                        "GAL",
                                                        "EPH",
                                                        "PHP",
                                                        "COL",
                                                        "1TH",
                                                        "2TH",
                                                        "1TI",
                                                        "2TI",
                                                        "TIT",
                                                        "PHM",
                                                        "HEB",
                                                        "JAS",
                                                        "1PE",
                                                        "2PE",
                                                        "1JN",
                                                        "2JN",
                                                        "3JN",
                                                        "JUD",
                                                        "REV",
                                                        "TOB",
                                                        "JDT",
                                                        "ESG",
                                                        "WIS",
                                                        "SIR",
                                                        "BAR",
                                                        "LJE",
                                                        "S3Y",
                                                        "SUS",
                                                        "BEL",
                                                        "1MA",
                                                        "2MA",
                                                        "3MA",
                                                        "4MA",
                                                        "1ES",
                                                        "2ES",
                                                        "MAN",
                                                        "PS2",
                                                        "ODA",
                                                        "PSS",
                                                        "JSA",
                                                        "JDB",
                                                        "TBS",
                                                        "SST",
                                                        "DNT",
                                                        "BLT",
                                                        "EZA",
                                                        "5EZ",
                                                        "6EZ",
                                                        "DAG",
                                                        "PS3",
                                                        "2BA",
                                                        "LBA",
                                                        "JUB",
                                                        "ENO",
                                                        "1MQ",
                                                        "2MQ",
                                                        "3MQ",
                                                        "REP",
                                                        "4BA",
                                                        "LAO"
                                                    ],
                                                    description: "A USFM book code consisting of three uppercase alphanumerics."
                                                },
                                                minProperties: 1
                                            }
                                        },
                                        required: [
                                            "name",
                                            "flavor",
                                            "currentScope"
                                        ],
                                        additionalProperties: false
                                    }
                                }
                            },
                            else: {
                                if: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    const: "parascriptural"
                                                }
                                            }
                                        }
                                    }
                                },
                                then: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    const: "parascriptural"
                                                },
                                                flavor: {
                                                    type: "object",
                                                    oneOf: [
                                                        {
                                                            $schema: "http://json-schema.org/draft-07/schema",
                                                            $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                            $$target: "x_flavor.schema.json",
                                                            title: "Flavor Details: X-Flavor",
                                                            description: "Schema of flavor field for xFlavor",
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    type: "string",
                                                                    pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                                }
                                                            },
                                                            required: [
                                                                "name"
                                                            ],
                                                            additionalProperties: true
                                                        }
                                                    ]
                                                },
                                                currentScope: {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/scope.schema.json",
                                                    $$target: "scope.schema.json",
                                                    title: "Scope",
                                                    type: "object",
                                                    description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                                    additionalProperties: {
                                                        oneOf: [
                                                            {
                                                                type: "array",
                                                                items: {
                                                                    type: "string",
                                                                    pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                                },
                                                                minItems: 1,
                                                                uniqueItems: true
                                                            },
                                                            {
                                                                type: "array",
                                                                maxItems: 0
                                                            }
                                                        ]
                                                    },
                                                    propertyNames: {
                                                        type: "string",
                                                        pattern: "^[A-Z0-9]{3}$",
                                                        minLength: 3,
                                                        maxLength: 3,
                                                        enum: [
                                                            "GEN",
                                                            "EXO",
                                                            "LEV",
                                                            "NUM",
                                                            "DEU",
                                                            "JOS",
                                                            "JDG",
                                                            "RUT",
                                                            "1SA",
                                                            "2SA",
                                                            "1KI",
                                                            "2KI",
                                                            "1CH",
                                                            "2CH",
                                                            "EZR",
                                                            "NEH",
                                                            "EST",
                                                            "JOB",
                                                            "PSA",
                                                            "PRO",
                                                            "ECC",
                                                            "SNG",
                                                            "ISA",
                                                            "JER",
                                                            "LAM",
                                                            "EZK",
                                                            "DAN",
                                                            "HOS",
                                                            "JOL",
                                                            "AMO",
                                                            "OBA",
                                                            "JON",
                                                            "MIC",
                                                            "NAM",
                                                            "HAB",
                                                            "ZEP",
                                                            "HAG",
                                                            "ZEC",
                                                            "MAL",
                                                            "MAT",
                                                            "MRK",
                                                            "LUK",
                                                            "JHN",
                                                            "ACT",
                                                            "ROM",
                                                            "1CO",
                                                            "2CO",
                                                            "GAL",
                                                            "EPH",
                                                            "PHP",
                                                            "COL",
                                                            "1TH",
                                                            "2TH",
                                                            "1TI",
                                                            "2TI",
                                                            "TIT",
                                                            "PHM",
                                                            "HEB",
                                                            "JAS",
                                                            "1PE",
                                                            "2PE",
                                                            "1JN",
                                                            "2JN",
                                                            "3JN",
                                                            "JUD",
                                                            "REV",
                                                            "TOB",
                                                            "JDT",
                                                            "ESG",
                                                            "WIS",
                                                            "SIR",
                                                            "BAR",
                                                            "LJE",
                                                            "S3Y",
                                                            "SUS",
                                                            "BEL",
                                                            "1MA",
                                                            "2MA",
                                                            "3MA",
                                                            "4MA",
                                                            "1ES",
                                                            "2ES",
                                                            "MAN",
                                                            "PS2",
                                                            "ODA",
                                                            "PSS",
                                                            "JSA",
                                                            "JDB",
                                                            "TBS",
                                                            "SST",
                                                            "DNT",
                                                            "BLT",
                                                            "EZA",
                                                            "5EZ",
                                                            "6EZ",
                                                            "DAG",
                                                            "PS3",
                                                            "2BA",
                                                            "LBA",
                                                            "JUB",
                                                            "ENO",
                                                            "1MQ",
                                                            "2MQ",
                                                            "3MQ",
                                                            "REP",
                                                            "4BA",
                                                            "LAO"
                                                        ],
                                                        description: "A USFM book code consisting of three uppercase alphanumerics."
                                                    },
                                                    minProperties: 1
                                                }
                                            },
                                            required: [
                                                "name",
                                                "flavor"
                                            ],
                                            additionalProperties: false
                                        }
                                    }
                                },
                                else: {
                                    properties: {
                                        flavorType: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    const: "peripheral"
                                                },
                                                flavor: {
                                                    type: "object",
                                                    oneOf: [
                                                        {
                                                            $schema: "http://json-schema.org/draft-07/schema",
                                                            $id: "https://burrito.bible/schema/x_flavor.schema.json",
                                                            $$target: "x_flavor.schema.json",
                                                            title: "Flavor Details: X-Flavor",
                                                            description: "Schema of flavor field for xFlavor",
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    type: "string",
                                                                    pattern: "^x-[a-z][a-zA-Z0-9]*$"
                                                                }
                                                            },
                                                            required: [
                                                                "name"
                                                            ],
                                                            additionalProperties: true
                                                        }
                                                    ]
                                                },
                                                currentScope: {
                                                    $schema: "http://json-schema.org/draft-07/schema",
                                                    $id: "https://burrito.bible/schema/scope.schema.json",
                                                    $$target: "scope.schema.json",
                                                    title: "Scope",
                                                    type: "object",
                                                    description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                                    additionalProperties: {
                                                        oneOf: [
                                                            {
                                                                type: "array",
                                                                items: {
                                                                    type: "string",
                                                                    pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                                },
                                                                minItems: 1,
                                                                uniqueItems: true
                                                            },
                                                            {
                                                                type: "array",
                                                                maxItems: 0
                                                            }
                                                        ]
                                                    },
                                                    propertyNames: {
                                                        type: "string",
                                                        pattern: "^[A-Z0-9]{3}$",
                                                        minLength: 3,
                                                        maxLength: 3,
                                                        enum: [
                                                            "GEN",
                                                            "EXO",
                                                            "LEV",
                                                            "NUM",
                                                            "DEU",
                                                            "JOS",
                                                            "JDG",
                                                            "RUT",
                                                            "1SA",
                                                            "2SA",
                                                            "1KI",
                                                            "2KI",
                                                            "1CH",
                                                            "2CH",
                                                            "EZR",
                                                            "NEH",
                                                            "EST",
                                                            "JOB",
                                                            "PSA",
                                                            "PRO",
                                                            "ECC",
                                                            "SNG",
                                                            "ISA",
                                                            "JER",
                                                            "LAM",
                                                            "EZK",
                                                            "DAN",
                                                            "HOS",
                                                            "JOL",
                                                            "AMO",
                                                            "OBA",
                                                            "JON",
                                                            "MIC",
                                                            "NAM",
                                                            "HAB",
                                                            "ZEP",
                                                            "HAG",
                                                            "ZEC",
                                                            "MAL",
                                                            "MAT",
                                                            "MRK",
                                                            "LUK",
                                                            "JHN",
                                                            "ACT",
                                                            "ROM",
                                                            "1CO",
                                                            "2CO",
                                                            "GAL",
                                                            "EPH",
                                                            "PHP",
                                                            "COL",
                                                            "1TH",
                                                            "2TH",
                                                            "1TI",
                                                            "2TI",
                                                            "TIT",
                                                            "PHM",
                                                            "HEB",
                                                            "JAS",
                                                            "1PE",
                                                            "2PE",
                                                            "1JN",
                                                            "2JN",
                                                            "3JN",
                                                            "JUD",
                                                            "REV",
                                                            "TOB",
                                                            "JDT",
                                                            "ESG",
                                                            "WIS",
                                                            "SIR",
                                                            "BAR",
                                                            "LJE",
                                                            "S3Y",
                                                            "SUS",
                                                            "BEL",
                                                            "1MA",
                                                            "2MA",
                                                            "3MA",
                                                            "4MA",
                                                            "1ES",
                                                            "2ES",
                                                            "MAN",
                                                            "PS2",
                                                            "ODA",
                                                            "PSS",
                                                            "JSA",
                                                            "JDB",
                                                            "TBS",
                                                            "SST",
                                                            "DNT",
                                                            "BLT",
                                                            "EZA",
                                                            "5EZ",
                                                            "6EZ",
                                                            "DAG",
                                                            "PS3",
                                                            "2BA",
                                                            "LBA",
                                                            "JUB",
                                                            "ENO",
                                                            "1MQ",
                                                            "2MQ",
                                                            "3MQ",
                                                            "REP",
                                                            "4BA",
                                                            "LAO"
                                                        ],
                                                        description: "A USFM book code consisting of three uppercase alphanumerics."
                                                    },
                                                    minProperties: 1
                                                }
                                            },
                                            required: [
                                                "name",
                                                "flavor"
                                            ],
                                            additionalProperties: false
                                        }
                                    }
                                }
                            }
                        }
                    },
                    relationships: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/relationships.schema.json",
                        $$target: "relationships.schema.json",
                        title: "Relationships",
                        type: "array",
                        items: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/relationship.schema.json",
                            $$target: "relationship.schema.json",
                            title: "Relationship",
                            type: "object",
                            description: "Describes a relationship to a different burrito that can be obtained from an indicated server.",
                            properties: {
                                relationType: {
                                    type: "string",
                                    enum: [
                                        "source",
                                        "target",
                                        "expression",
                                        "parascriptural",
                                        "peripheral"
                                    ],
                                    minLength: 1
                                },
                                flavor: {
                                    type: "string",
                                    oneOf: [
                                        {
                                            enum: [
                                                "textTranslation",
                                                "audioTranslation",
                                                "typesetScripture",
                                                "signLanguageVideoTranslation",
                                                "embossedBrailleScripture",
                                                "glossedTextStory"
                                            ]
                                        },
                                        {
                                            pattern: "^x-[a-z][A-za-z0-9]*$"
                                        }
                                    ],
                                    minLength: 1
                                },
                                id: {
                                    type: "string",
                                    pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$",
                                    description: "Opaque system-specific identifier, prefixed with the name of the system as declared in idAuthorities."
                                },
                                revision: {
                                    type: "string",
                                    pattern: "^[0-9A-Za-z]([0-9A-Za-z_.:\\-]{0,62}[0-9A-Za-z])?$",
                                    description: "Opaque system-specific revision identifier."
                                },
                                variant: {
                                    type: "string",
                                    pattern: "^[A-Za-z][A-Za-z0-9_\\-]{0,31}$"
                                }
                            },
                            required: [
                                "relationType",
                                "flavor",
                                "id"
                            ],
                            additionalProperties: false,
                            oneOf: [
                                {
                                    properties: {
                                        flavor: {
                                            type: "string",
                                            pattern: "^x-[a-z][A-za-z0-9]*$"
                                        }
                                    },
                                    $comment: "Custom flavors can be used with any relationType."
                                },
                                {
                                    properties: {
                                        relationType: {
                                            const: "source"
                                        },
                                        flavor: {
                                            enum: [
                                                "textTranslation",
                                                "audioTranslation"
                                            ]
                                        }
                                    }
                                },
                                {
                                    properties: {
                                        relationType: {
                                            const: "target"
                                        },
                                        flavor: {}
                                    }
                                },
                                {
                                    properties: {
                                        relationType: {
                                            const: "expression"
                                        },
                                        flavor: {
                                            not: {
                                                const: "scriptureText"
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        minItems: 1,
                        description: "Describes a relationship to another burrito that may be obtained from an indicated server."
                    },
                    languages: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/languages.schema.json",
                        $$target: "languages.schema.json",
                        title: "Languages",
                        type: "array",
                        items: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/language.schema.json",
                            $$target: "language.schema.json",
                            title: "Language",
                            type: "object",
                            description: "Language section.",
                            properties: {
                                tag: {
                                    examples: [
                                        "hi",
                                        "es-419"
                                    ],
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                name: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                numberingSystem: {
                                    $schema: "http://json-schema.org/draft-07/schema",
                                    $id: "https://burrito.bible/schema/numbering_system.schema.json",
                                    $$target: "numbering_system.schema.json",
                                    title: "Numbering System",
                                    type: "string",
                                    description: "Numbering System",
                                    enum: [
                                        "adlm",
                                        "ahom",
                                        "arab",
                                        "arabext",
                                        "armn",
                                        "armnlow",
                                        "bali",
                                        "beng",
                                        "bhks",
                                        "brah",
                                        "cakm",
                                        "cham",
                                        "cyrl",
                                        "deva",
                                        "ethi",
                                        "finance",
                                        "fullwide",
                                        "geor",
                                        "gong",
                                        "gonm",
                                        "grek",
                                        "greklow",
                                        "gujr",
                                        "guru",
                                        "hanidays",
                                        "hanidec",
                                        "hans",
                                        "hansfin",
                                        "hant",
                                        "hantfin",
                                        "hebr",
                                        "hmng",
                                        "hmnp",
                                        "java",
                                        "jpan",
                                        "jpanfin",
                                        "jpanyear",
                                        "kali",
                                        "khmr",
                                        "knda",
                                        "lana",
                                        "lanatham",
                                        "laoo",
                                        "latn",
                                        "lepc",
                                        "limb",
                                        "mathbold",
                                        "mathdbl",
                                        "mathmono",
                                        "mathsanb",
                                        "mathsans",
                                        "mlym",
                                        "modi",
                                        "mong",
                                        "mroo",
                                        "mtei",
                                        "mymr",
                                        "mymrshan",
                                        "mymrtlng",
                                        "native",
                                        "newa",
                                        "nkoo",
                                        "olck",
                                        "orya",
                                        "osma",
                                        "rohg",
                                        "roman",
                                        "romanlow",
                                        "saur",
                                        "shrd",
                                        "sind",
                                        "sinh",
                                        "sora",
                                        "sund",
                                        "takr",
                                        "talu",
                                        "taml",
                                        "tamldec",
                                        "telu",
                                        "thai",
                                        "tirh",
                                        "tibt",
                                        "traditio",
                                        "vaii",
                                        "wara",
                                        "wcho"
                                    ]
                                },
                                rod: {
                                    type: "string",
                                    pattern: "^[0-9]{5}$",
                                    minLength: 5,
                                    maxLength: 5,
                                    description: "A five-digit code from the Registry of Dialects."
                                },
                                scriptDirection: {
                                    type: "string",
                                    enum: [
                                        "ltr",
                                        "rtl"
                                    ]
                                }
                            },
                            required: [
                                "tag",
                                "name"
                            ],
                            additionalProperties: false
                        },
                        minItems: 1,
                        description: "A list of all the languages of the contents of this burrito."
                    },
                    targetAreas: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/target_areas.schema.json",
                        $$target: "target_areas.schema.json",
                        title: "Target Areas",
                        type: "array",
                        items: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/target_area.schema.json",
                            $$target: "target_area.schema.json",
                            title: "Target Area",
                            type: "object",
                            description: "An area that is a primary target audience of this burrito.",
                            properties: {
                                code: {
                                    oneOf: [
                                        {
                                            type: "string",
                                            pattern: "^[A-Z][A-Z]$",
                                            minLength: 2,
                                            maxLength: 2,
                                            description: "The upper-case ISO 3166-2 code for the country."
                                        },
                                        {
                                            $schema: "http://json-schema.org/draft-07/schema",
                                            $id: "https://burrito.bible/schema/unm49.schema.json",
                                            $$target: "unm49.schema.json",
                                            title: "UNM49 enum",
                                            type: "string",
                                            description: "UNM49 region code enum",
                                            enum: [
                                                "001",
                                                "002",
                                                "003",
                                                "005",
                                                "009",
                                                "011",
                                                "013",
                                                "014",
                                                "015",
                                                "017",
                                                "018",
                                                "019",
                                                "021",
                                                "024",
                                                "029",
                                                "030",
                                                "034",
                                                "035",
                                                "039",
                                                "053",
                                                "054",
                                                "057",
                                                "061",
                                                "142",
                                                "143",
                                                "145",
                                                "150",
                                                "151",
                                                "154",
                                                "155",
                                                "202",
                                                "419",
                                                "496",
                                                "554",
                                                "591",
                                                "756",
                                                "830"
                                            ]
                                        }
                                    ]
                                },
                                name: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                }
                            },
                            required: [
                                "code",
                                "name"
                            ],
                            additionalProperties: false
                        },
                        minItems: 1,
                        description: "A list of areas of the primary target audience of this burrito."
                    },
                    agencies: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/agencies.schema.json",
                        $$target: "agencies.schema.json",
                        title: "Agencies",
                        type: "array",
                        items: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/agency.schema.json",
                            $$target: "agency.schema.json",
                            title: "Agency",
                            type: "object",
                            description: "Describes a particular agency that is involved with or related to the contents of the burrito.",
                            properties: {
                                id: {
                                    type: "string",
                                    pattern: "^[0-9a-zA-Z][0-9a-zA-Z\\-]{1,31}::\\S+$",
                                    description: "Opaque system-specific identifier, prefixed with the name of the system as declared in idAuthorities."
                                },
                                name: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                abbr: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                url: {
                                    type: "string",
                                    pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                    minLength: 1,
                                    description: "A valid **Uniform Resource Locator**.",
                                    examples: [
                                        "https://example.com"
                                    ]
                                },
                                roles: {
                                    type: "array",
                                    items: {
                                        type: "string",
                                        enum: [
                                            "rightsAdmin",
                                            "rightsHolder",
                                            "content",
                                            "publication",
                                            "management",
                                            "finance",
                                            "qa"
                                        ]
                                    },
                                    description: "A list of roles indicating in which respects this agency was involved with the production of this burrito.",
                                    minItems: 1
                                }
                            },
                            required: [
                                "id",
                                "name",
                                "roles"
                            ],
                            additionalProperties: false
                        },
                        minItems: 1,
                        description: "A list of agencies involved with the contents of the burrito or the work it is derived from."
                    },
                    copyright: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/copyright.schema.json",
                        $$target: "copyright.schema.json",
                        title: "Copyright and License Information",
                        type: "object",
                        description: "Describes the copyright holders and license terms of the burrito.",
                        properties: {
                            licenses: {
                                type: "array",
                                minItems: 1,
                                items: {
                                    type: "object",
                                    properties: {
                                        url: {
                                            type: "string",
                                            pattern: "^((http(s)?|ftp)://)[^\\s$]+$",
                                            minLength: 1,
                                            description: "A valid **Uniform Resource Locator**.",
                                            examples: [
                                                "https://example.com"
                                            ]
                                        },
                                        ingredient: {
                                            type: "string",
                                            pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                                            description: "A file path, delimited by forward slashes."
                                        }
                                    },
                                    oneOf: [
                                        {
                                            required: [
                                                "url"
                                            ]
                                        },
                                        {
                                            required: [
                                                "ingredient"
                                            ]
                                        }
                                    ],
                                    additionalProperties: false
                                },
                                description: "The licenses, which state under which terms the burrito may be used, can be specified either as URL or as path to an ingredient."
                            },
                            publicDomain: {
                                type: "boolean",
                                description: "If set to true, the contents of this burrito are in the public domain."
                            },
                            shortStatements: {
                                type: "array",
                                minItems: 1,
                                items: {
                                    type: "object",
                                    properties: {
                                        statement: {
                                            type: "string",
                                            maxLength: 500
                                        },
                                        lang: {
                                            type: "string",
                                            pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                            minLength: 2,
                                            description: "A valid IETF language tag as specified by BCP 47."
                                        },
                                        mimetype: {
                                            type: "string",
                                            pattern: "^[\\-a-z0-9]+/[\\-a-z0-9+]+$",
                                            description: "An IANA media type (also known as MIME type)"
                                        }
                                    },
                                    required: [
                                        "statement"
                                    ],
                                    additionalProperties: false
                                },
                                description: "A short statement to explain the copyright / license information to readers"
                            }
                        },
                        additionalProperties: false,
                        oneOf: [
                            {
                                type: "object",
                                properties: {
                                    publicDomain: {
                                        const: true
                                    }
                                },
                                required: [
                                    "publicDomain"
                                ]
                            },
                            {
                                type: "object",
                                required: [
                                    "shortStatements"
                                ]
                            },
                            {
                                type: "object",
                                required: [
                                    "licenses"
                                ]
                            }
                        ]
                    },
                    ingredients: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/ingredients.schema.json",
                        $$target: "ingredients.schema.json",
                        title: "Ingredients",
                        type: "object",
                        additionalProperties: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/ingredient.schema.json",
                            $$target: "ingredient.schema.json",
                            title: "Ingredient",
                            type: "object",
                            description: "Describes an individual ingredient, which is a file contained within the burrito.",
                            properties: {
                                size: {
                                    type: "integer",
                                    minimum: 0,
                                    description: "The number of bytes that this ingredient takes up on disk."
                                },
                                lang: {
                                    type: "string",
                                    pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                    minLength: 2,
                                    description: "A valid IETF language tag as specified by BCP 47."
                                },
                                mimeType: {
                                    type: "string",
                                    pattern: "^[\\-a-z0-9]+/[\\-a-z0-9+]+$",
                                    description: "An IANA media type (also known as MIME type)"
                                },
                                checksum: {
                                    type: "object",
                                    properties: {
                                        md5: {
                                            type: "string",
                                            pattern: "^[a-f0-9]{32}$"
                                        },
                                        "sha3-256": {
                                            type: "string",
                                            pattern: "^[a-f0-9]{64}$"
                                        },
                                        "sha3-512": {
                                            type: "string",
                                            pattern: "^[a-f0-9]{128}$"
                                        }
                                    },
                                    required: [
                                        "md5"
                                    ],
                                    maxProperties: 2,
                                    additionalProperties: false
                                },
                                scope: {
                                    $schema: "http://json-schema.org/draft-07/schema",
                                    $id: "https://burrito.bible/schema/scope.schema.json",
                                    $$target: "scope.schema.json",
                                    title: "Scope",
                                    type: "object",
                                    description: "Scope specification, used for the whole burrito and for specific ingredients. In both cases it describes the actual content, not future translation goals.",
                                    additionalProperties: {
                                        oneOf: [
                                            {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                    pattern: "^[1-9][0-9]*$|^[1-9][0-9]*-[1-9][0-9]*$|^[1-9][0-9]*:[1-9][0-9]*(-[1-9][0-9]*)?$|^[1-9][0-9]*:[1-9][0-9]*-[1-9][0-9]*:[1-9][0-9]*$"
                                                },
                                                minItems: 1,
                                                uniqueItems: true
                                            },
                                            {
                                                type: "array",
                                                maxItems: 0
                                            }
                                        ]
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^[A-Z0-9]{3}$",
                                        minLength: 3,
                                        maxLength: 3,
                                        enum: [
                                            "GEN",
                                            "EXO",
                                            "LEV",
                                            "NUM",
                                            "DEU",
                                            "JOS",
                                            "JDG",
                                            "RUT",
                                            "1SA",
                                            "2SA",
                                            "1KI",
                                            "2KI",
                                            "1CH",
                                            "2CH",
                                            "EZR",
                                            "NEH",
                                            "EST",
                                            "JOB",
                                            "PSA",
                                            "PRO",
                                            "ECC",
                                            "SNG",
                                            "ISA",
                                            "JER",
                                            "LAM",
                                            "EZK",
                                            "DAN",
                                            "HOS",
                                            "JOL",
                                            "AMO",
                                            "OBA",
                                            "JON",
                                            "MIC",
                                            "NAM",
                                            "HAB",
                                            "ZEP",
                                            "HAG",
                                            "ZEC",
                                            "MAL",
                                            "MAT",
                                            "MRK",
                                            "LUK",
                                            "JHN",
                                            "ACT",
                                            "ROM",
                                            "1CO",
                                            "2CO",
                                            "GAL",
                                            "EPH",
                                            "PHP",
                                            "COL",
                                            "1TH",
                                            "2TH",
                                            "1TI",
                                            "2TI",
                                            "TIT",
                                            "PHM",
                                            "HEB",
                                            "JAS",
                                            "1PE",
                                            "2PE",
                                            "1JN",
                                            "2JN",
                                            "3JN",
                                            "JUD",
                                            "REV",
                                            "TOB",
                                            "JDT",
                                            "ESG",
                                            "WIS",
                                            "SIR",
                                            "BAR",
                                            "LJE",
                                            "S3Y",
                                            "SUS",
                                            "BEL",
                                            "1MA",
                                            "2MA",
                                            "3MA",
                                            "4MA",
                                            "1ES",
                                            "2ES",
                                            "MAN",
                                            "PS2",
                                            "ODA",
                                            "PSS",
                                            "JSA",
                                            "JDB",
                                            "TBS",
                                            "SST",
                                            "DNT",
                                            "BLT",
                                            "EZA",
                                            "5EZ",
                                            "6EZ",
                                            "DAG",
                                            "PS3",
                                            "2BA",
                                            "LBA",
                                            "JUB",
                                            "ENO",
                                            "1MQ",
                                            "2MQ",
                                            "3MQ",
                                            "REP",
                                            "4BA",
                                            "LAO"
                                        ],
                                        description: "A USFM book code consisting of three uppercase alphanumerics."
                                    },
                                    minProperties: 1
                                },
                                role: {
                                    $schema: "http://json-schema.org/draft-07/schema",
                                    $id: "https://burrito.bible/schema/role.schema.json",
                                    $$target: "role.schema.json",
                                    title: "Role",
                                    type: "string",
                                    description: "Roles which may be optionally attached to an ingredient.",
                                    oneOf: [
                                        {
                                            description: "A USX peripheral label,eg \"maps\"",
                                            enum: [
                                                "abbreviations",
                                                "alphacontents",
                                                "chron",
                                                "cnc",
                                                "contents",
                                                "cover",
                                                "foreword",
                                                "glo",
                                                "halftitle",
                                                "imprimatur",
                                                "lxxquotes",
                                                "maps",
                                                "measures",
                                                "ndx",
                                                "preface",
                                                "promo",
                                                "pubdata",
                                                "spine",
                                                "tdx",
                                                "title"
                                            ]
                                        },
                                        {
                                            description: "A role for story-based or video works, eg \"teaching\"",
                                            enum: [
                                                "background",
                                                "bridge",
                                                "credits",
                                                "diagram",
                                                "gloss",
                                                "illustration",
                                                "introduction",
                                                "scripture",
                                                "teaching",
                                                "timing"
                                            ]
                                        },
                                        {
                                            description: "A role for PoD-type content, eg \"printCover\"",
                                            enum: [
                                                "body",
                                                "thumbnail"
                                            ]
                                        },
                                        {
                                            description: "a versification file indicating the delta from the org versification",
                                            enum: [
                                                "versification"
                                            ]
                                        },
                                        {
                                            description: "A role for textTranslation flavored burritos",
                                            enum: [
                                                "localedata"
                                            ]
                                        },
                                        {
                                            description: "A label for story-type units",
                                            pattern: "^unit\\s.*\\S$"
                                        },
                                        {
                                            description: "A label for dictionary-type resources",
                                            pattern: "^(name|sign|word|concept|place)(\\s.*\\S)?$"
                                        },
                                        {
                                            description: "A role for a full copyright statement",
                                            enum: [
                                                "copyrightStatement"
                                            ]
                                        },
                                        {
                                            description: "An x-role",
                                            pattern: "^x-\\S.*\\S$"
                                        }
                                    ]
                                }
                            },
                            required: [
                                "size",
                                "mimeType"
                            ],
                            additionalProperties: false
                        },
                        propertyNames: {
                            type: "string",
                            pattern: "^[^\\/:?*\"><|]+(/[^\\/:?*\"><|]+)*$",
                            description: "A file path, delimited by forward slashes."
                        },
                        minProperties: 1,
                        description: "Describes the various files contained by the burrito, keyed by the canonical forward-slashed pathname of the file."
                    },
                    localizedNames: {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/localized_names.schema.json",
                        $$target: "localized_names.schema.json",
                        title: "Localized Names",
                        type: "object",
                        additionalProperties: {
                            $schema: "http://json-schema.org/draft-07/schema",
                            $id: "https://burrito.bible/schema/localized_name.schema.json",
                            $$target: "localized_name.schema.json",
                            title: "Localized Name",
                            type: "object",
                            description: "Contains localized names for books, etc.",
                            properties: {
                                short: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                long: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                },
                                abbr: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "string",
                                        pattern: "^\\S(.*\\S)?$",
                                        description: "A string without surrounding whitespace characters."
                                    },
                                    propertyNames: {
                                        type: "string",
                                        pattern: "^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$",
                                        minLength: 2,
                                        description: "A valid IETF language tag as specified by BCP 47."
                                    },
                                    minProperties: 1,
                                    description: "A textual string specified in one or multiple languages, indexed by IETF language tag."
                                }
                            },
                            required: [
                                "short"
                            ],
                            additionalProperties: false
                        },
                        description: "Contains localized names for books, etc."
                    }
                },
                required: [
                    "format",
                    "meta",
                    "copyright"
                ],
                additionalProperties: false,
                allOf: [
                    {
                        $schema: "http://json-schema.org/draft-07/schema",
                        $id: "https://burrito.bible/schema/copyright_constraints.schema.json",
                        $$target: "copyright_constraints.schema.json",
                        title: "Copyright Constraints",
                        description: "Constraints on properties relating to copyright.",
                        if: {
                            type: "object",
                            properties: {
                                copyright: {
                                    type: "object",
                                    properties: {
                                        publicDomain: false
                                    }
                                }
                            }
                        },
                        then: {
                            type: "object",
                            properties: {
                                agencies: {
                                    type: "array",
                                    contains: {
                                        type: "object",
                                        properties: {
                                            roles: {
                                                type: "array",
                                                contains: {
                                                    type: "string",
                                                    pattern: "rightsHolder"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }
    },
    formData: {},
    uiSchema: {},
}