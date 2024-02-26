// SPIEGEL-BrandStyles: Check current selection for type of nodes and apply style mapping. 
// designlab@spiegel.de

// Define style IDs as variables

//Import Color & Text Styles
import { s_color, s_text } from "./spiegelstyles";
import { f_color, f_text } from "./freundestyles";
import { m_color, m_text } from "./managerstyles";

figma.showUI(__html__, { width: 176, height: 80, themeColors: true, });


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
  [s_color.dm_primary_base]: f_color.dm_primary_base,
  [s_color.dm_shade_darkest]: f_color.dm_shade_darkest,
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
  [s_text.HL44_Slab_Cd_Extrabold_tight]: f_text.HL44_Galano_Bold_tight,
  //[HL40_Slab_Cd_Extrabold_tight]: "No direct match in 11Freunde",
  [s_text.HL36_Slab_Cd_Extrabold_tight]: f_text.HL36_Galano_Bold_tight,
  [s_text.HL32_Slab_Cd_Extrabold_tight]: f_text.HL32_Galano_Bold_tight,
  [s_text.HL28_Slab_Cd_Extrabold_tight]: f_text.HL28_Galano_Bold_tight,
  [s_text.HL24_Slab_Cd_Extrabold_tight]: f_text.HL24_Galano_Bold_tight,
  [s_text.HL20_Slab_Cd_Extrabold_tight]: f_text.HL206_Galano_Bold_tight,
  [s_text.HL18_Slab_Cd_Extrabold_tight]: f_text.HL18_Galano_Bold_tight,
  [s_text.HL16_Slab_Cd_Extrabold_tight]: f_text.HL168_Galano_Bold_tight,

  [s_text.HL40_Serif_Display_Bold_Italic]: f_text.HL40_Freight_Bold_Italic,
  [s_text.HL36_Serif_Display_Bold_Italic]: f_text.HL36_Freight_Bold_Italic,
  [s_text.HL32_Serif_Display_Bold_Italic]: f_text.HL32_Freight_Bold_Italic,
  [s_text.HL28_Serif_Display_Bold_Italic]: f_text.HL28_Freight_Bold_Italic,
  [s_text.HL24_Serif_Display_Bold_Italic]: f_text.HL24_Freight_Bold_Italic,
  [s_text.HL20_Serif_Display_Bold_Italic]: f_text.HL206_Freight_Bold_Italic,
  [s_text.HL18_Serif_Display_Bold_Italic]: f_text.HL18_Freight_Bold_Italic,
  [s_text.HL16_Serif_Display_Bold_Italic]: f_text.HL168_Freight_Bold_Italic,
  [s_text.HL14_Serif_Display_Bold_Italic]: f_text.HL14_Freight_Bold_Italic,

  [s_text.HL40_Serif_Text_Regular]: f_text.HL40_Freight_Book,
  [s_text.HL32_Serif_Text_Regular]: f_text.HL32_Freight_Book,
  [s_text.HL28_Serif_Text_Regular]: f_text.HL28_Freight_Book,
  [s_text.HL24_Serif_Text_Regular]: f_text.HL24_Freight_Book,
  [s_text.HL18_Serif_Text_Regular]: f_text.HL18_Freight_Book,

  [s_text.HL28_Sans_Bold]: f_text.HL28_Galano_Bold,
  [s_text.HL24_Sans_Bold]: f_text.HL24_Galano_Bold,
  [s_text.HL20_Sans_Bold]: f_text.HL24_Galano_Bold,
  [s_text.HL18_Sans_Bold]: f_text.HL18_Galano_Bold,
  [s_text.HL18_Sans_Regular]: f_text.HL18_Galano_Regular,
  [s_text.HL16_Sans_Bold]: f_text.HL168_Galano_Bold,
  [s_text.HL16_Sans_Regular]: f_text.HL168_Galano_Regular,
  [s_text.HL14_Sans_Bold]: f_text.HL14_Galano_Bold,
  [s_text.HL14_Sans_Regular]: f_text.HL14_Galano_Regular,

  // TEXT Mapping
  [s_text.Text20_Sans_Regular_loose]: f_text.Text206_Freight_Book, //Sonderlösung 11F
  [s_text.Text18_Sans_Regular_loose]: f_text.Text18_Freight_Book,  //Sonderlösung 11F
  [s_text.Text16_Sans_Bold_loose]: f_text.Text168_Galano_Bold_loose,
  [s_text.Text16_Sans_Regular_loose]: f_text.Text168_Galano_Regular_loose,
  [s_text.Text14_Sans_Bold_loose]: f_text.Text14_Galano_Bold_loose,
  [s_text.Text14_Sans_Regular_loose]: f_text.Text14_Galano_Regular_loose,

  [s_text.Text20_Serif_Text_Bold_xloose]: f_text.Text206_Freight_Bold_loose, //Sonderlösung 11F
  [s_text.Text20_Serif_Text_Bold_Italic_xloose]: f_text.Text206_Freight_Bold_Italic_loose, //Sonderlösung 11F
  [s_text.Text20_Serif_Text_Regular_xloose]: f_text.Text206_Freight_Book_loose, //Sonderlösung 11F
  [s_text.Text20_Serif_Text_Italic_xloose]: f_text.Text206_Freight_Book_Italic_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Bold_xloose]: f_text.Text18_Freight_Bold_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Bold_Italic_xloose]: f_text.Text18_Freight_Bold_Italic_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Regular_xloose]: f_text.Text18_Freight_Book_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Italic_xloose]: f_text.Text18_Freight_Book_Italic_loose, //Sonderlösung 11F
  [s_text.Text18_Serif_Text_Regular_loose]: f_text.Text18_Freight_Book_loose,
  [s_text.Text16_Serif_Text_Regular_loose]: f_text.Text168_Freight_Book_loose,

  // UI Mapping
  [s_text.UI20_Serif_Text_Bold_Italic]: f_text.UI206_Freight_Bold,
  [s_text.UI20_Serif_Text_Italic]: f_text.UI206_Freight_Book,
  [s_text.UI18_Serif_Text_Bold_Italic]: f_text.UI18_Freight_Bold,
  [s_text.UI18_Serif_Text_Italic]: f_text.UI18_Freight_Book,

  [s_text.UI16_Sans_Bold]: f_text.UI168_Galano_Bold,
  [s_text.UI16_Sans_Regular]: f_text.UI168_Galano_Regular,
  [s_text.UI14_Sans_Bold]: f_text.UI14_Galano_Bold,
  [s_text.UI14_Sans_Regular]: f_text.UI14_Galano_Regular,
  [s_text.UI14_Sans_Regular_caps_xwide]: f_text.UI14_Galano_Regular_caps_xwide,
  //[UI14_Sans_Bold_caps_xwide]: UI14_Galano_Bold_xwide, //MISSING STYLE?
  [s_text.UI12_Sans_Regular]: f_text.UI12_Galano_Regular,
  [s_text.UI12_Sans_Regular_wide]: f_text.UI12_Galano_Regular_wide,
  [s_text.UI12_Sans_Bold_caps_xwide]: f_text.UI12_Galano_Bold_caps_xwide,
  [s_text.UI12_Sans_Regular_caps_xwide]: f_text.UI12_Galano_Regular_caps_xwide,
  [s_text.UI10_Sans_Regular]: f_text.UI10_Galano_Regular,
}

// Counting fillStyles and textStyles in current selection and returning the values.
function countStylesInNodes(nodes: ReadonlyArray<SceneNode>): { fillStyleCount: number, textStyleCount: number } {
  let fillStyleCount = 0;
  let textStyleCount = 0;

  function traverse(node: SceneNode) {
    if ('fillStyleId' in node) {
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

}



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
  if ('strokeStyleId' in node && node.strokeStyleId in f_ColorMap) {
    // Replace the current strokeStyleId with the new one from the mapping
    node.strokeStyleId = f_ColorMap[node.strokeStyleId as string];
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