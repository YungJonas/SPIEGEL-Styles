// SPIEGEL-BrandStyles: Check current selection for type of nodes and apply style mapping. 
// designlab@spiegel.de

// Define style IDs as variables

//Import Color & Text Styles
import { s_color, s_text } from "./spiegelstyles";
import { f_color } from "./freundestyles";
import { m_color, m_text } from "./managerstyles";

figma.showUI(__html__, { width: 176, height: 80, themeColors: true, });


//11F TEXT STYLING//:

//Headlines / 11F Galano Bold
const HL44_Galano_Bold_tight = "S:f9be67dd23d01f57910c107ec8fa7b8aa8c4bf1f,873:0";
const HL36_Galano_Bold_tight = "S:29568856de4320f7a3fde9b7d92fd266bf94b6c8,873:2";
const HL32_Galano_Bold_tight = "S:6d70773dcd67b3df02a9758bbae1ee7e9ea30581,873:3";
const HL28_Galano_Bold_tight = "S:26e949321fdab0ecc228bcb02f32e82765d3d8ec,873:4";
const HL24_Galano_Bold_tight = "S:af9206ff23ee5c1cb85ce10c93cb15ae28fcd05f,873:5";
const HL206_Galano_Bold_tight = "S:4c4a035d595bf09cea2a51b12349223cbcfd3dd1,873:6";
const HL18_Galano_Bold_tight = "S:bfe5daa213eaa6aba630958fdc6221b6a028e850,873:7";
const HL168_Galano_Bold_tight = "S:2a0c4cbe143c21e43408f97ffdb0d384b5385984,873:9";

//Headlines / Freight Text Pro Black / Opinion
const HL40_Freight_Black_Italic = "S:744467c583e91ae651e697b3c81ff8bff4b87c58,1105:6";
const HL36_Freight_Black_Italic = "S:004a5dde572924c0ba4a5649701b724f53deec3d,1105:9";
const HL32_Freight_Black_Italic = "S:e8cec257851ac230fef799dc472a17bd32178065,1105:12";
const HL28_Freight_Black_Italic = "S:6b34afd6188c108f13ed898d10b3ad61563a7941,1105:15";
const HL24_Freight_Black_Italic = "S:afef54e8cd6d9236f9204f65c627c69c1de78082,1105:24";
const HL206_Freight_Black_Italic = "S:2026d833fac47c93f4f824e28403160b5c5f39d7,1105:18";
const HL18_Freight_Black_Italic = "S:5dd294240c6c0087458b241307bbab4ab2d438f8,1105:21";
const HL168_Freight_Black_Italic = "S:c22e6d5009af6a9130d5f7cbf872a3a77d528699,1105:27";
const HL14_Freight_Black_Italic = "S:9cf0684bbff8d0fdd2808315d99712d175c15566,1105:30";

//Headlines / Freight Text Pro Back / Highlight
const HL40_Freight_Book = "S:6c372cdd7be20c94a5b397132c21c8cc6f12aa4e,1093:14";
const HL32_Freight_Book = "S:fef9d9f189cf10465a2e65f6e4a468e22321545b,1093:18";
const HL28_Freight_Book = "S:af17df413a6a61ad5eba67a803df18cf1eb1a655,1093:22";
const HL24_Freight_Book = "S:b302218b223d56b9444ec347a81b3b33336dd1ed,1093:27";
const HL18_Freight_Book = "S:51fdbf5606e42974f1c0d6726d5dac07252f3f94,1093:31";

//Headlines / 11F Galano
const HL28_Galano_Bold = "S:3a06ebbbcaff6560dc8c429b24ea30c45455b2fc,475:81";
const HL24_Galano_Bold = "S:8fba8fae8e9f89bb0cb22e6d9181dcd86a8c1b39,475:82";
const HL206_Galano_Bold = "S:ae97b6bb3b0d67ae0272ddeda354c45f7c8aba62,475:145";
const HL18_Galano_Bold = "S:c6bea5d1f374f77dcb0b2076bc882d1e36dc50f4,475:84";
const HL18_Galano_Regular = "S:207086c31118aa31014e046172fd84f63288c577,475:147";
const HL168_Galano_Bold = "S:3724fd1a99393dea507870a500dbf1565481a4cb,475:85";
const HL168_Galano_Regular = "S:2a248e1b77075fb042887e6d33cf3fb7aad447a0,475:86";
const HL14_Galano_Bold = "S:850d517fd149dbe9398c4efd0d594f37d73da0b7,475:87";
const HL14_Galano_Regular = "S:710c89bd7e025c211a18351d397987a48bce51d8,475:88";

