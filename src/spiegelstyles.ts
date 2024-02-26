//Define SPIEGEL-Colors
const s_color = {
  //S-Basic
  basic_black: "S:590531d36fcbcafda1dc88cd7d25ab8e76ba2b7a,4614:63",
  basic_white: "S:9a75cbe4cb089bb214056a88efa36c0f6db766f8,4614:58",
  //S-Shades
  shades_darkest: "S:000915834a1444cf4301f506abd195cd5bbc4c03,4614:53",
  shades_darker: "S:3aad64de1ee903c0d7fba09ee2039a07c8e72a96,4614:54",
  shades_dark: "S:cf0ea893bb87bd1e63b894dc79dc70854bfd004c,4614:57",
  shades_base: "S:05293702e20a8a2710a377472b5afa922ceb1bad,4614:55",
  shades_light: "S:48dc0ca225afea81d6855a469b47a213a2e9fc6e,4614:56",
  shades_lighter: "S:ce01056cd4862445497f1aa2cb2b0e6cd62dda2b,4614:59",
  shades_lightest: "S:599269be846fa0ff41e7d43798524c7b1c633bb9,4614:62",
  //S-Primary
  primary_darker: "S:ecd5f3ec6a54881ba23c2c6b219a7836e557b834,4614:60",
  primary_dark: "S:d8b80fb4308a6da74cab52121834a443e6fb2666,4614:61",
  primary_base: "S:4dfb950eb6d82b73edc66df0704330dd63637f89,4614:65",
  primary_lighter: "S:5fdb9960b6baa80ba095d38a5e365a4f11ccdaea,4614:64",
  //S-Secondary
  secondary2_darker: "S:cd8d97e6d3a7b6bf0ba10078051f7748bc0932d6,4614:50",
  secondary2_dark: "S:f9d631c662a892ce1522938f876ac90c49dac0f9,4614:49",
  secondary2_lightest: "S:18d3fd930c71304172bd59f81d883cd95a3aa7da,4614:48",
  //S-Darkmode(dm)
  dm_shade_darkest: "S:9835811c7b4eb9951cd94b32ebfa395a9a3fc1f9,4614:33",
  dm_primary_base: "S:bbd0b8c00345df0b4ff7b88044e91ec28847738f,4614:32",
}

