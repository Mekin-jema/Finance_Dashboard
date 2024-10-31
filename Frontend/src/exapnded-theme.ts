//eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  // expand the Palette interface with a `teritary` property by adding an index signature to the interface
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    teritary: PaletteColor;
  }
}