//Text / 11F Galano
const Text206_Freight_Book = "S:8042a37b95d972d4653849ad5bc350672a5d42a3,873:28";
const Text18_Freight_Book = "S:de969486d9cfec16ea7a256406d3a481b4248171,873:29";
const Text168_Galano_Bold_loose = "S:30f7cd849293c9c1264f35e66b4c333a61f61c45,873:15";
const Text168_Galano_Regular_loose = "S:f8543ee33af8aff68733ba46b1e49647489f6abb,873:16";
const Text14_Galano_Bold_loose = "S:3440b55f03cf408e2ec0239fd1aca4b05ff32262,873:17";
const Text14_Galano_Regular_loose = "S:8a1105fb79b4b4b91c92d885c373142c74907eb6,873:18";

//Text /  Freight Text Pro
const Text206_Freight_Bold_loose = "S:6ccdcdc5246e8097165afa13c0e2c2d0b955c3d5,890:3";
const Text206_Freight_Bold_Italic_loose = "S:aad9963da3867763b4106d3405a71df7ca9332ad,890:5";
const Text206_Freight_Book_loose = "S:844887cfd10dc9edf35897b10e0bdf89d9285a06,890:7";
const Text206_Freight_Book_Italic_loose = "S:e04ad103b0dbf2a4c2298e9f4183e0053ba7b460,890:9";
const Text18_Freight_Bold_loose = "S:36eea42e4527e4ffa27fe087d8ed7209f23c0fb5,890:11";
const Text18_Freight_Bold_Italic_loose = "S:81ec88f22f225f65fcf5025d6e6a9ded9f8c48d1,890:13";
const Text18_Freight_Book_loose = "S:59d3275f97a65785fa56fe8d748422562849701f,890:15";
const Text18_Freight_Book_Italic_loose = "S:f2c1709bee20af93c5d80608590e2fd19f01dec4,890:17";
const Text168_Freight_Book_loose = "S:4cc7bb806701fc2de8d3959dc2f2918b7bb33e01,873:20";

//UI /  Freight Text Pro
const UI206_Freight_Bold = "S:93d6b0aa37c11f0344c07afebb6361c207e9998e,475:106";
const UI206_Freight_Book = "S:f1ee2f898b27f0d8b2efc60533a5763cb80fc8cc,475:107";
const UI18_Freight_Bold = "S:33b23e712d3400b419a54ae423166149b3cf63fb,475:108";
const UI18_Freight_Book = "S:e28a63c9b960b4970e94b3b0a84dedb5dd5dd329,475:109";

//UI / 11F Galano
const UI168_Galano_Bold = "S:7a107af1794d0e2aa8a161a6cc1f9540ffc7287c,475:110";
const UI168_Galano_Regular = "S:00f121252b25f26c29fdae414492041d68e6ffc1,475:111";
const UI14_Galano_Bold = "S:dd9ad8fe8d745dca4e58160ff89c3cabb3dfe1de,475:112";
const UI14_Galano_Regular = "S:c2ac76b697cfed8acbdad03dbd6229d0db94ef29,475:113";
const UI14_Galano_Regular_caps_xwide = "S:b987a92656503d4166e490e89da2a784b7ab1e3c,475:114";
const UI12_Galano_Regular = "S:f77ee900b4f7a2faf0d88ed88c6d2b649ab5cf66,475:122";
const UI12_Galano_Regular_wide = "S:6c4a9c95653355692e0791ef48a20c28008704b9,475:116";
const UI12_Galano_Bold_caps_xwide = "S:9dfc564209d0482d20b2fa25de1aab49eeb9009b,475:117";
const UI12_Galano_Regular_caps_xwide = "S:66b6e2a96b182970894ed12ce7228ffaf92be926,475:118";
const UI10_Galano_Regular = "S:656b13d3715c412c5a528b3776080004929ad02a,475:123";

//Special /  Freight Text Pro Book
const Special64_Freight_Book = "S:9d93966cf03b09d49c91490e2d47c82da3e7afd1,137:57";
const Special58_Freight_Book = "S:4c44e97e2aa37b46d5c7e711e5c973131ed8245a,137:61";
const Special28_Freight_Book = "S:60e71d87c0b60671f4145683125da6951df62d6b,137:65";
const Special24_Freight_Book = "S:3a7171b73d3fbcfbc0f6694361a644a99b24ce9a,137:69";