//Define SPIEGEL-textStyles
const s_text = {

//HEADLINES Slab Condensed UI:
HL44_Slab_Cd_Extrabold_tight: "S:7d36c605db749a41acab5f034f4dd5103b0a7c57,10944:15",
HL40_Slab_Cd_Extrabold_tight: "S:1c543464fc9c62b7aa0213eabbc0186688949d62,11636:10",
HL48_Slab_Cd_Extrabold_tight: "S:a2b3d1dc8ea94fcd0343a1089b97d10b767f85e5,11633:5",
HL36_Slab_Cd_Extrabold_tight: "S:568d969ea61ead445873843b92eac0c573cbef86,10944:16",
HL32_Slab_Cd_Extrabold_tight: "S:9f744df36dd6c82a1470656c0bb0de13363709b5,10944:1",
HL28_Slab_Cd_Extrabold_tight: "S:6b2915f770ece3c0c0332dd0d7c8cf2e8679341c,10705:1",
HL24_Slab_Cd_Extrabold_tight: "S:71993f464b922dc4e43220be12c5a42666780160,10860:1",
HL20_Slab_Cd_Extrabold_tight: "S:7ea1e433b57f69bf12b07373e3ca87a31d7e112b,10771:1",
HL18_Slab_Cd_Extrabold_tight: "S:a888af75928aa071ed85283e8fe2bdbe968fa530,9915:25",
HL16_Slab_Cd_Extrabold_tight: "S:b429670aecca073658f47672f3f741766e944759,10944:53",

//HEADLINES Serif Display UI:
HL40_Serif_Display_Bold_Italic: "S:c5868bf7c91219ed1b6676145eca1f45635aed0d,10944:54",
HL36_Serif_Display_Bold_Italic: "S:48feda749b944005eb8be50287effe2dfa1da34d,9915:91",
HL32_Serif_Display_Bold_Italic: "S:4002e48f7e3ec76a76646cbc571a6b7c4552eb28,10944:3",
HL28_Serif_Display_Bold_Italic: "S:5cc310f88198fa907108e727075ff71e2585c877,10944:5",
HL24_Serif_Display_Bold_Italic: "S:25f4aa18019b1a601673fa9b1402214299999a68,10944:18",
HL20_Serif_Display_Bold_Italic: "S:713bc510a6fad60d834a050dfcbeeff19faeb3e7,10944:20",
HL18_Serif_Display_Bold_Italic: "S:97a2d2a6475740c5a6aa49a0bb10bef6d975d1db,9915:16",
HL16_Serif_Display_Bold_Italic: "S:e37f866ec96d4dc31c957d74a0e1d7c8bcc0f09f,9915:11",
HL14_Serif_Display_Bold_Italic: "S:da63332d614568c117ced09836ec4eda02851a7a,9915:13",

//HEADLINES Serif Text Ui:
HL40_Serif_Text_Regular: "S:a78fc1427cb4081dbfdab14ac5f3564368170dfd,9915:12",
HL32_Serif_Text_Regular: "S:76082707e709c3867d0425ab4fcbb5ae2277cf52,10944:7",
HL28_Serif_Text_Regular: "S:9249fbc6889d6cd0a99af02b9d87626288fe0506,10944:9",
HL24_Serif_Text_Regular: "S:d695e4b28b3f7f9970458b8012df57f49b35e6f7,10944:11",
HL18_Serif_Text_Regular: "S:ddb908c7c7aab2fc6c07e02c9cb0fde8055c5eef,9915:6",

//HEADLINES Sans UI:
HL32_Sans_Bold: "S:9a6dfe6f92d346e7de8480d304a0313bd9795df0,10944:13", //This Style is located under the page "Headlines"...?
HL28_Sans_Bold: "S:e70573c5151a969fb713e9421bd2fb697c5dcd54,10944:21",
HL24_Sans_Bold: "S:37ee2e32f18dd799910c8107e67a7710d4eec9a5,10944:52",
HL20_Sans_Bold: "S:28d988e930e94e251233abce26864709751d6d05,10944:25",
HL18_Sans_Bold: "S:08e5782d15a8c5882baea365099675fed09f71d1,9915:20",
HL18_Sans_Regular: "S:b679128cfbace8ca929736495040d530f6ad6f32,9915:4",
HL16_Sans_Bold: "S:3f04e068aee1e026743e8d2f15e0985aa8dec112,9915:3",
HL16_Sans_Regular: "S:a2338ed9d0bdef9d75e2cd8bdb4e36c2c1e0fcfb,9915:2",
HL14_Sans_Bold: "S:19ac8dc03eccf9d6e9f196c58d0914e394618d13,9915:1",
HL14_Sans_Regular: "S:f045d614d0a7b25633977d16a72de989854e4069,9915:63",

//TEXT Sans UI:
Text20_Sans_Regular_loose: "S:9bfbffacdda15a87d5381eab6d1b4453e9eba44d,10703:1",
Text18_Sans_Regular_loose: "S:c9322daf7e08c53ae9bdc60dc0f838f4a9883503,10944:55",
Text16_Sans_Bold_loose: "S:4691571e944701f23a3fd32e96fa8db86a562881,9915:60",
Text16_Sans_Regular_loose: "S:96e68da0edcf25906f23144228a2298ecb5a7fcb,9915:58",
Text14_Sans_Bold_loose: "S:beae5ec85e3a2153f7b5df2ab10d4af59e1c6e41,9915:57",
Text14_Sans_Regular_loose: "S:f9509e719553db0e4e49a8f806b253e83a40e7b9,9915:56",

//TEXT Serif Text UI
Text20_Serif_Text_Bold_xloose: "S:2a4e4f3138248408ed6798689386f903d735e61f,10944:27",
Text20_Serif_Text_Bold_Italic_xloose: "S:114c8587c5324a045fda375f045dae4051bbfb4c,10944:29",
Text20_Serif_Text_Regular_xloose: "S:5292efb7051223d83a528c3853c2b742baf9df7d,10944:33",
Text20_Serif_Text_Italic_xloose: "S:3f301221f9c414ec1c29441ca774c70b9ae9527b,10944:35",
Text18_Serif_Text_Bold_xloose: "S:803f0276493c58cdebf58c9bf406af5e15b23df3,9915:53",
Text18_Serif_Text_Bold_Italic_xloose: "S:58c2cad7c71861a95be208fa07d8a29f22112c70,9915:46",
Text18_Serif_Text_Regular_xloose: "S:c71ac8550599ec5dbca89a4570f3142a5c5f79f5,9915:44",
Text18_Serif_Text_Italic_xloose: "S:3078bcaf4e38cb0ff0afe59e5e539f2165f362f6,9915:43",
Text18_Serif_Text_Regular_loose: "S:eb4bfe003274392c62ccf80f2c78a8aedacf3beb,9915:41",
Text16_Serif_Text_Regular_loose: "S:fb58ee62655406375a4e3a598463b01904417f26,9915:39",

//UI Serif Text UI:
UI20_Serif_Text_Bold_Italic: "S:350913541d0ee74c8813b91a34033fa9000a6539,10944:37",
UI20_Serif_Text_Italic: "S:616f80d85b6d2267131a3fb5aabf25782b13554e,10944:39",
UI18_Serif_Text_Bold_Italic: "S:5a36b5a9bee5a0103741364d19f4454e6fd563e4,9915:35",
UI18_Serif_Text_Italic: "S:14957e78c531e4ded84d59eb235e5e4526426b22,9915:49",

//UI Serif Text UI:
UI16_Sans_Bold: "S:45d32ef6cdf7e522a604cdff373b2456692d97e9,9915:34",
UI16_Sans_Regular: "S:1b2b137f33d96328dbe552019f4ff1a711b47ed1,9915:33",
UI14_Sans_Bold: "S:8ce05ebedc6ae814bb8021f7ad66ec4a0d7154e9,9915:45",
UI14_Sans_Regular: "S:b8a25813bdc85d5dd8f91c6f15097110f35a2f37,9915:47",
UI14_Sans_Regular_caps_xwide: "S:348212dc2b694c3c5874c7644aeeb21882626b1a,9915:32",
UI14_Sans_Bold_caps_xwide: "S:3fd5fead443c8e48d0dc83c11e7bcc5fed96afba,13577:5",
UI12_Sans_Regular: "S:a177183a8b6a9e0a1ebee8d110ef4b2a8e6c847c,9915:38",
UI12_Sans_Regular_wide: "S:d1b99718725c6613e5e29b13d691c80c9c56e8d1,9915:52",
UI12_Sans_Bold_caps_xwide: "S:b2e8ebb51b5a6d9dfd7791c5b3e5baf6ed26c316,9915:37",
UI12_Sans_Regular_caps_xwide: "S:06ee7758eaac02ebdc723f02e427e11c919a4331,9915:40",
UI10_Sans_Regular: "S:4a7d4ebd83b0846175441b21fcd024c6a4ad2a24,9915:59",

//SPECIAL Serif Text UI:
Special64_Serif_Text_Regular: "S:06a2bef870528982913d5d10fabc64573917e522,9915:31",
Special58_Serif_Text_Regular: "S:19ecc13cec6647403ca160d606abb4ed8404b9dc,9915:30",
Special28_Serif_Text_Regular: "S:1073ee8b07e7789810409c6b852452e1b798d9ae,10944:41",
Special24_Serif_Text_Regular: "S:f5d75a68e4b7b84b6886a8b70c449a7921f85de3,10944:43",

//SPECIAL Serif Display UI:
Special28_Serif_Display_Bold_Italic: "S:b9ed03747a7f2812704354c383cd8f91eb501393,10944:45",
Special24_Serif_Display_Bold_Italic: "S:595261381ad147460b456a09cb73b27512ec7a93,10944:47",

//SPECIAL Slab Condensed UI:
Special28_Slab_Cd_Extrabold: "S:81bd6be2dd82bcc851b54a25899a6af930782d4b,10944:49",
Special24_Slab_Cd_Extrabold: "S:249474fac3209c3695ff14778428ef2db3a41bdd,10944:51",
}

export { s_text, s_color }