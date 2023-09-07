export default {
  formData: {
    format: "scripture burrito",
    meta: {
      version: "1.0.0",
      category: "source",
      generator: {
        softwareName: "DBLImport",
        softwareVersion: "0.0.0",
        userName: "Elbert Boot"
      },
      defaultLocale: "en",
      dateCreated: "2019-12-10T15:44:10.641544+00:00",
      comments: ["First submit updated metadata and mpg files"]
    },
    idAuthorities: {
      dbl: {
        id: "https://thedigitalbiblelibrary.org",
        name: {
          en: "The Digital Bible Library"
        }
      }
    },
    identification: {
      primary: {
        dbl: {
          acce3721073e44da: {
            revision: "2",
            timestamp: "2019-12-10T15:44:10.641544+00:00"
          }
        }
      },
      name: {
        en: "The Gospel of Luke in French Sign Language",
        lsf: "L'Evangile de Luc en langue des signes française"
      },
      description: {
        en: "The French Bible publishes  the first translation of a major historical and cultural work - Luke's Gospel - in French sign language.",
        lsf: "L'Alliance biblique française met à disposition du public sourd, malentendant et entendant la première traduction d'un texte majeure du patrimoine de l'humanité - l'Evangile de Luc - en langue des signes."
      }
    },
    languages: [
      {
        tag: "lsf",
        name: {
          en: "French Sign Language",
          lsf: "langue des signes française"
        }
      }
    ],
    type: {
      flavorType: {
        name: "scripture",
        flavor: {
          name: "signLanguageVideoTranslation",
          contentByChapter: false,
          formats: {
            format1: {
              container: "mpg",
              videoStream: {
                bitRate: 5674,
                frameRate: 25,
                screenResolution: "720x576"
              }
            }
          }
        },
        currentScope: {
          LUK: []
        }
      }
    },
    confidential: true,
    agencies: [
      {
        id: "dbl::54650cdf5117ad687c9b5189",
        roles: [
          "rightsHolder",
          "content",
          "publication",
          "management",
          "finance",
          "qa"
        ],
        url: "http://www.alliancebiblique.fr",
        name: {
          en: "French Bible Society"
        },
        abbr: {
          en: "ABF"
        }
      }
    ],
    targetAreas: [
      {
        code: "FR",
        name: {
          en: "France",
          lsf: "France"
        }
      }
    ],
    localizedNames: {
      "book-luk": {
        short: {
          en: "Luc"
        }
      },
      peripherals: {
        short: {
          en: "définitions"
        }
      },
      "name-abraham": {
        short: {
          en: "Abraham"
        }
      },
      "name-david": {
        short: {
          en: "David"
        }
      },
      "name-elijah": {
        short: {
          en: "Elie"
        }
      },
      "name-herod-antipas": {
        short: {
          en: "Hérode Antipas"
        }
      },
      "name-isaac": {
        short: {
          en: "Isaac"
        }
      },
      "name-isaiah": {
        short: {
          en: "Esaïe"
        }
      },
      "name-jacob": {
        short: {
          en: "Jacob"
        }
      },
      "name-james": {
        short: {
          en: "Jacques"
        }
      },
      "name-john": {
        short: {
          en: "Jean"
        }
      },
      "name-john-the-baptist": {
        short: {
          en: "Jean-Baptiste"
        }
      },
      "name-joseph": {
        short: {
          en: "Joseph"
        }
      },
      "name-luke": {
        short: {
          en: "Luc"
        }
      },
      "name-mary": {
        short: {
          en: "Marie"
        }
      },
      "name-moses": {
        short: {
          en: "Moïse"
        }
      },
      "name-peter": {
        short: {
          en: "Pierre"
        }
      },
      "name-pilate": {
        short: {
          en: "Pilate"
        }
      },
      "name-simon-of-cyrene": {
        short: {
          en: "Simon de Cyrène"
        }
      },
      "name-simon-peter": {
        short: {
          en: "Simon-Pierre"
        }
      },
      "name-simon-the-pharisee": {
        short: {
          en: "Simon le Pharisien"
        }
      },
      "name-simon-the-zealot": {
        short: {
          en: "Simon le nationaliste"
        }
      },
      "name-solomon": {
        short: {
          en: "Salomon"
        }
      },
      "name-zachariah": {
        short: {
          en: "Zakarie"
        }
      },
      "place-bethany": {
        short: {
          en: "Béthanie"
        }
      },
      "place-capernaum": {
        short: {
          en: "Capernaüm"
        }
      },
      "place-galilee": {
        short: {
          en: "Galilée"
        }
      },
      "place-golgotha": {
        short: {
          en: "Lieu du crâne"
        }
      },
      "place-israel": {
        short: {
          en: "Israël"
        }
      },
      "place-jericho": {
        short: {
          en: "Jéricho"
        }
      },
      "place-jerusalem": {
        short: {
          en: "Jérusalem"
        }
      },
      "place-jordan": {
        short: {
          en: "Jourdain"
        }
      },
      "place-judea": {
        short: {
          en: "Judée"
        }
      },
      "place-lake-galilee": {
        short: {
          en: "Lac de Galilée"
        }
      },
      "place-rome": {
        short: {
          en: "Rome"
        }
      },
      "place-samaria": {
        short: {
          en: "Samarie"
        }
      },
      "place-syria": {
        short: {
          en: "Syrie"
        }
      },
      "sign-angel": {
        short: {
          en: "ange"
        }
      },
      "sign-apostles": {
        short: {
          en: "apôtres"
        }
      },
      "sign-baptism": {
        short: {
          en: "baptême"
        }
      },
      "sign-criminal": {
        short: {
          en: "criminel"
        }
      },
      "sign-disciple": {
        short: {
          en: "disciple"
        }
      },
      "sign-elders": {
        short: {
          en: "anciens"
        }
      },
      "sign-evil-spirit": {
        short: {
          en: "esprit mauvais"
        }
      },
      "sign-faith": {
        short: {
          en: "foi"
        }
      },
      "sign-fast": {
        short: {
          en: "jeûne"
        }
      },
      "sign-glory": {
        short: {
          en: "gloire"
        }
      },
      "sign-god": {
        short: {
          en: "Dieu"
        }
      },
      "sign-heal": {
        short: {
          en: "guérir"
        }
      },
      "sign-high-priest": {
        short: {
          en: "grand-prêtre"
        }
      },
      "sign-holy": {
        short: {
          en: "saint"
        }
      },
      "sign-holy-of-holies": {
        short: {
          en: "lieu saint"
        }
      },
      "sign-holy-spirit": {
        short: {
          en: "Saint-Esprit"
        }
      },
      "sign-it-is-written": {
        short: {
          en: "il est écrit"
        }
      },
      "sign-judas-iscariot": {
        short: {
          en: "Judas Iscariote"
        }
      },
      "sign-just": {
        short: {
          en: "juste"
        }
      },
      "sign-kingdom-of-god": {
        short: {
          en: "Royaume de Dieu"
        }
      },
      "sign-lord": {
        short: {
          en: "Seigneur"
        }
      },
      "sign-messiah": {
        short: {
          en: "messie"
        }
      },
      "sign-parable": {
        short: {
          en: "parabole"
        }
      },
      "sign-paradise": {
        short: {
          en: "paradis"
        }
      },
      "sign-passover": {
        short: {
          en: "pâque"
        }
      },
      "sign-pharisee": {
        short: {
          en: "pharisien"
        }
      },
      "sign-place-of-the-dead": {
        short: {
          en: "lieu des morts"
        }
      },
      "sign-power": {
        short: {
          en: "puissance"
        }
      },
      "sign-prayer": {
        short: {
          en: "prière"
        }
      },
      "sign-priest": {
        short: {
          en: "prêtre"
        }
      },
      "sign-prophet": {
        short: {
          en: "prophète"
        }
      },
      "sign-psalm": {
        short: {
          en: "psaume"
        }
      },
      "sign-religious-court": {
        short: {
          en: "tribunal religieux"
        }
      },
      "sign-repent": {
        short: {
          en: "changer de vie"
        }
      },
      "sign-sabbath": {
        short: {
          en: "sabbat"
        }
      },
      "sign-sacrifice": {
        short: {
          en: "sacrifice"
        }
      },
      "sign-satan": {
        short: {
          en: "satan"
        }
      },
      "sign-signs": {
        short: {
          en: "signes"
        }
      },
      "sign-sin": {
        short: {
          en: "péché"
        }
      },
      "sign-synagoge": {
        short: {
          en: "synagoge"
        }
      },
      "sign-tax-collector": {
        short: {
          en: "employé des impôts"
        }
      },
      "sign-teacher-of-the-law": {
        short: {
          en: "maître de la loi"
        }
      },
      "sign-temple": {
        short: {
          en: "temple"
        }
      },
      "sign-trials": {
        short: {
          en: "epreuves"
        }
      },
      "sign-unleavened-bread": {
        short: {
          en: "pain sans levain"
        }
      },
      "sign-witness": {
        short: {
          en: "témoin"
        }
      },
      "sign-worship": {
        short: {
          en: "adorer"
        }
      },
      "place-nazareth": {
        short: {
          en: "place-nazareth"
        }
      },
      "sign-sadducee": {
        short: {
          en: "sign-sadducee"
        }
      },
      "sign-son-of-man": {
        short: {
          en: "sign-son-of-man"
        }
      },
      place_mount_of_olives: {
        short: {
          en: "Mont des Oliviers"
        }
      },
      place_bethlehem: {
        short: {
          en: "Bethléem"
        }
      },
      "place-bethlehem": {
        short: {
          en: "place-bethlehem"
        }
      },
      "sign-synagogue": {
        short: {
          en: "sign-synagogue"
        }
      },
      "place-mount-of-olives": {
        short: {
          en: "place-mount-of-olives"
        }
      },
      "name-judas-iscariot": {
        short: {
          en: "name-judas-iscariot"
        }
      }
    },
    ingredients: {
      "LUK/LUK_1.mpg": {
        checksum: {
          md5: "7dab7a93adec806503d73c769d92ebd5"
        },
        mimeType: "video/mpeg",
        size: 767246336,
        scope: {
          LUK: ["1"]
        }
      },
      "LUK/LUK_10.mpg": {
        checksum: {
          md5: "beb1bbd2b493ff276e66e484f853d4ab"
        },
        mimeType: "video/mpeg",
        size: 677756928,
        scope: {
          LUK: ["10"]
        }
      },
      "LUK/LUK_11.mpg": {
        checksum: {
          md5: "33dcac94bec5bf81373c270923fe2e6f"
        },
        mimeType: "video/mpeg",
        size: 691744768,
        scope: {
          LUK: ["11"]
        }
      },
      "LUK/LUK_12.mpg": {
        checksum: {
          md5: "d68cdff970d927f2f5317a1df7015bb6"
        },
        mimeType: "video/mpeg",
        size: 845115392,
        scope: {
          LUK: ["12"]
        }
      },
      "LUK/LUK_13.mpg": {
        checksum: {
          md5: "1762d737fb2ef9db9c759166e9b048af"
        },
        mimeType: "video/mpeg",
        size: 452595712,
        scope: {
          LUK: ["13"]
        }
      },
      "LUK/LUK_14.mpg": {
        checksum: {
          md5: "c8d3fcb9453b11485543a9ffd6b7638a"
        },
        mimeType: "video/mpeg",
        size: 382185472,
        scope: {
          LUK: ["14"]
        }
      },
      "LUK/LUK_15.mpg": {
        checksum: {
          md5: "0ae745fa10c5493aa2b41e571c43195c"
        },
        mimeType: "video/mpeg",
        size: 361775104,
        scope: {
          LUK: ["15"]
        }
      },
      "LUK/LUK_16.mpg": {
        checksum: {
          md5: "b404efcb5d9d88d0752dd072046572fb"
        },
        mimeType: "video/mpeg",
        size: 346812416,
        scope: {
          LUK: ["16"]
        }
      },
      "LUK/LUK_17.mpg": {
        checksum: {
          md5: "862493ebdf08c994c88d6fcb751af5fa"
        },
        mimeType: "video/mpeg",
        size: 235720704,
        scope: {
          LUK: ["17"]
        }
      },
      "LUK/LUK_18.mpg": {
        checksum: {
          md5: "97fed2faca23e5bb4e117769f2cbce62"
        },
        mimeType: "video/mpeg",
        size: 294641664,
        scope: {
          LUK: ["18"]
        }
      },
      "LUK/LUK_19.mpg": {
        checksum: {
          md5: "947affbb135467b4a68963b4430f4686"
        },
        mimeType: "video/mpeg",
        size: 533256192,
        scope: {
          LUK: ["19"]
        }
      },
      "LUK/LUK_2.mpg": {
        checksum: {
          md5: "14b9976297390c06c0669b20dc31a362"
        },
        mimeType: "video/mpeg",
        size: 405985280,
        scope: {
          LUK: ["2"]
        }
      },
      "LUK/LUK_20.mpg": {
        checksum: {
          md5: "364f32bcf594ddfe16000c9c17a03763"
        },
        mimeType: "video/mpeg",
        size: 670695424,
        scope: {
          LUK: ["20"]
        }
      },
      "LUK/LUK_21.mpg": {
        checksum: {
          md5: "9116d43371b3c93c69ceb95446f8de4a"
        },
        mimeType: "video/mpeg",
        size: 428699648,
        scope: {
          LUK: ["21"]
        }
      },
      "LUK/LUK_22.mpg": {
        checksum: {
          md5: "50290549a23d9760b6dbc88f45e3cd7a"
        },
        mimeType: "video/mpeg",
        size: 766781440,
        scope: {
          LUK: ["22"]
        }
      },
      "LUK/LUK_23.mpg": {
        checksum: {
          md5: "3e743c48b8cf1e578c7cd68b8c3a0260"
        },
        mimeType: "video/mpeg",
        size: 450291712,
        scope: {
          LUK: ["23"]
        }
      },
      "LUK/LUK_24.mpg": {
        checksum: {
          md5: "db1c7c2e70aab3e660e0bab161bb4e4f"
        },
        mimeType: "video/mpeg",
        size: 374806528,
        scope: {
          LUK: ["24"]
        }
      },
      "LUK/LUK_3.mpg": {
        checksum: {
          md5: "32ade75aa88f4c8d5fa07105b8a4f335"
        },
        mimeType: "video/mpeg",
        size: 328286208,
        scope: {
          LUK: ["3"]
        }
      },
      "LUK/LUK_4.mpg": {
        checksum: {
          md5: "3732c8f361ba6c2d64225f5e39d21c19"
        },
        mimeType: "video/mpeg",
        size: 420724736,
        scope: {
          LUK: ["4"]
        }
      },
      "LUK/LUK_5.mpg": {
        checksum: {
          md5: "f379fd33ca0eddfbf9c719b09c6f1f89"
        },
        mimeType: "video/mpeg",
        size: 425531392,
        scope: {
          LUK: ["5"]
        }
      },
      "LUK/LUK_6.mpg": {
        checksum: {
          md5: "196a5ebbdd65b1adc52b5a3341da95a0"
        },
        mimeType: "video/mpeg",
        size: 621789184,
        scope: {
          LUK: ["6"]
        }
      },
      "LUK/LUK_7.mpg": {
        checksum: {
          md5: "c9e2eaedf84c49dbcc30e4ba2f41f6e3"
        },
        mimeType: "video/mpeg",
        size: 454045696,
        scope: {
          LUK: ["7"]
        }
      },
      "LUK/LUK_8.mpg": {
        checksum: {
          md5: "dbfe25c34128808b378213ce721b763c"
        },
        mimeType: "video/mpeg",
        size: 483084288,
        scope: {
          LUK: ["8"]
        }
      },
      "LUK/LUK_9.mpg": {
        checksum: {
          md5: "dab67061322170681d8963c6c89cf34e"
        },
        mimeType: "video/mpeg",
        size: 797745152,
        scope: {
          LUK: ["9"]
        }
      },
      "peripherals/name_abraham.mpg": {
        checksum: {
          md5: "491c4b36cf8b35e220223997f2e6abf7"
        },
        mimeType: "video/mpeg",
        size: 56926208,
        role: "name abraham"
      },
      "peripherals/name_david.mpg": {
        checksum: {
          md5: "909954a0aef4f626a289a1e70e5f500e"
        },
        mimeType: "video/mpeg",
        size: 77905920,
        role: "name david"
      },
      "peripherals/name_elijah.mpg": {
        checksum: {
          md5: "31e633b718a163b811faac90d3129980"
        },
        mimeType: "video/mpeg",
        size: 55296000,
        role: "name elijah"
      },
      "peripherals/name_isaac.mpg": {
        checksum: {
          md5: "77a88b78297e2bb4fc5bddd923bcffa6"
        },
        mimeType: "video/mpeg",
        size: 32305152,
        role: "name isaac"
      },
      "peripherals/name_isaiah.mpg": {
        checksum: {
          md5: "662a6a791019cc461751e4f8e85bc0e5"
        },
        mimeType: "video/mpeg",
        size: 37173248,
        role: "name isaiah"
      },
      "peripherals/name_jacob.mpg": {
        checksum: {
          md5: "9f8d69d79d20480490538de8b5e42e92"
        },
        mimeType: "video/mpeg",
        size: 40900608,
        role: "name jacob"
      },
      "peripherals/name_james.mpg": {
        checksum: {
          md5: "c82e3dfc7a5cb08f4477884bf4a77fbe"
        },
        mimeType: "video/mpeg",
        size: 29980672,
        role: "name james"
      },
      "peripherals/name_john.mpg": {
        checksum: {
          md5: "3744c2d22c014d3516a2afb96edbad2f"
        },
        mimeType: "video/mpeg",
        size: 48386048,
        role: "name john"
      },
      "peripherals/name_john_the_baptist.mpg": {
        checksum: {
          md5: "b4798093ed01380080bae1455fa08140"
        },
        mimeType: "video/mpeg",
        size: 61243392,
        role: "name john the baptist"
      },
      "peripherals/name_joseph.mpg": {
        checksum: {
          md5: "d45ce3ee578d316d931cb22bf7f1b59f"
        },
        mimeType: "video/mpeg",
        size: 31930368,
        role: "name joseph"
      },
      "peripherals/name_luke.mpg": {
        checksum: {
          md5: "d01eb10407ce60540087a1573ec9e299"
        },
        mimeType: "video/mpeg",
        size: 35180544,
        role: "name luke"
      },
      "peripherals/name_mary.mpg": {
        checksum: {
          md5: "fd814ecb8e17c3101ecf8bf99e36b223"
        },
        mimeType: "video/mpeg",
        size: 25053184,
        role: "name mary"
      },
      "peripherals/name_moses.mpg": {
        checksum: {
          md5: "c07bfe585d16427692aa08e8f617db55"
        },
        mimeType: "video/mpeg",
        size: 80588800,
        role: "name moses"
      },
      "peripherals/name_peter.mpg": {
        checksum: {
          md5: "17cab40ef2b4781d3ad7cb0307ceae8f"
        },
        mimeType: "video/mpeg",
        size: 58148864,
        role: "name peter"
      },
      "peripherals/name_pilate.mpg": {
        checksum: {
          md5: "31c1b349ac13a74128af8383f8c2e897"
        },
        mimeType: "video/mpeg",
        size: 37996544,
        role: "name pilate"
      },
      "peripherals/name_simon_of_cyrene.mpg": {
        checksum: {
          md5: "90307f35b5d374c53b4307b26178d935"
        },
        mimeType: "video/mpeg",
        size: 15691776,
        role: "name simon of cyrene"
      },
      "peripherals/name_simon_peter.mpg": {
        checksum: {
          md5: "12e19a06066feffd06ce68b9755be50a"
        },
        mimeType: "video/mpeg",
        size: 19087360,
        role: "name simon peter"
      },
      "peripherals/name_simon_the_pharisee.mpg": {
        checksum: {
          md5: "eca4437f2e901830f30e563a663d639b"
        },
        mimeType: "video/mpeg",
        size: 22628352,
        role: "name simon the pharisee"
      },
      "peripherals/name_solomon.mpg": {
        checksum: {
          md5: "3ab9507a0a09235437dd674edb9d1142"
        },
        mimeType: "video/mpeg",
        size: 32319488,
        role: "name solomon"
      },
      "peripherals/name_zachariah.mpg": {
        checksum: {
          md5: "2721035de4b8ba787f4ee2a7505503df"
        },
        mimeType: "video/mpeg",
        size: 37787648,
        role: "name zachariah"
      },
      "peripherals/place_bethany.mpg": {
        checksum: {
          md5: "85ce55991ccf434c3871784f078b7700"
        },
        mimeType: "video/mpeg",
        size: 44494848,
        role: "place bethany"
      },
      "peripherals/place_bethlehem.mpg": {
        checksum: {
          md5: "bd9b38293d2fba08cb169a125449ab08"
        },
        mimeType: "video/mpeg",
        size: 30347264,
        role: "place bethlehem"
      },
      "peripherals/place_capernaum.mpg": {
        checksum: {
          md5: "faa0a0d40923c831337135ef0af9d47a"
        },
        mimeType: "video/mpeg",
        size: 44597248,
        role: "place capernaum"
      },
      "peripherals/place_galilee.mpg": {
        checksum: {
          md5: "7176bdbe9f628eb91aadebc84f46d626"
        },
        mimeType: "video/mpeg",
        size: 41617408,
        role: "place galilee"
      },
      "peripherals/place_golgotha.mpg": {
        checksum: {
          md5: "a0adfe2a9809b709fa0be59e9cb30e4c"
        },
        mimeType: "video/mpeg",
        size: 26079232,
        role: "place golgotha"
      },
      "peripherals/place_israel.mpg": {
        checksum: {
          md5: "239aceb8ae37e41c0eef35aeda833cd5"
        },
        mimeType: "video/mpeg",
        size: 58177536,
        role: "place israel"
      },
      "peripherals/place_jericho.mpg": {
        checksum: {
          md5: "0693509e999c4ece7cce723302b87012"
        },
        mimeType: "video/mpeg",
        size: 85198848,
        role: "place jericho"
      },
      "peripherals/place_jerusalem.mpg": {
        checksum: {
          md5: "f595a1dcc71331fef1972114d0246f46"
        },
        mimeType: "video/mpeg",
        size: 82214912,
        role: "place jerusalem"
      },
      "peripherals/place_jordan.mpg": {
        checksum: {
          md5: "9add04dc0a41b1822d280c56bf65f5fb"
        },
        mimeType: "video/mpeg",
        size: 53258240,
        role: "place jordan"
      },
      "peripherals/place_judea.mpg": {
        checksum: {
          md5: "b91164a9c09cee1fda1cc84a570d5093"
        },
        mimeType: "video/mpeg",
        size: 25188352,
        role: "place judea"
      },
      "peripherals/place_lake_galilee.mpg": {
        checksum: {
          md5: "9aced138e2269f12ab759a567a7ea2ce"
        },
        mimeType: "video/mpeg",
        size: 40411136,
        role: "place lake galilee"
      },
      "peripherals/place_nazareth.mpg": {
        checksum: {
          md5: "a87f89b3e4333d0b06c5f31e7eea4f48"
        },
        mimeType: "video/mpeg",
        size: 32593920,
        role: "place nazareth"
      },
      "peripherals/place_rome.mpg": {
        checksum: {
          md5: "c4e7ab4e9d1d2d672c87f5f9b383f708"
        },
        mimeType: "video/mpeg",
        size: 65169408,
        role: "place rome"
      },
      "peripherals/place_samaria.mpg": {
        checksum: {
          md5: "458390237b49d6a77a708efe9225a164"
        },
        mimeType: "video/mpeg",
        size: 36900864,
        role: "place samaria"
      },
      "peripherals/place_syria.mpg": {
        checksum: {
          md5: "c8722b744ee5f26b89e71b07d18150d7"
        },
        mimeType: "video/mpeg",
        size: 14800896,
        role: "place syria"
      },
      "peripherals/sign_angel.mpg": {
        checksum: {
          md5: "82fd1be82ab0f85ec6258b3fecf61409"
        },
        mimeType: "video/mpeg",
        size: 42999808,
        role: "sign angel"
      },
      "peripherals/sign_apostles.mpg": {
        checksum: {
          md5: "d9775a94285a606178f84c13519d456e"
        },
        mimeType: "video/mpeg",
        size: 23207936,
        role: "sign apostles"
      },
      "peripherals/sign_baptism.mpg": {
        checksum: {
          md5: "127e82ed006adecd5598ed604776750c"
        },
        mimeType: "video/mpeg",
        size: 36792320,
        role: "sign baptism"
      },
      "peripherals/sign_criminal.mpg": {
        checksum: {
          md5: "c2630f690b3f160db6f9f1fff254c804"
        },
        mimeType: "video/mpeg",
        size: 17829888,
        role: "sign criminal"
      },
      "peripherals/sign_disciple.mpg": {
        checksum: {
          md5: "b3cd7144afedac8d68d2a440fe7a3efc"
        },
        mimeType: "video/mpeg",
        size: 25438208,
        role: "sign disciple"
      },
      "peripherals/sign_elders.mpg": {
        checksum: {
          md5: "1f311441b33ec99b31e3da07b0e66386"
        },
        mimeType: "video/mpeg",
        size: 35620864,
        role: "sign elders"
      },
      "peripherals/sign_evil_spirit.mpg": {
        checksum: {
          md5: "97ff7bc8ddf5f1bfc15069d4addff05b"
        },
        mimeType: "video/mpeg",
        size: 43327488,
        role: "sign evil spirit"
      },
      "peripherals/sign_faith.mpg": {
        checksum: {
          md5: "abac355134704a1df2e316089000426f"
        },
        mimeType: "video/mpeg",
        size: 21458944,
        role: "sign faith"
      },
      "peripherals/sign_fast.mpg": {
        checksum: {
          md5: "4c12062db9eeef71af67eab6f9baa803"
        },
        mimeType: "video/mpeg",
        size: 26636288,
        role: "sign fast"
      },
      "peripherals/sign_glory.mpg": {
        checksum: {
          md5: "bdb0a54d4c9a740a6590f5a158d15e93"
        },
        mimeType: "video/mpeg",
        size: 38803456,
        role: "sign glory"
      },
      "peripherals/sign_god.mpg": {
        checksum: {
          md5: "32a75f9ac104fc6f82734bf88ba54be4"
        },
        mimeType: "video/mpeg",
        size: 15271936,
        role: "sign god"
      },
      "peripherals/sign_heal.mpg": {
        checksum: {
          md5: "bdde68a0e17acc3266f3f52e512a0864"
        },
        mimeType: "video/mpeg",
        size: 21985280,
        role: "sign heal"
      },
      "peripherals/sign_high_priest.mpg": {
        checksum: {
          md5: "f305051c2c319d741714eb05eb3d9124"
        },
        mimeType: "video/mpeg",
        size: 42448896,
        role: "sign high priest"
      },
      "peripherals/sign_holy.mpg": {
        checksum: {
          md5: "33571ce7c5738949d18f376d2bfd7163"
        },
        mimeType: "video/mpeg",
        size: 24786944,
        role: "sign holy"
      },
      "peripherals/sign_holy_of_holies.mpg": {
        checksum: {
          md5: "cb738cd25757026afce4fcea7b33601f"
        },
        mimeType: "video/mpeg",
        size: 50044928,
        role: "sign holy of holies"
      },
      "peripherals/sign_holy_spirit.mpg": {
        checksum: {
          md5: "6a19a3c5d1f8338bc6f2c407ea221732"
        },
        mimeType: "video/mpeg",
        size: 56870912,
        role: "sign holy spirit"
      },
      "peripherals/sign_it_is_written.mpg": {
        checksum: {
          md5: "f7045611c3889dccf2c49d6412d4251f"
        },
        mimeType: "video/mpeg",
        size: 46737408,
        role: "sign it is written"
      },
      "peripherals/sign_judas_iscariot.mpg": {
        checksum: {
          md5: "2eb97e307132d4a18e2fac5ee120d30a"
        },
        mimeType: "video/mpeg",
        size: 15056896,
        role: "sign judas iscariot"
      },
      "peripherals/sign_just.mpg": {
        checksum: {
          md5: "ae8bd6f8707c418507c1ce7dbf8c1da7"
        },
        mimeType: "video/mpeg",
        size: 20887552,
        role: "sign just"
      },
      "peripherals/sign_kingdom_of_god.mpg": {
        checksum: {
          md5: "d452841df0ab9a9cfb7de07826b72c87"
        },
        mimeType: "video/mpeg",
        size: 54034432,
        role: "sign kingdom of god"
      },
      "peripherals/sign_lord.mpg": {
        checksum: {
          md5: "03ccb062630a3170f6f2193e61a9ab34"
        },
        mimeType: "video/mpeg",
        size: 28862464,
        role: "sign lord"
      },
      "peripherals/sign_messiah.mpg": {
        checksum: {
          md5: "ba4279a3b89bb698ebe52752ad087050"
        },
        mimeType: "video/mpeg",
        size: 46202880,
        role: "sign messiah"
      },
      "peripherals/sign_parable.mpg": {
        checksum: {
          md5: "763e4b5b0bfee53f44679a280c0a4c3e"
        },
        mimeType: "video/mpeg",
        size: 37951488,
        role: "sign parable"
      },
      "peripherals/sign_paradise.mpg": {
        checksum: {
          md5: "bb2ccd86e97c0f324eb9d8c5a4bed601"
        },
        mimeType: "video/mpeg",
        size: 45776896,
        role: "sign paradise"
      },
      "peripherals/sign_passover.mpg": {
        checksum: {
          md5: "f8f21a74298cb96af11a842b198870f4"
        },
        mimeType: "video/mpeg",
        size: 36655104,
        role: "sign passover"
      },
      "peripherals/sign_pharisee.mpg": {
        checksum: {
          md5: "ac50e0be4cd61504583f066b94904791"
        },
        mimeType: "video/mpeg",
        size: 25556992,
        role: "sign pharisee"
      },
      "peripherals/sign_place_of_the_dead.mpg": {
        checksum: {
          md5: "79eeca8ae12e83c6554b2397625db55c"
        },
        mimeType: "video/mpeg",
        size: 28377088,
        role: "sign place of the dead"
      },
      "peripherals/sign_power.mpg": {
        checksum: {
          md5: "6bb2cbd330f0d8087bd42b8caaefcbb8"
        },
        mimeType: "video/mpeg",
        size: 33218560,
        role: "sign power"
      },
      "peripherals/sign_prayer.mpg": {
        checksum: {
          md5: "d41e4f844edbe1ce765ae536dc637320"
        },
        mimeType: "video/mpeg",
        size: 35221504,
        role: "sign prayer"
      },
      "peripherals/sign_priest.mpg": {
        checksum: {
          md5: "f1d8c277d3a1e537d7f1903193f22523"
        },
        mimeType: "video/mpeg",
        size: 33314816,
        role: "sign priest"
      },
      "peripherals/sign_prophet.mpg": {
        checksum: {
          md5: "9aaa92c6b58170f59e2bb2ee596c38d5"
        },
        mimeType: "video/mpeg",
        size: 19259392,
        role: "sign prophet"
      },
      "peripherals/sign_psalm.mpg": {
        checksum: {
          md5: "bd19a6ca24d7d1e80fbe04fbbbf45ba0"
        },
        mimeType: "video/mpeg",
        size: 25135104,
        role: "sign psalm"
      },
      "peripherals/sign_religious_court.mpg": {
        checksum: {
          md5: "20584df446ad0db65a3db3db2efe7314"
        },
        mimeType: "video/mpeg",
        size: 18485248,
        role: "sign religious court"
      },
      "peripherals/sign_repent.mpg": {
        checksum: {
          md5: "1db8c41e39df0288761c60b4578feef1"
        },
        mimeType: "video/mpeg",
        size: 36974592,
        role: "sign repent"
      },
      "peripherals/sign_sabbath.mpg": {
        checksum: {
          md5: "5812bc0c0ccd5f6c1eb6244d4e580fcd"
        },
        mimeType: "video/mpeg",
        size: 24498176,
        role: "sign sabbath"
      },
      "peripherals/sign_sacrifice.mpg": {
        checksum: {
          md5: "a26078cc5492d07ac43c5917745f8439"
        },
        mimeType: "video/mpeg",
        size: 43833344,
        role: "sign sacrifice"
      },
      "peripherals/sign_sadducee.mpg": {
        checksum: {
          md5: "138900443f3debebdcd9143d5d1014a8"
        },
        mimeType: "video/mpeg",
        size: 24694784,
        role: "sign sadducee"
      },
      "peripherals/sign_satan.mpg": {
        checksum: {
          md5: "5eaccf72fa6443beefcfe67f58e73c3d"
        },
        mimeType: "video/mpeg",
        size: 52015104,
        role: "sign satan"
      },
      "peripherals/sign_signs.mpg": {
        checksum: {
          md5: "5f135122347425730da03a7931784dbd"
        },
        mimeType: "video/mpeg",
        size: 31711232,
        role: "sign signs"
      },
      "peripherals/sign_sin.mpg": {
        checksum: {
          md5: "2c3d7184a3eab5337da19c37bfb968ab"
        },
        mimeType: "video/mpeg",
        size: 50993152,
        role: "sign sin"
      },
      "peripherals/sign_son_of_man.mpg": {
        checksum: {
          md5: "3643a2d132996cc674ad45d569762d31"
        },
        mimeType: "video/mpeg",
        size: 32585728,
        role: "sign son of man"
      },
      "peripherals/sign_synagogue.mpg": {
        checksum: {
          md5: "60d3a5c9ff1f09cdc6255a01ee3931d7"
        },
        mimeType: "video/mpeg",
        size: 35840000,
        role: "sign synagogue"
      },
      "peripherals/sign_tax_collector.mpg": {
        checksum: {
          md5: "5073fedcae0d3563362669c818264981"
        },
        mimeType: "video/mpeg",
        size: 47554560,
        role: "sign tax collector"
      },
      "peripherals/sign_teacher_of_the_law.mpg": {
        checksum: {
          md5: "173614e73ec376cc86f68c83ac740570"
        },
        mimeType: "video/mpeg",
        size: 27045888,
        role: "sign teacher of the law"
      },
      "peripherals/sign_temple.mpg": {
        checksum: {
          md5: "6d413678760cb8f3114d3c3cec769ff6"
        },
        mimeType: "video/mpeg",
        size: 62490624,
        role: "sign temple"
      },
      "peripherals/sign_trials.mpg": {
        checksum: {
          md5: "03c73588396da44261d969ae010d5bd0"
        },
        mimeType: "video/mpeg",
        size: 42924032,
        role: "sign trials"
      },
      "peripherals/sign_unleavened_bread.mpg": {
        checksum: {
          md5: "28b658ad4fc86e997d07cc4a02e9e336"
        },
        mimeType: "video/mpeg",
        size: 25559040,
        role: "sign unleavened bread"
      },
      "peripherals/sign_witness.mpg": {
        checksum: {
          md5: "020a71163160b5a5b12bf8bcea46c47c"
        },
        mimeType: "video/mpeg",
        size: 41312256,
        role: "sign witness"
      },
      "peripherals/sign_worship.mpg": {
        checksum: {
          md5: "00c7c5215ca896462ce65bc485c37bf2"
        },
        mimeType: "video/mpeg",
        size: 23441408,
        role: "sign worship"
      },
      "peripherals/name_simon_the_zealot.mpg": {
        checksum: {
          md5: "3316c8c276ca86a52fcaa653717e3e86"
        },
        mimeType: "video/mpeg",
        size: 19740672,
        role: "name simon the zealot"
      },
      "peripherals/place_mount_of_olives.mpg": {
        checksum: {
          md5: "cf10bc95c432ea2a201eec9f214772fd"
        },
        mimeType: "video/mpeg",
        size: 32270336,
        role: "place mount of olives"
      },
      "peripherals/name_herod_antipas.mpg": {
        checksum: {
          md5: "ceb7d70a2b1c9796c364e75ddaa4d613"
        },
        mimeType: "video/mpeg",
        size: 34500608,
        role: "name herod antipas"
      },
      "peripherals/name_judas_iscariot.mpg": {
        checksum: {
          md5: "2eb97e307132d4a18e2fac5ee120d30a"
        },
        mimeType: "video/mpeg",
        size: 15056896,
        role: "name judas iscariot"
      }
    },
    copyright: {
      shortStatements: [{
        statement: "© 2019, L'Alliance biblique française",
        lang: "lsf"
      }]
    }
  }
}