//Special / Freight Text Pro Black
const Special28_Freight_Black_Italic = "S:d7c9861ef5f69a45880411cd4ffee0e216b9c62a,1105:35";
const Special24_Freight_Black_Italic = "S:41bc67be7a986864181621e55d859ade1be51452,1105:45";

//Special / 11F Galano Bold
const Special28_Galano_Bold = "S:796d1a4ec121d17f78fd715bdfb3b3052fd9d2f5,475:120";
const Special24_Galano_Bold = "S:9f894acb1ce6f99bdfca50fb3a474df78ad20051,475:121";


// SPIEGEL TO 11Freunde Mappings //

//Color Map Obj for changing the color (SPIEGEL -> 11Freunde)
const f_ColorMap = {
  [s_color.basic_black]: f_color.basic_black,
  [s_color.basic_white]: f_color.basic_white,
  [s_color.shades_darkest]: f_color.shades_darkest,
  [s_color.shades_darker]: f_color.shades_darker,
  [s_color.shades_dark]: f_color.shades_dark,
  [s_color.shades_base]: f_color.shades_base,
  [s_color.shades_light]: f_color.shades_light,
  [s_color.shades_lighter]: f_color.shades_lighter,
  [s_color.shades_lightest]: f_color.shades_lightest,
  [s_color.primary_darker]: f_color.primary_darker,
  [s_color.primary_dark]: f_color.primary_dark,
  [s_color.primary_base]: f_color.primary_base,
  [s_color.primary_lighter]: f_color.primary_lighter,
  [s_color.secondary2_darker]: f_color.secondary2_darker,
  [s_color.secondary2_dark]: f_color.secondary2_dark,
  [s_color.secondary2_lightest]: f_color.secondary2_lightest,
};

const m_ColorMap = {
  [s_color.basic_black]: m_color.basic_black,
  [s_color.basic_white]: m_color.basic_white,
  [s_color.shades_darkest]: m_color.shades_darkest,
  [s_color.shades_darker]: m_color.shades_darker,
  [s_color.shades_dark]: m_color.shades_dark,
  [s_color.shades_base]: m_color.shades_base,
  [s_color.shades_light]: m_color.shades_light,
  [s_color.shades_lighter]: m_color.shades_lighter,
  [s_color.shades_lightest]: m_color.shades_lightest,
  [s_color.primary_darker]: m_color.primary_darker,
  [s_color.primary_dark]: m_color.primary_dark,
  [s_color.primary_base]: m_color.primary_base,
  [s_color.primary_lighter]: m_color.primary_lighter,
  [s_color.secondary2_darker]: m_color.secondary2_darker,
  [s_color.secondary2_dark]: m_color.secondary2_dark,
  [s_color.secondary2_lightest]: m_color.secondary2_lightest,
}




