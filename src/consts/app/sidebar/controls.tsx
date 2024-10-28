import { ArrowSquareLeft, Element, Folder, Grid1, Setting } from "iconsax-react";

export const SIDEBAR_CONTROLS = [
  {
    key:'explorer',
    title: 'Explorer',
    icon: <Folder/>,
  },
  {
    key:'elements',
    title: 'Elements',
    icon: <Grid1/>,
  },
  {
    key:'components',
    title: 'Components',
    icon: <Element/>,
  },
]

export const SIDEBAR_CONTROLS_SECONDARY = [
  {
    key:'settings',
    title: 'Settings',
    icon: <Setting/>,
  },
  {
    key:'expand',
    title: 'expand',
    icon: <ArrowSquareLeft/>,
  }
]