const f_textMap = {
  // HEADLINES Mapping
  //[HL48_Slab_Cd_Extrabold_tight]: "No direct match in 11Freunde",
  [s_text.HL44_Slab_Cd_Extrabold_tight]: HL44_Galano_Bold_tight,
  //[HL40_Slab_Cd_Extrabold_tight]: "No direct match in 11Freunde",
  [s_text.HL36_Slab_Cd_Extrabold_tight]: HL36_Galano_Bold_tight,
  [s_text.HL32_Slab_Cd_Extrabold_tight]: HL32_Galano_Bold_tight,
  [s_text.HL28_Slab_Cd_Extrabold_tight]: HL28_Galano_Bold_tight,
  [s_text.HL24_Slab_Cd_Extrabold_tight]: HL24_Galano_Bold_tight,
  [s_text.HL20_Slab_Cd_Extrabold_tight]: HL206_Galano_Bold_tight,
  [s_text.HL18_Slab_Cd_Extrabold_tight]: HL18_Galano_Bold_tight,
  [s_text.HL16_Slab_Cd_Extrabold_tight]: HL168_Galano_Bold_tight,

  [s_text.HL40_Serif_Display_Bold_Italic]: HL40_Freight_Black_Italic,
  [s_text.HL36_Serif_Display_Bold_Italic]: HL36_Freight_Black_Italic,
  [s_text.HL32_Serif_Display_Bold_Italic]: HL32_Freight_Black_Italic,
  [s_text.HL28_Serif_Display_Bold_Italic]: HL28_Freight_Black_Italic,
  [s_text.HL24_Serif_Display_Bold_Italic]: HL24_Freight_Black_Italic,
  [s_text.HL20_Serif_Display_Bold_Italic]: HL206_Freight_Black_Italic,
  [s_text.HL18_Serif_Display_Bold_Italic]: HL18_Freight_Black_Italic,
  [s_text.HL16_Serif_Display_Bold_Italic]: HL168_Freight_Black_Italic,
  [s_text.HL14_Serif_Display_Bold_Italic]: HL14_Freight_Black_Italic,

  [s_text.HL40_Serif_Text_Regular]: HL40_Freight_Book,
  [s_text.HL32_Serif_Text_Regular]: HL32_Freight_Book,
  [s_text.HL28_Serif_Text_Regular]: HL28_Freight_Book,
  [s_text.HL24_Serif_Text_Regular]: HL24_Freight_Book,
  [s_text.HL18_Serif_Text_Regular]: HL18_Freight_Book,

  [s_text.HL28_Sans_Bold]: HL28_Galano_Bold,
  [s_text.HL24_Sans_Bold]: HL24_Galano_Bold,
  [s_text.HL20_Sans_Bold]: HL24_Galano_Bold,
  [s_text.HL18_Sans_Bold]: HL18_Galano_Bold,
  [s_text.HL18_Sans_Regular]: HL18_Galano_Regular,
  [s_text.HL16_Sans_Bold]: HL168_Galano_Bold,
  [s_text.HL16_Sans_Regular]: HL168_Galano_Regular,
  [s_text.HL14_Sans_Bold]: HL14_Galano_Bold,
  [s_text.HL14_Sans_Regular]: HL14_Galano_Regular,

  // TEXT Mapping
  [s_text.Text20_Sans_Regular_loose]: Text206_Freight_Book, //Sonderlösung 11F
  [s_text.Text18_Sans_Regular_loose]: Text18_Freight_Book,  //Sonderlösung 11F
  [s_text.Text16_Sans_Bold_loose]: Text168_Galano_Bold_loose,
  [s_text.Text16_Sans_Regular_loose]: Text168_Galano_Regular_loose,
  [s_text.Text14_Sans_Bold_loose]: Text14_Galano_Bold_loose,
  [s_text.Text14_Sans_Regular_loose]: Text14_Galano_Regular_loose,

  [s_text.Text20_Serif_Text_Bold_xloose]: Text206_Freight_Bold_loose, //Sonderlösung 11F
  [s_text.Text20_Serif_Text_Bold_Italic_xloose]: Text206_Freight_Bold_Italic_loose, //Sonderlösung 11F
  [s_text.Text20_Serif_Text_Regular_xloose]: Text206_Freight_Book_loose, //Sonderlösung 11F
  [s_text.Text20_Serif_Text_Italic_xloose]: Text206_Freight_Book_Italic_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Bold_xloose]: Text168_Freight_Book_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Bold_Italic_xloose]: Text18_Freight_Book_Italic_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Regular_xloose]: Text18_Freight_Book_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Italic_xloose]: Text18_Freight_Book_Italic_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Regular_loose]: Text18_Freight_Book_loose,
  [s_text.Text16_Serif_Text_Regular_loose]: Text168_Freight_Book_loose,

  // UI Mapping
  [s_text.UI20_Serif_Text_Bold_Italic]: UI206_Freight_Bold,
  [s_text.UI20_Serif_Text_Italic]: UI206_Freight_Book,
  [s_text.UI18_Serif_Text_Bold_Italic]: UI18_Freight_Bold,
  [s_text.UI18_Serif_Text_Italic]: UI18_Freight_Book,

  [s_text.UI16_Sans_Bold]: UI168_Galano_Bold,
  [s_text.UI16_Sans_Regular]: UI168_Galano_Regular,
  [s_text.UI14_Sans_Bold]: UI14_Galano_Bold,
  [s_text.UI14_Sans_Regular]: UI14_Galano_Regular,
  [s_text.UI14_Sans_Regular_caps_xwide]: UI14_Galano_Regular_caps_xwide,
  //[UI14_Sans_Bold_caps_xwide]: UI14_Galano_Bold_xwide, //MISSING STYLE?
  [s_text.UI12_Sans_Regular]: UI12_Galano_Regular,
  [s_text.UI12_Sans_Regular_wide]: UI12_Galano_Regular_wide,
  [s_text.UI12_Sans_Bold_caps_xwide]: UI12_Galano_Bold_caps_xwide,
  [s_text.UI12_Sans_Regular_caps_xwide]: UI12_Galano_Regular_caps_xwide,
  [s_text.UI10_Sans_Regular]: UI10_Galano_Regular,
}


function countStylesInNodes(nodes: ReadonlyArray<SceneNode>): { fillStyleCount: number, textStyleCount: number } {
  let fillStyleCount = 0;
  let textStyleCount = 0;

  function traverse(node: SceneNode) {
    if ('fillStyleId' in node /*&& node.fillStyleId*/) {
      fillStyleCount++;
    }
    if (node.type === 'TEXT' && 'textStyleId' in node) {
      textStyleCount++;
    }
    if ('children' in node) {
      node.children.forEach(traverse);
    }
  }

  nodes.forEach(traverse);

  return { fillStyleCount, textStyleCount };
}


//Read nodes in current Figma Selection and apply Functions:

// Listen for messages sent from the UI
figma.ui.onmessage = msg => {
  if (msg.type === 'apply-freunde') {

    const nodes = figma.currentPage.selection;

    // Zoom to selected Elements
    figma.viewport.scrollAndZoomIntoView(nodes);

    // Count nodes before applying changes
    const { fillStyleCount, textStyleCount } = countStylesInNodes(nodes);
    figma.ui.postMessage({ type: 'style-counts', fillStyleCount, textStyleCount });

    if (nodes.length > 0) {
      for (const node of nodes) {
        changeColor(node, f_ColorMap);
        changeTextStyle(node, f_textMap);
        changeStrokeStyle(node, f_ColorMap);
      }

      // Optionally, send a confirmation message back to the UI
      figma.notify(`${fillStyleChanges} Colors & ${textStyleChanges} Fonts changed to 11 Freunde ⚽`);
    }
    else {
      // Optionally, send a error message back to the UI
      figma.notify("please select component first 🤝");
    }
  }
  if (msg.type === 'apply-manager') {
    const nodes = figma.currentPage.selection;

    // Zoom to selected Elements
    figma.viewport.scrollAndZoomIntoView(nodes);

    if (nodes.length > 0) {
      for (const node of nodes) {
        changeColor(node, m_ColorMap);
      }
    }
    else {
      figma.notify("please select component first 🤝");
    }
  }

  fillStyleChanges = 0;
  textStyleChanges = 0;

};



// Initialize counters
let fillStyleChanges = 0;
let textStyleChanges = 0;

function changeColor(node: SceneNode, f_ColorMap: { [key: string]: string }): void {
  // Check if fillStyleId exists in the node
  if ('fillStyleId' in node && node.fillStyleId in f_ColorMap) {
    // Replace the current fillStyleId with the new one from the mapping
    node.fillStyleId = f_ColorMap[node.fillStyleId as string];
    fillStyleChanges++; // Increment counter
  }
  // If the node has children, apply the function recursively to each child
  if ('children' in node) {
    node.children.forEach(child => changeColor(child, f_ColorMap));
  }
}

function changeTextStyle(node: SceneNode, f_textMap: { [key: string]: string }): void {
  // Check if the node is of type TEXT
  if (node.type === 'TEXT') {
    if ('textStyleId' in node && node.textStyleId in f_textMap) {
      // Replace the current textStyleId with the new one from the mapping
      node.textStyleId = f_textMap[node.textStyleId as string];
      textStyleChanges++; // Increment counter
    }
    // Additional logic for handling mixed styles...
    if ('textStyleId' in node && node.textStyleId === figma.mixed) {
      const segments = node.getStyledTextSegments(['textStyleId']);

      let runningStart = 0;

      for (const segment of segments) {
        if (segment.textStyleId && segment.textStyleId in f_textMap) {
          const end = runningStart + segment.characters.length;
          node.setRangeTextStyleId(runningStart, end, f_textMap[segment.textStyleId]);
        }
        runningStart += segment.characters.length;
      }
    }
  }
  // If the node has children, apply the function recursively to each child
  if ('children' in node) {
    node.children.forEach(child => changeTextStyle(child, f_textMap));
  }
}

// Assume changeStrokeStyle follows a similar pattern if needed


function changeStrokeStyle(node: SceneNode, f_ColorMap: { [key: string]: string }): void {
  // Check if the node is of type VECTOR OR of type INSTANCE
  if (node.type === 'VECTOR' || node.type === 'INSTANCE' || node.type === 'LINE') {
    // Check if strokeStyleId exists in the node
    if ('strokeStyleId' in node && node.strokeStyleId in f_ColorMap) {
      // Replace the current strokeStyleId with the new one from the mapping
      node.strokeStyleId = f_ColorMap[node.strokeStyleId as string];
    }
  }
  // If the node has children, apply the function recursively to each child
  if ('children' in node) {
    for (const child of node.children) {
      changeStrokeStyle(child, f_ColorMap);
    }
  }
} 